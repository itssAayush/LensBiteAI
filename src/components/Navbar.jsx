function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-4 backdrop-blur-md">

        <h1 className="text-xl font-bold">
          🍽️ LensBite AI
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-400">
          <a href="#">Features</a>
          <a href="#">Dashboard</a>
          <a href="#">About</a>
        </div>

        <button className="rounded-xl bg-white px-4 py-2 text-black font-medium">
          Sign In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;