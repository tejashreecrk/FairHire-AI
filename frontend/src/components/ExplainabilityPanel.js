import React, { useEffect, useState } from "react";
import axios from "axios";

function ExplainabilityPanel() {

  const [explanations, setExplanations] = useState([]);

  // fetch explanation data from backend
  const fetchExplanations = async () => {
    try {

      const res = await axios.get("http://127.0.0.1:8000/candidates");

      const candidates = res.data;

      const explanationData = candidates.map((c) => {

        let matchedSkills = c.skills ? c.skills.join(", ") : "None";

        return {
          name: c.name,
          score: c.score,
          explanation:
            "Candidate selected because skills matched: " +
            matchedSkills +
            " with experience of " +
            c.experience +
            " years."
        };
      });

      setExplanations(explanationData);

    } catch (error) {
      console.error("Error fetching explanations:", error);
    }
  };

  useEffect(() => {
    fetchExplanations();
  }, []);

  return (
    <div className="section">

      <h2>Explainable AI Decisions</h2>

      {explanations.length === 0 ? (
        <p>No candidate explanations available</p>
      ) : (
        explanations.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>{item.name}</h3>

            <p>
              <strong>Score:</strong> {item.score}
            </p>

            <p>
              <strong>Explanation:</strong> {item.explanation}
            </p>

          </div>
        ))
      )}

    </div>
  );
}

export default ExplainabilityPanel;