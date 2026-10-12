import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-wordmark">
            <div className="footer-badhabit">BADHABIT</div>
            <div className="footer-tagline">not your worst one</div>
          </div>

          <h2>Wellness For People Who Don’t Have Time For Wellness.</h2>

          <p className="footer-statement">
            We make functional wellness shots for the way real life actually
            works, busy, unpredictable and always moving.
          </p>

          <div className="footer-newsletter">
            <h3>BAD HABIT, IN YOUR INBOX.</h3>

            <a href="/newsletter">
              Sign Up For Our Newsletter
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <span>SHOP</span>
            <a href="/shop">Shop All</a>
            <a href="/shop/sleep">Sleep + Restore</a>
            <a href="/shop/gut">Gut + Microbiome</a>
            <a href="/shop/recovery">Recovery + Performance</a>
          </div>

          <div className="footer-column">
            <span>ABOUT</span>
            <a href="/science">Science</a>
            <a href="/learn">Learn</a>
            <a href="/labs">BADHABIT Labs</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <span>CONNECT</span>
            <a href="/instagram">Instagram</a>
            <a href="/linkedin">LinkedIn</a>
            <a href="/contact">Partner</a>
            <a href="/careers">Careers</a>
          </div>

          <div className="footer-column">
            <span>LEGAL</span>
            <a href="/terms">Terms + Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BADHABIT. ALL RIGHTS RESERVED.</p>
        <p>NOT YOUR WORST ONE.</p>
      </div>
    </footer>
  );
}

export default Footer;
