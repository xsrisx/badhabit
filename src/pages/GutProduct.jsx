import gutProductMain from "../assets/images/gut-product-main.png";
import gutProduct1 from "../assets/images/gut-product-1.png";
import gutProduct2 from "../assets/images/gut-product-2.png";
import gutProduct3 from "../assets/images/gut-product-3.png";
import gutProduct4 from "../assets/images/gut-product-4.png";
import "../styles/gut-product.css";
import product4 from "../assets/images/product-4.png";
import { useEffect, useState } from "react";
import gutScienceBackground from "../assets/images/gut-science-background.png";
import gutFormatImage from "../assets/images/gut-format-image.png";
import gutFormatTestTube from "../assets/images/gut-format-test-tube.png";
import gutDifference1 from "../assets/images/gut-difference-1.png";
import gutDifference2 from "../assets/images/gut-difference-2.png";
import psylliumHuskVideo from "../assets/videos/psyllium-husk.mp4";

import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";

import Footer from "../components/Footer";

import GutReviews from "./GutReviews";

function GutProduct() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const addToCart = (id) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === id);

      if (existing) {
        return items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      const products = {
        gut: {
          id: "gut",
          name: "GS-02® Gut & Microbiome Shot",
          price: 1999,
          image: product2,
          delivery: "Delivered monthly",
        },
        sleep: {
          id: "sleep",
          name: "SR:01® Sleep & Restore Shot",
          price: 1999,
          image: product1,
          delivery: "",
        },
        recovery: {
          id: "recovery",
          name: "RP:03® Recovery & Performance Shot",
          price: 1999,
          image: product3,
          delivery: "",
        },
      };

      return [...items, { ...products[id], quantity: 1 }];
    });

    setCartOpen(true);
  };

  const changeQuantity = (id, amount) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const hasBundleDiscount = cartItems.length >= 2;

  const cartDiscount = hasBundleDiscount ? Math.round(cartSubtotal * 0.25) : 0;

  const cartTotal = cartSubtotal - cartDiscount;

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const steps = document.querySelectorAll(".gut-difference-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step) => step.classList.remove("active"));
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <button
        className="gut-floating-cart"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      >
        <span>Cart</span>
        <span className="gut-floating-cart-count">{cartCount}</span>
      </button>
      <main className="gut-product-page">
        <section className="gut-product-gallery">
          <div
            className="gut-product-main-image"
            onClick={() => setSelectedImage(gutProductMain)}
          >
            <img src={gutProductMain} alt="GS:02 Gut + Microbiome Shot" />
          </div>

          <div className="gut-product-grid">
            <img
              src={gutProduct1}
              alt="GS:02 Gut + Microbiome Shot"
              onClick={() => setSelectedImage(gutProduct1)}
            />

            <img
              src={gutProduct2}
              alt="GS:02 Gut + Microbiome Shot"
              onClick={() => setSelectedImage(gutProduct2)}
            />

            <img
              src={gutProduct3}
              alt="GS:02 Gut + Microbiome Shot"
              onClick={() => setSelectedImage(gutProduct3)}
            />

            <img
              src={gutProduct4}
              alt="GS:02 Gut + Microbiome Shot"
              onClick={() => setSelectedImage(gutProduct4)}
            />
          </div>
        </section>
        <section className="gut-product-info">
          <p className="gut-product-kicker">GS:02 GUT &amp; MICROBIOME SHOT</p>

          <h1>GS:02 Gut + Microbiome</h1>
          <div className="gut-product-reviews">
            <span>★★★★★</span>
            <span>2,400 Reviews</span>
          </div>

          <p className="gut-product-description">
            A functional wellness shot designed to support digestive health, gut
            microbiome balance and everyday regularity, in one simple 60 ml
            shot.
          </p>

          <div className="gut-product-price">
            <strong>₹1,999</strong>
            <span>Bestseller</span>
          </div>

          <p className="gut-product-supply">15-day supply delivered monthly.</p>

          <button className="gut-add-to-cart" onClick={() => addToCart("gut")}>
            ADD TO CART
          </button>

          <p className="gut-product-guarantee">
            15-day risk-free guarantee. Free IN shipping.
          </p>
          <div className="gut-accordion">
            <button
              className="gut-accordion-header"
              onClick={() =>
                setOpenAccordion(
                  openAccordion === "benefits" ? null : "benefits",
                )
              }
            >
              <span>Benefits</span>
              <span>{openAccordion === "benefits" ? "−" : "+"}</span>
            </button>
            {openAccordion === "benefits" && (
              <div className="gut-accordion-content">
                {" "}
                <p>Supports digestive wellness</p>
                <p>Supports gut microbiome balance</p>
                <p>Supports everyday regularity</p>
                <p>Ready-to-drink. Zero prep.</p>
                <p>Reduces bloating and gas.</p>
                <p>Improves regularity and digestive discomfort.</p>
              </div>
            )}{" "}
          </div>
          <div className="gut-accordion">
            <button
              className="gut-accordion-header"
              onClick={() =>
                setOpenAccordion(
                  openAccordion === "ingredients" ? null : "ingredients",
                )
              }
            >
              <span>Active Ingredients</span>
              <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
            </button>

            {openAccordion === "ingredients" && (
              <div className="gut-accordion-content">
                <div>
                  <strong>250 mg Multi strain Probiotic Blend</strong>
                  <p>
                    A combination of selected probiotic strains designed to
                    support the gut microbiome.
                  </p>
                </div>

                <div>
                  <strong>2 g Prebiotic Blend</strong>
                  <p>
                    Includes inulin to provide fermentable substrate for
                    beneficial gut microorganisms.
                  </p>
                </div>

                <div>
                  <strong>2.5 g Psyllium Husk</strong>
                  <p>
                    A soluble fibre used to support digestive regularity and
                    healthy bowel function.
                  </p>
                </div>

                <div>
                  <strong>150 mg Ginger Extract</strong>
                  <p>Traditionally used to support digestive comfort.</p>
                </div>

                <div>
                  <strong>45 mg Peppermint Oil</strong>
                  <p>Included as part of the digestive-support blend.</p>
                </div>

                <div>
                  <strong>250 mg Digestive Enzymes</strong>
                  <p>
                    Included to support the breakdown of food during digestion.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="gut-bundle-card">
            <span className="gut-bundle-badge">BUNDLE + SAVE 25%</span>

            <div className="gut-bundle-product">
              <img src={product4} alt="TWT:04 Three Way Trial" />

              <h2>
                Add TWT:04 Three Way Trial to your routine and save on your
                first order.
              </h2>
            </div>

            <div className="gut-bundle-price">
              <span className="gut-bundle-mrp">₹1,999</span>
              <span className="gut-bundle-sale">₹1,499</span>
            </div>

            <button className="gut-bundle-button">
              <span>Add TWT:04</span>
              <span>+</span>
            </button>
          </div>

          <a href="/science/clinical-trials" className="gut-clinical-link">
            View Clinical Trials
          </a>
        </section>
        {selectedImage && (
          <div
            className="gut-image-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="gut-lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <div
              className="gut-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="GS:02 Gut + Microbiome Shot" />

              <div className="gut-lightbox-thumbnails">
                {[
                  gutProductMain,
                  gutProduct1,
                  gutProduct2,
                  gutProduct3,
                  gutProduct4,
                ].map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={selectedImage === image ? "active" : ""}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <section
        className="gut-next-section"
        style={{ backgroundImage: `url(${gutScienceBackground})` }}
      >
        {" "}
        <div className="gut-science-overlay">
          <h2>Feel the difference of a Better Gut Routine.</h2>

          <div className="gut-science-glass">
            <div className="gut-science-item">
              <h3>Thoughtful Ingredients</h3>
              <p>
                A considered blend of probiotics, prebiotics, soluble fibre,
                ginger, peppermint and digestive enzymes, formulated around
                everyday gut health.
              </p>
            </div>

            <div className="gut-science-item">
              <h3>Built For The Daily Dose</h3>
              <p>
                A compact 60 ml shot designed to make your gut routine simple,
                portable and easy to take every day.
              </p>
            </div>

            <div className="gut-science-item">
              <h3>Feeds Good Gut Microbes</h3>
              <p>
                Prebiotic fibre provides fuel for beneficial gut microorganisms,
                while probiotics introduce selected live microorganisms to
                support the gut microbiome.
              </p>
            </div>

            <div className="gut-science-item">
              <h3>Clinically Studied Ingredients</h3>
              <p>
                Built around ingredients with human research behind them, with
                evidence considered at the ingredient, strain and dose level.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="gut-format-section">
        <div className="gut-format-image">
          <img src={gutFormatImage} alt="BADHABIT 60 ml shot" />
        </div>
        <div className="gut-format-content">
          <h2>The Shot, Built For Real Life.</h2>

          <p>
            A 60 ml ready-to-drink format designed to make daily wellness easier
            to carry, open and take, wherever the day takes you.
          </p>

          <div className="gut-format-product">
            <div className="gut-format-test-tube">
              <img src={gutFormatTestTube} alt="BADHABIT test tube" />
            </div>
            <div className="gut-format-detail gut-format-detail-left">
              <h3> Frosted-Finish Body</h3>
              <p>
                A durable, reusable plastic body with a frosted-glass effect,
                made to feel substantial without making the shot bulky.
              </p>
            </div>

            <div className="gut-format-detail gut-format-detail-right">
              <h3> S-Thread Cork Cap</h3>
              <p>
                A familiar open-and-close format with a secure, spill-resistant
                seal, easy to take, close and carry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gut-difference-section">
        <div className="gut-difference-left">
          <div className="gut-difference-heading">
            <h2>The GS:02 Difference:</h2>
            <h3>Benefits that build over time</h3>

            <p>Results you can feel in as little as 5 days.*</p>

            <a href="/science/clinical-trials">See Clinical Evidence →</a>
          </div>

          <div className="gut-difference-timeline">
            <div className="gut-difference-step">
              <div className="gut-difference-dot"></div>

              <div className="gut-difference-copy">
                <div className="gut-difference-title">
                  <span>7 Days</span>
                  <strong>Reduces Bloating + Gas*</strong>
                </div>

                <ul>
                  <li>Reduces rumbling in the gut</li>
                  <li>Alleviates excess gas</li>
                  <li>Lessens disruption from bloating**</li>
                </ul>
              </div>
            </div>

            <div className="gut-difference-step">
              <div className="gut-difference-dot"></div>

              <div className="gut-difference-copy">
                <div className="gut-difference-title">
                  <span>2 Weeks</span>
                  <strong>Supports Healthy Regularity**</strong>
                </div>

                <ul>
                  <li>Improves stool quality</li>
                  <li>Reduces occasional constipation</li>
                  <li>Makes pooping easier</li>
                </ul>
              </div>
            </div>

            <div className="gut-difference-step">
              <div className="gut-difference-dot"></div>

              <div className="gut-difference-copy">
                <div className="gut-difference-title">
                  <span>4 Weeks</span>
                  <strong>Smooths Skin Aging**</strong>
                </div>

                <ul>
                  <li>Supports skin appearance</li>
                  <li>Reduces fine lines</li>
                  <li>Reduces wrinkles</li>
                </ul>
              </div>
            </div>

            <div className="gut-difference-step">
              <div className="gut-difference-dot"></div>

              <div className="gut-difference-copy">
                <div className="gut-difference-title">
                  <span>3 Months</span>
                  <strong>6 Weeks + Whole Body Health*</strong>
                </div>

                <ul>
                  <li>Promotes overall digestive quality of life</li>
                  <li>Supports immune system balance</li>
                  <li>Increases micronutrient synthesis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="gut-difference-right">
          <div className="gut-difference-image">
            <img src={gutDifference1} alt="GS:02 gut health" />
          </div>
          <div className="gut-difference-image">
            <img src={gutDifference2} alt="GS:02 gut health" />
          </div>{" "}
        </div>
      </section>
      <section className="gut-ingredients-section">
        <div className="gut-ingredients-video">
          <video src={psylliumHuskVideo} autoPlay muted loop playsInline />
          <span className="gut-video-label">Psyllium Husk</span>
        </div>

        <div className="gut-ingredients-content">
          <h2>A Multi-Layered Formula For Everyday Gut Health*</h2>

          <a href="#gut-ingredients-table">View Ingredients + Research →</a>

          <table id="gut-ingredients-table">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Working amount / 60 ml shot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Multistrain Probiotic Blend</strong>
                </td>
                <td>10–20 Billion CFU</td>
              </tr>
              <tr>
                <td>
                  <strong>Inulin</strong>
                </td>
                <td>1.5 g</td>
              </tr>
              <tr>
                <td>
                  <strong>Psyllium Husk</strong>
                </td>
                <td>1.5 g</td>
              </tr>
              <tr>
                <td>
                  <strong>Ginger Extract</strong>
                </td>
                <td>150 mg</td>
              </tr>
              <tr>
                <td>
                  <strong>Digestive Enzyme Blend</strong>
                </td>
                <td>150 mg</td>
              </tr>
              <tr>
                <td>
                  <strong>Peppermint Oil</strong>
                </td>
                <td>25 mg</td>
              </tr>
            </tbody>
          </table>

          <div className="gut-testing-grid">
            <div>Gluten-Tested</div>
            <div>Dairy-Tested</div>
            <div>Nut-Tested</div>
            <div>Soy-Tested</div>
            <div>Shellfish-Tested</div>
            <div>Sesame-Tested</div>
            <div>Glyphosate / AMPA-Tested</div>
            <div>No Binders</div>
            <div>No Preservatives</div>
            <div>Prop. 65 Compliant</div>
          </div>
        </div>
      </section>
      <GutReviews />
      <Footer />
      {cartOpen && (
        <div className="gut-cart-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="gut-cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gut-cart-header">
              <h2>Your Cart ({cartCount})</h2>
              <button
                className="gut-cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            <p className="gut-cart-promo">
              Save 25% when you add another product
            </p>

            <div className="gut-cart-items">
              {cartItems.map((item) => (
                <div className="gut-cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="gut-cart-item-info">
                    <h3>{item.name}</h3>
                    {item.delivery && <p>{item.delivery}</p>}
                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>

                    <div className="gut-cart-quantity">
                      <button onClick={() => changeQuantity(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>

                  <strong className="gut-cart-line-total">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </strong>
                </div>
              ))}
            </div>

            {cartItems.length < 3 && (
              <div className="gut-cart-bundle">
                {" "}
                <h3>Bundle + Save 25%</h3>
                {[
                  {
                    id: "sleep",
                    name: "SR: 01® Sleep & Restore Shot",
                    image: product1,
                  },
                  {
                    id: "recovery",
                    name: "RP: 03® Recovery & Performance Shot",
                    image: product3,
                  },
                ]
                  .filter(
                    (product) =>
                      !cartItems.some((item) => item.id === product.id),
                  )
                  .map((product) => (
                    <div className="gut-cart-suggestion" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <p>{product.name}</p>
                        <strong>₹1,999</strong>
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        aria-label={`Add ${product.name}`}
                      >
                        +
                      </button>
                    </div>
                  ))}
              </div>
            )}
            <div className="gut-cart-footer">
              <div className="gut-cart-total-row">
                <span>Total</span>
                <div className="gut-cart-total-prices">
                  {hasBundleDiscount && (
                    <span className="gut-cart-original-total">
                      ₹{cartSubtotal.toLocaleString("en-IN")}
                    </span>
                  )}
                  <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
                </div>
              </div>
              {hasBundleDiscount && (
                <p className="gut-cart-savings">
                  You saved ₹{cartDiscount.toLocaleString("en-IN")} (25%)
                </p>
              )}

              <p>Shipping and discounts calculated at checkout.</p>
              <button className="gut-cart-checkout">
                Continue to Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default GutProduct;
