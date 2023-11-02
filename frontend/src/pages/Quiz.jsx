import { useState } from "react";

import gif from "../assets/kaamelott-leodagan.gif";
import gif2 from "../assets/kaamelott-yvain.gif";

function Quiz() {
  const [question, setQuestion] = useState(0);

  return (
    <>
      {question === 0 && (
        <div className="fixed z-0 bg-back w-screen h-[calc(100vh-7.5rem)] flex items-center justify-center">
          <div className="bg-green w-[80%] md:w-[50%] min-h-[60%] h-auto py-8 rounded-[10px] flex flex-col items-center">
            <p className="text-label text-4xl">Règles:</p>
            <p className="text-center mt-4 md:mt-8 text-label text-xl mx-4">
              En garde ma biquette ! 4 choix possibles et puis c'est tout ! Et
              secouez vous un peu les miches !
            </p>
            <img
              src={gif}
              alt="Gif"
              className="hidden md:block md:mt-8 md:max-h-[40%] px-4"
            />
            <form
              className="flex flex-col"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                setQuestion(1);
              }}
            >
              <input
                className="rounded-full px-[5%] md:px-20 h-8 mt-8 md:mt-16 text-center text-black text-xl bg-label placeholder:text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Entrez votre nom"
                required
              />
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Start"
                  className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {question === 1 && (
        <div className="fixed z-40 bg-back w-screen h-[calc(100vh-7.5rem)] flex items-center justify-center">
          <div className="bg-green w-[80%] md:w-[50%] h-auto py-8 min-h-[60%] rounded-[10px] flex flex-col items-center">
            <p className="text-label text-4xl">Résultat:</p>
            <img
              src={gif2}
              alt="Gif"
              className="hidden md:block md:mt-8 md:max-h-[40%]"
            />
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                setQuestion(0);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
