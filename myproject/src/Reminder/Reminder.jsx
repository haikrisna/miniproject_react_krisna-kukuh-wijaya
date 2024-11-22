import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../component/NavbarComponent";
import Swal from "sweetalert2";

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
      const currentTime = now.toTimeString().slice(0, 5); // Format HH:mm

      mealPlans.forEach((mealPlan) => {
        const planDate = new Date(mealPlan.storecreatedAt)
          .toISOString()
          .split("T")[0];

        if (planDate === currentDate) {
          const reminders = [
            { time: "09:08", meal: mealPlan.storebreakfeast }, // Jam 7:00
            { time: "11:59", meal: mealPlan.storelunch }, // Jam 11:00
            { time: "18:30", meal: mealPlan.storedinner }, // Jam 18:00
          ];

          reminders.forEach(({ time, meal }) => {
            console.log(`Current time: ${currentTime}, Reminder time: ${time}`); // Debug
            if (currentTime === time) {
              // alert(`Pengingat: Saatnya makan ${meal}!`);
              Swal.fire({
                title: "Hi Krisna!",
                text: `Menu sekarang adalah waktumu untuk makan ${meal}`,
                icon: "warning",
              });
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
    <>
      <NavbarComponent />
      <div className="container py-4" style={{ marginTop: "80px" }}>
        {/* Header */}
        <h1 className="text-center mb-4">Reminder</h1>

        {/* Daftar Meal Plan */}
        <div className="mt-4">
          <h3 className="text-center mb-3">Daftar Makanan Hari Ini</h3>
          {mealPlans.some(
            (mealPlan) =>
              new Date(mealPlan.storecreatedAt).toISOString().split("T")[0] ===
              new Date().toISOString().split("T")[0]
          ) ? (
            <div className="row">
              {mealPlans.map((mealPlan) => {
                const date = new Date(mealPlan.storecreatedAt)
                  .toISOString()
                  .split("T")[0];
                const today = new Date().toISOString().split("T")[0];

                if (date === today) {
                  return (
                    <div key={mealPlan.storeID} className="col-md-6 mb-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>{mealPlan.storecreatedAt}</strong>
                          </h5>
                          <ul className="list-unstyled">
                            <li>
                              <strong>Sarapan:</strong>{" "}
                              {mealPlan.storebreakfeast}
                            </li>
                            <li>
                              <strong>Makan Siang:</strong>{" "}
                              {mealPlan.storelunch}
                            </li>
                            <li>
                              <strong>Makan Malam:</strong>{" "}
                              {mealPlan.storedinner}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <p className="text-center">Tidak ada meal plan untuk hari ini.</p>
          )}
        </div>
      </div>
    </>
  );
}
