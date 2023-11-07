import { useState, useEffect } from "react";
import axios from "axios";

import { random } from "../services/random";

import gif from "../assets/kaamelott-leodagan.gif";
import gif2 from "../assets/kaamelott-yvain.gif";

function Quiz() {
  const API_URL = "https://kaamelott.chaudie.re/api";

  const [question, setQuestion] = useState(0);
  const [sousQuestion, setSousQuestion] = useState(0);

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

  // Récupération des citations et des réponses

  function getQuestion() {
    setCitation([]);
    setRepActeur([]);
    setRepPersonnage([]);
    setRepSaison([]);
    setRepEpisode([]);
    setPic([]);

    for (let i = 0; i < 10; i += 1) {
      axios
        .get(`${API_URL}/random`)
        .then((res) => {
          setCitation((oldArray) => [...oldArray, res.data.citation.citation]);
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
        })
        .catch((err) => console.error(`Oups, une erreur est survenu: ${err}`));
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
    getQuestion();
    getRep();
  }, []);

  // Tri des réponses

  function triRep(questionId, sousQuestionId) {
    switch (sousQuestionId) {
      case 1:
        setRep(
          [repActeur[questionId - 1]]
            .concat(newActeur[random(newActeur.length)])
            .concat(newActeur[random(newActeur.length)])
            .concat(newActeur[random(newActeur.length)])
        );
        break;
      case 2:
        setRep(
          [repPersonnage[questionId - 1]]
            .concat(newPersonnage[random(newPersonnage.length)])
            .concat(newPersonnage[random(newPersonnage.length)])
            .concat(newPersonnage[random(newPersonnage.length)])
        );
        break;
      case 3:
        setRep(
          [repSaison[questionId - 1]]
            .concat(newSaison[random(newSaison.length)])
            .concat(newSaison[random(newSaison.length)])
            .concat(newSaison[random(newSaison.length)])
        );
        break;
      case 4:
        setRep(
          [repEpisode[questionId - 1]]
            .concat(newEpisode[random(newEpisode.length)])
            .concat(newEpisode[random(newEpisode.length)])
            .concat(newEpisode[random(newEpisode.length)])
        );
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion(1);
    setSousQuestion(1);
    triRep(1, 1);
  };

  // Fonction question suivante

  function nextQuestion() {
    if (sousQuestion < 4) {
      setSousQuestion((prevSousQuestion) => prevSousQuestion + 1);
      triRep(question, sousQuestion + 1); // Pass the updated sousQuestion
    } else {
      setQuestion((prevQuestion) => prevQuestion + 1);
      setSousQuestion(1);
      triRep(question + 1, 1); // Pass the updated question
    }
  }

  // Affichage de la page

  return (
    <>
      {/* Les règles */}

      {question === 0 && (
        <div className="fixed z-50 bg-back w-screen h-[calc(100vh-7.5rem)] flex items-center justify-center">
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

      {question > 0 && question < 11 && (
        <div className="fixed z-50 bg-back w-screen h-[calc(100vh-7.5rem)] flex items-center justify-center">
          <div className="bg-green w-[80%] md:w-[50%] h-auto py-8 min-h-[60%] rounded-[10px] flex flex-col items-center">
            <p className="text-label text-4xl">{citation[question - 1]}</p>
            <img
              src={pic[question - 1]}
              alt="Gif"
              className="hidden md:block md:mt-8 md:max-h-[40%] md:rounded-full"
            />
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                nextQuestion();
              }}
            >
              {rep[0]}
            </button>
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                nextQuestion();
              }}
            >
              {rep[1]}
            </button>
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                nextQuestion();
              }}
            >
              {rep[2]}
            </button>
            <button
              type="button"
              className="bg-label px-24 py-4 text-2xl rounded-[10px] hover:bg-label-hover mt-8"
              onClick={() => {
                nextQuestion();
              }}
            >
              {rep[3]}
            </button>
          </div>
        </div>
      )}

      {/* Résultat */}

      {question === 11 && (
        <div className="fixed z-50 bg-back w-screen h-[calc(100vh-7.5rem)] flex items-center justify-center">
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
                getQuestion();
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
