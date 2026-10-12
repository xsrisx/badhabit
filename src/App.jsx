import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import humanVideo from "./assets/videos/human.mp4";
import Footer from "./components/Footer";
import "./styles/labs-section.css";
import labsImage from "./assets/images/labs-image.png";
import scienceImage from "./assets/images/science-image.png";
import "./styles/stories-section.css";
import story1 from "./assets/images/story-1.png";
import story2 from "./assets/images/story-2.png";
import story3 from "./assets/images/story-3.png";
import story4 from "./assets/images/story-4.png";
import customer1 from "./assets/videos/customer-1.mp4";
import customer2 from "./assets/videos/customer-2.mp4";
import "./styles/body-section.css";
import "./styles/next-section.css";
import recoveryTestTube from "./assets/images/recovery-test-tube.png";
import badhabitLogo from "./assets/images/badhabit-logo.png";
import Header from "./components/Header";
import heroImage from "./assets/images/hero-background.jpg";
import product1 from "./assets/images/product-1.png";
import product2 from "./assets/images/product-2.png";
import product3 from "./assets/images/product-3.png";
import product4 from "./assets/images/product-4.png";
import threeWayMain from "./assets/images/three-way-main.png";
import threeWay1 from "./assets/images/three-way-1.png";
import threeWay2 from "./assets/images/three-way-2.png";
import threeWay3 from "./assets/images/three-way-3.png";
import GutProduct from "./pages/GutProduct";

function App() {
  const mainVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentCustomer, setCurrentCustomer] = useState(0);
  if (window.location.pathname === "/shop/gut") {
    return <GutProduct />;
  }
  return (
    <>
      <main className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <Header />

        <div className="hero-content">
          <h1>Healthy shouldn’t be another thing on your To-Do List.</h1>

          <p>
            Functional wellness shots for sleep, gut health and recovery, made
            for people with a lot on their plate, and absolutely no time for
            another complicated routine.
          </p>

          <div className="hero-buttons">
            <a href="/find-your-bad-habit">FIND YOUR BAD HABIT →</a>
            <a href="/shop">SHOP SHOTS →</a>
          </div>
        </div>
      </main>

      <section className="products-section">
        <div className="products-intro">
          <h2>Your Daily Wellness, without the Daily Routine</h2>

          <p>
            Formulations that provide sustained support using key scientifically
            and clinically studied ingredients.
          </p>

          <a href="/shop" className="shop-all">
            SHOP ALL →
          </a>
        </div>

        <div className="products-grid">
          <article className="product-card">
            <span className="product-tag">MOST NEEDED</span>

            <h3>
              <span className="product-code">SR: 01</span>
              Sleep+Restore Shot
            </h3>

            <img src={product1} alt="Sleep+Restore Shot" />

            <a href="/shop">SHOP NOW</a>

            <p className="product-bottom">
              Starting at ₹1,999 · 15 Shots · 15 Days
            </p>
          </article>

          <article className="product-card">
            <span className="product-tag">EVERYDAY</span>

            <h3>
              <span className="product-code">GS: 02</span>
              Gut+Microbiome Shot
            </h3>

            <img src={product2} alt="Gut+Microbiome Shot" />

            <a href="/shop/gut">SHOP NOW</a>
            <p className="product-bottom">
              Starting at ₹1,999 · 15 Shots · 15 Days
            </p>
          </article>

          <article className="product-card">
            <span className="product-tag">EVERYDAY</span>

            <h3>
              <span className="product-code">RP: 03</span>
              Recovery+Performance Shot
            </h3>

            <img src={product3} alt="Recovery+Performance Shot" />

            <a href="/shop">SHOP NOW</a>

            <p className="product-bottom">
              Starting at ₹1,999 · 15 Shots · 15 Days
            </p>
          </article>
        </div>
      </section>

      <section className="three-way-section">
        <div className="three-way-content">
          <span className="three-way-badge">Bundle + Save 25%</span>

          <h2>Not Sure Where To Start? Start With All Three.</h2>

          <p>
            Meet Sleep, Gut and Recovery, the three targeted shots, made for
            three different parts of your everyday life. Try the full lineup in
            one Trial Pack, then find the one that fits you best.
          </p>

          <a href="/shop" className="three-way-button">
            SHOP THE THREE-WAY
          </a>
        </div>

        <div className="three-way-gallery">
          <img
            src={threeWayMain}
            alt="BADHABIT Three-Way Trial Pack"
            className="three-way-main"
          />

          <div className="three-way-small">
            <img src={threeWay1} alt="BADHABIT Three-Way" />
            <img src={threeWay2} alt="BADHABIT Three-Way" />
            <img src={threeWay3} alt="BADHABIT Three-Way" />
          </div>
        </div>
      </section>

      <section className="recovery-section">
        <div className="recovery-panel">
          <div className="recovery-content">
            <div className="recovery-label">
              RP: 03™ · RECOVERY + PERFORMANCE
            </div>

            <h2>RECOVERY SHOULDN'T MEAN SLOWING DOWN.</h2>

            <div className="recovery-features">
              <div className="recovery-feature">
                <span>01</span>
                <h3>HYDRATION</h3>
                <p>Electrolyte support for everyday hydration.</p>
              </div>

              <div className="recovery-feature">
                <span>02</span>
                <h3>MUSCLE</h3>
                <p>Support for muscle function &amp; recovery.</p>
              </div>

              <div className="recovery-feature">
                <span>03</span>
                <h3>CELLULAR ENERGY</h3>
                <p>Nutritional support for energy production.</p>
              </div>

              <div className="recovery-feature">
                <span>04</span>
                <h3>COGNITION</h3>
                <p>Support for cognitive performance.</p>
              </div>
            </div>
          </div>

          <div className="recovery-visual">
            <img
              src={recoveryTestTube}
              alt="BADHABIT Recovery Performance Shot"
            />

            <div className="recovery-callout cork-callout">
              <span>CORK CAP</span>
              <p>
                Secure, spill-resistant S-Thread closure designed for easy open
                + close.
              </p>
            </div>

            <div className="recovery-callout tube-callout">
              <span>FROSTED TUBE</span>
              <p>
                Reusable, durable 60ML plastic with a premium frosted-glass
                effect in a compact single-serving format designed for life on
                the move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="body-section">
        <div className="body-section-content">
          <div className="body-logo">
            <img src={badhabitLogo} alt="BADHABIT" />
          </div>

          <h2>Your Body does the Complicated Part.</h2>

          <p>
            Take the shot. Your digestive system does the rest, breaking down
            and absorbing nutrients so your body can use them where they’re
            needed. The small intestine is where most nutrient absorption takes
            place, after which nutrients can enter circulation and be processed,
            stored or used by the body.
          </p>

          <a href="/discover" className="body-discover">
            DISCOVER
            <span>→</span>
          </a>
        </div>

        <div className="body-video">
          <video src={humanVideo} autoPlay muted loop playsInline />
        </div>
      </section>

      <section className="next-section">
        <div className="next-section-heading">
          <h2>Over 1 million health transformations (and counting).</h2>

          <p>See how real people are changing their health with Bad Habit.</p>
        </div>

        <div className="customer-video-wrapper">
          <div className="customer-video-track">
            <div className="customer-video-card customer-video-main">
              <video
                ref={mainVideoRef}
                src={currentCustomer === 0 ? customer1 : customer2}
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            </div>

            <div className="customer-video-card customer-video-next">
              <video
                src={currentCustomer === 0 ? customer2 : customer1}
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div className="customer-controls">
            <button
              className="customer-control-button"
              onClick={() => {
                if (!mainVideoRef.current) return;

                mainVideoRef.current.muted = !mainVideoRef.current.muted;
                setIsMuted(mainVideoRef.current.muted);
              }}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button
              className="customer-play-button"
              onClick={() => {
                if (!mainVideoRef.current) return;

                if (mainVideoRef.current.paused) {
                  mainVideoRef.current.play();
                  setIsPlaying(true);
                } else {
                  mainVideoRef.current.pause();
                  setIsPlaying(false);
                }
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              className="customer-control-button"
              onClick={() => {
                setCurrentCustomer((current) => (current === 0 ? 1 : 0));
                setIsPlaying(true);
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="customer-control-button"
              onClick={() => {
                setCurrentCustomer((current) => (current === 0 ? 1 : 0));
                setIsPlaying(true);
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="stories-section">
        <div className="stories-heading">
          <h2>Stories from scientists, innovators, and members like you.</h2>
        </div>

        <div className="stories-slider">
          <article className="story-card story-card-1">
            <img src={story1} alt="BADHABIT community story" />
          </article>

          <article className="story-card story-card-2">
            <img src={story2} alt="BADHABIT community story" />
          </article>

          <article className="story-card story-card-3">
            <img src={story3} alt="BADHABIT community story" />
          </article>

          <article className="story-card story-card-4">
            <img src={story4} alt="BADHABIT community story" />
          </article>
        </div>
      </section>
      <section className="labs-section">
        <article className="labs-card">
          <img src={labsImage} alt="BADHABIT Labs" />

          <div className="labs-card-content">
            <h2>BADHABIT [LABS]</h2>
            <p>What your body does with a wellness shot.</p>
            <a href="/learn">READ MORE</a>
          </div>
        </article>

        <article className="labs-card">
          <img src={scienceImage} alt="SHOT SCIENCE 101" />

          <div className="labs-card-content">
            <h2>SHOT SCIENCE 101</h2>
            <p>You don't need another.</p>
            <a href="/shop">SHOP NOW</a>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default App;
