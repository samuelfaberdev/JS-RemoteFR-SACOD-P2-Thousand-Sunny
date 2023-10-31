import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-[url('./assets/Affiche-film.jpg')] md:bg-[url('./assets/fonds.png')] bg-cover bg-no-repeat fixed w-screen">
      <Link
        to="/quiz"
        className="px-24 md:px-40 py-4 md:py-8 bg-label hover:bg-label-hover rounded-[25px] font-bold text-2xl md:text-4xl border-solid border-black border-[1px] md:mt-[32rem]"
      >
        Start
      </Link>
    </div>
  );
}

export default Home;
