"use client";

import Link from "next/link";

interface HeaderProps {
  activeItem?: string;
}

export default function Header({ activeItem = "home" }: HeaderProps) {
  return (
    <header id="header" className="fixed transparent full-width">
      <div className="container">
        <nav className="navbar navbar-default white">
          {/* Header Logo */}
          <div id="logo">
            <Link className="navbar-brand" href="/">
              <img src="/assets/img/logo.png" className="normal" alt="logo" />
              <img
                src="/assets/img/logo@2x.png"
                className="retina"
                alt="logo"
              />
              <img
                src="/assets/img/logo_white.png"
                className="normal white-logo"
                alt="logo"
              />
              <img
                src="/assets/img/logo_white@2x.png"
                className="retina white-logo"
                alt="logo"
              />
            </Link>
          </div>
          {/* END Header Logo */}
          {/* Classic menu, responsive menu classic */}
          <div id="menu-classic">
            <div className="menu-holder">
              <ul>
                <li>
                  <Link
                    href="/"
                    className={activeItem === "home" ? "active-item" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hunting"
                    className={activeItem === "hunting" ? "active-item" : ""}
                  >
                    Hunting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lodge"
                    className={activeItem === "lodge" ? "active-item" : ""}
                  >
                    Lodge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={activeItem === "gallery" ? "active-item" : ""}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className={activeItem === "faqs" ? "active-item" : ""}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={activeItem === "contact" ? "active-item" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* END Classic menu, responsive menu classic */}
          {/* Button for Responsive Menu Classic */}
          <div id="menu-responsive-classic">
            <div className="menu-button">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
          </div>
          {/* END Button for Responsive Menu Classic */}
          {/* Search Box */}
          <div id="search-box" className="full-width">
            <form role="search" id="search-form" className="black big">
              <div className="form-input">
                <input
                  className="form-field black big"
                  type="search"
                  placeholder="Search..."
                />
                <span className="form-button big">
                  <button type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>
                </span>
              </div>
            </form>
            <button className="close-search-box">
              <i className="icon ion-ios-close-empty"></i>
            </button>
          </div>
          {/* END Search Box */}
        </nav>
      </div>
    </header>
  );
}
