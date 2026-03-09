import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://127.0.0.1:8000/resume/upload", formData);

    alert("Uploaded Successfully");
  };

  return (
    <div>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;