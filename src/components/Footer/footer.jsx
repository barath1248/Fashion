import './footer.css';
export function Footer() {
  return (

    <footer id="footer" className="footer">

      <div className="footer-container">

        {/* LOGO */}

        <div className="footer-section">

          <h1>FASHION</h1>

          <p>
            Premium fashion collections for modern lifestyle
            and streetwear culture.
          </p>

        </div>


        {/* LINKS */}

        <div className="footer-section">

          <h2>Quick Links</h2>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#collections">Men</a></li>
            <li><a href="#collections">Women</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>

        </div>


        {/* SUPPORT */}

        <div className="footer-section">

          <h2>Support</h2>

          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>

        </div>


        {/* SOCIALS */}

        <div className="footer-section">

          <h2>Follow Us</h2>

          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Fashion. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}