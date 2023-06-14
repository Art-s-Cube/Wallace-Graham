import React from "react";
import { Script } from "gatsby";


import "styles/main.css";
import "styles/preloader.css";  

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
  React.useEffect(() => {
    window.theme = "dark";
    let lightStyles = document.querySelector('link[href="/css/light.css"]');
    let darkStyles = document.querySelector('link[href="/css/dark.css"]');
    if (lightStyles) {
      if (!darkStyles) {
        let darkStylesheet = document.createElement('link');
        darkStylesheet.rel = "stylesheet";
        darkStylesheet.href = "/css/dark.css";
        document.head.appendChild(darkStylesheet)
      }
      lightStyles.remove();
    }
    if (useSkin) {
      let skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-dark.css";
      document.head.appendChild(skinCssLink)
    }

    if (mobileappstyle) {
      let mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-dark.css";
      document.head.appendChild(mobileAppCssLink)
    }
  }, [useSkin, mobileappstyle]);

  return (
    <>
      { children }

      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default DarkTheme;
