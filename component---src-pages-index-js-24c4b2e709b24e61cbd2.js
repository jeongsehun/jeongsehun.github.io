(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{5709:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#3898d8","images":{"fallback":{"src":"/static/7884ecc1c0a96c328f9d831dabd19920/d24ee/profile.jpg","srcSet":"/static/7884ecc1c0a96c328f9d831dabd19920/d24ee/profile.jpg 50w,\\n/static/7884ecc1c0a96c328f9d831dabd19920/64618/profile.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/7884ecc1c0a96c328f9d831dabd19920/d4bf4/profile.avif 50w,\\n/static/7884ecc1c0a96c328f9d831dabd19920/ee81f/profile.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/7884ecc1c0a96c328f9d831dabd19920/3faea/profile.webp 50w,\\n/static/7884ecc1c0a96c328f9d831dabd19920/6a679/profile.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),c=a(410);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),n=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../assets/img/profile.jpg",width:50,height:50,quality:95,alt:"Profile image",__imageData:a(5709)}),(null==n?void 0:n.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,n.name)," ",(null==n?void 0:n.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),i=a(5444),c=a(9535),r=a(7198),n=a(3751);t.default=function(e){var t,a=e.data,s=e.location,o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(r.Z,{location:s,title:o},l.createElement(n.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:s,title:o},l.createElement(n.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-24c4b2e709b24e61cbd2.js.map