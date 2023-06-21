import React from "react";
import { Script } from "gatsby"
const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  // Meta Tags
  <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />,
  <meta key="keywords" name="keywords" content="personal injury lawyers north carolina, personal injury lawyer salisbury, personal injury attorneys salisbury, personal injury lawyer kannapolis, personal injury lawyer concord, mesothelioma lawyers, Cancer lawyers, workers compensation north carolina, social security disability attorney salisbury nc, social security disability lawyer salisbury nc" />,
  <meta key="description" name="description" content="Wallace and Graham a law firm in the small town of Salisbury, North Carolina." />,
  <meta key="author" name="author" content="Arts Cube" />,
  // Google Fonts
  <link key="Poppins" media="print" onLoad="this.onload=null;this.removeAttribute('media');" rel="preconnect" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" crossOrigin="true"/>,
  <link key="Montserrat" media="print" onLoad="this.onload=null;this.removeAttribute('media');" rel="preconnect" href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap" crossOrigin="true"/>,
  // Styles
  <link key="ionicons" rel="stylesheet" href="/css/ionicons.min.css" />,
  <link key="styles-light" rel="stylesheet" href="/css/light.css" />,
  <link key="boot" rel="stylesheet" href="/css/bootstrap.min.css" />,
  <link key="animate" rel="stylesheet" href="/css/animate.css" />,
  <link key="awe" rel="stylesheet" href="/css/font-awesome.min.css" />,
  <link key="icon" rel="stylesheet" href="/css/pe-icon.min.css" />,
  <link key="crit" rel="stylesheet" href="/css/home.css" />,
  // Icon
  <link key="icon" rel="shortcut icon" href="/img/favicon.ico" title="Favicon" sizes="16x16" />,
  // Scripts
  <Script key="isotope" src="/js/isotope.pkgd.min.js"></Script>,
  <Script key="splitting" src="/js/splitting.min.js"></Script>,
  <Script key="simpleParallax" src="/js/simpleParallax.min.js"></Script>,
  <Script key="wow" src="/js/wow.min.js"></Script>,
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
}
