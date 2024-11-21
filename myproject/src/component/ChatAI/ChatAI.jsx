import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import { data } from "./data"; // Sesuaikan path jika perlu

function ChatAI() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");
  const [dataState, setDataState] = useState(data);
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "nama saya krisna, kamu siapa ?" }],
    },
    {
      role: "model",
      parts: [{ text: "saya adalah CS Archiwaste: Aplikasi pengelola makanan untuk meminimalisir limbah" }],
    },
  ]);

  function handleChange(e) {
    console.log("handle change");
    setInputUser(e.target.value);
  }

  // Api Key Gemini
  const apiKey = "AIzaSyBvSV3xSoQn0FuPZSLFFiJQ6RkZlfJE5zo";

  // Inisialisasi GooglGeneratieAI
  const genAI = new GoogleGenerativeAI(apiKey);

  // dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  // Settingan AI
  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1, // Kreatifitas dari AI
  };

  // Mengarahkan ke gemini
  async function handlePromptSubmit() {
    console.log("input user = ", inputUser);
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: history,
      });

      let promptDefault = `Kamu harus menjawab dengan sopan. Berikut adalah data yang ada: ${JSON.stringify(
        dataState,
        null,
        2
      )}. 
Tidak boleh menjawab di luar dari data dan history yang diberikan. bahwa saya adalah Krisna.dengan history percakapan${JSON.stringify(
        history,
        null,
        2
      )}. Berikut inputan pengguna: ${inputUser}`;

      // Kirim pesan ke model dan ambil respons
      const result = await chatSession.sendMessage(inputUser);
      console.log(result.response.text());

      // Update respons
      setResponse(result.response.text());

      // Tambahkan pada history state
      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }] },
        { role: "model", parts: [{ text: result.response.text() }] },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Gemini AI</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handlePromptSubmit} type="button">
        Submit
      </button>

      {/* Menampilkan respons AI dengan react-markdown */}
      <div className="response">
        <ReactMarkdown>{response}</ReactMarkdown>
      </div>

      {/* Menampilkan history percakapan */}
      <ul>
        {history.map((data, index) => (
          <div key={index}>
            <strong>{data.role === "user" ? "User" : "AI"}</strong>{" "}
            {data.parts[0].text}
          </div>
        ))}
      </ul>
    </>
  );
}

export default ChatAI;
