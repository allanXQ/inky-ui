import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [organizationTypes, setOrganizationTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const bookingsRes = await axios.get("http://localhost:8000/api/bookings");
      const bookingTypesRes = await axios.get(
        "http://localhost:8000/api/booking-types"
      );
      const organizationTypesRes = await axios.get(
        "http://localhost:8000/api/organization-types"
      );
      setBookings(bookingsRes.data);
      setBookingTypes(bookingTypesRes.data);
      setOrganizationTypes(organizationTypesRes.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setShowModal(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleDelete = async (id, type) => {
    try {
      await axios.delete(`http://localhost:8000/api/${type}/${id}`);
      fetchAllData(); // Refresh data after deletion
    } catch (err) {
      setError("Failed to delete the item");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderTable = (data, type) => (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {key}
            </th>
          ))}
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((val, index) => (
              <td
                key={index}
                className="px-5 py-5 border-b border-gray-200  text-sm"
              >
                {val}
              </td>
            ))}
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
              <button
                onClick={() => handleDelete(item.id, type)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="container sm:px-8 text-white mt-24">
        <div className="py-8">
          {loading && <p>Loading...</p>}
          <div className="overflow-x-scroll">
            <h2 className="text-2xl font-semibold leading-tight">Bookings</h2>
            {bookings.length > 0 ? (
              renderTable(bookings, "bookings")
            ) : (
              <p>No bookings available</p>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold leading-tight">
              Booking Types
            </h2>
            {bookingTypes.length > 0 ? (
              renderTable(bookingTypes, "booking-types")
            ) : (
              <p>No booking types available</p>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold leading-tight">
              Organization Types
            </h2>
            {organizationTypes.length > 0 ? (
              renderTable(organizationTypes, "organization-types")
            ) : (
              <p>No organization types available</p>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
          <div className=" p-5 rounded-lg">
            <h2 className="text-lg font-bold">Error</h2>
            <p className="mb-4">{error}</p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
