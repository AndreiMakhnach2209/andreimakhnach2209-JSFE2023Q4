(()=>{"use strict";var e={705:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},738:e=>{e.exports=function(e){return e[1]}},175:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),i.locals={};const s=i},723:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(738),o=t.n(r),a=t(705),i=t.n(a),s=t(175),d=t(80),c=i()(o());c.i(s.Z),c.i(d.Z),c.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n::-webkit-scrollbar{\n  display: none;\n}\n\n.vTpod8CT27oLktbWjVd7 {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  background-color: var(--background, #cfcfcf);\n  color: var(--text-color, #000);\n  transition: color 1s linear;\n  transition: background 1s linear;\n}\n\nbutton{\n  background-color: transparent;\n  border: none;\n}\n\n.B06g2akKftRFMCCQuD5j {\n  flex-grow: 1;\n  max-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cWVHe7Axd6fbQOg4ZTNi {\n  flex-grow: 0;\n  max-height: 100%;\n  flex-basis: 40%;\n  display: flex;\n  align-items: center;\n}",""]),c.locals={body:"vTpod8CT27oLktbWjVd7",field_wrap:"B06g2akKftRFMCCQuD5j",control_wrap:"cWVHe7Axd6fbQOg4ZTNi"};const l=c},542:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,".kI4Ht8y6MkzlUqMn1MqM {\n  aspect-ratio: 1;\n}\n\n.OcPuLImAC8oN1uTo1aQE {\n  width: 100%;\n  height: 0;\n  border: 1px solid var(--border-dark, #000000);\n  position: relative;\n  top: 50%;\n}\n\n.OcPuLImAC8oN1uTo1aQE:first-child {\n  transform: rotate(45deg);\n}\n\n.OcPuLImAC8oN1uTo1aQE:last-child {\n  transform: rotate(-45deg);\n}",""]),i.locals={container:"kI4Ht8y6MkzlUqMn1MqM",line:"OcPuLImAC8oN1uTo1aQE"};const s=i},630:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,'.xUX4AGiLDlhe7jIY8h_g {\n  width: 100%;\n  height: 100%;\n  max-height: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 2rem;\n}\n\n.JcdmiAr489_113AkJUvl {\n\n}\n\n.ivS0akInkwY9NwJOVfRW {\n\n}\n\n.ji_UAGMfOF2cxv8VVq3y {\n  max-width: 400px;\n  text-transform: capitalize;\n  color: var(--text-color, #000);\n  border: 2px solid var(--border-dark, #000);\n}\n\n.ji_UAGMfOF2cxv8VVq3y:disabled {\n  opacity: 0.6;\n  cursor:not-allowed\n}\n\n.ji_UAGMfOF2cxv8VVq3y[data-active = "true" ]::before {\n  content: "🔉";\n}\n.ji_UAGMfOF2cxv8VVq3y[data-active = "false" ]::before {\n  content: "🔇";\n}\n\n.finSvNYdY9RFauGidJFQ {\n  cursor: not-allowed;\n}\n\n@media (hover: hover) {\n  .ji_UAGMfOF2cxv8VVq3y:hover {\n    color: var(--text-hover, #999999);\n  }\n}',""]),i.locals={container:"xUX4AGiLDlhe7jIY8h_g",timer_wrap:"JcdmiAr489_113AkJUvl",timer:"ivS0akInkwY9NwJOVfRW",btn:"ji_UAGMfOF2cxv8VVq3y",unit_disabled:"finSvNYdY9RFauGidJFQ"};const s=i},80:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,".kOg3oAw2FrqmZn7s8dNo {\n  display: none;\n}\n\n.yZ4AkInmAwtVecFLI1im {\n  display: flex;\n  justify-content: space-between;\n}\n\n.DHbhT399XBVe85EQUdJG {\n  text-transform: capitalize;\n}\n.kOg3oAw2FrqmZn7s8dNo:checked + .DHbhT399XBVe85EQUdJG {\n  font-weight: bolder;\n}\n\n.O6CCIHVMXchtYIqCeUTX {\n  font-style: italic;\n  font-weight: bolder;\n}\n\n.LUbpwkmSCtuxuL1vU6mQ {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (hover: hover) {\n  .DHbhT399XBVe85EQUdJG:hover {\n  color: var(--text-hover, #999999);\n}\n}",""]),i.locals={radio:"kOg3oAw2FrqmZn7s8dNo",btns_row:"yZ4AkInmAwtVecFLI1im",label_radio:"DHbhT399XBVe85EQUdJG",title_radio:"O6CCIHVMXchtYIqCeUTX",themes_box:"LUbpwkmSCtuxuL1vU6mQ"};const s=i},410:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,'.HWWZUXx7CxMhXul0abVE {\n  width: 100%;\n  max-width: 100cqh;\n  display: grid;\n  grid-template-areas: ". header-field"\n                       "aside-field field";\n}\n\n.CtnPE38SvFRQOeUlJeeL{\n  grid-template-columns: 3fr 5fr;\n  grid-template-rows: 3fr 5fr;\n  font-size: 2rem;\n\n}\n.cASgrFx6qNBfr0WMf8Po{\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr 2fr;\n  font-size: 2rem;\n}\n.q6oSDS2YzEsdMhiijVTQ{\n  grid-template-columns: 8fr 15fr;\n  grid-template-rows: 8fr 15fr;\n  font-size: 1.5rem;\n}\n\n.fCMZWjVcl2O_Tzd_pIcS {\n  grid-area: field;\n  border: 5px solid var(--border-dark, #000000);\n  display: grid;\n}\n\n.fGn167dV6Za4Z8Ig9Kzr {\n  grid-template: repeat(15, 1fr) / repeat(15, 1fr);\n}\n\n.arVPCw0IiorRn5AVnQtx {\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.Aa3gEakG0q9SiZQ56h36 {\n  grid-template: repeat(5, 1fr) / repeat(5, 1fr);\n}\n\n.s2n8sbMBQmfGp9MLBKVE {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  aspect-ratio: 1;\n  border: 1px solid var(--border-dark, #000000);\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\n.ewZBUQTFTITX0d8g4SRD {\n  height: 100%;\n  display: none;\n}\n\n[data-black = "true"] {\n  background-color: var(--cell-black, #000000);\n}\n\n[data-crossed = "true"] .ewZBUQTFTITX0d8g4SRD {\n  display: initial;\n}\n\n.S8QTiE4eW0N__D35_dQj {\n  border: 5px solid var(--border-dark, #000000);\n  border-bottom: 0;\n  display: flex;\n  grid-area: header-field;\n}\n\n.LZaloGEmWCKxEEGg9DsA {\n  border: 5px solid var(--border-dark, #000000);\n  border-right: 0;\n  display: flex;\n  flex-direction: column;\n  grid-area: aside-field;\n}\n\n.jugF4HO4TkwAT1BFr2cw {\n  flex-grow: 1;\n  display: flex;\n  justify-content: end;\n  background-color: var(--background-clue, #aaaaaa);\n}\n\n.LZaloGEmWCKxEEGg9DsA .jugF4HO4TkwAT1BFr2cw:nth-child(5n),\n.fGn167dV6Za4Z8Ig9Kzr .s2n8sbMBQmfGp9MLBKVE:nth-child(n+61):nth-child(-n+75),\n.fGn167dV6Za4Z8Ig9Kzr .s2n8sbMBQmfGp9MLBKVE:nth-child(n+136):nth-child(-n+150),\n.arVPCw0IiorRn5AVnQtx .s2n8sbMBQmfGp9MLBKVE:nth-child(n+41):nth-child(-n+50)\n{\n  border-bottom: 5px solid var(--border-dark, #000000);\n}\n\n.S8QTiE4eW0N__D35_dQj .jugF4HO4TkwAT1BFr2cw{\n  flex-direction: column;\n  flex-basis: 100%;\n}\n\n.S8QTiE4eW0N__D35_dQj .jugF4HO4TkwAT1BFr2cw:nth-child(5n),\n.fCMZWjVcl2O_Tzd_pIcS .s2n8sbMBQmfGp9MLBKVE:nth-child(5n) {\n  border-right: 5px solid var(--border-dark, #000000);\n}\n',""]),i.locals={container:"HWWZUXx7CxMhXul0abVE",container_easy:"CtnPE38SvFRQOeUlJeeL",container_normal:"cASgrFx6qNBfr0WMf8Po",container_hard:"q6oSDS2YzEsdMhiijVTQ",field:"fCMZWjVcl2O_Tzd_pIcS",field_hard:"fGn167dV6Za4Z8Ig9Kzr",field_normal:"arVPCw0IiorRn5AVnQtx",field_easy:"Aa3gEakG0q9SiZQ56h36",unit:"s2n8sbMBQmfGp9MLBKVE",cross:"ewZBUQTFTITX0d8g4SRD",header_field:"S8QTiE4eW0N__D35_dQj",aside_field:"LZaloGEmWCKxEEGg9DsA",clue_row:"jugF4HO4TkwAT1BFr2cw"};const s=i},400:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,".MKSWlDmrKBUF3awUCKCZ {\n  background-color: #000000aa;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top:0;\n  left: 0;\n  z-index: 1;\n}\n\n.nbreZ1646YWJE2KjFR4w {\n  width: 80%;\n  height: 60%;\n  padding: 3%;\n  background-color: var(--background, #fff);\n  font-size: 2rem;\n  position: relative;\n  z-index: 10;\n}\n\n.n67rPZyJn6bnKkvtdVbz {\n  display: flex;\n  justify-content: space-around;\n  position:relative;\n}\n\n.JGxt9yny2s0Y8PPutDMQ {\n\n}\n\n.Db0uvCGg1OhThxzYEhWk {\n  display: none;\n}\n\n.qtZgc0Koyyd44u9FfXBf {\n\n}\n\n.C0ezRgvqsDBrJLvZf413{\n  display: none;\n}\n.Db0uvCGg1OhThxzYEhWk:checked + .qtZgc0Koyyd44u9FfXBf .C0ezRgvqsDBrJLvZf413 {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  position: absolute;\n  top:100%;\n  left:10%;\n}\n\n.fZTgE_ZJyDAqRTCx1D9o {\n  min-width: 10cqw;\n  aspect-ratio: 1;\n}\n\n.AQqru2KyKQUlEPzq5yVc {\n\n}\n\n.em_NiwldSuyde0lnnUWV {\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  height: 10%;\n}\n\n.em_NiwldSuyde0lnnUWV div {\n  top: 0;\n}",""]),i.locals={backdrop:"MKSWlDmrKBUF3awUCKCZ",modale:"nbreZ1646YWJE2KjFR4w",level_form:"n67rPZyJn6bnKkvtdVbz",form_title:"JGxt9yny2s0Y8PPutDMQ",btn_level:"Db0uvCGg1OhThxzYEhWk",label_level:"qtZgc0Koyyd44u9FfXBf",sketchs_wrap:"C0ezRgvqsDBrJLvZf413",sketch:"fZTgE_ZJyDAqRTCx1D9o",modale_text:"AQqru2KyKQUlEPzq5yVc",close_btn:"em_NiwldSuyde0lnnUWV"};const s=i},657:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(738),o=t.n(r),a=t(705),i=t.n(a)()(o());i.push([e.id,".DwFaoPFJSG_mG1ADGPZg {\n  --background: #ffffff;\n  --background-clue-light: #909090;\n  --border-dark: #000;\n  --text-hover: #636363;\n  --text-color: #000;\n}\n.HCyINdCfLHTtJX1lizlI {\n  --background: #484848;\n  --background-clue: #302b28;\n  --border-dark: #b3b3b3;\n  --text-hover: #9b9b9b;\n  --text-color: #dddddd;\n}\n.OuS69ejbZZyC5iOMugAr {\n  --background: #e4c9ad;\n  --background-clue: #aaa5a5;\n  --border-dark: #000000;\n  --text-hover: #413028e8;\n  --text-color: #322f2a;\n}\n.xZgBGDm8N7zb9Bx2EdfB {\n  --background: #b2c7e9;\n  --background-clue: #5e8393;\n  --border-dark: #000;\n  --text-hover: #264961;\n  --text-color: #182c2e;\n}\n\n",""]),i.locals={light:"DwFaoPFJSG_mG1ADGPZg",dark:"HCyINdCfLHTtJX1lizlI",warm:"OuS69ejbZZyC5iOMugAr",cold:"xZgBGDm8N7zb9Bx2EdfB"};const s=i},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var m=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(f);else{var p=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),u=t(589),m=t.n(u),f=t(723),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),n()(f.Z,p);const h=f.Z&&f.Z.locals?f.Z.locals:void 0;var b=t(410),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(b.Z,g);const v=b.Z&&b.Z.locals?b.Z.locals:void 0,y={easy:[[[0,0,1,0,0],[1,1,0,1,1],[0,0,1,0,0],[0,1,0,1,0],[1,0,1,0,1]],[[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1]],[[1,0,1,0,1],[1,1,1,1,1],[0,1,1,1,0],[1,1,1,1,1],[1,0,0,0,1]],[[0,1,1,1,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[0,1,1,1,0]],[[0,1,1,1,0],[1,0,1,0,1],[1,1,0,1,1],[1,0,1,0,1],[0,1,1,1,0]]],normal:[[[1,1,1,1,0,1,1,1,1,0],[1,0,0,1,0,1,0,0,0,0],[1,0,0,1,0,1,0,0,0,0],[1,0,0,1,0,1,0,0,0,0],[1,1,1,1,0,1,1,1,0,0],[1,1,1,0,0,0,0,1,1,0],[1,0,1,1,0,0,0,0,1,0],[1,0,0,1,0,0,0,0,1,0],[1,0,0,1,0,0,0,0,1,0],[1,0,0,1,0,1,1,1,1,0]],[[0,0,1,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,1,0],[1,0,1,1,0,0,1,1,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,0,1,1,1,1,0,1,1],[0,1,1,0,1,1,0,1,1,0],[0,0,1,0,1,1,0,1,0,0],[0,0,0,1,1,1,1,0,0,0]],[[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0],[0,0,1,0,0,1,0,0,0,0],[0,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,1],[0,1,1,1,0,0,0,1,1,1],[0,0,0,1,1,1,1,0,0,0]],[[0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,1,0,1,1,1],[1,0,0,0,1,0,1,0,1,0],[1,1,0,1,0,1,0,1,0,0],[1,1,1,0,1,0,1,0,0,0],[0,1,1,1,0,1,0,0,0,0],[0,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0],[1,1,0,0,1,1,1,0,0,0]],[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,1,0,1,1,1,1,0,1,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,1,0,0,0,0,1,0,0],[1,1,1,0,0,0,0,1,1,1]]],hard:[[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,1,1,0,1,0,1,1,0,0,0,0],[0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],[0,0,1,1,1,1,0,1,0,1,1,1,1,0,0],[0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,1,0,0],[0,0,0,0,0,1,1,0,1,1,0,0,1,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,1,0,0],[0,0,0,1,1,0,1,1,1,0,1,1,1,0,0],[0,0,1,1,0,0,1,1,1,0,0,1,1,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,1,1,0,0,1,0],[0,1,0,0,0,0,1,1,0,1,1,0,0,1,0],[0,1,0,0,0,0,1,1,0,1,1,0,0,1,0],[0,1,0,0,0,0,1,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,1,1,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]],[[1,1,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,0,1,1,0,0,0,0,0,0,0,1,1,0,1],[1,0,0,1,1,0,0,0,0,0,1,1,0,0,1],[1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],[1,0,0,0,0,1,1,1,1,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,1,1,1,0,0,0,1,1,1,0,1,1],[0,1,0,0,1,1,1,0,1,1,1,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,0,0,0,1,1,1,0,0,0,1,1,0],[0,0,1,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,1,1,0,1,1,0,1,1,0,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0]],[[0,0,0,0,0,0,1,1,1,0,0,0,0,1,1],[0,0,0,0,0,1,1,1,1,0,0,0,1,1,1],[0,0,0,0,1,1,1,1,0,0,0,1,1,1,1],[0,0,0,0,1,1,1,1,0,0,1,1,1,1,0],[0,0,0,0,1,1,1,0,0,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,0,0,1,1,0,0,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,0,0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,0,0,0,0]],[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]]};var x=t(630),E={};E.styleTagTransform=m(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=l(),n()(x.Z,E);const w=x.Z&&x.Z.locals?x.Z.locals:void 0;var k=t(657),_={};_.styleTagTransform=m(),_.setAttributes=d(),_.insert=i().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=l(),n()(k.Z,_);const T=k.Z&&k.Z.locals?k.Z.locals:void 0;var A=t(80),Z={};Z.styleTagTransform=m(),Z.setAttributes=d(),Z.insert=i().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=l(),n()(A.Z,Z);const S=A.Z&&A.Z.locals?A.Z.locals:void 0,C={list:new function(){const e=[];for(let n in T)e.push(n);return e},create(){const e=document.createElement("div");e.className=S.btns_row;const n=document.createElement("legend");n.className=S.title_radio,n.innerText="Сhoose a color theme",this.list.forEach((n=>{const t=document.createElement("input");t.className=S.radio,t.setAttribute("type","radio"),t.setAttribute("name","themes"),t.setAttribute("id",n),t.setAttribute("checked","true");const r=document.createElement("label");r.className=S.label_radio,r.setAttribute("for",n),r.innerText=n,e.append(t,r)}));const t=document.createElement("form");return t.setAttribute("name","themesForm"),t.className=S.themes_box,t.append(n,e),t},init(e){for(let n of document.forms.themesForm)n.checked&&e.classList.add(T[n.id]);document.forms.themesForm.addEventListener("change",(n=>{this.list.forEach((t=>{e.classList.remove(T[t]),e.classList.add(T[n.target.id])}))}))}};var I=t(400),M={};M.styleTagTransform=m(),M.setAttributes=d(),M.insert=i().bind(null,"head"),M.domAPI=o(),M.insertStyleElement=l(),n()(I.Z,M);const z=I.Z&&I.Z.locals?I.Z.locals:void 0;var N=t(542),F={};F.styleTagTransform=m(),F.setAttributes=d(),F.insert=i().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=l(),n()(N.Z,F);const L=N.Z&&N.Z.locals?N.Z.locals:void 0;function V(e="div"){const n=document.createElement(e);n.className=L.container;for(let e=0;e<2;e++){const e=document.createElement("div");e.className=L.line,n.append(e)}return n}function B(e){const n=document.createElement("div");n.className=z.backdrop,n.addEventListener("click",j);const t=document.createElement("div");t.className=z.modale,n.append(t);const r=V("button");switch(r.classList.add(z.close_btn),r.addEventListener("click",j),t.append(r),e){case"new_game":{const e=document.createElement("form");e.className=z.level_form,e.setAttribute("name","choosing_level"),t.append(e);const n=document.createElement("legend");n.className=z.form_title,n.innerText="Choose level:",e.append(n),Object.keys(y).forEach((n=>{const t=document.createElement("input");t.setAttribute("type","radio"),t.setAttribute("id",`${n}_level`),t.setAttribute("name","level"),t.setAttribute("checked","true"),t.className=z.btn_level,e.append(t);const r=document.createElement("label");r.className=z.label_level,r.setAttribute("for",`${n}_level`),e.append(r);const o=document.createElement("span");o.innerText=n,r.append(o);const a=document.createElement("div");a.className=z.sketchs_wrap,r.append(a),y[n].forEach(((e,t)=>{a.append(function(e,n){const t=y[e][n],r=t.length,o=document.createElement("div");o.className=v.field,o.classList.add(v[`field_${e}`],z.sketch),o.addEventListener("click",(()=>{O(e,n),Q(),j()}));for(let e=0;e<r;e++)for(let n=0;n<r;n++){const r=document.createElement("div");r.className=v.unit,r.setAttribute("data-black",t[e][n]?"true":"false"),o.append(r)}return o}(n,t))}))}))}break;case"game_over":{const e=document.createElement("p");e.className=z.modale_text,e.innerText=`Great! You have solved the nonogram in ${D.value} seconds!`,t.append(e)}break;case"random_game":{const e=Object.keys(y),n=e[Math.floor(Math.random()*e.length)];O(n,Math.floor(Math.random()*y[n].length)),Q()}}return n}function O(e,n){D.reset();const t=document.querySelector("."+v.container),r=J(e,n);t.replaceWith(r)}function j(e=null){const n=document.querySelector("."+z.backdrop);e?e.target===e.currentTarget&&n.remove():n.remove()}function Q(){["score","save_game","load_game","new_game","random_game","solution","reset_game"].forEach((e=>{document.getElementById(e).disabled=!1}))}const G=document.createElement("div");G.className=w.container;const q=document.createElement("div");q.className=w.timer_wrap,G.append(q);const D=new class{constructor(e=0){this.value=e,this.node=document.createElement("span"),this.node.innerText="Time : "+this.secToMMSS(this.value)}secToMMSS(e){return`${Math.floor(e/60).toString()}:${e%60<10?"0"+e%60:(e%60).toString()}`}start(){this._id=setInterval((()=>{this.value++,this.node.innerText="Time : "+this.secToMMSS(this.value)}),1e3)}pause(){clearInterval(this._id)}reset(){this.pause(),this.value=0,this.node.innerText="Time : "+this.secToMMSS(this.value)}};D.node.className=w.timer,q.append(D.node);const U=C.create();G.append(U),["score","sound","save_game","load_game","new_game","random_game","solution","reset_game"].forEach((e=>{const n=document.createElement("button");n.className=w.btn,n.value=e,n.innerText=e.split("_").join(" "),n.setAttribute("id",e),G.append(n)}));let R=!0;const P=document.createElement("audio");P.setAttribute("src","../src/assets/audio/click.wav");const W=document.createElement("audio");function K(){R&&W.play();for(let e of document.querySelectorAll("[data-black = true]"))e.dataset.black=!1;for(let e of document.querySelectorAll("[data-crossed = true]"))e.dataset.crossed=!1;D.pause(),D.start()}function J(e,n,t=y[e][n],r=!1){const o=document.createElement("div");o.className=v.container,o.classList.add(v[`container_${e}`]);let a=r?t.range:t.length;const i=document.createElement("div");i.className=v.field,i.classList.add(v[`field_${e}`]),o.append(i),i.addEventListener("pointerdown",D.start.bind(D),{once:!0});const s=document.createElement("audio");s.setAttribute("src","../src/assets/audio/click.wav");let d=new MutationObserver((()=>{R&&s.play(),Y()&&!1===document.getElementById("solution").disabled&&o.after(Y())}));for(let e=0;e<a;e++)for(let n=0;n<a;n++){const o=document.createElement("div");o.className=v.unit,o.setAttribute("data-solution",r?t.matrix[e][n].solution:t[e][n]?"true":"false"),o.setAttribute("data-black",r?t.matrix[e][n].black:"false"),o.setAttribute("data-crossed",r?t.matrix[e][n].crossed:"false");const a=V();a.classList.add(v.cross),o.append(a),d.observe(o,{attributes:!0}),i.append(o)}const c=[],l=[];for(let e=0;e<a;e++){const n=[],r=[];for(let o=0;o<a;o++)n.push(t[e][o]),r.push(t[o][e]);c.push(H(r).length?H(r):[0]),l.push(H(n).length?H(n):[0])}const u=X(l),m=X(c);return[u.className,m.className]=[v.aside_field,v.header_field],o.append(u,m),function(e){let n=!1,t=!1;e.addEventListener("pointerdown",(e=>{const r=e.target.closest("."+v.unit);switch(e.button){case 0:r&&(t="true"===r.dataset.black,r.dataset.black=t?"false":"true",r.dataset.crossed="false",n=!0);break;case 2:r&&(t="true"===r.dataset.crossed,r.dataset.crossed=t?"false":"true",r.dataset.black="false",n=!0)}})),e.addEventListener("pointerover",(e=>{const r=e.target.closest("."+v.unit);switch(e.buttons){case 1:n&&r&&(r.dataset.black=t?"false":"true",r.dataset.crossed="false");break;case 2:n&&r&&(r.dataset.crossed=t?"false":"true",r.dataset.black="false")}})),e.addEventListener("pointerup",(()=>{n=!1})),e.addEventListener("pointerout",(t=>{n=t.target!==e&&n}))}(i),setTimeout((()=>{document.getElementById("save_game").addEventListener("click",(()=>{R&&s.play();const e=document.querySelectorAll("."+v.unit),n=[];for(let t=0;t<a;t++){const r=[];for(let n=0;n<a;n++){const o=e[t*a+n];r.push(o.dataset)}n.push(r)}localStorage.setItem("save",JSON.stringify({matrix:n,time:D.value,range:a}))}))}),0),o}function H(e){return e.join("").split(/0+/).filter((e=>e)).map((e=>e.length))}function X(e){const n=document.createElement("div");for(let t of e){const e=document.createElement("div");e.className=v.clue_row;for(let n of t){const t=document.createElement("div");t.className=v.unit,e.append(t);const r=document.createElement("span");r.innerText=n,t.append(r)}n.append(e)}return n}function Y(){if(Array.from(document.querySelectorAll("[data-solution = true]")).every((e=>"true"===e.dataset.black)))return D.pause(),setTimeout((()=>{["solution","save_game","reset_game"].forEach((e=>document.getElementById(e).disabled=!0))}),0),B("game_over")}W.setAttribute("src","../src/assets/audio/stroke_long.wav"),setTimeout((()=>{const e=document.getElementById("solution");e.addEventListener("click",(()=>{e.disabled=!0,R&&W.play(),function(){D.pause();for(let e of document.querySelectorAll("[data-solution]"))e.dataset.crossed=!1,e.dataset.black=!1,e.classList.add(w.unit_disabled),e.addEventListener("pointerout",(e=>{let n=R;R=!1,e.currentTarget.dataset.black=e.currentTarget.dataset.solution,e.currentTarget.dataset.crossed=!1,setTimeout((()=>R=n),0)}));for(let e of document.querySelectorAll("[data-solution = true]"))e.dataset.black=!0;document.getElementById("save_game").disabled=!0}()}));const n=document.getElementById("sound");n.dataset.active=R,n.addEventListener("click",(()=>{R=!R,n.dataset.active=R,R&&P.play()})),["score","new_game"].forEach((e=>{document.getElementById(e).addEventListener("click",(e=>{R&&W.play(),G.after(B(e.target.id))}))})),document.getElementById("reset_game").addEventListener("click",K),document.getElementById("random_game").addEventListener("click",(()=>{R&&W.play(),B("random_game")}))}),0);const $=document.getElementsByTagName("body")[0],ee=J("easy",Math.floor(5*Math.random())),ne=document.createElement("div");ne.className=h.field_wrap,$.className=h.body,$.oncontextmenu=()=>!1,ne.append(ee),$.append(ne);const te=document.createElement("div");te.className=h.control_wrap,$.prepend(te),te.append(G),C.init($)})()})();