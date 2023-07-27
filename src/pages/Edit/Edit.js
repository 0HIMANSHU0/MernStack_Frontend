import React, { useState, useEffect } from "react";
import "./edit.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Spiner from "../../components/Spiner/Spiner";

const Edit = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  // console.log(inputData);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [showSpin, setShowSpin] = useState(true);

  // Status Options
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // Set Input Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // Set Status Value
  const setStatusValue = (e) => {
    setStatus(e.value);
    // console.log(e);
  };

  // Set Profile Image
  const setProfile = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // Set Preview Image
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [image]);

  // Submit UserData
  const submitUserData = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputData;

    if (fname === "") {
      toast.error("First Name is Required.");
    } else if (lname === "") {
      toast.error("Last Name is Required.");
    } else if (email === "") {
      toast.error("Email is Required.");
    } else if (!email.includes("@")) {
      toast.error("Enter a valid Email");
    } else if (mobile === "") {
      toast.error("Mobile Number is Required.");
    } else if (mobile.length < 10 || mobile.length > 10) {
      toast.error("Enter a Valid Mobile Number.");
    } else if (gender === "") {
      toast.error("Gender is Required.");
    } else if (status === "") {
      toast.error("Gender is Required.");
    } else if (image === "") {
      toast.error("Gender is Required.");
    } else if (location === "") {
      toast.error("Location is Required.");
    } else {
      toast.success("Updation Successfully Done");
    }
  };


  return (
    <>
      {showSpin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-7">Update Your Profile</h2>
          <Card className="shadow mt-3 p-3">
            <div className="profile_div text-center">
              <img src={preview ? preview : "/man.png"} alt="img" />
            </div>
            <Form>
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="Enter First Name"
                    onChange={setInputValue}
                    value={inputData.fname}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder="Enter Last Name"
                    onChange={setInputValue}
                    value={inputData.lname}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={setInputValue}
                    value={inputData.email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="mobile"
                    name="mobile"
                    placeholder="Enter Your Mobile Number"
                    onChange={setInputValue}
                    value={inputData.mobile}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Status</Form.Label>
                  <Select
                    options={options}
                    value={status}
                    onChange={setStatusValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Choose Your Profile</Form.Label>
                  <Form.Control
                    type="file"
                    name="user_profile"
                    onChange={setProfile}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter Your Location"
                    onChange={setInputValue}
                    value={inputData.location}
                  />
                </Form.Group>
              </Row>
              <Button
                className="w-100"
                variant="primary"
                type="submit"
                onClick={submitUserData}
              >
                Submit
              </Button>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Edit;
