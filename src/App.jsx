import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("gain");

  const [result, setResult] = useState(null);

  const calculatePlan = () => {
    const h = Number(height) / 100;
    const w = Number(weight);

    const bmi = (w / (h * h)).toFixed(1);

    let calories = w * 35;

    if (goal === "gain") calories += 300;
    if (goal === "loss") calories -= 300;

    const protein = (w * 2).toFixed(0);
    const fats = (w * 1).toFixed(0);
    const carbs = ((calories - protein * 4 - fats * 9) / 4).toFixed(0);

    setResult({
      bmi,
      calories: Math.round(calories),
      protein,
      fats,
      carbs,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          LensBite AI
        </h1>

        <p className="text-zinc-400 mb-10">
          Build your personalized nutrition plan.
        </p>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          />

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900"
          >
            <option value="gain">Weight Gain</option>
            <option value="loss">Weight Loss</option>
            <option value="maintain">Maintain Weight</option>
          </select>

          <button
            onClick={calculatePlan}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Calculate Plan
          </button>
        </div>

        {result && (
          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-zinc-400">BMI</h3>
              <p className="text-3xl font-bold">{result.bmi}</p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-zinc-400">Calories</h3>
              <p className="text-3xl font-bold">
                {result.calories} kcal
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-zinc-400">Protein</h3>
              <p className="text-3xl font-bold">
                {result.protein} g
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-zinc-400">Carbs</h3>
              <p className="text-3xl font-bold">
                {result.carbs} g
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;