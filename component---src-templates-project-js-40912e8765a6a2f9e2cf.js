webpackJsonp([0x645317542b3b],{63:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n){return o.default.createElement(c.default,{to:n.path},o.default.createElement(g,null,o.default.createElement(h.default,{resolutions:n.image}),o.default.createElement(x,null,n.title),o.default.createElement(x,null,"by ",n.graduate)))}e.__esModule=!0;var l=i(["\n  border: 1px solid black;\n  width: 100%;\n  margin: 1rem;\n\n  img {\n    object-fit: cover;\n    width: 100%;\n  }\n"],["\n  border: 1px solid black;\n  width: 100%;\n  margin: 1rem;\n\n  img {\n    object-fit: cover;\n    width: 100%;\n  }\n"]),d=i(["\n  z-index: 4;\n  color: black;\n  max-width: 100%;\n  text-transform: uppercase;\n  margin: 0.4rem;\n  font-size: 1.4rem;\n"],["\n  z-index: 4;\n  color: black;\n  max-width: 100%;\n  text-transform: uppercase;\n  margin: 0.4rem;\n  font-size: 1.4rem;\n"]);e.default=r;var m=t(2),o=a(m),s=t(3),f=a(s),u=t(10),c=a(u),p=t(16),h=a(p),g=(t(66),f.default.div(l)),x=f.default.p(d);n.exports=e.default},66:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.A=e.P=e.H5=e.H4=e.H3=e.H2=e.H1=void 0;var r=i(["\n  text-transform: uppercase;\n  font-size: 6rem;\n"],["\n  text-transform: uppercase;\n  font-size: 6rem;\n"]),l=i(["\n  text-transform: uppercase;\n  font-size: 4.5rem;\n"],["\n  text-transform: uppercase;\n  font-size: 4.5rem;\n"]),d=i(["\n  font-size: 3rem;\n  text-transform: uppercase;\n"],["\n  font-size: 3rem;\n  text-transform: uppercase;\n"]),m=i(["\n  text-transform: uppercase;\n  font-size: 1.8rem;\n"],["\n  text-transform: uppercase;\n  font-size: 1.8rem;\n"]),o=i(["\n  font-size: 1 rem;\n"],["\n  font-size: 1 rem;\n"]),s=i(["\n  font-size: 2.5rem;\n  line-height: 1.5;\n"],["\n  font-size: 2.5rem;\n  line-height: 1.5;\n"]),f=i(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),u=t(2),c=(a(u),t(3)),p=a(c),h=p.default.h1(r),g=p.default.h1(l),x=p.default.h1(d),w=p.default.h1(m),b=p.default.h1(o),y=p.default.p(s),v=p.default.a(f);e.H1=h,e.H2=g,e.H3=x,e.H4=w,e.H5=b,e.P=y,e.A=v},173:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n){var e=n.data,t=e.markdownRemark,a=t.frontmatter.graduate;return w.default.createElement("div",null,w.default.createElement(P,null,w.default.createElement("h1",null,t.frontmatter.title),w.default.createElement(A,null,w.default.createElement(I,null,w.default.createElement("h3",null,w.default.createElement(z.default,{to:"/graduates/"+a.replace(/[^0-9a-zA-Z\s'\-]+/g,"").replace(/[\'\s]+/g,"-").toLowerCase()+"/"},a))),w.default.createElement(L,null,t.frontmatter.category&&w.default.createElement("h4",null,t.frontmatter.category),t.frontmatter.category2&&w.default.createElement("h4",null,t.frontmatter.category2),t.frontmatter.category3&&w.default.createElement("h4",null,t.frontmatter.category3)))),w.default.createElement(M,{sizes:t.frontmatter.image.childImageSharp.sizes}),w.default.createElement(Q,null,t.headings.length>0&&w.default.createElement(S,null,w.default.createElement(q,null,t.headings.map(function(n){return w.default.createElement("h4",null,n.value)}))),w.default.createElement(C,null,w.default.createElement(J,null,w.default.createElement(H,{dangerouslySetInnerHTML:{__html:t.html}})))))}e.__esModule=!0,e.aboutPageQuery=void 0;var l=i(["\n  p {\n    max-width: 800px;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 4.5rem;\n    line-height: 1.2;\n    font-weight: normal;\n    margin: ","px\n  }\n\n  h2 {\n    text-transform: uppercase;\n    font-size: 3rem;\n    font-weight: normal;\n    margin-bottom: -","px;\n  }\n\n  .gatsby-resp-image-wrapper {\n    line-height: 0;\n  }\n\n  .gatsby-resp-image-background-image {\n    height: 0 !important;\n  }\n\n  .gatsby-resp-image-image {\n    height: auto !important;\n  }\n\n  @media screen and (max-width: "," ) {\n\n    h1 {\n      font-size: 3.5rem;\n    }\n\n    h2 {\n      font-size: 2.5rem;\n    }\n\n  }\n\n"],["\n  p {\n    max-width: 800px;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 4.5rem;\n    line-height: 1.2;\n    font-weight: normal;\n    margin: ","px\n  }\n\n  h2 {\n    text-transform: uppercase;\n    font-size: 3rem;\n    font-weight: normal;\n    margin-bottom: -","px;\n  }\n\n  .gatsby-resp-image-wrapper {\n    line-height: 0;\n  }\n\n  .gatsby-resp-image-background-image {\n    height: 0 !important;\n  }\n\n  .gatsby-resp-image-image {\n    height: auto !important;\n  }\n\n  @media screen and (max-width: "," ) {\n\n    h1 {\n      font-size: 3.5rem;\n    }\n\n    h2 {\n      font-size: 2.5rem;\n    }\n\n  }\n\n"]),d=i(["\n  height: 70vh;\n"],["\n  height: 70vh;\n"]),m=i(["\n  padding: 0 ","px;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  h1 {\n    line-height: 1.1;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n  }\n\n"],["\n  padding: 0 ","px;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  h1 {\n    line-height: 1.1;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n  }\n\n"]),o=i(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  }\n"]),s=i(["\n  width: 100%;\n"],["\n  width: 100%;\n"]),f=i(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n\n  h4 {\n    margin-left:","px;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n\n    h4 {\n      margin-left: 0;\n      margin-right:","px;\n      margin-bottom: ","px\n    }\n  }\n"],["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n\n  h4 {\n    margin-left:","px;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n\n    h4 {\n      margin-left: 0;\n      margin-right:","px;\n      margin-bottom: ","px\n    }\n  }\n"]),u=i(["\n  display: flex;\n"],["\n  display: flex;\n"]),c=i(["\n  flex: 1;\n\n  @media screen and (max-width: "," ) {\n    display: none;\n  }\n"],["\n  flex: 1;\n\n  @media screen and (max-width: "," ) {\n    display: none;\n  }\n"]),p=i(["\n  position: sticky;\n  top: ","px;\n  margin: ","px;\n  padding: ","px;\n"],["\n  position: sticky;\n  top: ","px;\n  margin: ","px;\n  padding: ","px;\n"]),h=i(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: "," ) {\n      width: 100%;\n    }\n"],["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: "," ) {\n      width: 100%;\n    }\n"]),g=i(["\n  width: 75%;\n  margin: ","px auto;\n  padding: ","px;\n  white-space: pre-wrap;\n\n  @media screen and (max-width: "," ) {\n    width: calc(100% - ","px);\n  }\n\n"],["\n  width: 75%;\n  margin: ","px auto;\n  padding: ","px;\n  white-space: pre-wrap;\n\n  @media screen and (max-width: "," ) {\n    width: calc(100% - ","px);\n  }\n\n"]);e.default=r;var x=t(2),w=a(x),b=t(3),y=a(b),v=t(10),z=a(v),E=t(16),k=a(E),j=t(5),_=t(63),H=(a(_),y.default.div(l,j.spacing.smaller,j.spacing.medium,j.breakpoints.tablet)),M=(0,y.default)(k.default)(d),P=y.default.div(m,j.spacing.smaller,j.breakpoints.tablet),A=y.default.div(o,j.breakpoints.tablet),I=y.default.div(s),L=y.default.div(f,j.spacing.medium,j.breakpoints.tablet,j.spacing.medium,j.spacing.smaller),Q=y.default.div(u),S=y.default.div(c,j.breakpoints.tablet),q=y.default.div(p,j.spacing.bigger,j.spacing.medium,j.spacing.bigger),C=y.default.div(h,j.breakpoints.tablet),J=y.default.div(g,j.spacing.bigger,j.spacing.smaller,j.breakpoints.tablet,j.spacing.medium);e.aboutPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-project-js-40912e8765a6a2f9e2cf.js.map