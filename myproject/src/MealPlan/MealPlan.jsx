import React, { useState, useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2";

export default function MealPlan() {
  const [mealPlan, setMealPlan] = useState({
    date: "",
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  const [mealPlansList, setMealPlansList] = useState([]);
  const [foods, setFoods] = useState([]);
  const [editID, setEditID] = useState(null);

  const API_URL = "https://673d82f30118dbfe8607827b.mockapi.io/storemealplan";

  // Fetching data makanan dan meal plan dari API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(
          "https://673d82f30118dbfe8607827b.mockapi.io/meal"
        );
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    const fetchMealPlans = async () => {
      try {
        const response = await axios.get(API_URL);

        // Urutkan meal plans berdasarkan tanggal terdekat ke terjauh
        const sortedPlans = response.data.sort((a, b) => {
          const dateA = new Date(a.storecreatedAt);
          const dateB = new Date(b.storecreatedAt);

          return dateA - dateB; // Ascending order
        });

        setMealPlansList(sortedPlans);
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

    const selectedFoods = [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner];

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
          mealPlansList
            .map((plan) =>
              plan.storeID === editID ? { ...plan, ...updatedMealPlan } : plan
            )
            .sort(
              (a, b) => new Date(a.storecreatedAt) - new Date(b.storecreatedAt)
            ) // Urutkan ulang
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

        setMealPlansList(
          [...mealPlansList, response.data].sort(
            (a, b) => new Date(a.storecreatedAt) - new Date(b.storecreatedAt)
          )
        );
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

    Swal.fire({
      title: "Jadwal berhasil ditambahkan!",
      text: `Jangan lupa untuk mengonsumsi makanan dengan baik`,
      icon: "success",
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
      setMealPlansList(
        mealPlansList
          .filter((plan) => plan.storeID !== id)
          .sort(
            (a, b) => new Date(a.storecreatedAt) - new Date(b.storecreatedAt)
          ) // Urutkan ulang
      );
    } catch (error) {
      console.error("Error deleting meal plan:", error);
    }
    Swal.fire({
      title: "Jadwal berhasil dihapus!",
      text: `Silahkan input makanan ketika anda membutuhkan!`,
      icon: "success",
    });
  };

  return (
    <>
      {/* Parent container with full height */}
      <div className="bg-light min-vh-100">
        <div className="container py-5" style={{ marginTop: "30px" }}>
          {/* Header Section */}
          <div className="text-center">
            <h4 className=" fw-bold text-success">
              Meal Plan Manager
            </h4>
            <p className="text-muted small">
              Atur jadwal makan Anda untuk hidup yang lebih sehat
            </p>
          </div>

          <div className="row g-4">
            {/* Form Section - Fixed Position */}
            <div className="col-md-6">
              <div
                className="card shadow-sm border-0 sticky-top rounded-4"
                style={{ top: "100px" }}
              >
                <div className="card-body p-4">
                  <h3 className="card-title text-success mb-4 fw-semibold">
                    Input Mealplan
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Tanggal</label>
                      <input
                        type="date"
                        name="date"
                        className="form-control form-control-lg"
                        value={mealPlan.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Sarapan</label>
                      <select
                        name="breakfast"
                        className="form-select form-select-lg"
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

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Makan Siang
                      </label>
                      <select
                        name="lunch"
                        className="form-select form-select-lg"
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

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Makan Malam
                      </label>
                      <select
                        name="dinner"
                        className="form-select form-select-lg"
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

                    <button
                      type="submit"
                      className="btn btn-success btn-lg w-100"
                    >
                      {editID ? "Update Meal Plan" : "Tambahkan Meal Plan"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* List Section - Scrollable */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body p-4">
                  <h3 className="card-title text-success mb-4 fw-semibold">
                    Mealplan List
                  </h3>
                  <div
                    className="meal-plans-container"
                    style={{
                      maxHeight: "calc(100vh - 350px)",
                      overflowY: "auto",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#198754 #ffffff",
                    }}
                  >
                    <div className="pe-2">
                      {" "}
                      {/* Added padding for scrollbar */}
                      {mealPlansList.map((plan) => (
                        <div
                          key={plan.storeID}
                          className="card mb-3 shadow-sm border-0 hover-shadow-md transition"
                          style={{ transition: "box-shadow 0.3s ease" }}
                        >
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h5 className="card-title fw-bold mb-0">
                                {new Date(
                                  plan.storecreatedAt
                                ).toLocaleDateString("id-ID", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </h5>
                              <span className="badge bg-success">
                                {plan.storecalories} kal
                              </span>
                            </div>

                            <div className="mb-3">
                              <div className="row g-3">
                                <div className="col-md-4">
                                  <p className="mb-1 fw-semibold text-muted">
                                    Sarapan:
                                  </p>
                                  <p className="mb-0">{plan.storebreakfeast}</p>
                                </div>
                                <div className="col-md-4">
                                  <p className="mb-1 fw-semibold text-muted">
                                    Makan Siang:
                                  </p>
                                  <p className="mb-0">{plan.storelunch}</p>
                                </div>
                                <div className="col-md-4">
                                  <p className="mb-1 fw-semibold text-muted">
                                    Makan Malam:
                                  </p>
                                  <p className="mb-0">{plan.storedinner}</p>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                              <button
                                onClick={() => handleEdit(plan.storeID)}
                                className="btn btn-warning btn-sm"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(plan.storeID)}
                                className="btn btn-danger btn-sm"
                              >
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
