import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {

      const response = await axios.post(
        "http://localhost:8000/upload_resume",
        formData
      );

      alert("Resume uploaded successfully!");
      console.log(response.data);

    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed");
    }

  };

  return (
    <div>

      <h2>Upload Resume</h2>

      <input type="file" onChange={handleFileChange} />

      <br /><br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;