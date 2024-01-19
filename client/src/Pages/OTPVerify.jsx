import React from "react";
import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function OTPVerify() {
  return (
    <>
      <MDBCard className="mt-40 w-2/6 mx-auto bg-transparent border border-gray-300 shadow-lg rounded-md p-6">
        <MDBCardBody>
          <MDBCardTitle className="text-2xl font-semibold mb-4 text-slate-500">
            Verify OTP
          </MDBCardTitle>
          <MDBCardText>
            <MDBInput
              label="Enter OTP"
              id="otpInput"
              type="password"
              className="w-full py-2 px-3 border border-orange-400 text-slate-500 rounded-md"
            />
          </MDBCardText>
          <MDBBtn className="mt-4 h-10 w-full bg-orange-400 text-white hover:bg-slate-600 focus:outline-none focus:border-slate-700 focus:ring focus:ring-blue-200">
            Verify
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
