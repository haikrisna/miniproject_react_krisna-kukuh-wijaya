import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Reminder() {
  const [mealPlans, setMealPlans] = useState([]);
  const API_URL = "https://673d82f30118dbfe8607827b.mockapi.io/storemealplan";

  // Ambil data meal plan dari API
  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await axios.get(API_URL);
        setMealPlans(response.data);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      }
    };

    fetchMealPlans();
  }, []);

  // Fungsi untuk mengecek dan menampilkan notifikasi pengingat
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentDate = now.toISOString().split("T")[0]; // Format YYYY-MM-DD
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Total menit saat ini

      mealPlans.forEach((mealPlan) => {
        const planDate = new Date(mealPlan.storecreatedAt).toISOString().split("T")[0];
        if (planDate === currentDate) {
          const reminders = [
            { time: 7 * 60, meal: mealPlan.storebreakfeast }, // Jam 7:00
            { time: 11 * 60, meal: mealPlan.storelunch }, // Jam 11:00
            { time: 18 * 60 + 30, meal: mealPlan.storedinner}, // Jam 18:00
          ];

          reminders.forEach(({ time, meal }) => {
            if (currentTime === time) {
              alert(`Pengingat: Saatnya makan ${meal}!`);
            }
          });
        }
      });
    };

    // Set interval untuk mengecek pengingat setiap menit
    const interval = setInterval(checkReminders, 60000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, [mealPlans]);

  return (
    <div className="container py-4">
      <h1 className="text-center">Pengingat Meal Plan</h1>
      <div className="mt-4">
        <h3 className="text-center">Daftar Meal Plan Hari Ini</h3>
        <ul className="list-group">
          {mealPlans.map((mealPlan) => {
            const date = new Date(mealPlan.storecreatedAt).toISOString().split("T")[0];
            const today = new Date().toISOString().split("T")[0];

            if (date === today) {
              return (
                <li key={mealPlan.storeID} className="list-group-item">
                  <strong>{mealPlan.storecreatedAt}</strong>: Sarapan -{" "}
                  {mealPlan.storebreakfeast}, Makan Siang - {mealPlan.storelunch}, Makan
                  Malam - {mealPlan.storedinner}
                </li>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
