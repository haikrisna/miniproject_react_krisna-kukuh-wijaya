import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

function ChatAI() {
  const [inputUser, setInputUser] = useState("");
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "Berikan pesan kepada Archiwaste!" }],
    },
    {
      role: "model",
      parts: [
        {
          text: "saya adalah CS Archiwaste: Aplikasi pengelola makanan untuk meminimalisir limbah",
        },
      ],
    },
  ]);

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  // Api Key Gemini
  const apiKey = "AIzaSyCj293bykAlQ7h8cG3s0rp-lP_Y-mX_k7I";

  // Inisialisasi GoogleGenerativeAI
  const genAI = new GoogleGenerativeAI(apiKey);

  // Dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  async function handlePromptSubmit() {
    if (!inputUser.trim()) {
      alert("Input tidak boleh kosong.");
      return;
    }

    try {
      const dynamicPrompt = `Anda adalah asisten aplikasi Archiwaste. Tugas Anda adalah membantu pengguna meminimalisir limbah makanan. Berikut adalah permintaan pengguna: ${inputUser}`;

      const userMessage = { role: "user", parts: [{ text: dynamicPrompt }] };

      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }] },
      ]);

      const chatSession = model.startChat({
        generationConfig,
        history: [...history, userMessage],
      });

      const result = await chatSession.sendMessage(dynamicPrompt);

      const aiResponse =
        result.response.text() || "Maaf, saya tidak dapat memberikan respons.";
      const aiMessage = {
        role: "model",
        parts: [{ text: aiResponse }],
      };

      setHistory((prevData) => [...prevData, aiMessage]);
      setInputUser("");

      console.log("AI Response:", aiResponse);
    } catch (error) {
      console.error("Error saat memproses prompt:", error);
      alert("Terjadi kesalahan. Coba lagi nanti.");
    }
  }
  return (
    <>
      <div
        className="container-fluid px-0"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "80px", // Memberikan ruang untuk navbar
        }}
      >
        {/* Header */}

        {/* Chat Body */}
        <div
          className="flex-grow-1"
          style={{
            backgroundColor: "#ffffff",
            overflowY: "auto",
            padding: "15px 0",
          }}
        >
          <ul className="list-unstyled px-3">
            {history.map((data, index) => (
              <li
                key={index}
                className={`mb-3 ${
                  data.role === "user" ? "text-end" : "text-start"
                }`}
                style={{
                  textAlign: data.role === "user" ? "right" : "left",
                }}
              >
                <div
                  className={`bubble-chat p-3 rounded ${
                    data.role === "user"
                      ? "bg-success text-white"
                      : "bg-light text-dark"
                  }`}
                  style={{
                    display: "inline-block",
                    maxWidth: "60%", // Lebar maksimal bubble
                    wordWrap: "break-word", // Mengatasi teks panjang
                    marginRight: data.role === "user" ? "0" : "auto",
                    marginLeft: data.role === "user" ? "auto" : "0",
                  }}
                >
                  <ReactMarkdown>{data.parts[0].text}</ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Input */}
        <div
          className="p-3 bg-white border-top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "sticky",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: 1000,
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Tulis pesan Anda..."
            onChange={handleChange}
            value={inputUser}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={handlePromptSubmit}
          >
            Kirim
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatAI;
