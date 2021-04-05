import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: "Whitney";
    src: url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.eot");
    src:
      url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/95802a92109828b83b1042830d859927.svg#Whitney") format("svg");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Whitney";
    src: url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.eot");
    src:
      url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/7234adf2685474c81e28858c37d40610.svg#Whitney") format("svg");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Whitney";
    src: url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.eot");
    src:
      url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/294afa63edf49dc293dd90373066b4d4.svg#Whitney") format("svg");
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Whitney";
    src: url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.eot");
    src:
      url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/6897a1fa2639214696fc1d3809948c48.svg#Whitney") format("svg");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Whitney";
    src: url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.eot");
    src:
      url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/62b7ed79de33fd64c1c321a150243237.svg#Whitney") format("svg");
    font-style: normal;
    font-weight: 800;
  }

  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;

    background: none;
    list-style: none;
    resize: none;
    text-decoration: none;

    font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: #202225;

    -webkit-font-smoothing: antialiased !important;
  }
`
