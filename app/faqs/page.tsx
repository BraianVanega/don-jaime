"use client";

import Layout from "@/components/Layout";

export default function FAQsPage() {
  return (
    <Layout activeItem="faqs">
      {/* Slider */}
      <div id="flexslider" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/home-2.JPG)" }}>
            <div className="container text text-center">
              <h1 className="white margin-bottom-small">
                Frequently Asked Questions
              </h1>
              <p className="heading white">
                Find answers to the most common questions about Don Jaime
                Hunting Ranch
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
            <div className="col-md-12 padding-leftright-null">
              <div className="text">
                <h2 className="margin-bottom-null title center">
                  Frequently Asked Questions
                </h2>
                <div className="padding-onlytop-md">
                  <div className="faq-item">
                    <h4>What is included in the hunting packages?</h4>
                    <p>
                      Our hunting packages include accommodation at the lodge,
                      all meals, professional hunting guide (1x1), trophy
                      cleaning services, and access to all facilities. Specific
                      packages may vary - please check individual package
                      details.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4>How do I book a hunting trip?</h4>
                    <p>
                      You can contact us directly via phone or email. We
                      recommend booking in advance to ensure availability,
                      especially during peak hunting seasons.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4>What should I bring for the hunt?</h4>
                    <p>
                      We recommend bringing appropriate hunting gear,
                      comfortable clothing for outdoor activities, and any
                      personal items you may need. A detailed packing list will
                      be provided upon booking confirmation.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4>Are non-hunters welcome?</h4>
                    <p>
                      Yes! Non-hunters are welcome to enjoy the lodge
                      facilities, 4x4 excursions, horseback riding, and other
                      activities available at the ranch.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4>What is the cancellation policy?</h4>
                    <p>
                      Please contact us directly to discuss our cancellation
                      policy. Terms may vary depending on the time of year and
                      package selected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
