function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-7xl font-bold">
        LensBite AI
      </h1>

      <p className="text-zinc-400 text-2xl mt-4">
        Snap your meal. Know your nutrition.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Get Started
        </button>

        <button className="border border-zinc-700 px-6 py-3 rounded-xl">
          Upload Meal
        </button>
      </div>
    </section>
  );
}

export default Hero;