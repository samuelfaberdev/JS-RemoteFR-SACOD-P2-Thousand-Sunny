import logo from "../assets/excalibur.svg";

function Navbar() {
  return (
    <div className=" text-2xl fixed-top font-amarante font-bold nav flex flex-row py-4 px-6 bg-head">
      <div className="title w-1/3 text-center px-14 py-2.5">
        <h2 className=" inline "> Kaamelott - Le Jeu </h2>
      </div>
      <div className="logo w-1/3 flex justify-center">
        <img className="max-h-14 rotate-180" src={logo} alt="logo" />
      </div>
      <ul className=" flex justify-between w-1/3 px-14 py-2.5">
        <p className=" inline">Home</p>
        <p className=" inline">Quiz</p>
        <p className=" inline">Contact</p>
      </ul>
    </div>
  );
}

export default Navbar;
