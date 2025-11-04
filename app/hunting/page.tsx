"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

export default function HuntingPage() {
  return (
    <Layout activeItem="hunting">
      {/* Slider */}
      <div id="flexslider" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/trip8.jpg)" }}>
            <div className="container text text-center">
              <h1 className="white margin-bottom-small">Hunting Packages</h1>
              <p className="heading white">
                Explore the thrill of hunting: Packages designed for
                wild-hearted adventurers.
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
        <div className="container text">
          <section id="masonry-filters" className="">
            {/* Filters */}
          </section>
          {/* All treks */}
          <section
            id="showcase-treks"
            className="page"
            data-isotope="load-simple"
          >
            <div className="masonry-items two-columns">
              {/* Single Trek */}
              <div className="item one-item trekking">
                <div className="showcase-trek">
                  <div className="content text-center">
                    <div className="row margin-leftright-null">
                      <div className="category">
                        <h3>Pack 1</h3>
                      </div>
                      <div className="info">
                        <div className="col-md-12">
                          <ul>
                            <li>Red stag trophy 1(no limit)</li>
                            <li>6 days</li>
                            <li>Lodge included</li>
                            <li>1x1 hunting professional guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/single-trek" className="link"></Link>
                </div>
              </div>
              <div className="item one-item trekking">
                <div className="showcase-trek">
                  <div className="content text-center">
                    <div className="row margin-leftright-null">
                      <div className="category">
                        <h3>Pack 2</h3>
                      </div>
                      <div className="info">
                        <div className="col-md-12">
                          <ul>
                            <li>Red stag trophy 1(no limit)</li>
                            <li>1 water buffalo trophy bronze medal</li>
                            <li>6 days</li>
                            <li>Lodge included</li>
                            <li>1x1 hunting professional guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/single-trek" className="link"></Link>
                </div>
              </div>
              <div className="item one-item trekking">
                <div className="showcase-trek">
                  <div className="content text-center">
                    <div className="row margin-leftright-null">
                      <div className="category">
                        <h3>Pack 3</h3>
                      </div>
                      <div className="info">
                        <div className="col-md-12">
                          <ul>
                            <li>Red stag trophy 1(no limit)</li>
                            <li>1 blackbuck antelope trophy</li>
                            <li>1 patagonia ram trophy</li>
                            <li>1 wild board trophy</li>
                            <li>6 days</li>
                            <li>Lodge included</li>
                            <li>1x1 hunting professional guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/single-trek" className="link"></Link>
                </div>
              </div>
              <div className="item one-item trekking">
                <div className="showcase-trek">
                  <div className="content text-center">
                    <div className="row margin-leftright-null">
                      <div className="category">
                        <h3>Pack 4</h3>
                      </div>
                      <div className="info">
                        <div className="col-md-12">
                          <ul>
                            <li>Red stag trophy 1 TROPHY(no limit)</li>
                            <li>1 red stag trophy</li>
                            <li>1 water buffalo trophy bronze medal</li>
                            <li>1 blackbuck antelope trophy</li>
                            <li>1 mouflon trophy</li>
                            <li>1 multihorn trophy</li>
                            <li>1 feral goat trophy</li>
                            <li>6 days</li>
                            <li>Lodge included</li>
                            <li>1x1 hunting professional guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link href="/single-trek" className="link"></Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
