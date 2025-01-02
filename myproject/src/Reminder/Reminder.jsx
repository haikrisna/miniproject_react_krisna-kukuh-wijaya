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
      <div className="container py-5" style={{ marginTop: "30px" }}>
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Header dengan style yang lebih modern */}
            <div className="text-center mb-4">
              <h4 className="fw-bold text-success mb-1">
                Meal Reminder
              </h4>
              <p className="text-muted small">Pengingat jadwal makan hari ini</p>
            </div>

            {/* Card utama dengan shadow lembut */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-2">
                {mealPlans.some(
                  (mealPlan) =>
                    new Date(mealPlan.storecreatedAt).toISOString().split("T")[0] ===
                    new Date().toISOString().split("T")[0]
                ) ? (
                  mealPlans.map((mealPlan) => {
                    const date = new Date(mealPlan.storecreatedAt)
                      .toISOString()
                      .split("T")[0];
                    const today = new Date().toISOString().split("T")[0];

                    if (date === today) {
                      const meals = [
                        {
                          icon: "☀️",
                          title: "Sarapan",
                          time: "09:08",
                          meal: mealPlan.storebreakfeast
                        },
                        {
                          icon: "🌞",
                          title: "Makan Siang",
                          time: "11:59",
                          meal: mealPlan.storelunch
                        },
                        {
                          icon: "🌙",
                          title: "Makan Malam",
                          time: "18:30",
                          meal: mealPlan.storedinner
                        }
                      ];

                      return (
                        <div key={mealPlan.storeID}>
                          {meals.map((mealItem, index) => {
                            const now = new Date();
                            const currentHour = now.getHours();
                            const currentMinute = now.getMinutes();
                            const [mealHour, mealMinute] = mealItem.time.split(":").map(Number);
                            
                            const isActive = 
                              currentHour === mealHour && 
                              Math.abs(currentMinute - mealMinute) <= 30;
                            
                            const isPast = 
                              currentHour > mealHour || 
                              (currentHour === mealHour && currentMinute > mealMinute + 30);

                            return (
                              <div 
                                key={index} 
                                className={`card border-0 shadow-sm mb-3 ${
                                  isActive ? 'border-start border-success border-4' : ''
                                }`}
                              >
                                <div className="card-body p-3">
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <span className="fs-4 me-3">{mealItem.icon}</span>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex justify-content-between align-items-center mb-1">
                                        <h6 className="mb-0 fw-bold">{mealItem.title}</h6>
                                        <span className={`badge ${
                                          isActive ? 'bg-success' : 
                                          isPast ? 'bg-secondary' : 
                                          'bg-success bg-opacity-25 text-success'
                                        }`}>
                                          {isActive ? 'Waktunya Makan!' : 
                                           isPast ? 'Selesai' : 
                                           'Terjadwal'}
                                        </span>
                                      </div>
                                      <div className="text-muted small mb-1">
                                        <i className="bi bi-clock me-1"></i>
                                        {mealItem.time}
                                      </div>
                                      <div className="mt-2 text-dark">
                                        {mealItem.meal}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <div className="text-center p-4">
                    <div className="text-muted">
                      <i className="bi bi-calendar-x fs-4 mb-2"></i>
                      <p className="mb-0">Tidak ada meal plan untuk hari ini.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
