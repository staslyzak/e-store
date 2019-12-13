(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r});var n=function(e){return e?void 0:null},r=function(e){var a={},t=e.firstname,n=e.lastname,r=e.country,l=e.city,i=e.zip,c=e.address,o=e.email,m=e.phone,s=e.password,u=e.cardnumber,d=e.exp,p=e.cvv;return t?t.length<2&&(a.firstname="Entry is too short, please lengthen your entry"):a.firstname="Please enter your first name",n?n.length<2&&(a.lastname="Entry is too short, please lengthen your entry"):a.lastname="Please enter your last name",r?r.length<2&&(a.country="Please enter a valid country"):a.country="Please enter country",l?l.length<2&&(a.city="Please enter a valid city"):a.city="Please enter city",i?i.length<3&&(a.zip="Please enter a valid postal code"):a.zip="Please enter your postal code",c?c.length<2&&(a.address="Please enter a valid address"):a.address="Please enter your address",o?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(o)||(a.email="Please enter a valid email address"):a.email="Please enter your email address",m?m.length<=9&&(a.phone="Please enter a valid phone number"):a.phone="Please enter your phone number",s?s.length<5&&(a.password="Password is too short"):a.password="Please enter your password",(!u||u.length<16)&&(a.cardnumber="Please enter card number"),(!d||d.length<4)&&(a.exp="Please enter expiration date"),(!p||p.length<4)&&(a.cvv="Please enter security code"),a}},371:function(e,a,t){"use strict";var n=t(55),r=t(0),l=t.n(r),i=t(498);a.a=function(e){var a=e.input,t=(e.helperText,e.meta),r=t.touched,c=t.invalid,o=t.error,m=Object(n.a)(e,["input","helperText","meta"]);return l.a.createElement(i.a,Object.assign({fullWidth:!0,variant:"outlined"},a,m,{helperText:o&&r?o:null,error:r&&c}))}},373:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(494),i=t(371),c=t(370),o=t(420),m=t(374);a.a=function(e){var a=e.type;return r.a.createElement(r.a.Fragment,null,"shipping"===a&&r.a.createElement(o.a,{container:!0,spacing:1},r.a.createElement(o.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"firstname",label:"First Name",component:i.a})),r.a.createElement(o.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"lastname",label:"Last Name",component:i.a})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"address",label:"Address",component:i.a})),r.a.createElement(o.a,{item:!0,xs:12,sm:4},r.a.createElement(l.a,{name:"country",label:"Country",component:i.a})),r.a.createElement(o.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"city",label:"City",component:i.a})),r.a.createElement(o.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"zip",label:"Postal Code",inputProps:{maxLength:12},type:"tel",component:i.a})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"email",label:"Email",type:"email",component:i.a})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(l.a,Object.assign({name:"phone",label:"Phone",inputProps:{maxLength:30},type:"tel",component:i.a},m.a.phone)))),"billing"===a&&r.a.createElement(o.a,{container:!0,spacing:1},r.a.createElement(o.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"firstname",label:"First Name",variant:"outlined",component:i.a,validate:[c.a]})),r.a.createElement(o.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"lastname",label:"Last Name",component:i.a,validate:[c.a]})),r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"address",label:"Address",component:i.a,validate:[c.a]})),r.a.createElement(o.a,{item:!0,xs:12,sm:4},r.a.createElement(l.a,{name:"country",label:"Country",component:i.a,validate:[c.a]})),r.a.createElement(o.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"city",label:"City",component:i.a,validate:[c.a]})),r.a.createElement(o.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"zip",label:"Postal Code",inputProps:{maxLength:12},type:"tel",component:i.a,validate:[c.a]}))))}},374:function(e,a,t){"use strict";var n=t(380),r={phone:Object(n.createTextMask)({guide:!1,pattern:"9 (99) 999 99 99"}),cardnumber:Object(n.createTextMask)({guide:!1,pattern:"9999 9999 9999 9999"}),cardexp:Object(n.createTextMask)({guide:!1,pattern:"99/99"})};a.a=r},376:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=(t(377),t(19)),i=t(96);a.a=function(e){var a=e.info,t=e.withUrl,n=e.currency;return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("div",{className:"checkoutProduct-img"},t?r.a.createElement(l.b,{to:a.url},r.a.createElement("img",{src:a.img,alt:"img"})):r.a.createElement("img",{src:a.img,alt:"img"})),r.a.createElement("div",{className:"checkoutProduct-info"},r.a.createElement(i.a,{component:"div",color:"textPrimary",className:"checkoutProduct-info-title"},t?r.a.createElement(l.b,{to:a.url},a.title):a.title),r.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"div"},"Gender: ",a.gender,'"s'),r.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"div"},"Color: ",a.color),r.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"div"},"Size: ",a.size),r.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"div"},"Qty: ",a.qty," / ",n,a.price),r.a.createElement(i.a,{variant:"body2",color:"textPrimary",component:"div"},n,a.qty*a.price)))}},377:function(e,a,t){},378:function(e,a,t){"use strict";var n=t(18),r=t(5),l=t(55),i=t(0),c=t.n(i),o=(t(379),t(96));a.a=function(e){var a,t=e.title,i=e.content,m=void 0===i?{}:i,s=e.children;return c.a.createElement("div",{className:"formPreview"},t&&c.a.createElement(o.a,{gutterBottom:!0,className:"formPreview-title"},t),c.a.createElement("div",null,(a=function(e){var a=e.firstname,t=e.lastname,n=Object(l.a)(e,["firstname","lastname"]);return a||t?Object(r.a)({fullname:"".concat(a," ").concat(t)},n):n}(m),Object.entries(a).map(function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return c.a.createElement(o.a,{variant:"body2",color:"textSecondary",key:t,children:r})}))),s)}},379:function(e,a,t){},416:function(e,a,t){},417:function(e,a,t){},418:function(e,a,t){},497:function(e,a,t){"use strict";t.r(a);var n=t(16),r=t.n(n),l=t(34),i=t(5),c=t(18),o=t(0),m=t.n(o),s=t(53),u=t(25),d=t(495),p=t(487),f=t(464),v=(t(416),t(96)),E=t(387),h=t(12),b=t(376),g=function(e){var a=e.orders,t=e.currency;return m.a.createElement("div",{className:"orderPage"},m.a.createElement(v.a,{variant:"h5",component:"h2",align:"center",className:"orderPage-title",children:"My Orders"}),m.a.createElement("div",null,a.length?a.map(function(e,a){return m.a.createElement(E.a,{className:"orderPage-block",key:a},e.map(function(e,a){return m.a.createElement(b.a,{key:a,withUrl:!0,info:e,currency:t})}),m.a.createElement(v.a,{variant:"h6",component:"div",className:"orderPage-total"},"Total: ",m.a.createElement("span",null,t,Object(h.k)(e))))}):m.a.createElement(v.a,{variant:"subtitle1",component:"div",align:"center",children:"You don't have any orders yet"})))},y=(t(417),t(462)),P=t(463),x=t(339),O=t(493),j=t(370),w=t(55),N=(t(418),t(378)),S=t(373),k=function(e){var a=e.handleSubmit,t=e.invalid,n=e.onSubmit,i=e.initialValues,s=e.preview,u=e.formType,d=Object(w.a)(e,["handleSubmit","invalid","onSubmit","initialValues","preview","formType"]),p=Object(o.useState)(!1),f=Object(c.a)(p,2),E=f[0],b=f[1],g=Object(h.h)(i),y=function(){var e=Object(l.a)(r.a.mark(function e(a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(a);case 2:b(!1);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return m.a.createElement("div",{className:"ProfileForm ".concat(!g&&!E&&"toAdd")},m.a.createElement(v.a,{variant:"h6",className:"ProfileForm-header"},d.title),m.a.createElement("div",{className:"ProfileForm-preview"},E?m.a.createElement("form",{onSubmit:a(y)},m.a.createElement(S.a,{type:u}),m.a.createElement("div",{className:"formBtns"},m.a.createElement(x.a,{variant:"contained",onClick:function(){return b(!1)},children:"Cancel"}),m.a.createElement(x.a,{variant:"contained",color:"secondary",type:"submit",disabled:t,children:"Save"}))):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,g&&m.a.createElement(N.a,{content:s})),m.a.createElement(x.a,{variant:"contained",className:"openForm",onClick:function(){return b(!0)}},g?"Edit":"Add"))))},C=Object(O.a)({form:"profile-shipping",validate:j.b,enableReinitialize:!0})(function(e){return m.a.createElement(k,e)}),B=Object(O.a)({form:"profile-billing",validate:j.b,enableReinitialize:!0})(function(e){return m.a.createElement(k,e)}),T=function(e){var a=e.fullname,t=e.userShipping,n=e.userBilling,r=e.setShipping,l=e.setBilling,i=Object(o.useState)(!0),s=Object(c.a)(i,2),u=s[0],d=s[1];return m.a.createElement("div",{className:"profilePage"},m.a.createElement(v.a,{variant:"h5",component:"h2",align:"center",className:"profilePage-title"},"Hi, ",a),m.a.createElement("div",{className:"profilePage-forms"},m.a.createElement(x.a,{disableRipple:!0,className:"profilePage-customExpand",onClick:function(){return d(!u)}},"Your Addresses",u?m.a.createElement(y.a,null):m.a.createElement(P.a,null)),u&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"profilePage-forms-form"},m.a.createElement(C,{formType:"shipping",preview:t,initialValues:t,onSubmit:r,title:"Shipping Address"})),m.a.createElement("div",{className:"profilePage-forms-form"},m.a.createElement(B,{formType:"billing",preview:n,initialValues:n,onSubmit:l,title:"Billing Address"})))))},A=t(81),z=Object(f.a)({profile:{padding:"60px 12px",maxWidth:1200,margin:"0 auto"}});a.default=Object(u.b)(function(e){return{userShipping:e.auth.addresses.shipping,userBilling:e.auth.addresses.billing,fullname:e.auth.fullname,currency:e.products.currency,orders:e.auth.orders}},function(e){return{setShipping:function(a){return e(Object(A.f)(a))},setBilling:function(a){return e(Object(A.e)(a))}}})(function(e){var a=e.match,t=e.history,n=e.location,u=e.currency,f=e.orders,v=e.userShipping,E=e.userBilling,h=e.fullname,b=e.setShipping,y=e.setBilling,P=z(),x=function(e,a,t){return Object.entries(a).map(function(a){var n=Object(c.a)(a,2),r=n[0],l=n[1];return Object(i.a)({mode:r},Object(s.e)(t,{path:"/".concat(e).concat(l),exact:!0})||{})}).find(function(e){return e.path})||{}},O={preview:"",orders:"/orders"},j=Object(o.useState)(Object(i.a)({},x("profile",O,n.pathname))),w=Object(c.a)(j,2),N=w[0],S=w[1],k=function(){var e=Object(l.a)(r.a.mark(function e(a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.push(a);case 2:return e.next=4,x("profile",O,a);case 4:return n=e.sent,e.next=7,S(Object(i.a)({},n));case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){S(x("profile",O,n.pathname))},[n.pathname,O]),m.a.createElement("div",{className:P.profile},m.a.createElement(d.a,{variant:"fullWidth",value:n.pathname,onChange:function(e,a){return k(a)}},m.a.createElement(p.a,{disableRipple:!0,fullWidth:!0,value:a.url,label:"Profile"}),m.a.createElement(p.a,{disableRipple:!0,fullWidth:!0,value:"".concat(a.url,"/orders"),label:"Orders"})),"preview"===N.mode?m.a.createElement(T,{fullname:h,userShipping:v,userBilling:E,setShipping:b,setBilling:y}):N.mode=m.a.createElement(g,{currency:u,orders:f}))})}}]);
//# sourceMappingURL=6.7a6188a2.chunk.js.map