import React from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

function Candidate({ db }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedText = event.target.nextSibling.textContent;
    setSelectedOption(selectedText);
  };

  const handleSubmit = () => {
    const dbRef = ref(db, "oy");
    push(dbRef, { candidate: selectedOption })
      .then(() => {
        alert("Veri gönderildi!");
        setSelectedOption("");
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  const candidates = [
    {
      id: 1,
      sey: "ADAY 1",
      name: "ADAYISMI1",
      description: "PARTİ 1",
    },
    { id: 2, sey: "ADAY 2", name: "ADAYISMI2", description: "PARTİ 2" },
    { id: 3, sey: "ADAY 3", name: "ADAYISMI3", description: "PARTİ 3" },
    { id: 4, sey: "ADAY 4", name: "ADAYISMI4", description: "PARTİ 4" },
    {
      id: 5,
      sey: "ADAY 5",
      name: "ADAYISMI5",
      description: "PARTİ 5",
    },
    {
      id: 6,
      sey: "ADAY 6",
      name: "ADAYISMI6",
      description: "PARTİ 6",
    },
  ];

  return (
    <div className="top">
      <h1>2028 SEÇİMLERİ</h1>
      <div className="container">
        {candidates.map((candidate) => (
          <div className="column" key={candidate.id}>
            <div className="candidate">{candidate.sey}</div>
            <div>{candidate.description}</div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option"
                  value={candidate.id}
                  onChange={handleOptionChange}
                />
                <strong>{candidate.name}</strong>
              </label>
            </div>
          </div>
        ))}
      </div>
      <input id="buton" type="button" value="GÖNDER" onClick={handleSubmit} />
    </div>
  );
}

export default Candidate;
