function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-[url('./assets/Affiche-film.jpg')] md:bg-[url('./assets/fonds.png')] w-screen bg-cover bg-no-repeat bg-center">
      <button
        type="button"
        className="px-24 py-4 bg-label rounded-[25px] font-bold text-2xl border-solid border-black border-[1px]"
      >
        Start
      </button>
    </div>
  );
}

export default Home;
