import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("phone", info.phone);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitArea = {
    margin: "30px",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px grey",
  };

  return (
    <section className="container-fluid row background-image mt-4">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7">
        <h5 style={{ color: "#1CC7C1" }} className="mt-4 ms-4">
          Add a Doctor
        </h5>
        <br />
        <form style={submitArea} onSubmit={handleSubmit}>
          <div className="form-group text-secondary">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              required
            />
            <br />
          </div>
          <div className="form-group text-secondary">
            <input
              onBlur={handleBlur}
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required
            />
            <br />
          </div>
          <div className="form-group text-secondary">
            <input
              onBlur={handleBlur}
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone"
              required
            />
            <br />
          </div>
          <div className="form-group text-secondary">
            <label for="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              placeholder="Picture"
              required
            />
            <br />
          </div>
          <button type="submit" className="btn btn-brand">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
