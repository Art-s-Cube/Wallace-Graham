import React from "react";
import { Script } from "gatsby";


import "styles/main.css";

const LightTheme = ({ children, mobileappstyle, useSkin }) => {
  React.useEffect(() => {
    window.theme = "light";
    let lightStyles = document.querySelector('link[href="/css/light.css"]');
    if (darkStyles) {
      if (!lightStyles) {
        let lightStylesheet = document.createElement('link');
        lightStylesheet.rel = "stylesheet";
        lightStylesheet.href = "/css/light.css";
        document.head.appendChild(lightStylesheet)
      }
      darkStyles.remove();
    }

    if (mobileappstyle) {
      let mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-light.css";
      document.head.appendChild(mobileAppCssLink)
    }
    
    if (useSkin) {
      let skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-light.css";
      document.head.appendChild(skinCssLink)
    }
  }, [mobileappstyle, useSkin]);
  
  return (
    <>
      { children }

      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default LightTheme;
