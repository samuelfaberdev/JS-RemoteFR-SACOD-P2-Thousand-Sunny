function Navbar() {
  return (
    <div className="navbar pt-2 pb-2 max-w-screen-2xl font-amarante flex flex-row justify-between bg-head h-10">
      <div className="title w-1/3 ">
        <h2 className=" flex justify-center"> Kaamelott - Le Jeu </h2>
      </div>
      <div className="image w-1/3 flex justify-center">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <ul className="menu w-1/3 flex justify-around">
        <p className=" inline">Home</p>
        <p className=" inline">Quiz</p>
        <p className=" inline">Contact</p>
      </ul>
    </div>
  );
}

export default Navbar;
