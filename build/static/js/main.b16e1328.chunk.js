(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.f3ad7664.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1),o=function(e){var t=e.image,a=e.name,n=e.id,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:a})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,a),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{to:"/cocktail/".concat(n),className:"btn btn-primary btn-details"},"Details")))},m=function(){return c.a.createElement("div",{className:"loader"})},u=a(9),E=a.n(u),d=a(11),p=a(8),f=c.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(p.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(p.a)(i,2),m=o[0],u=o[1],b=Object(n.useState)([]),h=Object(p.a)(b,2),g=h[0],k=h[1],v=Object(n.useCallback)(Object(d.a)(E.a.mark((function e(){var t,a,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.drinks)?(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),k(c)):k([]),s(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),s(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[m]);return Object(n.useEffect)((function(){v()}),[m,v]),c.a.createElement(f.Provider,{value:{loading:l,cocktails:g,setSearchTerm:u,setLoading:s}},t)},h=function(){return Object(n.useContext)(f)},g=function(){var e=h(),t=e.cocktails,a=e.loading;return console.log(t),a?c.a.createElement(m,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"no cocktails matched your search criteria"):c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section-title"},"Cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))))},k=function(){var e=h().setSearchTerm,t=c.a.useRef("");c.a.useEffect((function(){t.current.focus()}),[]);return c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"searchTerm"},"Search your favourite cocktail"),c.a.createElement("input",{type:"text",id:"searchTerm",ref:t,onChange:function(){e(t.current.value)}}))))},v=function(){return c.a.createElement("main",null,c.a.createElement(k,null),c.a.createElement(g,null))},N=function(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"About us"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam alias temporibus omnis accusantium voluptas, consectetur quo nulla explicabo nobis necessitatibus facilis minima architecto ut repudiandae nostrum quam harum esse sequi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aut inventore, fugit quod quam magnam iusto? Nisi pariatur quo cumque, repellendus, officiis totam illo cupiditate quasi nam rem esse magni!Lorem"))},j=function(){var e=c.a.useState(null),t=Object(p.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),l=Object(p.a)(r,2),o=l[0],u=l[1],f=Object(i.f)().id,b=c.a.useCallback(Object(d.a)(E.a.mark((function e(){var t,a,c,r,l,s,i,o,m,d,p,b,h,g,k;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=").concat(f));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c=a.drinks,console.log(c),c?(r=c[0],l=r.strDrink,s=r.strDrinkThumb,i=r.strAlcoholic,o=r.strCategory,m=r.strInstructions,d=r.strGlass,p=r.strIngredient1,b=r.strIngredient2,h=r.strIngredient3,g=r.strIngredient4,k=r.strIngredient5,n({name:l,image:s,info:i,category:o,instructions:m,glass:d,ingredients:[p,b,h,g,k]})):n(null),u(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),u(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[f]);if(c.a.useEffect((function(){b()}),[f,b]),o)return c.a.createElement(m,null);if(!a)return c.a.createElement("h2",{className:"section-title"},"no cocktail to display");var h=a.name,g=a.image,k=a.category,v=a.info,N=a.glass,j=a.instructions,x=a.ingredients;return c.a.createElement("section",{className:"section cocktail-section"},c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home"),c.a.createElement("h2",{className:"section-title"},h),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:g,alt:h}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name :")," ",h),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category :")," ",k),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info :")," ",v),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass :")," ",N),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructons :")," ",j),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients :"),x.map((function(e,t){return e?c.a.createElement("span",{key:t}," ",e):null}))))))},x=function(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"oops! its a dead end"),c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"Home Page")))},O=a(19),y=a.n(O),w=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:y.a,alt:"cocktail db logo",className:"logo"})),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/about"},"About")))))};var S=function(){return c.a.createElement(s.a,null,c.a.createElement(w,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/about"},c.a.createElement(N,null)),c.a.createElement(i.a,{path:"/cocktail/:id"},c.a.createElement(j,null)),c.a.createElement(i.a,{path:"*"},c.a.createElement(x,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null,c.a.createElement(S,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b16e1328.chunk.js.map