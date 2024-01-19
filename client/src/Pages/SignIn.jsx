import React, { useState } from "react";
import "../assets/Style/Signup-Style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  // console.log(email, password);

  const collectData = async () => {
    // e.preventDefault();
    try {
      const result = await fetch("http://localhost:8080/login-user", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (result.ok) {
        const data = await result.json();
        if (data.result.email === email) {
          toast.success(<div>Login Successfully</div>, {
            theme: "colored",
          });
          return navigate("/");
        } else {
          setError("Error in login");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow className="align-items-center">
          <MDBCol md="6" className="text-center text-md-start mb-4 mb-md-0">
            <h1
              className="my-4 display-4 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your Real-estate
              </span>
            </h1>

            <p className="px-3 text-sm" style={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-3 p-md-5">
                <MDBRow className="mb-3"></MDBRow>

                <MDBInput
                  label="Email"
                  id="form3"
                  type="email"
                  className="mb-3"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  // required
                />
                <MDBInput
                  label="Password"
                  id="form4"
                  type="password"
                  className="mb-3"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  // required
                />

                <MDBBtn
                  onClick={collectData}
                  className="w-100 mb-3 bg-orange-400 hover:bg-slate-700"
                  size="md"
                >
                  Sign In
                </MDBBtn>
                {error && (
                  <p className="text-center text-xs text-red-500 mt-2">
                    {error}
                  </p>
                )}

                <p className="text-center mt-2 text-xs">
                  Dont have an account?
                  <Link
                    to="/sign-up"
                    className="text-orange-400 hover:text-slate-700"
                  >
                    {" "}
                    Click here...
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
