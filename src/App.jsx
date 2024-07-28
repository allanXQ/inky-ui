import "./App.css";

export default function App() {
  return (
    <main className="w-screen h-screen text-white">
      <div id="nav-hero" className="h-screen">
        <nav className=" flex justify-between px-24 pt-5">
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
        <div className="flex items-center justify-center min-w-full min-h-screen ">
          <div className="flex items-center justify-center gap-4 w-2/3">
            <img
              id="hero-inky"
              src="./Inky.webp"
              width={349}
              height={700}
              className="absolute left-40"
            />
            <div className="flex flex-col items-center justify-center gap-1 z-20">
              <p
                className="text-4xl font-normal 
            font-stretch-100 
             uppercase 
             text-[#F6C228] text-center indent-0"
              >
                THE PROCESS:
              </p>
              <p
                className="text-4xl font-normal not-italic 
             uppercase 
             text-white text-center indent-0"
              >
                TRUST IT.
                <br />
                RESPECT IT.
                <br />
                EMBRACE IT.
              </p>
              <p className="text-[19px] w-8/12 text-center tracking-wide">
                Inky Johnson inspires the masses with his story of faith and
                perseverance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
