import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="footerItems">
        <section className="footer-mn-lt">
          <img src="assets/logo.svg" alt="logo" />
        </section>
        <div className="footer-links">
          <section>
            <a href="#" className="links contact">
              Contact
            </a>
            <a href="#" className="links faq">
              FAQ's
            </a>
          </section>
          <section className="footer-mn-rt">
            <a href="#" className="links tutorial">
              Tutorials
            </a>
            <a href="#" className="links blog">
              Blog
            </a>
          </section>

          <section className="footer-mn-rt">
            <a href="#" className="links privacy">
              Privacy
            </a>
            <a href="#" className="links bannedItems">
              Banned Items
            </a>
          </section>

          <section className="footer-mn-rt">
            <a href="#" className="links about">
              About
            </a>
            <a href="#" className="links jobs">
              Jobs<span className="badge">3</span>
            </a>
          </section>

          <section>
            <a href="#" className="links facebook ">
              Facebook
            </a>
            <a href="#" className="links twitter">
              Twitter
            </a>
            <a href="#" className="links linkedin">
              LinkedIn
            </a>
          </section>
        </div>
      </main>
      <div className="copyright">
        <p className="paragraph-sm">Dukaan 2020, All right reserved</p>
        <div className="made-in-india">
          <p>Made in</p>
          <img src="assets/flag.svg" alt="flag" />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
