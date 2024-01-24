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
// import forgetPassword from "./ForgetPassword";

export default function SignIn() {
  const navigate1 = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  // console.log(email, password);
  const navigateTo = useNavigate();

  const auth = sessionStorage.getItem("users");
  if (auth) {
    navigate1("/");
  }

  const UserLogin = async () => {
    try {
      if (!email.trim()) {
        setError("Email cannot be empty");
        return;
      }
      const result = await fetch("/api/login-user", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data = await result.json();
      if (data) {
        if (data.result.isVerified == true) {
          if (data.result.isAdmin == false) {
            toast.success(<div>Login Successfully</div>, {
              theme: "colored",
            });
            sessionStorage.setItem("users", JSON.stringify(data.result));
            return navigate("/");
          } else {
            toast.success(<div>Login Successfully</div>, {
              theme: "colored",
            });
            sessionStorage.setItem("admin", JSON.stringify(data.result));
            return navigate("/");
          }
        } else {
          setError("User not verrified   ");
        }
        if (data.result.email !== email && data.result.password !== password) {
          setError("Password or email not matched !! ");
        }
        setError("");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("Invalid email or password");
    }
  };

  const fogetPassword = async (e) => {
    try {
      e.preventDefault();
      if (!email.trim()) {
        setError("Email cannot be empty");
        return;
      }

      const forgetAPI = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ email }),
      });

      if (forgetAPI) {
        let result = await forgetAPI.json();
        console.log(result);
        toast.info(<div>Please Check your Email !!</div>, {
          theme: "colored",
        });
        navigateTo("/forget/password");
      }
    } catch (error) {
      console.log("An error occurred during forgetpassword click:", error);
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
                  required
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
                  onClick={UserLogin}
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

                <p className="text-center  mt-2 text-xs">
                  Forget password ?
                  <Link
                    onClick={fogetPassword}
                    to="/forget/password"
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
