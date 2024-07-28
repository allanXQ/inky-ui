import "./App.css";

export default function App() {
  return (
    <main className="w-screen h-screen text-white">
      <div id="nav-hero" className="px-24 pt-5">
        <nav className="w-full flex justify-between static">
          <div className="">LOGO</div>
          <ul className="flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Book Now</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
