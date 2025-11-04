"use client";

import Layout from "@/components/Layout";

export default function LodgePage() {
  return (
    <Layout activeItem="lodge">
      {/* Slider */}
      <div id="flexslider" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/trip9.jpg)" }}>
            <div className="container text text-center">
              <h1 className="white margin-bottom-small">Don Jaime Lodge</h1>
              <p className="heading white"></p>
            </div>
            <div className="gradient dark"></div>
          </li>
        </ul>
      </div>
      {/* END Slider */}
      <div id="page-wrap" className="content-section fullpage-wrap">
        {/* Gallery Section */}
        <section id="gallery" data-isotope="load-simple">
          <div className="row margin-leftright-null">
            <div className="container">
              <div className="col-md-12 padding-leftright-null">
                <div style={{ marginTop: "50px" }}>
                  <h2
                    className="margin-bottom-null title center"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Lodge
                  </h2>
                  <div className="padding-onlytop-sm">
                    <p>
                      Discover serenity at our Lodge! Located in the heart of
                      the Pampas countryside, we invite you to live an
                      unforgettable experience in our sanctuary. From the moment
                      you arrive, you&apos;ll receive warm hospitality and the
                      comfort that Don Jaime offers. Our lodge is designed to
                      provide absolute comfort, with elegant and cozy rooms
                      where you can rest after a day of hunting. At night, Don
                      Jaime becomes a haven of peace, where the starry sky
                      becomes your ceiling and the crackling of a fire invites
                      you to share stories of all your adventures. Our cuisine
                      will delight you with Argentine and international flavors
                      prepared with fresh, high-quality ingredients. Book now
                      and start creating unforgettable memories at our lodge,
                      where comfort and adventure are in perfect harmony!
                    </p>
                    <ul style={{ paddingLeft: "15px" }}>
                      <li>Air conditioning</li>
                      <li>
                        All meals (including soft drinks, beer, extended
                        selection of Argentine wines)
                      </li>
                      <li>Small swimming pool</li>
                      <li>Trophy cleaning services</li>
                      <li>4x4 excursions for companions</li>
                      <li>Horseback riding</li>
                      <li>
                        Visit to &quot;La Holanda&quot; Museum, Ortiz Echague
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
