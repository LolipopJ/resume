(function(n){function t(t){for(var s,o,c=t[0],r=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],s=!0,c=1;c<e.length;c++){var r=e[c];0!==i[r]&&(s=!1)}s&&(a.splice(t--,1),n=o(o.s=e[0]))}return n}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=s,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)o.d(e,s,function(t){return n[t]}.bind(null,s));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/resume/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=r;a.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("router-view")],1)])])},a=[],o=(e("034f"),e("2877")),c={},r=Object(o["a"])(c,i,a,!1,null,null,null),l=r.exports,p=e("8c4f"),u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"resume"},[e("div",{staticClass:"left-column"},[n._m(0),e("div",{staticClass:"left-column-content"},[e("div",{staticClass:"left-column-head"},[e("div",{staticClass:"headline-txt"},[e("span",{staticClass:"headline-name"},[n._v(" "+n._s(n.person.name.first)+" "+n._s(n.person.name.middle)+" ")]),e("span",{staticClass:"headline-name uppercase"},[n._v(" "+n._s(n.person.name.last)+" ")]),e("p",[e("span",{staticClass:"txt-full-white"},[n._v(" "+n._s(n.person.position)+" ")])])])]),e("div",{staticClass:"multi-line-txt"},[n._v(" "+n._s(n.person.about)+" ")]),e("div",{staticClass:"multi-line-txt"},[n._v(" "+n._s(n.person.knowledge)+" ")]),e("div",{staticClass:"multi-line-txt"},[n._v(" "+n._s(n.person.welfare)+" ")]),e("div",{staticClass:"multi-line-txt"},[n._v(" "+n._s(n.person.schoolwork)+" ")]),e("div",{staticClass:"social-container"},[e("a",{attrs:{href:n.contactLinks.email}},[e("div",{staticClass:"block-marged txt-full-white"},[e("i",{staticClass:"fas fa-envelope contact-icon"}),n._v(" "+n._s(n.person.contact.email)+" ")])]),e("div",{staticClass:"block-marged txt-full-white"},[e("i",{staticClass:"fas fa-phone-alt contact-icon"}),n._v(" "+n._s(n.person.contact.phone)+" ")]),n.person.contact.website?e("a",{attrs:{href:n.person.contact.website}},[e("div",{staticClass:"block-marged txt-full-white"},[e("i",{staticClass:"fas fa-blog contact-icon"}),n._v(" "+n._s(n.person.contact.website)+" ")])]):n._e(),n.person.contact.github?e("a",{staticClass:"external-link",attrs:{href:n.contactLinks.github}},[e("i",{staticClass:"fab fa-github contact-icon"}),e("span",{staticClass:"block-marged txt-full-white"},[n._v(" "+n._s(n.person.contact.github)+" ")])]):n._e(),n.person.contact.codefights?e("a",{staticClass:"external-link",attrs:{href:n.contactLinks.codefights}},[e("svg",{staticClass:"contact-icon-svg",attrs:{width:"20",height:"20",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"}})]),e("span",{staticClass:"block-marged txt-full-white"},[n._v(" "+n._s(n.person.contact.codefights)+" ")])]):n._e(),n.person.contact.medium?e("a",{staticClass:"external-link",attrs:{href:n.contactLinks.medium}},[e("i",{staticClass:"fab fa-medium contact-icon"}),e("span",{staticClass:"block-marged txt-full-white"},[n._v(" "+n._s(n.person.contact.medium)+" ")])]):n._e(),e("div",{staticClass:"hobbies-container"},[e("div",{staticClass:"hobbies-content"},n._l(n.person.hobbies,(function(t,s){return e("a",{key:s,staticClass:"hobby-item",attrs:{href:t.url}},[t.iconClass?e("i",{class:t.iconClass+" hobby-item__icon"}):n._e(),e("span",{staticClass:"hobby-item__icon-label"},[n._v(" "+n._s(t.name)+" ")])])})),0)])])])]),e("div",{staticClass:"right-column"},[e("div",{staticClass:"right-column-section"},[e("div",{staticClass:"experience-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-briefcase font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(n._s(n.lang.experience))])]),e("div",{staticClass:"section-content"},n._l(n.person.experience,(function(t,s){return e("a",{key:s,staticClass:"section-content__item",attrs:{href:t.website}},[e("div",[e("span",{staticClass:"\n                  section-content__header\n                  .section-content__header-inline\n                "},[n._v(" "+n._s(t.position)+" "),t.internship?e("span",{staticClass:"chip chip-secondary"},[n._v(" "+n._s(n.lang.internship)+" ")]):n._e()])]),e("span",{staticClass:"section-content__subheader"},[n._v(" "+n._s(t.company))]),e("div",{staticClass:"section-content__text"},[n._v(" "+n._s(t.timeperiod)+" ")]),e("span",{staticClass:"section-content__text--light"},[n._v(" "+n._s(t.description))])])})),0)]),e("div",{staticClass:"education-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-graduation-cap font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(n._s(n.lang.education))])]),e("div",{staticClass:"section-content"},n._l(n.person.education,(function(t,s){return e("a",{key:s,staticClass:"section-content__item",attrs:{href:t.website}},[e("span",{staticClass:"section-content__header"},[n._v(" "+n._s(t.school)+" ")]),e("span",{staticClass:"section-content__subheader"},[n._v(n._s(t.degree))]),e("span",{staticClass:"section-content__text"},[n._v(" "+n._s(t.timeperiod)+" ")]),e("span",{staticClass:"section-content__text--light"},[n._v(" "+n._s(t.description)+" ")])])})),0)]),n.person.projects?e("div",{staticClass:"projects-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-code font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(" "+n._s(n.lang.projects)+" ")])]),e("div",{staticClass:"section-content"},n._l(n.person.projects,(function(t,s){return e("a",{key:s,staticClass:"section-content__item",attrs:{href:t.url}},[e("div",[e("span",{staticClass:"section-content__header section-content__header-inline"},[n._v(" "+n._s(t.name)+" ")]),t.platform?e("span",{staticClass:"chip"},[n._v(n._s(t.platform))]):n._e(),t.dev?e("span",{staticClass:"chip chip-secondary"},[n._v(" "+n._s(n.lang.underDev)+" ")]):n._e()]),e("span",{staticClass:"section-content__text"},[n._v(" "+n._s(t.description)+" ")]),e("span",{staticClass:"section-content__text--light"},[n._v(" "+n._s(t.url)+" ")])])})),0)]):n._e()]),e("div",{staticClass:"right-column-section"},[n.person.contributions?e("div",{staticClass:"contributions-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-heart font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(" "+n._s(n.lang.contributions)+" ")])]),e("div",{staticClass:"section-content-grid"},n._l(n.person.contributions,(function(t,s){return e("a",{key:s,staticClass:"section-content__item",attrs:{href:t.url}},[e("div",[e("span",{staticClass:"section-content__header section-content__header-inline"},[n._v(" "+n._s(t.name)+" ")]),t.platform?e("span",{staticClass:"chip"},[n._v(n._s(t.platform))]):n._e()]),e("span",{staticClass:"section-content__text"},[n._v(" "+n._s(t.description)+" ")]),e("span",{staticClass:"section-content__text--light",staticStyle:{"word-break":"break-all"}},[n._v(" "+n._s(t.url)+" ")])])})),0)]):n._e(),n.person.awards?e("div",{staticClass:"contributions-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-trophy font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(" "+n._s(n.lang.awards)+" ")])]),e("div",{staticClass:"section-content-grid"},n._l(n.person.awards,(function(t,s){return e("a",{key:s,staticClass:"section-content__item-grid",attrs:{href:t.url}},[e("span",{staticClass:"section-content__header"},[n._v(" "+n._s(t.name)+" ")]),e("span",{staticClass:"section-content__text"},[n._v(" "+n._s(t.description)+" ")])])})),0)]):n._e(),n.person.skills?e("div",{staticClass:"skills-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-coffee font-awesome-icons"}),e("span",{staticClass:"section-headline"},[n._v(" "+n._s(n.lang.skills)+" ")])]),e("div",{staticClass:"section-content-grid section-content-grid-skills"},n._l(n.person.skills,(function(t,s){return e("span",{key:s,staticClass:"grid-item",attrs:{href:t.url}},[e("span",{staticClass:"squarred-grid-item"},[t.iconClass?e("i",{class:"mdi "+t.iconClass}):n._e(),n._v(" "+n._s(t.name)+" ")])])})),0)]):n._e()])])])},d=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"headline-photo"},[e("img",{staticClass:"headline-photo-img",attrs:{src:"https://cdn.jsdelivr.net/gh/lolipopj/resume/public/photo.jpg",alt:"Absolutely myself"}})])}];e("159b"),e("4de4"),e("b64b");const h="\nname:\n  first: 宋\n  middle:\n  last: 璟珅\nabout: 作为主力完成了 2 个项目的全栈开发，负责或参与多个项目的前端开发设计。\nposition: 想要成为软件全栈开发工程师\n\neducation:\n- school: 电子科技大学\n  degree: 工学学士\n  timeperiod: 2018.09 - 2022.06\n  description: 软件工程（互联网“+”）专业\n  website: https://www.uestc.edu.cn\n\nskills:\n- name: Vue\n  level: 85\n  iconClass: mdi-vuejs\n- name: JavaScript\n  level: 80\n  iconClass: mdi-language-javascript\n- name: Java\n  level: 80\n  iconClass: mdi-language-java\n- name: C/C++\n  level: 70\n  iconClass: mdi-language-c\n- name: Python\n  level: 70\n  iconClass: mdi-language-python\n- name: TypeScript\n  level: 60\n  iconClass: mdi-language-typescript\n- name: EJS\n  level: 60\n- name: Go\n  level: 60\n  iconClass: mdi-language-go\n\nwelfare: 参加过支教等公益项目；开发中通常担当项目组长，具有不错的统筹安排、合作沟通能力。\n\nschoolwork: 当前 GPA 为 3.61，已通过 CET-4 和 CET-6，在第一和第二学年均获得奖学金。\n\nexperience:\n- company: 成都华为研究所\n  position: 云计算开发工程师\n  timeperiod: 2021.01 - 2021.07\n  description: 存储业务基础设施项目群容器平台组；负责重构开发 CDBI，搭建部署多个独立验证环境，编写部署脚本，撰写若干篇文档博客；获评优秀华储星（前 20%）\n  website: https://www.huawei.com\n  internship: true\n\nprojects:\n- name: netunion-dnrs-web\n  platform: Vue\n  description: 电子科技大学宿舍网络在线报修系统；全栈开发\n  url: https://github.com/uestclug/netunion-dnrs-web\n\n- name: nu-official\n  platform: Vue\n  description: 电子科技大学 NetUnion 主页；全栈开发\n  url: https://github.com/uestclug/nu-official\n\n- name: home-action-client\n  platform: Vue\n  description: 服务外包创新创业大赛归家行动客户端；前端开发\n\n- name: wxapp-ivory-tower-timetable\n  platform: WXML\n  description: 由课程表驱动的大学生协作待办事项小程序；前端开发\n  url: https://github.com/UESTC-cantdoit/wxapp-ivory-tower-timetable\n\n- name: uestc-tvly-web\n  platform: Vue\n  description: 电子科技大学 IPTV 前端；基于 tvly-web, 前端开发\n  url: https://github.com/uestclug/uestc-tvly-web\n  dev: true\n\n- name: lab-code-deployment-system-web\n  platform: Vue\n  description: 实验室项目部署系统，展示实验室开发成果；全栈开发\n  dev: true\n\ncontributions:\n- name: hexo-theme-archer\n  description: 一款现代的 Hexo 博客主题；开发新功能（例如夜间模式），完善移动端页面适配，修复已知的问题，帮助主题变得更好\n  url: https://github.com/fi3ework/hexo-theme-archer\n  platform: EJS\n\n- name: design-patterns-for-humans-zh\n  description: 开源设计模式教程仓库 design-patterns-for-humans 的中文翻译版本；自翻，供学习参考使用\n  url: https://github.com/LolipopJ/design-patterns-for-humans-zh\n\n- name: SOSCONF2020\n  description: 2020 年中文学生开源年会主页；“关于我们”和“分会场”页面前端设计\n  url: https://gitlab.com/uestclug/sosconf_zh.gitlab.io\n  platform: Vue\n\nawards:\n- name: 2021 中国高校计算机大赛网络技术挑战赛 西南赛区一等奖\n  description: 省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2021网络技术挑战赛.jpg\n\n- name: 2021 中国大学生服务外包创新创业大赛 西部区域赛三等奖\n  description: 省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2021中国大学生服务外包创新创业大赛.jpg\n\n- name: 2020 中国高校计算机大赛微信小程序应用开发赛 西南赛区三等奖\n  description: 省区级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2020微信小程序应用开发赛.png\n\n- name: 2019 社会实践优秀个人\n  description: 校级\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2019社会实践优秀个人.jpg\n\ncontact:\n  email: lolipop0703@qq.com\n  phone: +86 18980344225\n  city: 成都\n  street: 四川省成都市\n  website: https://blog.towind.fun\n  github: LolipopJ\n\nlang: cn\n",m='\nname:\n  first: JingShen\n  middle:\n  last: Song\nabout: Responsible for and completed the full-stack development of 2 projects, and was responsible for or participated in the front-end development and design of multiple projects.\nposition: way to be Software Full Stack Developer\n\neducation:\n- school: University of Electronic Science and Technology\n  degree: Bachelor of Engineering\n  timeperiod: 2018.09 - 2022.06\n  description: major in Software Engineering (Internet Plus)\n  website: https://www.uestc.edu.cn\n\nskills:\n- name: Vue\n  level: 85\n  iconClass: mdi-vuejs\n- name: JavaScript\n  level: 80\n  iconClass: mdi-language-javascript\n- name: Java\n  level: 80\n  iconClass: mdi-language-java\n- name: C/C++\n  level: 70\n  iconClass: mdi-language-c\n- name: Python\n  level: 70\n  iconClass: mdi-language-python\n- name: TypeScript\n  level: 60\n  iconClass: mdi-language-typescript\n- name: EJS\n  level: 60\n- name: Go\n  level: 60\n  iconClass: mdi-language-go\n\nwelfare: Participated in education support and other public welfare activities; usually acted as the team leader in projects, with good overall planning, cooperation and communication skills.\n\nschoolwork: Current GPA is 3.61, has passed CET-4 and CET-6, and won scholarships in both the first and second academic years.\n\nexperience:\n- company: Huawei\n  position: Cloud Computing Development Engineer\n  timeperiod: 2021.01 - 2021.07\n  description: Storage business infrastructure project group, container platform group; responsible for refactoring and developing CDBI, building and deploying multiple independent verification environments, writing scripts, and writing several blogs; awarded as Star of Huawei Storage (top 20%)\n  website: https://www.huawei.com\n  internship: true\n\nprojects:\n- name: netunion-dnrs-web\n  platform: Vue\n  description: Online repair system for dormitory network of UESTC; full-stack\n  url: https://github.com/uestclug/netunion-dnrs-web\n\n- name: nu-official\n  platform: Vue\n  description: Homepage of NetUnion, UESTC; full-stack\n  url: https://github.com/uestclug/nu-official\n\n- name: home-action-client\n  platform: Vue\n  description: Home action client for contest; front-end\n\n- name: wxapp-ivory-tower-timetable\n  platform: WXML\n  description: Collaborative to-do program for college students driven by the curriculum; front-end\n  url: https://github.com/UESTC-cantdoit/wxapp-ivory-tower-timetable\n\n- name: uestc-tvly-web\n  platform: Vue\n  description: IPTV front-end of UESTC; based on tvly-web, front-end\n  url: https://github.com/uestclug/uestc-tvly-web\n  dev: true\n\n- name: lab-code-deployment-system-web\n  platform: Vue\n  description: Laboratory project deployment system that displays development results; full-stack\n  dev: true\n\ncontributions:\n- name: hexo-theme-archer\n  description: A modern Hexo blog theme; develop new features (such as dark mode), improve mobile adaptation, fix known issues -- help the theme become better\n  url: https://github.com/fi3ework/hexo-theme-archer\n  platform: EJS\n\n- name: design-patterns-for-humans-zh\n  description: Chinese translation for open source design pattern tutorial design-patterns-for-humans; self-translation, for learning reference\n  url: https://github.com/LolipopJ/design-patterns-for-humans-zh\n\n- name: SOSCONF2020\n  description: 2020 Chinese Students Open Source Conference Homepage; front-end design of "About Us" and "Sub-venue" pages\n  url: https://gitlab.com/uestclug/sosconf_zh.gitlab.io\n  platform: Vue\n\nawards:\n- name: 2021 中国高校计算机大赛网络技术挑战赛 First Prize in Southwest Division\n  description: Provincial level\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2021网络技术挑战赛.jpg\n\n- name: 2021 中国大学生服务外包创新创业大赛 Third Prize of Western Regional Competition\n  description: Provincial level\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2021中国大学生服务外包创新创业大赛.jpg\n\n- name: 2020 中国高校计算机大赛微信小程序应用开发赛 Third Prize in Southwest Division\n  description: Provincial level\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2020微信小程序应用开发赛.png\n\n- name: 2019 Outstanding Individuals in Social Practice\n  description: School level\n  url: https://cdn.jsdelivr.net/gh/lolipopj/resume/public/awards/2019社会实践优秀个人.jpg\n\ncontact:\n  email: lolipop0703@qq.com\n  phone: +86 18980344225\n  city: Chengdu\n  street: Chengdu, Sichuan Province\n  website: https://blog.towind.fun\n  github: LolipopJ\n\nlang: en\n';var f={contact:"Contact",born:"Born",bornIn:"in",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",contributions:"Contributions",about:"About me",awards:"Awards",internship:"INTERNSHIP",underDev:"DEV"},v=f,g={contact:"联系方式",born:"出生",bornIn:"于",experience:"工作经历",education:"教育经历",skills:"技能专长",projects:"项目经历",contributions:"开源贡献",about:"自我介绍",awards:"获奖经历",internship:"实习",underDev:"开发中"},_=g,b={en:v,cn:_},C=e("e2c1"),w={data:function(){return{person:void 0,terms:b}},computed:{lang:function(){var n=this.terms.cn,t=this.terms[this.person.lang];return Object.keys(n).filter((function(n){return!t[n]})).forEach((function(e){console.log(e),t[e]=n[e]})),t},contactLinks:function(){var n={};return this.person.contact.github&&(n.github="https://github.com/".concat(this.person.contact.github)),this.person.contact.codefights&&(n.codefights="https://codefights.com/profile/".concat(this.person.contact.codefights)),this.person.contact.medium&&(n.medium="https://medium.com/@".concat(this.person.contact.medium)),this.person.contact.email&&(n.email="mailto:".concat(this.person.contact.email)),this.person.contact.linkedin&&(n.linkedin="https://linkedin.com/in/".concat(this.person.contact.linkedin)),this.person.contact.phone&&(n.phone="tel:".concat(this.person.contact.phone)),n}},created:function(){var n=this.$route.params.language;switch(n){case"cn":this.person=C.load(h);break;case"en":this.person=C.load(m);break;default:this.person=C.load(h)}}},y=w,j=(e("a2d9"),Object(o["a"])(y,u,d,!1,null,"150e4567",null)),k=j.exports;s["a"].use(p["a"]);var x=[{path:"/:language",name:"resume",component:k},{path:"*",redirect:"/cn"}],S=new p["a"]({mode:"history",base:"/resume/",routes:x});S.beforeEach((function(n,t,e){"/cn"===n.path||"/en"===n.path?e():e({path:"/cn"})}));var E=S;s["a"].config.productionTip=!1,new s["a"]({router:E,render:function(n){return n(l)}}).$mount("#app")},"85ec":function(n,t,e){},a2d9:function(n,t,e){"use strict";e("e8ad")},e8ad:function(n,t,e){}});
//# sourceMappingURL=app.757a4e0c.js.map