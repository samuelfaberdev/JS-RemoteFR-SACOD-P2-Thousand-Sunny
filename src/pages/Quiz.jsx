import { useState, useEffect } from "react";
import axios from "axios";

import random from "../services/random";

import gif from "../assets/kaamelott-leodagan.gif";
import gifChampion from "../assets/kaamelott-yvain.gif";
import gifCon from "../assets/kaamelott-karadoc.gif";
import interrogation from "../assets/interrogation.jpg";

function Quiz() {
  const API_URL = "https://kaamelott.chaudie.re/api";

  const [question, setQuestion] = useState(0);
  const [sousQuestion, setSousQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");

  // Initialisation des citations et des réponses
  const [citation, setCitation] = useState([]);
  const [repActeur, setRepActeur] = useState([]);
  const [repPersonnage, setRepPersonnage] = useState([]);
  const [repSaison, setRepSaison] = useState([]);
  const [repEpisode, setRepEpisode] = useState([]);

  const [pic, setPic] = useState([]);
  const [rep, setRep] = useState([]);

  // Initialisation de toutes les réponses possible
  const [newActeur, setNewActeur] = useState([]);
  const [newPersonnage, setNewPersonnage] = useState([]);
  const [newSaison, setNewSaison] = useState([]);
  const [newEpisode, setNewEpisode] = useState([]);

  const acteurs = [];
  const personnages = [];
  const saisons = [];
  const episodes = [];

  const [repValid, setRepValid] = useState([]);

  // Récupération des citations et des réponses

  function getQuestion() {
    let val = 0;
    setCitation([]);
    setRepActeur([]);
    setRepPersonnage([]);
    setRepSaison([]);
    setRepEpisode([]);
    setPic([]);

    function SetReponse() {
      axios
        .get(`${API_URL}/random`)
        .then((res) => {
          if (res.data.citation.citation.length < 230 && val < 5) {
            setCitation((oldArray) => [
              ...oldArray,
              res.data.citation.citation,
            ]);
            setRepActeur((oldArray) => [
              ...oldArray,
              res.data.citation.infos.acteur,
            ]);

            setRepEpisode((oldArray) => [
              ...oldArray,
              res.data.citation.infos.episode,
            ]);

            setRepPersonnage((oldArray) => [
              ...oldArray,
              res.data.citation.infos.personnage,
            ]);

            setPic((oldArray) => [
              ...oldArray,
              `${API_URL}/personnage/${res.data.citation.infos.personnage}/pic`,
            ]);

            setRepSaison((oldArray) => [
              ...oldArray,
              res.data.citation.infos.saison,
            ]);
            val += 1;
          }
        })
        .catch((err) => console.error(`Oups, une erreur est survenu: ${err}`));
    }

    for (let i = 0; i < 50; i += 1) {
      SetReponse();
    }
  }

  // Récupération de toutes les réponse possible

  function getRep() {
    axios
      .get(`${API_URL}/all`)
      .then((res) => {
        res.data.citation.map((acteur) => {
          if (acteurs.indexOf(acteur.infos.acteur) === -1) {
            acteurs.push(acteur.infos.acteur);
          }
          return null;
        });

        res.data.citation.map((perso) => {
          if (personnages.indexOf(perso.infos.personnage) === -1) {
            personnages.push(perso.infos.personnage);
          }
          return null;
        });

        res.data.citation.map((saison) => {
          if (saisons.indexOf(saison.infos.saison) === -1) {
            saisons.push(saison.infos.saison);
          }
          return null;
        });

        res.data.citation.map((episode) => {
          if (episodes.indexOf(episode.infos.episode) === -1) {
            episodes.push(episode.infos.episode);
          }
          return null;
        });

        setNewActeur(acteurs);
        setNewPersonnage(personnages);
        setNewSaison(saisons);
        setNewEpisode(episodes);
      })
      .catch((err) => console.error(err));
  }

  // Lancement de la fonction au demarage de la page

  useEffect(() => {
    getRep();
    getQuestion();
  }, []);

  // Tri pour éviter les doublons

  function triDouble(arrValid, arrGeneral, questionId) {
    const reponse0 = arrValid[questionId - 1];
    arrGeneral.splice(arrGeneral.indexOf(reponse0), 1);
    const reponse1 = random(arrGeneral);
    arrGeneral.splice(arrGeneral.indexOf(reponse1), 1);
    const reponse2 = random(arrGeneral);
    arrGeneral.splice(arrGeneral.indexOf(reponse2), 1);
    const reponse3 = random(arrGeneral);
    arrGeneral.splice(arrGeneral.indexOf(reponse3), 1);

    const reponse = [reponse0, reponse1, reponse2, reponse3];

    const index = [0, 1, 2, 3];

    const index0 = random(index);
    index.splice(index.indexOf(index0), 1);
    const index1 = random(index);
    index.splice(index.indexOf(index1), 1);
    const index2 = random(index);
    index.splice(index.indexOf(index2), 1);
    const index3 = random(index);
    index.splice(index.indexOf(index3), 1);

    setRep([
      reponse[index0],
      reponse[index1],
      reponse[index2],
      reponse[index3],
    ]);

    for (let i = 0; i < 4; i += 1) {
      if (reponse[i] !== undefined) {
        arrGeneral.push(reponse[i]);
      }
    }
  }

  // Tri des réponses

  function triRep(questionId, sousQuestionId) {
    switch (sousQuestionId) {
      case 1:
        triDouble(repPersonnage, newPersonnage, questionId);
        break;
      case 2:
        triDouble(repActeur, newActeur, questionId);
        break;
      case 3:
        triDouble(repSaison, newSaison, questionId);
        break;
      case 4:
        triDouble(repEpisode, newEpisode, questionId);
        break;
      default:
        console.error(
          "Oups, une erreur est survenu, la sousQuestionId est: ",
          sousQuestionId,
          "."
        );
        break;
    }
  }

  // Fonction question suivante

  function nextQuestion() {
    if (sousQuestion < 4) {
      setSousQuestion((prevSousQuestion) => prevSousQuestion + 1);
      triRep(question, sousQuestion + 1); // Pass the updated sousQuestion
    } else {
      setTimeout(() => {
        setRepValid([]);
        setQuestion((prevQuestion) => prevQuestion + 1);
        setSousQuestion(1);
        triRep(question + 1, 1); // Pass the updated question
      }, 3000);
    }
  }

  // Vérification de la réponse

  const verifRep = (e) => {
    switch (sousQuestion) {
      case 1:
        if (
          e.target.textContent !== repPersonnage[question - 1] ||
          e.target.textContent === null
        ) {
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, false]);
        } else {
          setScore((prevScore) => prevScore + 1);
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, true]);
        }
        break;
      case 2:
        if (
          e.target.textContent !== repActeur[question - 1] ||
          e.target.textContent === null
        ) {
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, false]);
        } else {
          setScore((prevScore) => prevScore + 1);
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, true]);
        }
        break;
      case 3:
        if (
          e.target.textContent !== repSaison[question - 1] ||
          e.target.textContent === null
        ) {
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, false]);
        } else {
          setScore((prevScore) => prevScore + 1);
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, true]);
        }
        break;
      case 4:
        if (
          e.target.textContent !== repEpisode[question - 1] ||
          e.target.textContent === null
        ) {
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, false]);
        } else {
          setScore((prevScore) => prevScore + 1);
          nextQuestion();
          setRepValid((oldArray) => [...oldArray, true]);
        }
        break;
      default:
        nextQuestion();
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion(1);
    setSousQuestion(1);
    triRep(1, 1);
    setUsername(e.target.name.value);
  };

  // Affichage de la page

  return (
    <>
      {/* Les règles */}

      {question === 0 && (
        <div className="fixed z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center">
          <div className="bg-green w-[80%] md:w-[50%] h-auto py-8 rounded-[10px] flex flex-col items-center">
            <p className="text-label text-4xl">Règles:</p>
            <p className="text-center mt-4 md:mt-8 text-label text-xl mx-4">
              En garde ma biquette ! 4 choix possibles et puis c'est tout ! Et
              secouez vous un peu les miches !
            </p>
            <img
              src={gif}
              alt="Gif"
              className="hidden md:block tall:hidden md:mt-8 md:max-h-[40%] px-4"
            />
            <form
              className="flex flex-col"
              autoComplete="off"
              onSubmit={handleSubmit}
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
                <button
                  type="submit"
                  className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
                >
                  Start
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Questions de 1 à 10 */}

      {question > 0 && question < 6 && (
        <div className="fixed flex-col z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex justify-center">
          <div className="bg-green w-screen h-auto py-8 min-h-[60%] flex flex-col items-center mb-auto">
            <img
              className="rounded-full w-[20%] md:w-[10%] mb-4 hidden md:block"
              src={sousQuestion > 2 ? pic[question - 1] : interrogation}
              alt="Personnage"
            />
            <p className="text-label text-xl md:text-3xl tall:text-xl">
              {sousQuestion === 1 && "Quel personnage a dit cette citation ?"}
              {sousQuestion === 2 && "Quel acteur a dit cette citation ?"}
              {sousQuestion === 3
                ? "Dans quel saison a été dit cette citation ?"
                : sousQuestion === 4 &&
                  "Dans quel épisode a été dit cette citation ?"}
            </p>
            <div className="bg-label rounded-[20px] w-[75%] text-center py-4 md:py-16 tall:py-4 mt-4">
              <p className="text-black text-xs px-2 md:text-2xl tall:text-xl">
                {citation[question - 1]}
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 text-center pt-4 w-[60%]">
              <div
                className={`text-black py-[2px] md:py-2 tall:py-1 ${
                  repValid[0] === false && "bg-[#a41919] text-label"
                } ${repValid[0] === undefined && "bg-label"} ${
                  repValid[0] === true && "bg-[#008000] text-label"
                }`}
              >
                <p>
                  {repValid[0] === undefined
                    ? "Personnage"
                    : repPersonnage[question - 1]}
                </p>
              </div>
              <div
                className={`text-black py-[2px] md:py-2 tall:py-1 ${
                  repValid[1] === false && "bg-[#a41919] text-label"
                } ${repValid[1] === undefined && "bg-label"} ${
                  repValid[1] === true && "bg-[#008000] text-label"
                }`}
              >
                <p>
                  {" "}
                  {repValid[1] === undefined
                    ? "Acteur"
                    : repActeur[question - 1]}
                </p>
              </div>
              <div
                className={`text-black py-[2px] md:py-2 tall:py-1 ${
                  repValid[2] === false && "bg-[#a41919] text-label"
                } ${repValid[2] === undefined && "bg-label"} ${
                  repValid[2] === true && "bg-[#008000] text-label"
                }`}
              >
                <p>
                  {" "}
                  {repValid[2] === undefined
                    ? "Saison"
                    : repSaison[question - 1]}
                </p>
              </div>
              <div
                className={`text-black py-[2px] md:py-2 tall:py-1 ${
                  repValid[3] === false && "bg-[#a41919] text-label"
                } ${repValid[3] === undefined && "bg-label"} ${
                  repValid[3] === true && "bg-[#008000] text-label"
                }`}
              >
                <p>
                  {" "}
                  {repValid[3] === undefined
                    ? "Episode"
                    : repEpisode[question - 1]}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-screen">
              <p className="text-label mt-6 mb-2 text-bold text-sm md:text-2xl">
                {sousQuestion === 1 && "Personnage:"}
                {sousQuestion === 2 && "Acteur:"}
                {sousQuestion === 3
                  ? "Saison:"
                  : sousQuestion === 4 && "Episode:"}
              </p>

              <div className="flex flex-col items-center md:grid md:gap-4 md:grid-cols-2 md:text-center md:pt-4 w-screen">
                <div className="flex justify-center w-screen md:w-auto md:justify-end">
                  <button
                    type="button"
                    disabled={
                      (repValid[3] === true || repValid[3] === false) && true
                    }
                    className="bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8"
                    onClick={verifRep}
                  >
                    {rep[0]}
                  </button>
                </div>
                <button
                  type="button"
                  disabled={
                    (repValid[3] === true || repValid[3] === false) && true
                  }
                  className="bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0"
                  onClick={verifRep}
                >
                  {rep[1]}
                </button>
                <div className="flex justify-center w-screen md:w-auto md:justify-end">
                  <button
                    type="button"
                    disabled={
                      (repValid[3] === true || repValid[3] === false) && true
                    }
                    className="bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0"
                    onClick={verifRep}
                  >
                    {rep[[2]]}
                  </button>
                </div>
                <button
                  type="button"
                  disabled={
                    (repValid[3] === true || repValid[3] === false) && true
                  }
                  className="bg-label text-sm md:text-xl rounded-[10px] hover:bg-label-hover w-[90%] md:w-[50%] h-8 md:h-12 tall:h-8 mt-2 md:mt-0"
                  onClick={verifRep}
                >
                  {rep[3]}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Résultat */}

      {question === 6 && (
        <div className="fixed z-50 bg-back w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] tall:h-[calc(100vh-6rem)] flex items-center justify-center">
          <div className="bg-green w-[80%] md:w-[50%] h-auto py-8 min-h-[60%] rounded-[10px] flex flex-col items-center">
            <p className="text-label text-4xl">Résultat:</p>
            <p>
              Bravo {username} tu as obtenu un score de: {score}
            </p>
            <img
              src={score < 11 ? gifCon : gifChampion}
              alt="Gif"
              className="hidden md:block tall:hidden md:mt-8 md:max-h-[40%]"
            />
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                setQuestion(0);
                getQuestion();
                setScore(0);
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
