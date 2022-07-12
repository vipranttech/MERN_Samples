import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import '../assets/css/sample.css';

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target scrolled awake">
        <NavLink className="navbar-brand" to="/">
          VPT
          {/* <img style={{ "width": 25 + '%' }}
            src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav nav ml-auto">
            <li class="nav-item"><a href="#home-section" class="nav-link active"><span>Home</span></a></li>
            <li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
            <li class="nav-item"><a href="#skills-section" class="nav-link"><span>Skills</span></a></li>
            <li class="nav-item"><a href="#projects-section" class="nav-link"><span>Projects</span></a></li>
            <li class="nav-item"><a href="#blog-section" class="nav-link"><span>My Blog</span></a></li>
            <li class="nav-item"><a href="#contact-section" class="nav-link"><span>Contact</span></a></li>
            <li class="nav-item"> <NavLink className="nav-link" to="/create">
              Create Record
            </NavLink></li>
          </ul>
        </div>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Record
              </NavLink>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}
