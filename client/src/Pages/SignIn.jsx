import React from "react";
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

export default function SignIn() {
  return (
    <>
      <>
        <MDBContainer
          fluid
          className="p-4 background-radial-gradient overflow-hidden"
        >
          <MDBRow className="align-items-center">
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <h1
                className="my-5 display-3 fw-bold ls-tight px-3"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your Real-estate
                </span>
              </h1>

              <span className="px-3 " style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </span>
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
                <MDBCardBody className="p-5">
                  <MDBRow>
                    <MDBCol sm="6" className="mb-4">
                      <MDBInput label="First name" id="form1" type="text" />
                    </MDBCol>

                    <MDBCol sm="6" className="mb-4">
                      <MDBInput label="Last name" id="form2" type="text" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    label="Email"
                    id="form3"
                    type="email"
                    className="mb-4"
                  />
                  <MDBInput
                    label="Password"
                    id="form4"
                    type="password"
                    className="mb-4"
                  />

                  <MDBBtn className="w-100 mb-4" size="md">
                    Sign up
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    </>
  );
}
