"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout activeItem="home">
      {/* Slider */}
      <div id="flexslider-nav" className="fullpage-wrap small">
        <ul className="slides">
          <li style={{ backgroundImage: "url(/assets/img/home-4.jpeg)" }}>
            <div className="container text">
              <h1 className="white flex-animation">Welcome to Don Jaime</h1>
              <h2 className="white flex-animation">
                It&apos;s time to start your adventures
              </h2>
              <Link
                href="#"
                className="shadow btn-alt small activetwo margin-bottom-null flex-animation"
              >
                Discover our packs
              </Link>
            </div>
            <div className="gradient dark"></div>
          </li>
          <li style={{ backgroundImage: "url(/assets/img/home-6.jpeg)" }}>
            <div className="text container">
              <h1 className="white flex-animation no-opacity">
                Wild nature
                <br />
                safe adventure
              </h1>
              <h2 className="white flex-animation no-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Veniam, facilis.
              </h2>
              <Link
                href="#"
                className="shadow btn-alt small activetwo margin-bottom-null flex-animation no-opacity"
              >
                More info
              </Link>
            </div>
            <div className="gradient dark"></div>
          </li>
        </ul>
        <div className="slider-navigation">
          <a href="#" className="flex-prev">
            <i className="icon ion-ios-arrow-thin-left"></i>
          </a>
          <div className="slider-controls-container"></div>
          <a href="#" className="flex-next">
            <i className="icon ion-ios-arrow-thin-right"></i>
          </a>
        </div>
      </div>
      {/* END Slider */}
      <div id="home-wrap" className="content-section fullpage-wrap">
        {/* Section About */}
        <div className="row margin-leftright-null">
          <div className="container">
            <div className="col-md-12 padding-leftright-null">
              <div className="text text-center">
                <h2 className="margin-bottom-null title center">About Us</h2>
                <p className="heading center grey z-index">
                  Don Jaime Hunting Ranch is owned and operated by the Maccio
                  family. We are dedicated to creating incredible red stag
                  hunting stories. We started a few years ago and continue to
                  grow with passion and dedication.
                </p>
                <div className="padding-onlytop-sm">
                  <p>
                    Discover the excitement of hunting like never before at our
                    reserve dedicated to the pursuit of wild game. Immerse
                    yourself in a world where skill and knowledge meet nature in
                    its purest state. On our site, you will find everything you
                    need to plan your next adventure safely and responsibly.
                    <br />
                    <br />
                    Join a passionate community of hunters who share your love
                    for nature and the sport. Our website is not only a source
                    of information but also a space to connect with other
                    hunters and learn together. Whether you are an enthusiastic
                    novice or an experienced hunter, we are here to meet your
                    needs and help you enjoy every moment of your next hunt.
                    <br />
                    <br />
                    Visit us now and get ready to live the adventure of your
                    life. Embark on your next hunt with us and make every shot
                    count!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Section About */}
        {/* Services */}
        <div className="row no-margin text-center grey-background">
          <div className="container">
            <div className="col-md-12 padding-leftright-null">
              <div className="col-md-4 padding-leftright-null">
                <div className="text padding-md-bottom-null">
                  <img src="/assets/img/animal.svg" alt="Animals" />
                  <h6 className="heading margin-bottom-extrasmall">Animals</h6>
                  <p className="margin-bottom-null">
                    Each hunter is special to us. We customize all our hunting
                    adventures according to the needs of each individual
                  </p>
                </div>
              </div>
              <div className="col-md-4 padding-leftright-null">
                <div className="text padding-md-bottom-null">
                  <img src="/assets/img/lodge.svg" alt="Lodge" />
                  <h6 className="heading margin-bottom-extrasmall">Lodge</h6>
                  <p className="margin-bottom-null">
                    Our lodge provides hunting enthusiasts with a comfortable
                    and accessible retreat in the midst of nature, designed to
                    offer unique and guided experiences in wild settings.
                  </p>
                </div>
              </div>
              <div className="col-md-4 padding-leftright-null">
                <div className="text">
                  <img src="/assets/img/gallery.svg" alt="Gallery" />
                  <h6 className="heading margin-bottom-extrasmall">Gallery</h6>
                  <p className="margin-bottom-null">
                    Our photo gallery showcases nature at its finest, capturing
                    thrilling moments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Services */}
        {/* Carousel Gallery */}
        <div className="row margin-leftright-null padding-sm">
          <div className="gallery-carousel">
            {[5, 6, 7, 8, 9, 10, 11, 12, 2].map((num) => (
              <div key={num} className="item">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(/assets/img/trip${num}-small.jpg)`,
                  }}
                ></div>
              </div>
            ))}
            <div className="item">
              <div
                className="image"
                style={{ backgroundImage: "url(/assets/img/trip8-small.jpg)" }}
              ></div>
            </div>
            <div className="item">
              <div
                className="image"
                style={{ backgroundImage: "url(/assets/img/trip9-small.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
        {/* Carousel Gallery */}
        {/* Trip Showcase */}
        <div
          id="showcase-treks"
          className="text padding-bottom-null grey-background center"
        >
          <div className="container">
            <div className="col-md-12 padding-leftright-null text-center">
              <h2 className="margin-bottom-null title line center">
                Featured packs proximamente
              </h2>
              <p className="heading center grey margin-bottom-null"></p>
            </div>
            <div className="col-md-12 padding-leftright-null">
              <section className="showcase-carousel text">
                {/* Single Trip */}
                <div className="item">
                  <div className="showcase-trek">
                    <span className="read">from 820$</span>
                    <img
                      src="/assets/img/trip1.jpg"
                      alt="Trekking Expedition"
                    />
                    <div className="content text-center">
                      <div className="row margin-leftright-null">
                        <div className="meta">
                          <div className="col-md-4 padding-leftright-null">
                            <h3>12</h3>
                            <h4>Days</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>10</h3>
                            <h4>Max Group Size</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>High</h3>
                            <h4>Difficulty</h4>
                          </div>
                        </div>
                        <div className="category">
                          <h3>Trekking Expedition</h3>
                        </div>
                        <div className="info">
                          <div className="col-md-12 padding-leftright-null">
                            <h6 className="heading">Everest Base Camp</h6>
                            <p className="margin-null">Ama Dablam, Nepal</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/single-trek" className="link"></Link>
                  </div>
                </div>
                {/* END Single Trip */}
                <div className="item">
                  <div className="showcase-trek">
                    <span className="read">from 320$</span>
                    <img src="/assets/img/trip2.jpg" alt="Hiking Expedition" />
                    <div className="content text-center">
                      <div className="row margin-leftright-null">
                        <div className="meta">
                          <div className="col-md-4 padding-leftright-null">
                            <h3>3</h3>
                            <h4>Days</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>10</h3>
                            <h4>Max Group Size</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>High</h3>
                            <h4>Difficulty</h4>
                          </div>
                        </div>
                        <div className="category">
                          <h3>Hiking Expedition</h3>
                        </div>
                        <div className="info">
                          <div className="col-md-12 padding-leftright-null">
                            <h6 className="heading">Monte Bianco</h6>
                            <p className="margin-null">Courmayeur, France</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/single-trek-2" className="link"></Link>
                  </div>
                </div>
                <div className="item">
                  <div className="showcase-trek">
                    <span className="read">from 120$</span>
                    <img
                      src="/assets/img/trip3.jpg"
                      alt="Canyoning Expedition"
                    />
                    <div className="content text-center">
                      <div className="row margin-leftright-null">
                        <div className="meta">
                          <div className="col-md-4 padding-leftright-null">
                            <h3>1</h3>
                            <h4>Days</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>20</h3>
                            <h4>Max Group Size</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>Medium</h3>
                            <h4>Difficulty</h4>
                          </div>
                        </div>
                        <div className="category">
                          <h3>Canyoning Expedition</h3>
                        </div>
                        <div className="info">
                          <div className="col-md-12 padding-leftright-null">
                            <h6 className="heading">Valley of Piave</h6>
                            <p className="margin-null">Dolomiti, Italy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/single-trek" className="link"></Link>
                  </div>
                </div>
                <div className="item">
                  <div className="showcase-trek">
                    <span className="read">from 550$</span>
                    <img
                      src="/assets/img/trip4.jpg"
                      alt="Trekking Expedition"
                    />
                    <div className="content text-center">
                      <div className="row margin-leftright-null">
                        <div className="meta">
                          <div className="col-md-4 padding-leftright-null">
                            <h3>8</h3>
                            <h4>Days</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>5</h3>
                            <h4>Max Group Size</h4>
                          </div>
                          <div className="col-md-4 padding-leftright-null">
                            <h3>Easy</h3>
                            <h4>Difficulty</h4>
                          </div>
                        </div>
                        <div className="category">
                          <h3>Trekking Expedition</h3>
                        </div>
                        <div className="info">
                          <div className="col-md-12">
                            <h6>Eolie Island</h6>
                            <p className="margin-null">Eolie Island, Italy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/single-trek-2" className="link"></Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* END Trip Showcase */}
        {/* Section Image Background with overlay */}
        <div className="row margin-leftright-null grey-background">
          <div
            className="bg-img overlay simple-parallax responsive"
            style={{ backgroundImage: "url(/assets/img/testimonials.jpg)" }}
          >
            <div className="container">
              {/* Testimonials */}
              <section className="testimonials-carousel-simple col-md-12 text padding-bottom-null">
                <div className="item padding-leftright-null">
                  <div className="padding-top-null padding-bottom-null">
                    <blockquote className="margin-bottom-small white">
                      In every hunting journey, we discover the beauty of nature
                      and the value of perseverance, nourishing our spirit with
                      every step and every moment experienced in the wild world.
                      <em className="small grey-light">Taby maccio</em>
                    </blockquote>
                  </div>
                </div>
                <div className="item padding-leftright-null">
                  <div className="padding-top-null padding-bottom-null">
                    <blockquote className="margin-bottom-small white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur voluptatum fugiat molestias, veritatis
                      perspiciatis laborum modi beatae placeat explicabo at
                      laudantium aliquam, nam vero ut!
                      <em className="small grey-light">Vanessa Brown</em>
                    </blockquote>
                  </div>
                </div>
              </section>
              {/* END Testimonials */}
            </div>
          </div>
        </div>
        {/* END Section Image Background with overlay */}
        {/* Section News */}
        <div className="row margin-leftright-null grey-background">
          <div className="container">
            <div className="col-md-12 padding-leftright-null text padding-bottom-null text-center">
              <h2 className="margin-bottom-null title line center">
                Latest of our blog
              </h2>
              <p className="heading center grey margin-bottom-null">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
            <div className="col-md-12 text" id="news">
              {/* Single News */}
              <div className="col-sm-6 single-news horizontal-news">
                <article>
                  <div className="col-md-6 padding-leftright-null">
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/assets/img/news1.jpg)" }}
                    ></div>
                  </div>
                  <div className="col-md-6 padding-leftright-null">
                    <div className="content">
                      <h3>Adventure Time</h3>
                      <span className="date">02.11.2016</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Expedita, voluptas corporis. Maxime sapiente,
                        adipisci laborum.
                      </p>
                      <span className="category">Travel</span>
                      <span className="category">Blog</span>
                    </div>
                  </div>
                  <Link href="/standard-post" className="link"></Link>
                </article>
              </div>
              {/* END Single News */}
              <div className="col-sm-6 single-news horizontal-news">
                <article>
                  <div className="col-md-6 padding-leftright-null">
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/assets/img/news2.jpg)" }}
                    ></div>
                  </div>
                  <div className="col-md-6 padding-leftright-null">
                    <div className="content">
                      <h3>Wild Mountain</h3>
                      <span className="date">05.07.2016</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Expedita, voluptas corporis. Maxime sapiente,
                        adipisci laborum.
                      </p>
                      <span className="category">Travel</span>
                      <span className="category">Mountain</span>
                    </div>
                  </div>
                  <Link href="/video-post" className="link"></Link>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* END Section News */}
        {/* Sponsor */}
        <div className="row no-margin">
          <div className="container text">
            <div className="col-md-12 sponsor-carousel padding-leftright-null">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="item">
                  <img
                    className="center"
                    src={`/assets/img/sponsor${num}.png`}
                    alt="client logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sponsor */}
      </div>
    </Layout>
  );
}
