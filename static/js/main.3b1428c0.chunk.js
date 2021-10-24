(this["webpackJsonpui-hands-on"]=this["webpackJsonpui-hands-on"]||[]).push([[0],{26:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(18),i=c.n(n),r=(c(26),c(17)),l=c(4),o=c(3),d=c(7),j=c(8),A=c(10),h=c(9),m=c(11),u=c(1),b=function(e){Object(A.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={isLoaded:!1,error:"",_search_product:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,_search_product:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"filter",value:function(e){var t,c=e.target.value.toUpperCase(),s=document.getElementsByClassName("search-filter-data");for(t=0;t<s.length;t++){(s[t].textContent||s[t].innerText).toUpperCase().indexOf(c)>-1?s[t].style.display="block":s[t].style.display="none"}}},{key:"closeFilter",value:function(e,t){for(var c=document.getElementById("search-product-ip"),s=document.getElementsByClassName("search-filter-data"),a=0;a<s.length;a++)s[a].style.display="none";c.value=t.target.innerText.toUpperCase(),window.location.href="/products/".concat(e)}},{key:"render",value:function(){var e=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"search-product",children:[Object(u.jsxs)("div",{className:"search-input",children:[Object(u.jsx)("span",{className:"search-icon",children:Object(u.jsx)(m.c,{})}),Object(u.jsx)("input",{onChange:this.filter.bind(this),type:"text",placeholder:"Search Product",className:"search-ip",id:"search-product-ip"})]}),Object(u.jsx)("div",{className:"search-drop-down",children:this.state._search_product.map((function(t,c){return Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{onClick:e.closeFilter.bind(e,t.id),to:"/products/".concat(t.id),className:"search-filter-data",children:t.title})},c)}))})]})})}}]),c}(a.a.Component);function p(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{children:Object(u.jsx)("div",{className:"header-wrapper",children:Object(u.jsxs)("div",{className:"header-inner-section",children:[Object(u.jsx)("div",{className:"logo-Section",children:Object(u.jsx)(l.c,{to:"/",className:"logo",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"Shopping"})})}),Object(u.jsxs)("div",{className:"navigation-links",children:[Object(u.jsx)(b,{}),Object(u.jsx)("nav",{style:{display:"none"},children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{className:"nav-link",to:"/home",children:Object(u.jsx)("span",{children:"Home"})})}),Object(u.jsx)("li",{style:{display:"none"},children:Object(u.jsx)(l.c,{className:"nav-link",to:"/cart",children:Object(u.jsx)("span",{children:"Cart"})})}),Object(u.jsx)("li",{style:{display:"none"},children:Object(u.jsx)(l.c,{className:"nav-link",to:"/product-detail",children:Object(u.jsx)("span",{children:"Product Detail"})})}),Object(u.jsx)("li",{style:{display:"none"},children:Object(u.jsx)(l.c,{className:"nav-link",to:"/profile",children:Object(u.jsx)("span",{children:"Profile"})})})]})})]}),Object(u.jsx)("div",{className:"cart-profile",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{className:"link-icons",to:"/cart",children:Object(u.jsxs)("div",{className:"cart-section-header",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAQAAAAa7ikwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflChcVHQIGrDu9AAACEklEQVRIx61UPUsDQRSct4mViFoIEVMIGixOGxEPtJIEJKgIdipoY2PlHwiCjX9AsLcRxFJBxQ9i0kStLfwIthL0QBtF8cZijYfk7tzTDBzH7s7uvHlv9wm5sgIODaEKub8H19ZEnZ+jHiCfnliD11dyeLge5wuZTgMDA3oYiwEzM4BlgcfHojKZurj46WhkRLt4e6Pb1FR/ATceJx1Hi0xO+gfR2ur/iRi62NzUAuvrtWtnZwzE+ztZKJBjY78ITE+TJN1yudZhuUwTuLkcAIi/QEsLUKkADQ1gT4+o62tPoLkZ0t3tH1oyCSwuAqOjAAmk0yEu8nkdytJSpBpShNzd1Xt3dkKKnctp0v5+FAG9N5PRex8fQ0i2rUkvL2RjYzQXXV1fhXBDSLHY93V1Jyb+JkCqIJLIxweQz+tBNhs1TVWo8OWjI/0fH/+rQLhVN5XyLrZlmaeov7/abkIdiLq5Ae7u9Ghuzjy0r5qx9qH6uFhd9ZrfwgKpAoMilSLn53W7J8nl5V+bk37VxSLQ26tnnp/Bhwd/y21tQLUDX14Ctm2Y00SCPDgw6kEk6R4ekokEENCLgtM1OAixbaCjw5/hOEChIFIqRTn3XzB2QM7OAskkeHIi6uIimDc1BaRSQKkkcnpqmJq+Pi/BV1fBh7e3ezzHAYC4mc/bW3B7G9LZCWxtBRMrFWBjA7QsyN4eAHwCu2zdHIiy5fUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAtMjNUMjE6Mjk6MDIrMDA6MDCMOYNLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEwLTIzVDIxOjI5OjAyKzAwOjAw/WQ79wAAAABJRU5ErkJggg==",alt:"Cart"}),Object(u.jsx)("span",{className:"cart-lable-sp",children:"Cart"}),e.CartCount?Object(u.jsx)("span",{id:"product-count",className:"cart-product-count",children:e.CartCount}):null]})})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.c,{className:"link-icons",to:"/my-profile",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflChcVHzocmOGhAAAFLElEQVR42t2bTUhUXxjGnzPiB5JK2mghmBWGNWbTx0KjUCjaGDGLCqEgCZJchBIEtUtatakscBFhH1AUtW0ZRrTKRCjHLCtzqimaFE0dnbTz/BfHQR2nvzNz5t5jPbu5M3Pu+3vm3PPxvmcEbBKZmwvW1ADV1UB5OVBcDJGTo94cGQE+fgRevgSePIF49EiIoSG7YrMY3O0m790jJycZsyYn1XfcbtPxJw4unU7y1i1SytjBIyUlefMmpdNpmic+eFZXk35/4uCR+vKFrKoyzRUjfG0tGQolDz6sUIisrTXNtwj8/v3k1FTy4cOanqY8cMA0Z3R4WV5OBoPWwYcVDFJu2mSaNwI+PZ3s6bEePiyvlzItzTT3rAE8e9Y++LDOnDHNreBldjY5NGS/AcPDlDMLKQ059C2oqwOWL7ff+pwc4OhR++8bIcqODvt//bCeP9eNX+jB5+dDfPsGCK12NCIgWFAgHIFAoi3oPQKistIcPAAIAbFjh04LmmNAaak5+OTEoGnAypWm8XVj0DQgM9M0PrhsmUEDQiHT/BATEwYNGBw0za8bg6YBb96YxteNQdOAjg7T+ID+YkhLlO/fG1sIynfvdOPX3wuIu3eNuW/y3mFRFhVZkwJbTKEQZVGRbvzaPUA4fD7gxg37rW9rU/deAqJcsYL88cO+Zz8QIPPyTHNHmLBvn14NIGZ6SXo8pnmjm8DmZusNOHfONOf/myAvXrQO/tIl03yxmcBTp5JbH/j1i2xqMs0VpwmVlWR3tz78q1dkRYVpnsRMkKmpZEMD2d8fP3h/P3niBGVqqmkOfSPocFDu2UO2tlK+fk1OTy8Enp5W77W2qs86kpCxXlxG8nmU6enA6tUQWVnqwugoMDAgHPbnF5JiAFlaCmzZAmzcCIyPg21twvH9e3JNczohamuB/Hygpwfo6hKit9duw+YEVF5OtrREf75//iSbmsiUFH1zU1LIxkZyZCT6OHH5sq3FUsqdOynb22MbyDo7SY8nESMUuMej2ohB8vFjS2cLdeTl/v3EpjKfj2xupty1i8zI+DN0Rob6THOz+k68kpK8cyeefUJMYwDl3r0Qt28DBQX6VoZCQG8vGAhAzFR06HRCOJ0qx5+ern8Pvx84ckSI9nbtpshjx9RK7G/T1BRZX68J39hoGkNPUpINDQnCHz5sz/bWav3+TR46FCe8y0WOj5sOPWmSY2OkyxWNdcEgSJmWBtHZCZSVaQ8gS0peL7htW+Rqc+F6W5w+/e/BA4DLBbHwXNG8HkDm5qpDyzNr9H9OwSBYXDz3QEVED6iv/3fhASAzE+L48blX5huw1DKtloic+yriEVi1CujuBnJzTYdpDfuHD8DmzcIxNha+NK8HCPH1K3DypOk4rZGUQF3dXPg/inz40PTUnXxduBCzV5RZWaTXazrk5Onp07jPFpMbNpDDw6ZD11dfX8JlNLKiQmV3/lZ9/kyuXas1dJBVVdHTUUtdfr/KVSZBlGVl5MCAaaTY1d9PWVKSFPjZnlBYSNnVZRptcT17Rlp0gFPNDkt1ipSSvHrVln+SUB48SA4Omkaeld9P1tRYDj7PBOblqbpAtDKXXQqFyJYWyuxsW+HnG+F2kw8eqNSTXZqcpLx2jVyzxhj4AiPk+vXq1wgErAP3+cjz59WmbYmKMi1NVXSuX1cLEV29fUteuULu3m1Fxdjy6jBlSQnE9u3g1q0Q69YBRUVAYaEqgOTkqF3a6CgwMQH6fBA+H9DXB3R2gi9eCMenT1bG9x9cA9u3cWcA1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yM1QyMTozMTo1OCswMDowMLLwTVUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjNUMjE6MzE6NTgrMDA6MDDDrfXpAAAAAElFTkSuQmCC",alt:"Profile"})})})]})})]})})})})}var O=c.p+"static/media/electronics-img.a8fb2045.jpg",x=c.p+"static/media/jewelery.6054ca96.jpeg",g=c.p+"static/media/mens-clothing.3f14b9bd.jpg",v=c.p+"static/media/womens-clothing.b0bf8796.jpg",N=c.p+"static/media/banner-hero.2acaffe2.png",f=function(e){Object(A.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={items:[],isLoaded:!1,error:null},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products/categories").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),document.getElementById("search-product-ip").value=""}},{key:"render",value:function(){var e=[O,x,g,v];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"home-Page-wrapper",children:Object(u.jsxs)("div",{className:"inner-section",children:[Object(u.jsx)("div",{className:"banner-section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"banner-col col col-lg-6 col-md-6 col-sm-12 col-xs-12",children:[Object(u.jsx)("h2",{className:"online-store",children:"Online Store"}),Object(u.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),Object(u.jsx)("a",{className:"shop-now-btn",href:"#product",children:"Shop Now"})]}),Object(u.jsx)("div",{className:"banner-hero-col col col-lg-6 col-md-6 col-sm-12 col-xs-12",children:Object(u.jsx)("img",{src:N,alt:"Banner-Hero"})})]})})}),Object(u.jsx)("div",{className:"container",id:"product",children:Object(u.jsx)("div",{className:"product-section",children:Object(u.jsx)("div",{className:"row",children:this.state.items.map((function(t,c){return Object(u.jsx)("div",{className:"col col-lg-3 col-md-6 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"categories box",children:[Object(u.jsx)("div",{className:"img-section",children:Object(u.jsx)("img",{src:e[c],alt:t.toUpperCase()})}),Object(u.jsx)("h3",{className:"categories-head",children:t.toUpperCase()}),Object(u.jsx)("div",{className:"view-all",children:Object(u.jsx)(l.b,{to:"/product-detail/".concat(t),className:"view-all-btn",children:"View All"})})]})},c)}))})})})]})})})}}]),c}(a.a.Component),B=c(21),w=function(e){Object(A.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={__single__product_Details:{},isLoaded:!1,error:null,_product_rating:{}},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/")[4];fetch("https://fakestoreapi.com/products/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,__single__product_Details:t,_product_rating:t.rating})}),(function(t){e.setState({isLoaded:!0,error:t})})),document.getElementById("search-product-ip").value=""}},{key:"add_cart_in_product",value:function(){this.props.add_cart_count(this.state.__single__product_Details)}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"single-product-wrapper",children:Object(u.jsx)("div",{className:"single-product",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"navication-to-home col col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:"/"})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:"Products"})})]})}),Object(u.jsx)("div",{className:"product-img-des-col col col-lg-6 col-md-6 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"img-section",children:[Object(u.jsx)("div",{className:"sm-img",children:Object(u.jsx)("img",{src:this.state.__single__product_Details.image,alt:this.state.__single__product_Details.image})}),Object(u.jsx)("div",{className:"lg-img",children:Object(u.jsx)("img",{src:this.state.__single__product_Details.image,alt:this.state.__single__product_Details.image})})]})}),Object(u.jsxs)("div",{className:"description-col col col-lg-6 col-md-6 col-sm-12 col-xs-12",children:[Object(u.jsxs)("div",{className:"description-section",children:[Object(u.jsxs)("h3",{className:"category",children:[this.state.__single__product_Details.category,this.state.__single__product_Details.id]}),Object(u.jsx)("h2",{className:"product-name",children:this.state.__single__product_Details.title}),Object(u.jsx)("div",{className:"product-price",children:Object(u.jsxs)("p",{className:"price-pro",children:[Object(u.jsx)("span",{className:"lable-icon",children:Object(u.jsx)(B.a,{})}),Object(u.jsx)("span",{className:"p-price",children:this.state.__single__product_Details.price})]})}),Object(u.jsx)("div",{className:"rating",children:Object(u.jsxs)("div",{className:"product-rating",children:[Object(u.jsxs)("p",{className:"rate",children:[Object(u.jsx)("span",{className:"rate-no",children:this.state._product_rating.rate}),Object(u.jsx)("span",{className:"rate-icon",children:Object(u.jsx)(m.d,{})})]}),Object(u.jsx)("p",{className:"rating-count",children:Object(u.jsxs)("span",{className:"count-no",children:[this.state._product_rating.count," ratings"]})})]})}),Object(u.jsx)("p",{className:"description-p",children:this.state.__single__product_Details.description})]}),Object(u.jsxs)("div",{className:"add-cart-buy-button",children:[Object(u.jsx)("button",{onClick:this.add_cart_in_product.bind(this),className:"add-buy-btn add-cart",children:"Add Cart"}),Object(u.jsx)("button",{className:"add-buy-btn buy-now",children:"Buy Now"})]})]})]})})})})})}}]),c}(a.a.Component),C=function(e){Object(A.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={__product_Details:[],isLoaded:!1,error:null,_lovite_icon:!1,url:""},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/")[4];fetch("https://fakestoreapi.com/products/category/".concat(t)).then((function(e){return e.json()})).then((function(c){e.setState({isLoaded:!0,__product_Details:c,url:t.split("%20")})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"_loveit",value:function(e){e.preventDefault(),this.setState({_lovite_icon:!this.state._lovite_icon})}},{key:"render",value:function(){var e=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"product-img",children:Object(u.jsx)("div",{className:"all-product-page",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"navication-to-home col col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{children:"/"})}),Object(u.jsx)("li",{children:Object(u.jsxs)("span",{children:["Category /  ",Object(u.jsx)("strong",{children:this.state.url})]})})]})}),this.state.__product_Details.map((function(t,c){return Object(u.jsx)("div",{className:"product-each col col-lg-3 col-md-6 col-sm-12 col-xs-12",children:Object(u.jsx)("div",{className:"inner-section",children:Object(u.jsxs)(l.b,{className:"product",to:"/products/".concat(t.id),children:[Object(u.jsx)("span",{onClick:e._loveit.bind(e),className:"icon",children:!1===e.state._lovite_icon?Object(u.jsx)(m.b,{}):Object(u.jsx)(m.a,{})}),Object(u.jsx)("span",{style:{display:"none"},children:t.id}),Object(u.jsx)("img",{className:"product-img",src:t.image,alt:t.title}),Object(u.jsxs)("p",{className:"price",children:[Object(u.jsx)("span",{className:"lable",children:"Price: "}),t.price]}),Object(u.jsxs)("div",{className:"product-rating",children:[Object(u.jsxs)("p",{className:"rate",children:[Object(u.jsx)("span",{className:"rate-no",children:t.rating.rate}),Object(u.jsx)("span",{className:"rate-icon",children:Object(u.jsx)(m.d,{})})]}),Object(u.jsx)("p",{className:"rating-count",children:Object(u.jsxs)("span",{className:"count-no",children:[t.rating.count," ratings"]})})]}),Object(u.jsx)("h6",{className:"product-name",children:t.title})]})})},t.id)}))]})})})})})}}]),c}(a.a.Component),D=function(e){Object(A.a)(c,e);var t=Object(h.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={__cart_count:0},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:"Myprofile"})})}}]),c}(a.a.Component);c(36);var y=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),d=i[0],j=i[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p,{CartCount:c,products_detail:d})}),Object(u.jsx)("div",{className:"site-wrapper",children:Object(u.jsx)("div",{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(u.jsx)(o.a,{path:"/home",component:f}),Object(u.jsx)(o.a,{path:"/products/",children:Object(u.jsx)(w,{add_cart_count:function(e){a(c+1),j(e),console.log(d)}})}),Object(u.jsx)(o.a,{path:"/product-detail",component:C}),Object(u.jsx)(o.a,{path:"/my-profile",component:D})]})})})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.3b1428c0.chunk.js.map