webpackJsonp([0],[,,,,,function(e,t,a){"use strict";function n(){this.startTime=null,this.lastMeasure=null,this.lastValue=0}n.prototype.start=function(e){this.startTime=performance.now(),this.lastMeasure=e,this.lastValue=0},n.prototype.delay=function(e,t){window.setTimeout(e,t)},n.prototype.stop=function(e){var t=this,a=this.lastMeasure;this.lastMeasure&&this.delay(function(){t.lastMeasure=null,t.lastValue=performance.now()-t.startTime,console.log(a+" took "+t.lastValue.toFixed(2)+" ms"),e&&e(t.lastValue)},0)},t.a=n},,,,,function(e,t,a){"use strict";function n(e){return a.i(o.h)("div",null,a.i(o.h)(c.a,null),a.i(o.h)("br",null),a.i(o.h)("div",{className:"container"},a.i(o.h)(r.a,{history:p},a.i(o.h)(m.a,{path:"/"}),a.i(o.h)(d.a,{path:"/resume/:name?"}),a.i(o.h)(h.a,{path:"/table"}),a.i(o.h)(u.a,{path:"/about"}))))}var o=a(0),i=(a.n(o),a(4)),r=a.n(i),s=a(8),l=a.n(s),c=a(13),u=a(12),m=a(17),h=a(19),d=a(16),p=l()();t.a=n},,function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(0),s=(a.n(r),a(14)),l=a(5),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=new l.a,m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){u.stop()}},{key:"componentDidUpdate",value:function(){u.stop()}},{key:"render",value:function(e,t){return u.start("about"),a.i(r.h)("div",{className:"row"},a.i(r.h)("div",{className:"col-xs-3"}," "),a.i(r.h)("div",{className:"col-xs-6"},a.i(r.h)("p",null," "),a.i(r.h)("div",{className:"card about-card"},a.i(r.h)("div",{class:"card-up deep-purple darken-3"}),a.i(r.h)("div",{className:"avatar"},a.i(r.h)(s.a,null)),a.i(r.h)("div",{className:"card-block"},a.i(r.h)("h4",{className:"card-title text-xs-center"},"About"),a.i(r.h)("hr",null),a.i(r.h)("p",{className:"card-text text-xs-center"},"Hello Guys! This is a simple application built with ",a.i(r.h)("a",{href:"https://preactjs.com",target:"_preact"},"Preact"),"."),a.i(r.h)("div",{className:"text-xs-center"},a.i(r.h)("a",{href:"/"},"Home"))))))}}]),t}(r.Component);t.a=m},function(e,t,a){"use strict";function n(e,t){return a.i(o.h)("nav",{class:"navbar navbar-dark deep-purple"},a.i(o.h)("div",{class:"collapse navbar-toggleable-xs"},a.i(o.h)("a",{class:"navbar-brand",href:"#"},"Preact Case"),a.i(o.h)("ul",{class:"nav navbar-nav"}),a.i(o.h)("ul",{class:"nav navbar-nav float-xs-right"},a.i(o.h)(i.a,{to:"/table"},"Table"),a.i(o.h)(i.a,{to:"/about"},"About"))))}var o=a(0),i=(a.n(o),a(15));t.a=n},function(e,t,a){"use strict";function n(e){return a.i(o.h)("div",{style:i},a.i(o.h)("img",{src:"assets/img/preact.jpg"}))}var o=a(0),i=(a.n(o),{marginTop:"5px",marginLeft:"5px",width:"96px",height:"96px"});t.a=n},function(e,t,a){"use strict";function n(e){return a.i(o.h)("li",{class:"nav-item"},a.i(o.h)("a",{class:"nav-link",href:e.to},e.children))}var o=a(0);a.n(o);t.a=n},function(e,t,a){"use strict";function n(e){var t=e.name;return a.i(o.h)("div",{className:"row"},a.i(o.h)("div",{className:"col-xs-3"}," "),a.i(o.h)("div",{className:"col-xs-6"},a.i(o.h)("p",null," "),a.i(o.h)("div",{className:"card"},a.i(o.h)("div",{className:"card-block"},a.i(o.h)("h4",{className:"card-title text-xs-center"},"Resume"),a.i(o.h)("hr",null),a.i(o.h)("p",{className:"card-text text-xs-center"},"Congratulations ",t,"!"),a.i(o.h)("div",{className:"text-xs-center"},a.i(o.h)("a",{href:"/"},"Home"))))))}var o=a(0);a.n(o);t.a=n},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(0),s=(a.n(r),a(4)),l=(a.n(s),a(5)),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=new l.a,m=function(e){function t(){var e,i,r,l;n(this,t);for(var c=arguments.length,u=Array(c),m=0;m<c;m++)u[m]=arguments[m];return i=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.onNameChange=function(e){r.setState({name:e.target.value})},r.onNextHandler=function(e){e.preventDefault(),r.state.name&&a.i(s.route)("/resume/"+r.state.name)},l=i,o(r,l)}return i(t,e),c(t,[{key:"componentDidMount",value:function(){u.stop()}},{key:"componentDidUpdate",value:function(){u.stop()}},{key:"render",value:function(e,t){return u.start("simple_form"),a.i(r.h)("div",{className:"row"},a.i(r.h)("div",{className:"col-xs-3"}," "),a.i(r.h)("div",{className:"col-xs-6"},a.i(r.h)("p",null," "),a.i(r.h)("div",{className:"card card-block"},a.i(r.h)("h4",{className:"card-title text-xs-center"},"Welcome!"),a.i(r.h)("br",null),a.i(r.h)("div",{className:"md-form"},a.i(r.h)("i",{className:"fa fa-user prefix"}),a.i(r.h)("input",{type:"text",className:"form-control",value:t.name,onInput:this.onNameChange,maxLength:"30"}),a.i(r.h)("label",null,"Your Name")),a.i(r.h)("div",{className:"text-xs-center"},a.i(r.h)("button",{className:"btn btn-primary",onClick:this.onNextHandler},"Next")))),a.i(r.h)("div",{className:"col-xs-3"}," "))}}]),t}(r.Component);t.a=m},function(e,t,a){"use strict";function n(e){return a.i(r.h)("table",{className:"table"},a.i(r.h)("thead",null,a.i(r.h)(o,null)),a.i(r.h)("tbody",null,e.data.map(function(e){return a.i(r.h)(i,{item:e,key:e.id})})))}function o(e){return a.i(r.h)("tr",null,a.i(r.h)("th",null,"ID"),a.i(r.h)("th",null,"Name"),a.i(r.h)("th",null,"Email"),a.i(r.h)("th",null,"Status"))}function i(e){return a.i(r.h)("tr",null,a.i(r.h)("td",null,e.item.id),a.i(r.h)("td",null,e.item.name),a.i(r.h)("td",null,e.item.email),a.i(r.h)("td",null,e.item.status))}var r=a(0);a.n(r);t.a=n},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(0),s=(a.n(r),a(18)),l=a(20),c=a(5),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=new c.a,h=15,d=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onClear=function(e){a.setState(l.a.clear())},a.onLoad=function(e){a.setState(l.a.load())},a.state=l.a.state(),a.count=1,a.totalLoad=0,a}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.bench=setInterval(function(){e.count=e.count+1,m.delay(function(){return e.setState(l.a.load())},10),m.delay(function(){return e.setState(l.a.clear())},50),e.count>h&&(clearInterval(e.bench),m.delay(function(){return console.log("Average Load:",(e.totalLoad/h).toFixed(2),"ms")},100))},750)}},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.contacts.length>0;t?m.stop(function(t){e.totalLoad=e.totalLoad+t}):m.stop()}},{key:"render",value:function(e,t){return m.start("table_perf"),a.i(r.h)("div",{class:"row"},a.i(r.h)("button",{class:"btn btn-secondary",disabled:t.contacts.length>1,onClick:this.onLoad},"Load"),a.i(r.h)("button",{class:"btn unique-color",disabled:t.contacts.length<1,onClick:this.onClear},"Clear"),a.i(r.h)("div",null,a.i(r.h)(s.a,{data:t.contacts})))}}]),t}(r.Component);t.a=d},function(e,t,a){"use strict";var n=[{id:1,name:"John Doe",email:"john.doe@gmail.com",status:"active"},{id:2,name:"Alice Smith",email:"alicesmith@outlook.com",status:"active"},{id:3,name:"Sheldon Cooper",email:"sheldon.cooper@warner.com",status:"active"},{id:4,name:"Leonard Hofstadter",email:"leo.hofstadter@warner.com",status:"active"},{id:5,name:"Howard Wolowitz",email:"howard.wolo@warner.com",status:"active"},{id:6,name:"Amy Farrah Fowler",email:"amy.fowler@warner.com",status:"inactive"},{id:7,name:"Rajesh Koothrappali",email:"raj.koothrappali@warner.com",status:"active"},{id:8,name:"Penny",email:"penny@warner.com",status:"inactive"},{id:9,name:"Abdoral Gusmao",email:"abdoralgusmao@yahho.com",status:"inactive"},{id:10,name:"Bernadette Rostenkowski",email:"bernadette@warner.com",status:"inactive"},{id:11,name:"John Doe",email:"john.doe@gmail.com",status:"active"},{id:12,name:"Alice Smith",email:"alicesmith@outlook.com",status:"active"},{id:13,name:"Sheldon Cooper",email:"sheldon.cooper@warner.com",status:"active"},{id:14,name:"Leonard Hofstadter",email:"leo.hofstadter@warner.com",status:"active"},{id:15,name:"Howard Wolowitz",email:"howard.wolo@warner.com",status:"active"},{id:16,name:"Amy Farrah Fowler",email:"amy.fowler@warner.com",status:"inactive"},{id:17,name:"Rajesh Koothrappali",email:"raj.koothrappali@warner.com",status:"active"},{id:18,name:"Penny",email:"penny@warner.com",status:"inactive"},{id:19,name:"Abdoral Gusmao",email:"abdoralgusmao@yahho.com",status:"inactive"},{id:20,name:"Bernadette Rostenkowski",email:"bernadette@warner.com",status:"inactive"},{id:21,name:"John Doe",email:"john.doe@gmail.com",status:"active"},{id:22,name:"Alice Smith",email:"alicesmith@outlook.com",status:"active"},{id:23,name:"Sheldon Cooper",email:"sheldon.cooper@warner.com",status:"active"},{id:24,name:"Leonard Hofstadter",email:"leo.hofstadter@warner.com",status:"active"},{id:25,name:"Howard Wolowitz",email:"howard.wolo@warner.com",status:"active"},{id:26,name:"Amy Farrah Fowler",email:"amy.fowler@warner.com",status:"inactive"},{id:27,name:"Rajesh Koothrappali",email:"raj.koothrappali@warner.com",status:"active"},{id:28,name:"Penny",email:"penny@warner.com",status:"inactive"},{id:29,name:"Abdoral Gusmao",email:"abdoralgusmao@yahho.com",status:"inactive"},{id:30,name:"Bernadette Rostenkowski",email:"bernadette@warner.com",status:"inactive"},{id:31,name:"John Doe",email:"john.doe@gmail.com",status:"active"},{id:32,name:"Alice Smith",email:"alicesmith@outlook.com",status:"active"},{id:33,name:"Sheldon Cooper",email:"sheldon.cooper@warner.com",status:"active"},{id:34,name:"Leonard Hofstadter",email:"leo.hofstadter@warner.com",status:"active"},{id:35,name:"Howard Wolowitz",email:"howard.wolo@warner.com",status:"active"},{id:36,name:"Amy Farrah Fowler",email:"amy.fowler@warner.com",status:"inactive"},{id:37,name:"Rajesh Koothrappali",email:"raj.koothrappali@warner.com",status:"active"},{id:38,name:"Penny",email:"penny@warner.com",status:"inactive"},{id:39,name:"Abdoral Gusmao",email:"abdoralgusmao@yahho.com",status:"inactive"},{id:40,name:"Bernadette Rostenkowski",email:"bernadette@warner.com",status:"inactive"},{id:41,name:"John Doe",email:"john.doe@gmail.com",status:"active"},{id:42,name:"Alice Smith",email:"alicesmith@outlook.com",status:"active"},{id:43,name:"Sheldon Cooper",email:"sheldon.cooper@warner.com",status:"active"},{id:44,name:"Leonard Hofstadter",email:"leo.hofstadter@warner.com",status:"active"},{id:45,name:"Howard Wolowitz",email:"howard.wolo@warner.com",status:"active"},{id:46,name:"Amy Farrah Fowler",email:"amy.fowler@warner.com",status:"inactive"},{id:47,name:"Rajesh Koothrappali",email:"raj.koothrappali@warner.com",status:"active"},{id:48,name:"Penny",email:"penny@warner.com",status:"inactive"},{id:49,name:"Abdoral Gusmao",email:"abdoralgusmao@yahho.com",status:"inactive"},{id:50,name:"Bernadette Rostenkowski",email:"bernadette@warner.com",status:"inactive"}],o={data:[],clear:function(){return this.data=[],{contacts:this.data}},load:function(){return this.data=n.concat([]),{contacts:this.data}},state:function(){return{contacts:this.data}}};t.a=o},,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=(a.n(n),a(10));a.i(n.render)(a.i(n.h)(o.a,null),document.querySelector("#app"))}],[25]);