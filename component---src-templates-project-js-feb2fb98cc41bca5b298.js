webpackJsonp([0x645317542b3b],{66:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n){return f.default.createElement(h.default,{to:n.path},f.default.createElement(w,null,f.default.createElement(b,null,f.default.createElement(x.default,{sizes:n.image})),f.default.createElement(y,null,f.default.createElement(v,null,n.title),f.default.createElement(v,null,n.graduate))))}e.__esModule=!0;var l=i(["\n\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  \n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  img {\n    object-fit: cover;\n    width: 100%;\n  }\n"],["\n\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  \n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n\n  img {\n    object-fit: cover;\n    width: 100%;\n  }\n"]),d=i(["\n  padding: 8.2rem;\n"],["\n  padding: 8.2rem;\n"]),o=i(["\n  display: flex;\n  padding: 1rem 1.5rem;\n\n\n  justify-content: space-between;\n  align-items: flex-end;\n"],["\n  display: flex;\n  padding: 1rem 1.5rem;\n\n\n  justify-content: space-between;\n  align-items: flex-end;\n"]),m=i(["\n  z-index: 4;\n  color: black;\n  max-width: 400px;\n  \n  margin: 0.4rem;\n  font-size: 1.4rem;\n  line-height: 1.2;\n  \n\n  &:first-of-type {\n    ","\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  &:last-of-type {\n    width: 100%;\n    text-align: right;\n  }\n"],["\n  z-index: 4;\n  color: black;\n  max-width: 400px;\n  \n  margin: 0.4rem;\n  font-size: 1.4rem;\n  line-height: 1.2;\n  \n\n  &:first-of-type {\n    ","\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  &:last-of-type {\n    width: 100%;\n    text-align: right;\n  }\n"]);e.default=r;var s=t(2),f=a(s),c=t(3),u=a(c),p=t(14),h=a(p),g=t(18),x=a(g),w=(t(69),u.default.div(l)),b=u.default.div(d),y=u.default.div(o),v=u.default.p(m,"");n.exports=e.default},69:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}e.__esModule=!0,e.A=e.P=e.H5=e.H4=e.H3=e.H2=e.H1=void 0;var r=i(["\n  text-transform: uppercase;\n  font-size: 6rem;\n"],["\n  text-transform: uppercase;\n  font-size: 6rem;\n"]),l=i(["\n  text-transform: uppercase;\n  font-size: 4.5rem;\n"],["\n  text-transform: uppercase;\n  font-size: 4.5rem;\n"]),d=i(["\n  font-size: 3rem;\n  text-transform: uppercase;\n"],["\n  font-size: 3rem;\n  text-transform: uppercase;\n"]),o=i(["\n  text-transform: uppercase;\n  font-size: 1.8rem;\n"],["\n  text-transform: uppercase;\n  font-size: 1.8rem;\n"]),m=i(["\n  font-size: 1 rem;\n"],["\n  font-size: 1 rem;\n"]),s=i(["\n  font-size: 2.5rem;\n  line-height: 1.5;\n"],["\n  font-size: 2.5rem;\n  line-height: 1.5;\n"]),f=i(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),c=t(2),u=(a(c),t(3)),p=a(u),h=p.default.h1(r),g=p.default.h1(l),x=p.default.h1(d),w=p.default.h1(o),b=p.default.h1(m),y=p.default.p(s),v=p.default.a(f);e.H1=h,e.H2=g,e.H3=x,e.H4=w,e.H5=b,e.P=y,e.A=v},178:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){return n.raw=e,n}function r(n){var e=n.data,t=e.markdownRemark,a=t.frontmatter.graduate;return g.default.createElement("div",null,g.default.createElement(w.default,{title:"THE NEXT | "+t.frontmatter.title.toUpperCase()}),g.default.createElement(P,null,g.default.createElement("h1",null,t.frontmatter.title),g.default.createElement(q,null,g.default.createElement(A,null,g.default.createElement(z.default,{to:"/graduates/"+a.replace(/[^0-9a-zA-Z\s'\-]+/g,"").replace(/[\'\s]+/g,"-").toLowerCase()+"/"},g.default.createElement("h4",null,a))),g.default.createElement(T,null,t.frontmatter.category&&g.default.createElement("h4",null,t.frontmatter.category),t.frontmatter.category2&&g.default.createElement("h4",null,t.frontmatter.category2),t.frontmatter.category3&&g.default.createElement("h4",null,t.frontmatter.category3)))),g.default.createElement(M,{sizes:t.frontmatter.image.childImageSharp.sizes}),g.default.createElement(C,null,!1,g.default.createElement(I,null,g.default.createElement(L,null,g.default.createElement(H,{dangerouslySetInnerHTML:{__html:t.html}})))))}e.__esModule=!0,e.aboutPageQuery=void 0;var l=i(["\n  padding-bottom: 5rem;\n\n  blockquote {\n    font-style: italic;\n  }\n\n  p {\n    font-size: calc(0.3vw + 1.3rem);\n    margin: 0;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 4.5rem;\n    line-height: 1.2;\n    font-weight: normal;\n    margin: ","px 0 ","px;\n  }\n\n  h2 {\n    text-transform: uppercase;\n    font-size: 3rem;\n    font-weight: normal;\n    margin-bottom: -","px;\n  }\n\n  a {\n    text-decoration: underline;\n  }\n\n  .gatsby-resp-image-wrapper {\n    line-height: 0;\n    width: 150%;\n\n    margin-left: -25% !important;\n  }\n\n  .gatsby-resp-image-background-image {\n    height: 0 !important;\n  }\n\n  .gatsby-resp-image-image {\n    height: auto !important;\n  }\n\n  @media screen and (max-width: "," ) {\n\n    h1 {\n      font-size: 3.5rem;\n    }\n\n    h2 {\n      font-size: 2.5rem;\n    }\n\n  }\n\n"],["\n  padding-bottom: 5rem;\n\n  blockquote {\n    font-style: italic;\n  }\n\n  p {\n    font-size: calc(0.3vw + 1.3rem);\n    margin: 0;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 4.5rem;\n    line-height: 1.2;\n    font-weight: normal;\n    margin: ","px 0 ","px;\n  }\n\n  h2 {\n    text-transform: uppercase;\n    font-size: 3rem;\n    font-weight: normal;\n    margin-bottom: -","px;\n  }\n\n  a {\n    text-decoration: underline;\n  }\n\n  .gatsby-resp-image-wrapper {\n    line-height: 0;\n    width: 150%;\n\n    margin-left: -25% !important;\n  }\n\n  .gatsby-resp-image-background-image {\n    height: 0 !important;\n  }\n\n  .gatsby-resp-image-image {\n    height: auto !important;\n  }\n\n  @media screen and (max-width: "," ) {\n\n    h1 {\n      font-size: 3.5rem;\n    }\n\n    h2 {\n      font-size: 2.5rem;\n    }\n\n  }\n\n"]),d=i(["\n  height: 70vh;\n  border-bottom: 1px solid black;\n"],["\n  height: 70vh;\n  border-bottom: 1px solid black;\n"]),o=i(["\n  padding: ","px;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n\n  h1 {\n    margin: 0;\n    line-height: 1;\n  }\n\n  h1, h3, h4, {\n    margin: 0;\n    line-height: 1;\n    vertical-align: bottom;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n  }\n\n"],["\n  padding: ","px;\n  width: 100%;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n\n  h1 {\n    margin: 0;\n    line-height: 1;\n  }\n\n  h1, h3, h4, {\n    margin: 0;\n    line-height: 1;\n    vertical-align: bottom;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n  }\n\n"]),m=i(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n  }\n"]),s=i(["\n  width: 100%;\n"],["\n  width: 100%;\n"]),f=i(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n\n  h4 {\n    margin-left:","px;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n\n    h4 {\n      margin-left: 0;\n      margin-right:","px;\n      margin-bottom: ","px\n    }\n  }\n"],["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n\n  h4 {\n    margin-left:","px;\n  }\n\n  @media screen and (max-width: "," ) {\n    justify-content: flex-start;\n\n    h4 {\n      margin-left: 0;\n      margin-right:","px;\n      margin-bottom: ","px\n    }\n  }\n"]),c=i(["\n  display: flex;\n  align-items: center;\n"],["\n  display: flex;\n  align-items: center;\n"]),u=i(["\n    width: 100%;\n\n    @media screen and (max-width: "," ) {\n      width: 100%;\n    }\n"],["\n    width: 100%;\n\n    @media screen and (max-width: "," ) {\n      width: 100%;\n    }\n"]),p=i(["\n  max-width: 800px;\n  width: 75%;\n\n  margin: ","px auto;\n  padding: ","px;\n  white-space: pre-wrap;\n\n  @media screen and (max-width: "," ) {\n    width: calc(100% - ","px);\n  }\n\n"],["\n  max-width: 800px;\n  width: 75%;\n\n  margin: ","px auto;\n  padding: ","px;\n  white-space: pre-wrap;\n\n  @media screen and (max-width: "," ) {\n    width: calc(100% - ","px);\n  }\n\n"]);e.default=r;var h=t(2),g=a(h),x=t(32),w=a(x),b=t(3),y=a(b),v=t(14),z=a(v),E=t(18),k=a(E),j=t(4),_=t(66),H=(a(_),y.default.div(l,j.spacing.bigger,j.spacing.smaller,j.spacing.medium,j.breakpoints.tablet)),M=(0,y.default)(k.default)(d),P=y.default.div(o,j.spacing.small,j.breakpoints.tablet),q=y.default.div(m,j.breakpoints.tablet),A=y.default.div(s),T=y.default.div(f,j.spacing.medium,j.breakpoints.tablet,j.spacing.medium,j.spacing.smaller),C=y.default.div(c),I=y.default.div(u,j.breakpoints.tablet),L=y.default.div(p,j.spacing.bigger,j.spacing.smaller,j.breakpoints.tablet,j.spacing.medium);e.aboutPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-project-js-feb2fb98cc41bca5b298.js.map