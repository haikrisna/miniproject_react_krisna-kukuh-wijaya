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

  // URL untuk API storemealplan
  const API_URL = "https://673d82f30118dbfe8607827b.mockapi.io/storemealplan";

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

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealPlan({ ...mealPlan, [name]: value });
  };

  // Fungsi untuk menghitung total kalori berdasarkan pilihan menu
  const calculateTotalCalories = () => {
    let totalCalories = 0;

    // Menambahkan kalori dari menu yang dipilih
    const selectedFoods = [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner, mealPlan.snack];

    selectedFoods.forEach((food) => {
      const foodItem = foods.find((item) => item.food === food);
      if (foodItem) {
        totalCalories += foodItem.calories;
      }
    });

    return totalCalories;
  };

  // Handle submit form untuk menambahkan meal plan ke API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hitung total kalori sebelum menambahkan meal plan
    const totalCalories = calculateTotalCalories();

    // Membuat objek meal plan yang akan disubmit ke API
    const newMealPlan = {
      storecreatedAt: new Date().toISOString(),
      storebreakfeast: mealPlan.breakfast,
      storelunch: mealPlan.lunch,
      storedinner: mealPlan.dinner,
      storesnack: mealPlan.snack,
      storecalories: totalCalories,
      storeID: (mealPlansList.length + 1).toString(), // ID berdasarkan jumlah meal plan yang ada
    };

    try {
      // Kirim data meal plan ke API
      await axios.post(API_URL, newMealPlan);

      // Menambahkan meal plan ke dalam daftar tanpa me-refresh halaman
      setMealPlansList([...mealPlansList, newMealPlan]);

      // Reset form setelah submit
      setMealPlan({
        date: "",
        breakfast: "",
        lunch: "",
        dinner: "",
        snack: "",
      });
    } catch (error) {
      console.error("Error submitting meal plan:", error);
    }
  };

  // Fungsi untuk menghapus meal plan dari daftar
  const handleDelete = async (id) => {
    try {
      // Hapus meal plan dari API
      await axios.delete(`${API_URL}/${id}`);

      // Hapus meal plan dari state list
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
                <li key={plan.storeID} className="list-group-item">
                  <strong>{plan.storecreatedAt}</strong>: Sarapan - {plan.storebreakfeast}, Makan Siang - {plan.storelunch},
                  Makan Malam - {plan.storedinner}, Snack - {plan.storesnack}, Total Kalori: {plan.storecalories}
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
