"use client";

import Layout from "@/components/Layout";

export default function GalleryPage() {
  return (
    <Layout activeItem="gallery">
      {/* Slider */}
      <div id="flexslider" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/home-3.jpg)" }}>
            <div className="container text text-center">
              <h1 className="white margin-bottom-small">Gallery</h1>
              <p className="heading white">
                Explore our collection of hunting adventures and memorable
                moments
              </p>
            </div>
            <div className="gradient dark"></div>
          </li>
        </ul>
      </div>
      {/* END Slider */}
      <div
        id="page-wrap"
        className="content-section fullpage-wrap grey-background"
      >
        <div className="container">
          <div className="col-md-12 padding-leftright-null">
            <div className="text text-center padding-bottom-null">
              <h2 className="margin-bottom-null title line center">
                Our Gallery
              </h2>
              <p className="heading center grey margin-bottom-null">
                Discover the beauty and excitement of our hunting experiences
              </p>
            </div>
          </div>
          {/* Gallery will be loaded here */}
          <section id="gallery" data-isotope="load-simple">
            <div className="masonry-items three-columns">
              {/* Gallery items will be dynamically loaded by isotope */}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
