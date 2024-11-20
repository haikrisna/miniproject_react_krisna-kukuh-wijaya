import React, { useState, useEffect } from "react";
import NavbarComponent from "../LandingPage/NavbarComponent";
import axios from "axios";

export default function MealPlan() {
  const [mealPlan, setMealPlan] = useState({
    date: "",
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  const [mealPlansList, setMealPlansList] = useState([]);
  const [foods, setFoods] = useState([]);
  const [editID, setEditID] = useState(null); // ID untuk meal plan yang sedang diedit

  const API_URL = "https://673d82f30118dbfe8607827b.mockapi.io/storemealplan";

  // Fetching data makanan dan meal plan dari API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://673d82f30118dbfe8607827b.mockapi.io/meal");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    const fetchMealPlans = async () => {
      try {
        const response = await axios.get(API_URL);
        setMealPlansList(response.data);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      }
    };

    fetchFoods();
    fetchMealPlans();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealPlan({ ...mealPlan, [name]: value });
  };

  const calculateTotalCalories = () => {
    let totalCalories = 0;

    const selectedFoods = [
      mealPlan.breakfast,
      mealPlan.lunch,
      mealPlan.dinner,
    ];

    selectedFoods.forEach((food) => {
      const foodItem = foods.find((item) => item.food === food);
      if (foodItem) {
        totalCalories += foodItem.calories;
      }
    });

    return totalCalories;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalCalories = calculateTotalCalories();

    if (editID) {
      try {
        const updatedMealPlan = {
          storecreatedAt: mealPlan.date,
          storebreakfeast: mealPlan.breakfast,
          storelunch: mealPlan.lunch,
          storedinner: mealPlan.dinner,
          storecalories: totalCalories,
        };

        await axios.put(`${API_URL}/${editID}`, updatedMealPlan);

        setMealPlansList(
          mealPlansList.map((plan) =>
            plan.storeID === editID ? { ...plan, ...updatedMealPlan } : plan
          )
        );

        setEditID(null);
      } catch (error) {
        console.error("Error updating meal plan:", error);
      }
    } else {
      try {
        const newMealPlan = {
          storecreatedAt: mealPlan.date,
          storebreakfeast: mealPlan.breakfast,
          storelunch: mealPlan.lunch,
          storedinner: mealPlan.dinner,
          storecalories: totalCalories,
          storeID: (mealPlansList.length + 1).toString(),
        };

        const response = await axios.post(API_URL, newMealPlan);

        setMealPlansList([...mealPlansList, response.data]);
      } catch (error) {
        console.error("Error submitting meal plan:", error);
      }
    }

    setMealPlan({
      date: "",
      breakfast: "",
      lunch: "",
      dinner: "",
    });
  };

  const handleEdit = (id) => {
    const planToEdit = mealPlansList.find((plan) => plan.storeID === id);

    if (planToEdit) {
      setMealPlan({
        date: planToEdit.storecreatedAt,
        breakfast: planToEdit.storebreakfeast,
        lunch: planToEdit.storelunch,
        dinner: planToEdit.storedinner,
      });
      setEditID(id);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMealPlansList(mealPlansList.filter((plan) => plan.storeID !== id));
    } catch (error) {
      console.error("Error deleting meal plan:", error);
    }
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

          <button type="submit" className="btn btn-success w-100">
            {editID ? "Update Meal Plan" : "Tambahkan Meal Plan"}
          </button>
        </form>

        {mealPlansList.length > 0 && (
          <div className="mt-4">
            <h3 className="text-center">Daftar Meal Plan</h3>
            <ul className="list-group">
              {mealPlansList.map((plan) => (
                <li key={plan.storeID} className="list-group-item">
                  <strong>{plan.storecreatedAt}</strong>: Sarapan - {plan.storebreakfeast}, Makan Siang - {plan.storelunch}, Makan Malam - {plan.storedinner}, Total Kalori: {plan.storecalories}
                  <button
                    className="btn btn-warning btn-sm float-end ms-2"
                    onClick={() => handleEdit(plan.storeID)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm float-end"
                    onClick={() => handleDelete(plan.storeID)}
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
