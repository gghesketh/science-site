(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[446],{17:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(7409),l=n(5444),m=n(3364),o=n(5514),c=n(401),i=n(3217),u=n(7367),d=n.n(u),s=function(e){var t=e.name,n=e.image;return n?r.createElement(i.G,{alt:t,className:"people__list-image",image:n.childImageSharp.gatsbyImageData}):r.createElement("div",{className:"people__list-image"},r.createElement(d(),null))};s.defaultProps={image:null};var f=s,E=function(e){var t=e.markdown;return r.createElement("div",{className:"people"},r.createElement("section",null,r.createElement("header",null,r.createElement("h1",null,"People"),r.createElement(m.G,{icon:o.FVb,size:"2x"})),r.createElement("ul",{className:"people__list"},t.map((function(e){return r.createElement("li",{key:e.node.frontmatter.name},r.createElement(f,{image:e.node.frontmatter.image,name:e.node.frontmatter.name}),r.createElement("div",null,r.createElement("h2",null,e.node.frontmatter.name),e.node.frontmatter.title&&r.createElement("h3",null,e.node.frontmatter.title),e.node.frontmatter.email&&r.createElement(c.Z,{className:"person__list-email",to:"mailto:"+e.node.frontmatter.email},e.node.frontmatter.email),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.html}})))})))))},p=n(2161),g=function(){var e=(0,l.useStaticQuery)("1805795682"),t=(0,p.Z)(e.markdown.edges,["order","name"]);return t.length>0?r.createElement(E,{markdown:t}):null},h=n(6873),v=function(){return r.createElement(a.Z,null,r.createElement(h.Z,{title:"People"}),r.createElement(g,null))}},2161:function(e,t){"use strict";t.Z=function(e,t){if(void 0===t&&(t=[]),0===t.length)return e;return e.sort((function(e,n){return e.node.frontmatter[t[0]]<n.node.frontmatter[t[0]]?-1:e.node.frontmatter[t[0]]>n.node.frontmatter[t[0]]?1:t.length>=2&&e.node.frontmatter[t[1]]<n.node.frontmatter[t[1]]?-1:t.length>=2&&e.node.frontmatter[t[1]]>n.node.frontmatter[t[1]]?1:0})),e}},7367:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Placeholder portrait"),r.createElement("desc",{key:1},"image"),r.createElement("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",key:2})])}a.defaultProps={"aria-label":"Placeholder portrait image",viewBox:"0 0 448 512"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-people-index-js-3f9d4c67686ad2eff091.js.map