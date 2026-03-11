import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
  setFiles(event.target.files);
};
  const handleUpload = async () => {

  if (files.length === 0) {
    alert("Please select files first");
    return;
  }

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  try {

    const response = await axios.post(
      "http://localhost:8000/upload_resume",
      formData
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

      <h2>Upload Resume</h2>

      <input type="file" multiple onChange={handleFileChange} />

      <br /><br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;