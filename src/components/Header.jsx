import { useEffect, useRef, useState } from "react";
import "../styles/header.css";
import logo from "../assets/images/badhabit-logo.png";

import scienceImage from "../assets/images/science-image.png";
import learnBadhabit101 from "../assets/images/learn-badhabit-101.png";
import learnRoutine from "../assets/images/learn-routine.png";
import learnHealth from "../assets/images/learn-health.png";
import learn5am from "../assets/images/learn-5am.png";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import scienceApproach from "../assets/images/science-approach.png";
import scienceLabs from "../assets/images/science-labs.png";
import scienceScientists from "../assets/images/science-scientists.png";
import scienceSustainability from "../assets/images/science-sustainability.png";

function Header() {
  const [learnOpen, setLearnOpen] = useState(false);
  const [scienceOpen, setScienceOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const shopMenuRef = useRef(null);
  const scienceMenuRef = useRef(null);
  const learnMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target)) {
        setShopOpen(false);
      }

      if (
        scienceMenuRef.current &&
        !scienceMenuRef.current.contains(event.target)
      ) {
        setScienceOpen(false);
      }

      if (
        learnMenuRef.current &&
        !learnMenuRef.current.contains(event.target)
      ) {
        setLearnOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <img src={logo} alt="Badhabit" />

      <nav>
        <div
          ref={shopMenuRef}
          className={`shop-menu ${shopOpen ? "shop-menu-open" : ""}`}
        >
          {" "}
          <a
            className="shop-trigger"
            onClick={(e) => {
              e.preventDefault();
              setShopOpen((open) => !open);
            }}
          >
            Shop
          </a>
          <div className="shop-dropdown">
            <a href="/shop/sleep" className="shop-product">
              <img src={product1} alt="SR:01 Sleep & Restore Shots" />
              <div>
                <span>SR:01</span>
                <strong>Sleep & Restore Shots</strong>
              </div>
            </a>

            <a href="/shop/gut" className="shop-product">
              <img src={product2} alt="GS:02 Gut & Microbiome Shots" />
              <div>
                <span>GS:02</span>
                <strong>Gut & Microbiome Shots</strong>
              </div>
            </a>

            <a href="/shop/recovery" className="shop-product">
              <img src={product3} alt="RP:03 Recovery & Performance Shots" />
              <div>
                <span>RP:03</span>
                <strong>Recovery & Performance Shots</strong>
              </div>
            </a>

            <a href="/shop/three-way" className="shop-product">
              <img src={product4} alt="TWT:04 The Three-Way Trial" />
              <div>
                <span>TWT:04</span>
                <strong>The Three-Way Trial</strong>
              </div>
            </a>

            <a href="/shop" className="shop-all-link">
              SHOP ALL PRODUCTS →
            </a>
          </div>
        </div>{" "}
        <div
          ref={scienceMenuRef}
          className={`science-menu ${scienceOpen ? "science-menu-open" : ""}`}
        >
          <a
            className="science-trigger"
            onClick={(e) => {
              e.preventDefault();
              setScienceOpen((open) => !open);
            }}
          >
            Science
          </a>
          <div className="science-dropdown">
            <a href="/science/approach" className="science-feature">
              <img src={scienceApproach} alt="Approach" />
              <div>
                <strong>Approach</strong>
                <span>Wellness, without slowing down.</span>
              </div>
            </a>

            <a href="/science/labs" className="science-feature">
              <img src={scienceLabs} alt="BADHABIT Labs" />
              <div>
                <strong>BADHABIT [Labs]</strong>
                <span>Formulating for the way you live.</span>
              </div>
            </a>

            <a href="/science/scientists" className="science-feature">
              <img src={scienceScientists} alt="Scientists" />
              <div>
                <strong>Scientists</strong>
                <span>Leading experts.</span>
              </div>
            </a>

            <a href="/science/sustainability" className="science-feature">
              <img src={scienceSustainability} alt="Sustainability" />
              <div>
                <strong>Sustainability</strong>
                <span>Human impact on planetary health.</span>
              </div>
            </a>

            <div className="science-reference">
              <span>REFERENCE</span>

              <a href="/shop/sleep">SR:01 Sleep &amp; Restore Shots</a>
              <a href="/shop/gut">GS:02 Gut &amp; Microbiome Shots</a>
              <a href="/shop/recovery">
                RP:03 Recovery &amp; Performance Shots
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          ref={learnMenuRef}
          className={`learn-menu ${learnOpen ? "learn-menu-open" : ""}`}
        >
          {" "}
          <a
            className="learn-trigger"
            onClick={(e) => {
              e.preventDefault();
              setLearnOpen((open) => !open);
            }}
          >
            Learn
          </a>
          <div className="learn-dropdown">
            <div className="learn-featured">
              <a href="/learn/badhabit-101" className="learn-feature">
                <img src={learnBadhabit101} alt="BAD HABIT 101" />
                <div>
                  <strong>BAD HABIT 101</strong>
                  <span>The stuff nobody tells you about staying well.</span>
                </div>
              </a>

              <a href="/learn/shot-science-101" className="learn-feature">
                <img src={scienceImage} alt="SHOT SCIENCE 101" />
                <div>
                  <strong>SHOT SCIENCE 101</strong>
                  <span>What happens after the gulp.</span>
                </div>
              </a>
            </div>

            <div className="learn-articles">
              <span>FEATURED ARTICLES</span>

              <a href="/learn/you-dont-need-another-wellness-routine">
                <img
                  src={learnRoutine}
                  alt="You Don't Need Another Wellness Routine"
                />
                <div>
                  <strong>You Don't Need Another Wellness Routine</strong>
                  <small>6 min read</small>
                </div>
              </a>

              <a href="/learn/why-were-all-so-bad-at-being-healthy">
                <img
                  src={learnHealth}
                  alt="Why We're All So Bad at Being Healthy"
                />
                <div>
                  <strong>Why We're All So Bad at Being Healthy</strong>
                  <small>7 min read</small>
                </div>
              </a>

              <a href="/learn/the-cult-of-the-5-am-routine">
                <img src={learn5am} alt="The Cult of the 5 AM Routine" />
                <div>
                  <strong>The Cult of the 5 AM Routine</strong>
                  <small>5 min read</small>
                </div>
              </a>
            </div>

            <a href="/learn" className="learn-all-link">
              ALL BAD HABIT STORIES →
            </a>
          </div>
        </div>{" "}
      </nav>

      <div className="header-actions">
        <a href="/signin">Sign In</a>
        <a href="/get-started" className="get-started">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
