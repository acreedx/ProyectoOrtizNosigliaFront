import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";
import OldNavBar from "./OldNavBar";
export default function Header() {
  return (
    <>
      <header id="home">
        <div className="header-wrapper">
          <div className="header-top theme-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="header-top-left text-center text-md-left">
                    <ul className="mb-0">
                      <li>
                        <a href="#" className="no-underline">
                          <i className="lni lni-phone"></i> +12345678
                        </a>
                      </li>
                      <li>
                        <a href="#" className="no-underline">
                          <i className="lni lni-envelope"></i>{" "}
                          OrtizNosiglia@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="header-top-right d-none d-md-block">
                    <ul className="mb-0">
                      <li>
                        <a href="#" className="">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-instagram-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <NavBar />
      <div className="slider-wrapper">
        <section className="slider-section">
          <div className="slider-active slick-style">
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Complete Healthcare Solution
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#about"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Best Doctors and Equipments in Town
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#contact"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Make Appoinment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider img-bg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1
                        data-animation="fadeInDown"
                        data-duration="1.5s"
                        data-delay=".5s"
                      >
                        Your Health is Our Top Priority
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-duration="1.5s"
                        data-delay=".7s"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr.
                      </p>
                      <a
                        href="#services"
                        className="btn theme-btn page-scroll"
                        data-animation="fadeInUp"
                        data-duration="1.5s"
                        data-delay=".9s"
                      >
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
