import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [organizationTypes, setOrganizationTypes] = useState([]);
  const [signatureMessages, setSignatureMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // To determine which modal to show
  const [newItem, setNewItem] = useState(""); // To handle the input for new item

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
      const signaturemsg = await axios.get(
        "http://localhost:8000/api/signature-message-topics"
      );
      setBookings(bookingsRes.data);
      setBookingTypes(bookingTypesRes.data);
      setOrganizationTypes(organizationTypesRes.data);
      setSignatureMessages(signaturemsg.data);
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

  const handleAddNew = async (type) => {
    if (!newItem.trim()) {
      setError("Input cannot be empty");
      setShowModal(true);
      return;
    }

    let endpoint = `http://localhost:8000/api/${type}`;
    if (!endpoint.endsWith("s")) {
      endpoint += "s";
    }

    const data = {
      name: newItem,
    };
    try {
      const response = await axios.post(endpoint, data);
      setNewItem("");
      fetchAllData();
      setShowModal(false);
      console.log("Add new item response:", response.data);
    } catch (err) {
      console.error("Failed to add new item:", err);
      setError(
        "Failed to add new item: " + (err.response?.data.message || err.message)
      );
      setShowModal(true);
    }
  };

  const openAddModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewItem("");
  };

  const renderAddButton = (type) => {
    return (
      type !== "bookings" && (
        <button
          onClick={() => openAddModal(type)}
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </button>
      )
    );
  };

  const renderTable = (data, type) => (
    <div>
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
                  className="px-5 py-5 border-b border-gray-200 text-sm"
                >
                  {val}
                </td>
              ))}
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
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
      {renderAddButton(type)}
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {loading && <p>Loading...</p>}

      <div className="container sm:px-8 text-white mt-24 ">
        <div className="py-8 ">
          {bookings.length > 0 && (
            <div className="overflow-x-scroll">
              <h2 className="text-2xl font-semibold leading-tight">Bookings</h2>
              {renderTable(bookings, "bookings")}
            </div>
          )}
          {bookingTypes.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-tight">
                Booking Types
              </h2>
              {renderTable(bookingTypes, "booking-types")}
            </div>
          )}
          {organizationTypes.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-tight">
                Organization Types
              </h2>
              {renderTable(organizationTypes, "organization-types")}
            </div>
          )}
          {signatureMessages.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-tight">
                Signature Messages
              </h2>
              {renderTable(signatureMessages, "signature-message-topics")}
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-5 rounded-lg text-white">
            <h2 className="text-lg font-bold">
              Add New{" "}
              {modalType
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </h2>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="border border-gray-300 p-2 w-full bg-black text-white"
              placeholder="Enter name"
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleAddNew(modalType)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
