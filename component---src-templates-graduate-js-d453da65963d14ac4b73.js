webpackJsonp([75131343137769],{36:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}function i(n){return u.default.createElement(x,null,u.default.createElement(g,null,u.default.createElement(h,null,n.verb||"Announcing"),u.default.createElement(b,{right:!0},"The Next"),u.default.createElement(h,null,n.noun||"Gradshow")))}e.__esModule=!0;var r=l(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0 ","px;\n  color: black;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover .image {\n    opacity: 1;\n  }\n\n\n  @media (max-width: ","px) {\n    padding: 0 ","px;\n  }\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0 ","px;\n  color: black;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &:hover .image {\n    opacity: 1;\n  }\n\n\n  @media (max-width: ","px) {\n    padding: 0 ","px;\n  }\n"]),d=l(["\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  padding: ",";\n\n  @media screen and (max-width: "," ) {\n    height:30%;\n  }\n\n"],["\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  padding: ",";\n\n  @media screen and (max-width: "," ) {\n    height:30%;\n  }\n\n"]),o=l(["\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: left;\n  z-index: 1;\n\n  @media (max-width: ",") {\n    font-size: 3rem;\n  }\n"],["\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: left;\n  z-index: 1;\n\n  @media (max-width: ",") {\n    font-size: 3rem;\n  }\n"]),m=l(["\n  position: relative;\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: right;\n\n  @media (max-width: ",") {\n    font-size: 3rem;\n    line-height: 1;\n    margin-top: 0;\n    margin-bottom: 0;\n    top: auto;\n  }\n"],["\n  position: relative;\n  text-transform: uppercase;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: right;\n\n  @media (max-width: ",") {\n    font-size: 3rem;\n    line-height: 1;\n    margin-top: 0;\n    margin-bottom: 0;\n    top: auto;\n  }\n"]);e.default=i;var p=t(2),u=a(p),c=t(3),s=a(c),f=t(5),g=s.default.div(r,f.spacing.smaller,f.breakpoints.mobile,f.spacing.smaller),x=s.default.div(d,function(n){return n.pad?f.spacing.smaller:0},f.breakpoints.mobile),h=s.default.h3(o,f.breakpoints.mobile),b=s.default.h3(m,f.breakpoints.mobile);n.exports=e.default},183:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return n.raw=e,n}function i(n){var e=n.data,t=e.markdownRemark;return j.default.createElement(F,null,j.default.createElement(I,null,j.default.createElement(q,null,j.default.createElement(P,null,j.default.createElement(S,null,j.default.createElement(H.default,{resolutions:t.frontmatter.headshot.childImageSharp.resolutions,outerWrapperClassName:"outer-wrapper",className:"image"}),j.default.createElement(W,null,t.frontmatter.title))),j.default.createElement(A,null,j.default.createElement(B.default,{verb:t.frontmatter.verb,noun:t.frontmatter.noun})),j.default.createElement(G,{borderBottom:!0},j.default.createElement("p",null,t.frontmatter.intro)),j.default.createElement(G,null,t.frontmatter.hobbies&&j.default.createElement(J,null,j.default.createElement(L,null,"Hobbies"),j.default.createElement("p",null,t.frontmatter.hobbies)),t.frontmatter.music&&j.default.createElement(J,null,j.default.createElement(L,null,"Listening To"),j.default.createElement("p",null,t.frontmatter.music)),t.frontmatter.tools&&j.default.createElement(J,null,j.default.createElement(L,null,"Favourite Tools"),j.default.createElement("p",null,t.frontmatter.tools)),t.frontmatter.watch&&j.default.createElement(J,null,j.default.createElement(L,null,"Currently Watching"),j.default.createElement("p",null,t.frontmatter.watch)),t.frontmatter.typeface&&j.default.createElement(J,null,j.default.createElement(L,null,"Favourite Typefaces"),j.default.createElement("p",null,t.frontmatter.typeface)))),j.default.createElement(R,null,e.projects?e.projects.edges.map(function(n){var e=n.node;return j.default.createElement(D,null,j.default.createElement(M.default,{key:e.id,to:e.fields.slug},j.default.createElement(K,null,j.default.createElement(O,null,j.default.createElement(H.default,{sizes:e.frontmatter.image.childImageSharp.sizes,className:"image"})),j.default.createElement(U,null,j.default.createElement("h5",null,e.frontmatter.title),j.default.createElement("h5",null,e.frontmatter.category)))))}):j.default.createElement(L,null,"This student has no projects :( "))))}e.__esModule=!0,e.aboutPageQuery=void 0;var r=l(["\n  width: 100%;\n  min-height: 100%;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n  }\n\n"],["\n  width: 100%;\n  min-height: 100%;\n\n  @media screen and (max-width: "," ) {\n    flex-direction: column;\n  }\n\n"]),d=l(["\n  display: flex;\n  min-height: 100%;\n"],["\n  display: flex;\n  min-height: 100%;\n"]),o=l(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  \n  height: 100px;\n  border-bottom: 1px solid black;\n\n  .image {\n    padding: 0 ","px;\n    border-radius: 50%;\n  }\n\n  .outer-wrapper {\n    height: 60px !important;\n    padding: 0 ","px;\n  }\n\n"],["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  \n  height: 100px;\n  border-bottom: 1px solid black;\n\n  .image {\n    padding: 0 ","px;\n    border-radius: 50%;\n  }\n\n  .outer-wrapper {\n    height: 60px !important;\n    padding: 0 ","px;\n  }\n\n"]),m=l(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n"],["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n"]),p=l(["\n  padding: 0 ","px;\n  line-height: 1.2;\n"],["\n  padding: 0 ","px;\n  line-height: 1.2;\n"]),u=l(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 ","px;\n\n  .image {\n    border-radius: 50%;\n  }\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 ","px;\n\n  .image {\n    border-radius: 50%;\n  }\n"]),c=l(["\n  padding: ","px;\n  display: flex;\n  flex-wrap: wrap;\n  flex: none;\n\n  a {\n    margin-right: ","px;\n  }\n\n"],["\n  padding: ","px;\n  display: flex;\n  flex-wrap: wrap;\n  flex: none;\n\n  a {\n    margin-right: ","px;\n  }\n\n"]),s=l(["\n\n  flex: 1;\n  width: 100%;\n  min-height: calc(100vh - ","px);\n  max-width: 400px;\n  white-space: pre-wrap;\n  border-right: 1px solid black;\n  padding-bottom: ","px;\n  margin-bottom: calc(0.5vw + 1rem);\n\n  QuestionHeader {\n    margin-bottom: -","px;\n\n  }\n"],["\n\n  flex: 1;\n  width: 100%;\n  min-height: calc(100vh - ","px);\n  max-width: 400px;\n  white-space: pre-wrap;\n  border-right: 1px solid black;\n  padding-bottom: ","px;\n  margin-bottom: calc(0.5vw + 1rem);\n\n  QuestionHeader {\n    margin-bottom: -","px;\n\n  }\n"]),f=l(["\n  padding: ","px ","px;\n  border-bottom: 1px solid black;\n  height: 200px;\n"],["\n  padding: ","px ","px;\n  border-bottom: 1px solid black;\n  height: 200px;\n"]),g=l(["\n  padding: 0 ","px 0 ","px;\n  ","\n\n  p {\n    margin-top: 1rem;\n  }\n"],["\n  padding: 0 ","px 0 ","px;\n  ","\n\n  p {\n    margin-top: 1rem;\n  }\n"]),x=l(["\n  margin-bottom: ","px;\n  p {\n    margin: 0.25rem 0;\n  }\n"],["\n  margin-bottom: ","px;\n  p {\n    margin: 0.25rem 0;\n  }\n"]),h=l(["\n  text-transform: uppercase;\n"],["\n  text-transform: uppercase;\n"]),b=l(["\n  width: 100%;\n  flex: 2;\n  padding-bottom: ","px;\n\n  > QuestionHeader {\n    margin: ","px;\n  }\n\n  h2 {\n    margin-bottom: ","px;\n  }\n"],["\n  width: 100%;\n  flex: 2;\n  padding-bottom: ","px;\n\n  > QuestionHeader {\n    margin: ","px;\n  }\n\n  h2 {\n    margin-bottom: ","px;\n  }\n"]),w=l(["\n  width: 100%;\n  border-bottom: 1px solid black;\n"],["\n  width: 100%;\n  border-bottom: 1px solid black;\n"]),E=l(["\n  width: 100%;\n\n  a {\n    font-size: calc(0.5vw + 1.2rem);\n    padding: ","px;\n  }\n"],["\n  width: 100%;\n\n  a {\n    font-size: calc(0.5vw + 1.2rem);\n    padding: ","px;\n  }\n"]),v=l(["\n  width: calc(100% - ","px);\n  margin: ","px;\n"],["\n  width: calc(100% - ","px);\n  margin: ","px;\n"]),y=l(["\n  display: flex;\n  justify-content: space-between;\n  ","\n\n  padding:  0 ","px ","px ;\n"],["\n  display: flex;\n  justify-content: space-between;\n  ","\n\n  padding:  0 ","px ","px ;\n"]);e.default=i;var k=t(2),j=a(k),z=t(3),_=a(z),Q=t(21),H=a(Q),T=t(14),M=a(T),N=t(36),B=a(N),C=t(5),F=_.default.div(r,C.breakpoints.tablet),I=_.default.div(d),P=_.default.div(o,C.spacing.smaller,C.spacing.small),S=_.default.div(m),W=_.default.h3(p,C.spacing.smaller),q=(_.default.div(u,C.spacing.smaller),_.default.div(c,C.spacing.smaller,C.spacing.small),_.default.div(s,C.spacing.bigger,C.spacing.bigger,C.spacing.small)),A=_.default.div(f,C.spacing.small,C.spacing.smaller),G=_.default.div(g,C.spacing.normal,C.spacing.small,function(n){return n.borderBottom&&"border-bottom: 1px solid black;"}),J=_.default.div(x,C.spacing.normal),L=_.default.p(h),R=_.default.div(b,2*C.spacing.bigger,C.spacing.small,C.spacing.normal),D=_.default.div(w),K=_.default.div(E,C.spacing.smaller),O=_.default.div(v,2*C.spacing.normal,C.spacing.normal),U=_.default.div(y,"",C.spacing.normal,C.spacing.smaller);e.aboutPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-graduate-js-d453da65963d14ac4b73.js.map