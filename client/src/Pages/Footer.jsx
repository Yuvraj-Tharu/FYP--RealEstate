import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <div className="">
        <MDBFooter
          //   bgColor="light"

          className="text-center text-lg-start text-muted bg-slate-200"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block ">
              <span className="font-serif text-2xl text-slate-600 ml-36">
                Get connected with us on social networks:
              </span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className="ml-10">
            <MDBContainer className="text-center text-md-start mt-5 ">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold  mb-4 text-slate-600">
                    <i className="fas fa-house-chimney-user me-3"></i>
                    Hamro Sampati
                  </h6>
                  <p className="font-serif">
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-slate-600">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Laravel
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-slate-600">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif ">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset font-serif">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-slate-600">
                    Contact
                  </h6>
                  <p>
                    <MDBIcon icon="home" className="me-2 font-serif" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3 font-serif" />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3 font-serif" /> + 01
                    234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3 font-serif" /> + 01
                    234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className="text-center p-4 font-serif bg-[#E2E8F0]">
            © 2024 Copyright: &nbsp;
            <a
              className="text-reset fw-bold font-serif"
              href="https://mdbootstrap.com/"
            >
              HamroSampati.com
            </a>
          </div>
        </MDBFooter>
      </div>
    </>
  );
}
