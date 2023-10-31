import { Link } from "react-router-dom";
import gif1 from "../assets/ca-fait-rien-cassez-vous.gif";
import gif2 from "../assets/javoue-suis-perdue.gif";

function Error() {
  const backImage = [gif1, gif2];

  return (
    <div className="flex font-amarante font-bold justify-center flex-col items-center h-screen text-black text-8xl bg-back">
      <img
        className="h-1/2 mb-16"
        src={`${backImage[Math.floor(Math.random() * 2)]}`}
        alt="Gif"
      />
      <h1>Error 404</h1>
      <h2>Page not Found</h2>
      <Link
        to="/"
        className=" bg-green hover:bg-green-hover p-5 rounded-full text-label text-4xl mt-20"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default Error;
