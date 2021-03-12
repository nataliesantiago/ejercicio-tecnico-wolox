(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-size: 16px;\n  font-family: \"Montserrat-Regular\";\n}\nul {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n@font-face {\n  font-family: \"Montserrat-BlackItalic\";\n  src: url('Montserrat-BlackItalic.eot');\n  src: url('Montserrat-BlackItalic.eot') format(\"embedded-opentype\"), url('Montserrat-BlackItalic.woff2') format(\"woff2\"), url('Montserrat-BlackItalic.woff') format(\"woff\"), url('Montserrat-BlackItalic.ttf') format(\"truetype\"), url('Montserrat-BlackItalic.svg') format(\"svg\");\n  font-weight: 900;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Bold\";\n  src: url('Montserrat-Bold.eot');\n  src: url('Montserrat-Bold.eot') format(\"embedded-opentype\"), url('Montserrat-Bold.woff2') format(\"woff2\"), url('Montserrat-Bold.woff') format(\"woff\"), url('Montserrat-Bold.ttf') format(\"truetype\"), url('Montserrat-Bold.svg') format(\"svg\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Black\";\n  src: url('Montserrat-Black.eot');\n  src: url('Montserrat-Black.eot') format(\"embedded-opentype\"), url('Montserrat-Black.woff2') format(\"woff2\"), url('Montserrat-Black.woff') format(\"woff\"), url('Montserrat-Black.ttf') format(\"truetype\"), url('Montserrat-Black.svg') format(\"svg\");\n  font-weight: 900;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-ExtraBoldItalic\";\n  src: url('Montserrat-ExtraBoldItalic.eot');\n  src: url('Montserrat-ExtraBoldItalic.eot') format(\"embedded-opentype\"), url('Montserrat-ExtraBoldItalic.woff2') format(\"woff2\"), url('Montserrat-ExtraBoldItalic.woff') format(\"woff\"), url('Montserrat-ExtraBoldItalic.ttf') format(\"truetype\"), url('Montserrat-ExtraBoldItalic.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-BoldItalic\";\n  src: url('Montserrat-BoldItalic.eot');\n  src: url('Montserrat-BoldItalic.eot') format(\"embedded-opentype\"), url('Montserrat-BoldItalic.woff2') format(\"woff2\"), url('Montserrat-BoldItalic.woff') format(\"woff\"), url('Montserrat-BoldItalic.ttf') format(\"truetype\"), url('Montserrat-BoldItalic.svg') format(\"svg\");\n  font-weight: bold;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-ExtraBold\";\n  src: url('Montserrat-ExtraBold.eot');\n  src: url('Montserrat-ExtraBold.eot') format(\"embedded-opentype\"), url('Montserrat-ExtraBold.woff2') format(\"woff2\"), url('Montserrat-ExtraBold.woff') format(\"woff\"), url('Montserrat-ExtraBold.ttf') format(\"truetype\"), url('Montserrat-ExtraBold.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-ExtraLightItalic\";\n  src: url('Montserrat-ExtraLightItalic.eot');\n  src: url('Montserrat-ExtraLightItalic.eot') format(\"embedded-opentype\"), url('Montserrat-ExtraLightItalic.woff2') format(\"woff2\"), url('Montserrat-ExtraLightItalic.woff') format(\"woff\"), url('Montserrat-ExtraLightItalic.ttf') format(\"truetype\"), url('Montserrat-ExtraLightItalic.svg') format(\"svg\");\n  font-weight: 200;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Italic\";\n  src: url('Montserrat-Italic.eot');\n  src: url('Montserrat-Italic.eot') format(\"embedded-opentype\"), url('Montserrat-Italic.woff2') format(\"woff2\"), url('Montserrat-Italic.woff') format(\"woff\"), url('Montserrat-Italic.ttf') format(\"truetype\"), url('Montserrat-Italic.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-ExtraLight\";\n  src: url('Montserrat-ExtraLight.eot');\n  src: url('Montserrat-ExtraLight.eot') format(\"embedded-opentype\"), url('Montserrat-ExtraLight.woff2') format(\"woff2\"), url('Montserrat-ExtraLight.woff') format(\"woff\"), url('Montserrat-ExtraLight.ttf') format(\"truetype\"), url('Montserrat-ExtraLight.svg') format(\"svg\");\n  font-weight: 200;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-LightItalic\";\n  src: url('Montserrat-LightItalic.eot');\n  src: url('Montserrat-LightItalic.eot') format(\"embedded-opentype\"), url('Montserrat-LightItalic.woff2') format(\"woff2\"), url('Montserrat-LightItalic.woff') format(\"woff\"), url('Montserrat-LightItalic.ttf') format(\"truetype\"), url('Montserrat-LightItalic.svg') format(\"svg\");\n  font-weight: 300;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Light\";\n  src: url('Montserrat-Light.eot');\n  src: url('Montserrat-Light.eot') format(\"embedded-opentype\"), url('Montserrat-Light.woff2') format(\"woff2\"), url('Montserrat-Light.woff') format(\"woff\"), url('Montserrat-Light.ttf') format(\"truetype\"), url('Montserrat-Light.svg') format(\"svg\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Medium\";\n  src: url('Montserrat-Medium.eot');\n  src: url('Montserrat-Medium.eot') format(\"embedded-opentype\"), url('Montserrat-Medium.woff2') format(\"woff2\"), url('Montserrat-Medium.woff') format(\"woff\"), url('Montserrat-Medium.ttf') format(\"truetype\"), url('Montserrat-Medium.svg') format(\"svg\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-MediumItalic\";\n  src: url('Montserrat-MediumItalic.eot');\n  src: url('Montserrat-MediumItalic.eot') format(\"embedded-opentype\"), url('Montserrat-MediumItalic.woff2') format(\"woff2\"), url('Montserrat-MediumItalic.woff') format(\"woff\"), url('Montserrat-MediumItalic.ttf') format(\"truetype\"), url('Montserrat-MediumItalic.svg') format(\"svg\");\n  font-weight: 500;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Regular\";\n  src: url('Montserrat-Regular.eot');\n  src: url('Montserrat-Regular.eot') format(\"embedded-opentype\"), url('Montserrat-Regular.woff2') format(\"woff2\"), url('Montserrat-Regular.woff') format(\"woff\"), url('Montserrat-Regular.ttf') format(\"truetype\"), url('Montserrat-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-Thin\";\n  src: url('Montserrat-Thin.eot');\n  src: url('Montserrat-Thin.eot') format(\"embedded-opentype\"), url('Montserrat-Thin.woff2') format(\"woff2\"), url('Montserrat-Thin.woff') format(\"woff\"), url('Montserrat-Thin.ttf') format(\"truetype\"), url('Montserrat-Thin.svg') format(\"svg\");\n  font-weight: 100;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-SemiBold\";\n  src: url('Montserrat-SemiBold.eot');\n  src: url('Montserrat-SemiBold.eot') format(\"embedded-opentype\"), url('Montserrat-SemiBold.woff2') format(\"woff2\"), url('Montserrat-SemiBold.woff') format(\"woff\"), url('Montserrat-SemiBold.ttf') format(\"truetype\"), url('Montserrat-SemiBold.svg') format(\"svg\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-SemiBoldItalic\";\n  src: url('Montserrat-SemiBoldItalic.eot');\n  src: url('Montserrat-SemiBoldItalic.eot') format(\"embedded-opentype\"), url('Montserrat-SemiBoldItalic.woff2') format(\"woff2\"), url('Montserrat-SemiBoldItalic.woff') format(\"woff\"), url('Montserrat-SemiBoldItalic.ttf') format(\"truetype\"), url('Montserrat-SemiBoldItalic.svg') format(\"svg\");\n  font-weight: 600;\n  font-style: italic;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat-ThinItalic\";\n  src: url('Montserrat-ThinItalic.eot');\n  src: url('Montserrat-ThinItalic.eot') format(\"embedded-opentype\"), url('Montserrat-ThinItalic.woff2') format(\"woff2\"), url('Montserrat-ThinItalic.woff') format(\"woff\"), url('Montserrat-ThinItalic.ttf') format(\"truetype\"), url('Montserrat-ThinItalic.svg') format(\"svg\");\n  font-weight: 100;\n  font-style: italic;\n  font-display: swap;\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;AACF;AAEA;EACI,eAAA;EACA,iCAAA;AACJ;AAEA;EACE,gBAAA;AACF;AAEA;EACE,qBAAA;AACF;AAEA;EACE,qCAAA;EACA,sCAAA;EACA,iRAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAHF;AAMA;EACE,8BAAA;EACA,+BAAA;EACA,8OAAA;EAKA,iBAAA;EACA,kBAAA;EACA,kBAAA;AARF;AAWA;EACE,+BAAA;EACA,gCAAA;EACA,mPAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAbF;AAgBA;EACE,yCAAA;EACA,0CAAA;EACA,qSAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAlBF;AAqBA;EACE,oCAAA;EACA,qCAAA;EACA,4QAAA;EAKA,iBAAA;EACA,kBAAA;EACA,kBAAA;AAvBF;AA0BA;EACE,mCAAA;EACA,oCAAA;EACA,uQAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AA5BF;AA+BA;EACE,0CAAA;EACA,2CAAA;EACA,0SAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAjCF;AAoCA;EACE,gCAAA;EACA,iCAAA;EACA,wPAAA;EAKA,mBAAA;EACA,kBAAA;EACA,kBAAA;AAtCF;AAyCA;EACE,oCAAA;EACA,qCAAA;EACA,4QAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AA3CF;AA8CA;EACE,qCAAA;EACA,sCAAA;EACA,iRAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAhDF;AAmDA;EACE,+BAAA;EACA,gCAAA;EACA,mPAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AArDF;AAwDA;EACE,gCAAA;EACA,iCAAA;EACA,wPAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AA1DF;AA6DA;EACE,sCAAA;EACA,uCAAA;EACA,sRAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AA/DF;AAkEA;EACE,iCAAA;EACA,kCAAA;EACA,6PAAA;EAKA,mBAAA;EACA,kBAAA;EACA,kBAAA;AApEF;AAuEA;EACE,8BAAA;EACA,+BAAA;EACA,8OAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAzEF;AA4EA;EACE,kCAAA;EACA,mCAAA;EACA,kQAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AA9EF;AAiFA;EACE,wCAAA;EACA,yCAAA;EACA,gSAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAnFF;AAsFA;EACE,oCAAA;EACA,qCAAA;EACA,4QAAA;EAKA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAxFF","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n    font-size: 16px;\n    font-family: 'Montserrat-Regular';\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n@font-face {\n  font-family: 'Montserrat-BlackItalic';\n  src: url('assets/fonts/Montserrat-BlackItalic.eot');\n  src: url('assets/fonts/Montserrat-BlackItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-BlackItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-BlackItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-BlackItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-BlackItalic.svg#Montserrat-BlackItalic') format('svg');\n  font-weight: 900;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Bold';\n  src: url('assets/fonts/Montserrat-Bold.eot');\n  src: url('assets/fonts/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Bold.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Bold.woff') format('woff'),\n      url('assets/fonts/Montserrat-Bold.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Bold.svg#Montserrat-Bold') format('svg');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Black';\n  src: url('assets/fonts/Montserrat-Black.eot');\n  src: url('assets/fonts/Montserrat-Black.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Black.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Black.woff') format('woff'),\n      url('assets/fonts/Montserrat-Black.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Black.svg#Montserrat-Black') format('svg');\n  font-weight: 900;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-ExtraBoldItalic';\n  src: url('assets/fonts/Montserrat-ExtraBoldItalic.eot');\n  src: url('assets/fonts/Montserrat-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-ExtraBoldItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-ExtraBoldItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-ExtraBoldItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-ExtraBoldItalic.svg#Montserrat-ExtraBoldItalic') format('svg');\n  font-weight: 800;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-BoldItalic';\n  src: url('assets/fonts/Montserrat-BoldItalic.eot');\n  src: url('assets/fonts/Montserrat-BoldItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-BoldItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-BoldItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-BoldItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-BoldItalic.svg#Montserrat-BoldItalic') format('svg');\n  font-weight: bold;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-ExtraBold';\n  src: url('assets/fonts/Montserrat-ExtraBold.eot');\n  src: url('assets/fonts/Montserrat-ExtraBold.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-ExtraBold.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-ExtraBold.woff') format('woff'),\n      url('assets/fonts/Montserrat-ExtraBold.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-ExtraBold.svg#Montserrat-ExtraBold') format('svg');\n  font-weight: 800;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-ExtraLightItalic';\n  src: url('assets/fonts/Montserrat-ExtraLightItalic.eot');\n  src: url('assets/fonts/Montserrat-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-ExtraLightItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-ExtraLightItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-ExtraLightItalic.svg#Montserrat-ExtraLightItalic') format('svg');\n  font-weight: 200;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Italic';\n  src: url('assets/fonts/Montserrat-Italic.eot');\n  src: url('assets/fonts/Montserrat-Italic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Italic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Italic.woff') format('woff'),\n      url('assets/fonts/Montserrat-Italic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Italic.svg#Montserrat-Italic') format('svg');\n  font-weight: normal;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-ExtraLight';\n  src: url('assets/fonts/Montserrat-ExtraLight.eot');\n  src: url('assets/fonts/Montserrat-ExtraLight.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-ExtraLight.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-ExtraLight.woff') format('woff'),\n      url('assets/fonts/Montserrat-ExtraLight.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-ExtraLight.svg#Montserrat-ExtraLight') format('svg');\n  font-weight: 200;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-LightItalic';\n  src: url('assets/fonts/Montserrat-LightItalic.eot');\n  src: url('assets/fonts/Montserrat-LightItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-LightItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-LightItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-LightItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-LightItalic.svg#Montserrat-LightItalic') format('svg');\n  font-weight: 300;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Light';\n  src: url('assets/fonts/Montserrat-Light.eot');\n  src: url('assets/fonts/Montserrat-Light.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Light.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Light.woff') format('woff'),\n      url('assets/fonts/Montserrat-Light.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Light.svg#Montserrat-Light') format('svg');\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Medium';\n  src: url('assets/fonts/Montserrat-Medium.eot');\n  src: url('assets/fonts/Montserrat-Medium.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Medium.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Medium.woff') format('woff'),\n      url('assets/fonts/Montserrat-Medium.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Medium.svg#Montserrat-Medium') format('svg');\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-MediumItalic';\n  src: url('assets/fonts/Montserrat-MediumItalic.eot');\n  src: url('assets/fonts/Montserrat-MediumItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-MediumItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-MediumItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-MediumItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-MediumItalic.svg#Montserrat-MediumItalic') format('svg');\n  font-weight: 500;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Regular';\n  src: url('assets/fonts/Montserrat-Regular.eot');\n  src: url('assets/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Regular.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Regular.woff') format('woff'),\n      url('assets/fonts/Montserrat-Regular.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Regular.svg#Montserrat-Regular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-Thin';\n  src: url('assets/fonts/Montserrat-Thin.eot');\n  src: url('assets/fonts/Montserrat-Thin.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-Thin.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-Thin.woff') format('woff'),\n      url('assets/fonts/Montserrat-Thin.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-Thin.svg#Montserrat-Thin') format('svg');\n  font-weight: 100;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-SemiBold';\n  src: url('assets/fonts/Montserrat-SemiBold.eot');\n  src: url('assets/fonts/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-SemiBold.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-SemiBold.woff') format('woff'),\n      url('assets/fonts/Montserrat-SemiBold.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-SemiBold.svg#Montserrat-SemiBold') format('svg');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-SemiBoldItalic';\n  src: url('assets/fonts/Montserrat-SemiBoldItalic.eot');\n  src: url('assets/fonts/Montserrat-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-SemiBoldItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-SemiBoldItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-SemiBoldItalic.svg#Montserrat-SemiBoldItalic') format('svg');\n  font-weight: 600;\n  font-style: italic;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat-ThinItalic';\n  src: url('assets/fonts/Montserrat-ThinItalic.eot');\n  src: url('assets/fonts/Montserrat-ThinItalic.eot?#iefix') format('embedded-opentype'),\n      url('assets/fonts/Montserrat-ThinItalic.woff2') format('woff2'),\n      url('assets/fonts/Montserrat-ThinItalic.woff') format('woff'),\n      url('assets/fonts/Montserrat-ThinItalic.ttf') format('truetype'),\n      url('assets/fonts/Montserrat-ThinItalic.svg#Montserrat-ThinItalic') format('svg');\n  font-weight: 100;\n  font-style: italic;\n  font-display: swap;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ejercicio-tecnico-wolox/ejercicio-tecnico-wolox/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map