(function(t){function n(n){for(var e,o,c=n[0],r=n[1],l=n[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);p&&p(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,n=0;n<a.length;n++){for(var s=a[n],e=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(e=!1)}e&&(a.splice(n--,1),t=o(o.s=s[0]))}return t}var e={},i={app:0},a=[];function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,n,s){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(s,e,function(n){return t[n]}.bind(null,e));return s},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=r;a.push([0,"chunk-vendors"]),s()})({0:function(t,n,s){t.exports=s("56d7")},"034f":function(t,n,s){"use strict";s("85ec")},4666:function(t,n,s){"use strict";s("ca8b")},"56d7":function(t,n,s){"use strict";s.r(n);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"page-wrapper"},[s("div",{staticClass:"page"},[s("div",{staticClass:"page-inner"},[s("router-view")],1)])])},a=[],o=(s("034f"),s("2877")),c={},r=Object(o["a"])(c,i,a,!1,null,null,null),l=r.exports,p=s("8c4f"),u=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"resume",attrs:{id:"resume2"}},[s("div",{staticClass:"left-column"},[t._m(0),s("div",{staticClass:"left-column-content"},[s("div",{staticClass:"left-column-head"},[s("div",{staticClass:"headline-txt"},[s("span",{staticClass:"headline-name"},[t._v(" "+t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" ")]),s("span",{staticClass:"headline-name uppercase"},[t._v(" "+t._s(t.person.name.last)+" ")]),s("p",[s("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.position)+" ")])])])]),s("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.about)+" ")]),s("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.knowledge)+" ")]),s("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.welfare)+" ")]),s("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.schoolwork)+" ")]),s("div",{staticClass:"social-container"},[s("a",{attrs:{href:t.contactLinks.email}},[s("div",{staticClass:"block-marged txt-full-white"},[s("i",{staticClass:"fas fa-envelope contact-icon"}),t._v(" "+t._s(t.person.contact.email)+" ")])]),s("div",{staticClass:"block-marged txt-full-white"},[s("i",{staticClass:"fas fa-phone-alt contact-icon"}),t._v(" "+t._s(t.person.contact.phone)+" ")]),t.person.contact.website?s("a",{attrs:{href:t.person.contact.website}},[s("div",{staticClass:"block-marged txt-full-white"},[s("i",{staticClass:"fas fa-blog contact-icon"}),t._v(" "+t._s(t.person.contact.website)+" ")])]):t._e(),t.person.contact.github?s("a",{staticClass:"external-link",attrs:{href:t.contactLinks.github}},[s("i",{staticClass:"fab fa-github contact-icon"}),s("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.github)+" ")])]):t._e(),t.person.contact.codefights?s("a",{staticClass:"external-link",attrs:{href:t.contactLinks.codefights}},[s("svg",{staticClass:"contact-icon-svg",attrs:{width:"20",height:"20",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"}})]),s("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.codefights)+" ")])]):t._e(),t.person.contact.medium?s("a",{staticClass:"external-link",attrs:{href:t.contactLinks.medium}},[s("i",{staticClass:"fab fa-medium contact-icon"}),s("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.medium)+" ")])]):t._e(),s("div",{staticClass:"hobbies-container"},[s("div",{staticClass:"hobbies-content"},t._l(t.person.hobbies,(function(n,e){return s("a",{key:e,staticClass:"hobby-item",attrs:{href:n.url}},[n.iconClass?s("i",{class:n.iconClass+" hobby-item__icon"}):t._e(),s("span",{staticClass:"hobby-item__icon-label"},[t._v(" "+t._s(n.name)+" ")])])})),0)])])])]),s("div",{staticClass:"right-column"},[s("div",{staticClass:"right-column-section"},[s("div",{staticClass:"experience-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-briefcase font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.experience))])]),s("div",{staticClass:"section-content"},t._l(t.person.experience,(function(n,e){return s("a",{key:e,staticClass:"section-content__item",attrs:{href:n.website}},[s("div",[s("span",{staticClass:"\n                  section-content__header\n                  .section-content__header-inline\n                "},[t._v(" "+t._s(n.position)+" "),n.internship?s("span",{staticClass:"chip chip-secondary"},[t._v(" "+t._s(t.lang.internship)+" ")]):t._e()])]),s("span",{staticClass:"section-content__subheader"},[t._v(" "+t._s(n.company))]),s("div",{staticClass:"section-content__text"},[t._v(" "+t._s(n.timeperiod)+" ")]),s("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(n.description))])])})),0)]),s("div",{staticClass:"education-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-graduation-cap font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.education))])]),s("div",{staticClass:"section-content"},t._l(t.person.education,(function(n,e){return s("a",{key:e,staticClass:"section-content__item",attrs:{href:n.website}},[s("span",{staticClass:"section-content__header"},[t._v(" "+t._s(n.school)+" ")]),s("span",{staticClass:"section-content__subheader"},[t._v(t._s(n.degree))]),s("span",{staticClass:"section-content__text"},[t._v(" "+t._s(n.timeperiod)+" ")]),s("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(n.description)+" ")])])})),0)]),t.person.projects?s("div",{staticClass:"projects-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-code font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.projects)+" ")])]),s("div",{staticClass:"section-content"},t._l(t.person.projects,(function(n,e){return s("a",{key:e,staticClass:"section-content__item",attrs:{href:n.url}},[s("div",[s("span",{staticClass:"section-content__header section-content__header-inline"},[t._v(" "+t._s(n.name)+" ")]),n.platform?s("span",{staticClass:"chip"},[t._v(t._s(n.platform))]):t._e(),n.dev?s("span",{staticClass:"chip chip-secondary"},[t._v(" "+t._s(t.lang.underDev)+" ")]):t._e()]),s("span",{staticClass:"section-content__text"},[t._v(" "+t._s(n.description)+" ")]),s("span",{staticClass:"section-content__text--light"},[t._v(" "+t._s(n.url)+" ")])])})),0)]):t._e()]),s("div",{staticClass:"right-column-section"},[t.person.contributions?s("div",{staticClass:"contributions-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-heart font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.contributions)+" ")])]),s("div",{staticClass:"section-content-grid"},t._l(t.person.contributions,(function(n,e){return s("a",{key:e,staticClass:"section-content__item",attrs:{href:n.url}},[s("div",[s("span",{staticClass:"section-content__header section-content__header-inline"},[t._v(" "+t._s(n.name)+" ")]),n.platform?s("span",{staticClass:"chip"},[t._v(t._s(n.platform))]):t._e()]),s("span",{staticClass:"section-content__text"},[t._v(" "+t._s(n.description)+" ")]),s("span",{staticClass:"section-content__text--light",staticStyle:{"word-break":"break-all"}},[t._v(" "+t._s(n.url)+" ")])])})),0)]):t._e(),t.person.awards?s("div",{staticClass:"contributions-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-trophy font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.awards)+" ")])]),s("div",{staticClass:"section-content-grid"},t._l(t.person.awards,(function(n,e){return s("a",{key:e,staticClass:"section-content__item-grid",attrs:{href:n.url}},[s("span",{staticClass:"section-content__header"},[t._v(" "+t._s(n.name)+" ")]),s("span",{staticClass:"section-content__text"},[t._v(" "+t._s(n.description)+" ")])])})),0)]):t._e(),t.person.skills?s("div",{staticClass:"skills-section section"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-coffee font-awesome-icons"}),s("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.skills)+" ")])]),s("div",{staticClass:"section-content-grid section-content-grid-skills"},t._l(t.person.skills,(function(n,e){return s("span",{key:e,staticClass:"grid-item",attrs:{href:n.url}},[s("span",{staticClass:"squarred-grid-item"},[n.iconClass?s("i",{class:"mdi "+n.iconClass}):t._e(),t._v(" "+t._s(n.name)+" ")])])})),0)]):t._e()])])])},d=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"headline-photo"},[s("img",{staticClass:"headline-photo-img",attrs:{src:"https://cdn.jsdelivr.net/gh/lolipopj/resume/tree/ph-pages/photo.jpg",alt:"Absolutely myself"}})])}],h=(s("159b"),s("4de4"),s("b64b"),s("651e")),m=s.n(h);const _="\nname:\n  first: 宋\n  middle:\n  last: 璟珅\nabout: 作为主力完成了 2 个项目的全栈开发，负责或参与多个项目的前端开发设计。\nposition: 想要成为软件全栈开发工程师\n\neducation:\n- school: 电子科技大学\n  degree: 软件工程（互联网“+”） 工学学士\n  timeperiod: 2018.09 - 2022.06\n  description: 电子科技大学（UESTC）软件工程专业本科生\n  website: https://www.uestc.edu.cn\n\nskills:\n- name: Vue\n  level: 85\n  iconClass: mdi-vuejs\n- name: JavaScript\n  level: 80\n  iconClass: mdi-language-javascript\n- name: Java\n  level: 80\n  iconClass: mdi-language-java\n- name: C/C++\n  level: 70\n  iconClass: mdi-language-c\n- name: Python\n  level: 70\n  iconClass: mdi-language-python\n- name: TypeScript\n  level: 60\n  iconClass: mdi-language-typescript\n- name: EJS\n  level: 60\n- name: Go\n  level: 60\n  iconClass: mdi-language-go\n\nwelfare: 参加过支教等公益项目；开发中通常担当项目组长，具有不错的统筹安排、合作沟通能力。\n\nschoolwork: 当前 GPA 为 3.61，已通过 CET-4 和 CET-6，在第一和第二学年均获得奖学金。\n\nexperience:\n- company: 成都华为研究所\n  position: 云计算开发工程师\n  timeperiod: 2021.01 - 2021.07\n  description: 存储业务基础设施项目群容器平台组；负责重构开发 CDBI，搭建部署多个独立验证环境，编写部署脚本，撰写若干篇文档博客；获评优秀华储星（前 20%）\n  website: https://www.huawei.com\n  internship: true\n\nprojects:\n- name: netunion-dnrs-web\n  platform: Vue\n  description: 电子科技大学宿舍网络在线报修系统；全栈开发\n  url: https://github.com/uestclug/netunion-dnrs-web\n\n- name: nu-official\n  platform: Vue\n  description: 电子科技大学 NetUnion 主页；全栈开发\n  url: https://github.com/uestclug/nu-official\n\n- name: home-action-client\n  platform: Vue\n  description: 服务外包创新创业大赛归家行动客户端；前端开发\n\n- name: wxapp-ivory-tower-timetable\n  platform: WXML\n  description: 由课程表驱动的大学生协作待办事项小程序；前端开发\n  url: https://github.com/UESTC-cantdoit/wxapp-ivory-tower-timetable\n\n- name: uestc-tvly-web\n  platform: Vue\n  description: 电子科技大学 IPTV 前端；基于 tvly-web, 前端开发\n  url: https://github.com/uestclug/uestc-tvly-web\n  dev: true\n\n- name: lab-code-deployment-system-web\n  platform: Vue\n  description: 实验室项目部署系统，展示实验室开发成果；全栈开发\n  dev: true\n\ncontributions:\n- name: hexo-theme-archer\n  description: 一款现代的 Hexo 博客主题；开发新功能（例如夜间模式），完善移动端页面适配，修复已知的问题，帮助主题变得更好\n  url: https://github.com/fi3ework/hexo-theme-archer\n  platform: EJS\n\n- name: design-patterns-for-humans-zh\n  description: 开源设计模式教程仓库 design-patterns-for-humans 的中文翻译版本；自翻，供学习参考使用\n  url: https://github.com/LolipopJ/design-patterns-for-humans-zh\n\n- name: SOSCONF2020\n  description: 2020 年中文学生开源年会主页；“关于我们”和“分会场”页面前端设计\n  url: https://gitlab.com/uestclug/sosconf_zh.gitlab.io\n  platform: Vue\n\nawards:\n- name: 中国高校计算机大赛网络技术挑战赛 西南赛区一等奖\n  description: 2021 年；省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/tree/ph-pages/awards/2021网络技术挑战赛.jpg\n\n- name: 中国大学生服务外包创新创业大赛 西部区域赛三等奖\n  description: 2021 年；省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/tree/ph-pages/awards/2021中国大学生服务外包创新创业大赛.jpg\n\n- name: 中国高校计算机大赛微信小程序应用开发赛 西南赛区三等奖\n  description: 2020 年；省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/tree/ph-pages/awards/2020微信小程序应用开发赛.png\n\n- name: 社会实践优秀个人\n  description: 2019 年；校级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/tree/ph-pages/awards/2019社会实践优秀个人.jpg\n\ncontact:\n  email: lolipop0703@qq.com\n  phone: +86 18980344225\n  city: 成都\n  street: 四川省成都市\n  website: https://blog.towind.fun\n  github: LolipopJ\n# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el, nb-no\nlang: cn\n";var f={contact:"Contact",born:"Born",bornIn:"in",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",contributions:"Contributions",about:"About me",internship:"INTERNSHIP",underDev:"DEV"},v=f,C={contact:"联系方式",experience:"工作经历",education:"教育经历",skills:"技能专长",projects:"项目经历",contributions:"开源贡献",about:"自我介绍",awards:"获奖经历",internship:"实习",underDev:"开发中"},g=C,b={en:v,cn:g};function w(t){var n={name:t,data:function(){return{person:m.a.load(_),terms:b}},computed:{lang:function(){var t=this.terms.en,n=this.terms[this.person.lang];return Object.keys(t).filter((function(t){return!n[t]})).forEach((function(s){console.log(s),n[s]=t[s]})),n},contactLinks:function(){var t={};return this.person.contact.github&&(t.github="https://github.com/".concat(this.person.contact.github)),this.person.contact.codefights&&(t.codefights="https://codefights.com/profile/".concat(this.person.contact.codefights)),this.person.contact.medium&&(t.medium="https://medium.com/@".concat(this.person.contact.medium)),this.person.contact.email&&(t.email="mailto:".concat(this.person.contact.email)),this.person.contact.linkedin&&(t.linkedin="https://linkedin.com/in/".concat(this.person.contact.linkedin)),this.person.contact.phone&&(t.phone="tel:".concat(this.person.contact.phone)),t}}};return n}var y="creative",k=e["a"].component(y,w(y)),x=k,j=(s("4666"),Object(o["a"])(x,u,d,!1,null,"3957bccd",null)),O=j.exports;e["a"].use(p["a"]);var S=[{path:"/",name:"resume",component:O}],E=new p["a"]({mode:"history",base:"/",routes:S}),P=E;e["a"].config.productionTip=!1,new e["a"]({router:P,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,n,s){},ca8b:function(t,n,s){}});
//# sourceMappingURL=app.e9968027.js.map