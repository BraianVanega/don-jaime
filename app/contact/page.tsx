"use client";

import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout activeItem="contact">
      {/* Slider */}
      <div id="flexslider" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/contact.jpg)" }}>
            <div className="container text text-center">
              <h1 className="white margin-bottom-small">Contact Us</h1>
              <p className="heading white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                veniam aperiam rerum quis atque, illum.
              </p>
            </div>
            <div className="gradient dark"></div>
          </li>
        </ul>
      </div>
      {/* END Slider */}
      <div id="page-wrap" className="content-section fullpage-wrap">
        <div className="row margin-leftright-null">
          <div className="container">
            {/* Contact Info */}
            <div className="col-md-6 padding-leftright-null">
              <div className="text">
                <h2 className="margin-bottom-null title line left">
                  Send us a message
                </h2>
                <p className="heading center grey margin-bottom-null">
                  We&apos;d love to hear from you.
                </p>
                <div className="">
                  <p className="margin-bottom"></p>
                  <p>
                    <span className="contact-info">
                      Lucas Maccio <em>+54 223 528 5245</em>
                    </span>
                    <br />
                    <span className="contact-info">
                      Taby Maccio <em>+54 223 544 0314</em>
                    </span>
                    <br />
                    <span className="contact-info">
                      Email: <em>Donjaimecoto@gmail.com</em>
                    </span>
                    <br />
                    <span className="contact-info">
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/donjaimehunting/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <em>Donjaimehunting</em>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* END Contact Info */}
            {/* Input Form */}
            <div className="col-md-6 padding-leftright-null">
              <div className="text padding-onlybottom-sm padding-md-top-null">
                <form
                  id="contact-form"
                  className="padding-onlytop-md padding-md-topbottom-null"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-field"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form-field"
                        name="mail"
                        id="mail"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="form-field"
                        name="subjectForm"
                        id="subjectForm"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        className="form-field"
                        name="messageForm"
                        id="messageForm"
                        rows={6}
                        placeholder="Your Message"
                      ></textarea>
                      <div className="submit-area padding-onlytop-sm">
                        <input
                          type="submit"
                          id="submit-contact"
                          className="btn-alt"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* END Input Form */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
