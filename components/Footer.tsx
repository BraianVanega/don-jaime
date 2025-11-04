export default function Footer() {
  return (
    <footer className="fixed full-width">
      <div className="container">
        <div className="row no-margin">
          <div className="col-sm-4 col-md-2 padding-leftright-null">
            <h6 className="heading white margin-bottom-extrasmall">
              Don Jaime
            </h6>
            <ul className="sitemap">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/hunting">Hunting</a>
              </li>
              <li>
                <a href="/lodge">Lodge</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/contact">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-2 padding-leftright-null">
            <h6 className="heading white margin-bottom-extrasmall">
              Useful Links
            </h6>
            <ul className="useful-links">
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="#">Download Catalog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 padding-leftright-null">
            <h6 className="heading white margin-bottom-extrasmall">
              Contact Us
            </h6>
            <ul className="info">
              <li>
                Phone <a href="tel:+39123456789">+39 123456789</a>
              </li>
              <li>
                Mail <a href="mailto:mail@domain.com">mail@domain.com</a>
              </li>
              <li>
                Monday to Friday{" "}
                <span className="white">9.00 am to 8.00 pm</span>
                <br />
                Saturday from
                <span className="white"> 9.00 am to 12.00 pm</span>
              </li>
              <li>
                <a href="#">
                  322 Moon St, Venice
                  <br />
                  Italy, 1231
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 padding-leftright-null">
            <h6 className="heading white margin-bottom-extrasmall">
              Passionate About Nature
            </h6>
            <p className="grey-light">
              Sign up for Don Jaime monthly newsletter and get to know more
              about our latest adventures and much more...
            </p>
            <div id="newsletter-form" className="padding-onlytop-xs">
              <form className="search-form">
                <div className="form-input">
                  <input type="text" placeholder="Your email ID" />
                  <span className="form-button">
                    <button type="button">Sign Up</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="row no-margin">
            <div className="col-md-8 padding-leftright-null">
              &copy; {new Date().getFullYear()} Don Jaime - Hunting Ranch
            </div>
            <div className="col-md-4 padding-leftright-null">
              <ul className="social">
                <li>
                  <a href="#" aria-label="Facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Google Plus">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
