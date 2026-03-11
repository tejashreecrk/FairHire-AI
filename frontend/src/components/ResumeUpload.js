import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = async () => {

    if (files.length === 0) {
      alert("Please select resumes first");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {

      const response = await axios.post(
        "http://localhost:8000/upload_resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Resumes uploaded successfully!");
      console.log(response.data);

    } catch (error) {

      console.error("Upload error:", error);
      alert("Upload failed");

    }

  };

  return (
    <div>

      <h2>Upload Resumes</h2>

      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload Resumes
      </button>

    </div>
  );
}

export default ResumeUpload;