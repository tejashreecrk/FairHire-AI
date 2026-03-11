



import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [bias, setBias] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    const formData = new FormData();
    formData.append("files", file);

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/upload_resume",
        formData
      );

      console.log(res.data);

      // store fairness metrics
      setBias(res.data.bias_metrics);

    } catch (error) {
      console.error("Upload failed", error);
    }

  };

  return (
    <div>

      <h2>Upload Resume</h2>

      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUpload}>
        Upload
      </button>

      {bias && (
        <div>
          <h3>Bias Metrics</h3>
          <p>Male Selection Rate: {bias.male_selection_rate}</p>
          <p>Female Selection Rate: {bias.female_selection_rate}</p>
          <p>Disparate Impact: {bias.disparate_impact}</p>
        </div>
      )}

    </div>
  );
}

export default ResumeUpload;