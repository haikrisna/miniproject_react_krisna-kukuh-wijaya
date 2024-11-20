import React, { useState, useEffect } from "react";
import NavbarComponent from "../LandingPage/NavbarComponent";
import axios from "axios";

export default function MealPlan() {
  const [mealPlan, setMealPlan] = useState({
    date: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: "",
  });

  const [mealPlansList, setMealPlansList] = useState([]);
  const [foods, setFoods] = useState([]);

  // Fetching data makanan dari API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://673d82f30118dbfe8607827b.mockapi.io/meal");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealPlan({ ...mealPlan, [name]: value });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setMealPlansList([...mealPlansList, mealPlan]);
    setMealPlan({
      date: "",
      breakfast: "",
      lunch: "",
      dinner: "",
      snack: "",
    });
  };

  return (
    <>
      <NavbarComponent />
      <div className="container py-4" style={{ marginTop: "80px" }}>
        <h1 className="text-center mb-4">Meal Plan Input</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Tanggal
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={mealPlan.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="breakfast" className="form-label">
              Sarapan
            </label>
            <select
              id="breakfast"
              name="breakfast"
              className="form-select"
              value={mealPlan.breakfast}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Menu Sarapan</option>
              {foods.map((food) => (
                <option key={food.id} value={food.food}>
                  {food.food}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="lunch" className="form-label">
              Makan Siang
            </label>
            <select
              id="lunch"
              name="lunch"
              className="form-select"
              value={mealPlan.lunch}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Menu Makan Siang</option>
              {foods.map((food) => (
                <option key={food.id} value={food.food}>
                  {food.food}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="dinner" className="form-label">
              Makan Malam
            </label>
            <select
              id="dinner"
              name="dinner"
              className="form-select"
              value={mealPlan.dinner}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Menu Makan Malam</option>
              {foods.map((food) => (
                <option key={food.id} value={food.food}>
                  {food.food}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="snack" className="form-label">
              Snack
            </label>
            <select
              id="snack"
              name="snack"
              className="form-select"
              value={mealPlan.snack}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Menu Snack</option>
              {foods.map((food) => (
                <option key={food.id} value={food.food}>
                  {food.food}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Tambahkan Meal Plan
          </button>
        </form>

        {/* Daftar Meal Plan */}
        {mealPlansList.length > 0 && (
          <div className="mt-4">
            <h3 className="text-center">Daftar Meal Plan</h3>
            <ul className="list-group">
              {mealPlansList.map((plan, index) => (
                <li key={index} className="list-group-item">
                  <strong>{plan.date}</strong>: Sarapan - {plan.breakfast}, Makan Siang - {plan.lunch},
                  Makan Malam - {plan.dinner}, Snack - {plan.snack}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
