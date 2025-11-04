import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Don Jaime - Hunting Ranch",
  description:
    "Don Jaime Hunting Ranch - Dedicated to creating incredible red stag hunting stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap */}
        <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="/assets/css/bootstrap/bootstrap-theme.min.css"
        />

        {/* Custom css */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/css/puredesign.css" />

        {/* Flexslider */}
        <link rel="stylesheet" href="/assets/css/flexslider.css" />

        {/* Owl */}
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />

        {/* Magnific Popup */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

        <link rel="stylesheet" href="/assets/css/jquery.fullPage.css" />
      </head>
      <body>
        {children}

        {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        {/* All js library */}
        <Script
          src="/assets/js/bootstrap/bootstrap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/jquery.flexslider-min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/jquery.fullPage.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.min.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=false"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/jquery.scrollTo.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/smooth.scroll.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.countTo.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.scrolly.js" strategy="lazyOnload" />
        <Script src="/assets/js/plugins-scroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/imagesloaded.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/pace.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
