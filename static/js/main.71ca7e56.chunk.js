(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"CartItem_item__1Dvhu",details:"CartItem_details__1yovy",quantity:"CartItem_quantity__klrEg",price:"CartItem_price__Q_Asc",itemprice:"CartItem_itemprice__3k7-K",actions:"CartItem_actions__RKmYk"}},function(t,e,n){t.exports={"cart-items":"Cart_cart-items__2aZbG",total:"Cart_total__2-Kva",actions:"Cart_actions__2gl7u","button--alt":"Cart_button--alt__1_blG",button:"Cart_button__1G5ua"}},,function(t,e,n){t.exports={backdrop:"orderCart_backdrop__2g5Js",modal:"orderCart_modal__3WcqW","slide-down":"orderCart_slide-down__2w1qs"}},function(t,e,n){t.exports={button:"navigationcartbutton_button__1MN1f",icon:"navigationcartbutton_icon__X8x-y",badge:"navigationcartbutton_badge__1g6uz",bump:"navigationcartbutton_bump__3-Z4c"}},,,,function(t,e,n){t.exports={product:"product1_product__1BEnz",h2:"product1_h2__fKpaw"}},function(t,e,n){t.exports={product:"product2_product__39NU3",h2:"product2_h2__v_NUm"}},function(t,e,n){t.exports={footer:"footer_footer__6TDlk"}},function(t,e,n){t.exports={eachItem:"eachItem_eachItem__3lgoD",button:"eachItem_button__1uBtS"}},function(t,e,n){t.exports={header:"navigation_header__BeeIo",active:"navigation_active__15yEQ"}},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(2),o=n(17),r=n(1),s=n(14),l=n.n(s),u=n(0),d=function(){return Object(u.jsx)("div",{className:l.a.footer,children:Object(u.jsx)("p",{children:"created by Mandeep for fun"})})},m=n(5),j=n.n(m),b=n(7),h=n.n(b),x=function(t){return Object(u.jsx)("div",{className:h.a.backdrop,onClick:t.onCl})},_=function(t){return Object(u.jsx)("div",{className:h.a.modal,children:Object(u.jsx)("div",{className:h.a.content,children:t.children})})},p=document.getElementById("overlays"),y=function(t){return Object(u.jsxs)(r.Fragment,{children:[i.a.createPortal(Object(u.jsx)(x,{onCl:t.onclose}),p),i.a.createPortal(Object(u.jsx)(_,{children:t.children}),p)]})},O=n(6),f=Object(O.b)({name:"CartList",initialState:{itemlist:[],totalQuantity:0},reducers:{addItemToCart:function(t,e){var n=e.payload,c=t.itemlist.find((function(t){return t.id===n.id}));c?(c.quantity++,c.totalPrice=c.totalPrice+n.price,t.totalQuantity++):(t.itemlist.push({key:n.key,id:n.id,price:n.price,quantity:1,totalPrice:n.price,name:n.name}),t.totalQuantity++)},removeItemFromCart:function(t,e){var n=e.payload,c=t.itemlist.find((function(t){return t.id===n}));t.totalQuantity>0&&t.totalQuantity--,1===c.quantity?1===t.itemlist.length?t.itemlist=[]:t.itemlist=t.itemlist.filter((function(t){return t.id!==n})):(c.quantity--,c.totalPrice=c.totalPrice-c.price)}}}),v=f.actions,k=f,g=n(4),C=n.n(g),q=function(t){var e=t.item,n=e.id,c=e.key,i=e.name,o=e.quantity,r=e.total,s=e.price,l=Object(a.b)();return Object(u.jsxs)("li",{className:C.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{className:C.a.price,children:["Rs ",r.toFixed(2)," ",Object(u.jsxs)("span",{className:C.a.itemprice,children:["(Rs",s.toFixed(2),"/item)"]})]})]}),Object(u.jsxs)("div",{className:C.a.details,children:[Object(u.jsxs)("div",{className:C.a.quantity,children:["x ",Object(u.jsx)("span",{children:o})]}),Object(u.jsxs)("div",{className:C.a.actions,children:[Object(u.jsx)("button",{onClick:function(){l(v.removeItemFromCart(n))},children:"-"}),Object(u.jsx)("button",{onClick:function(){l(v.addItemToCart({id:n,key:c,name:i,price:s}))},children:"+"})]})]})]})},N=function(t){var e=Object(a.c)((function(t){return t.cart.itemlist})),n=0;return e.map((function(t){return n+=t.totalPrice})),Object(u.jsxs)(y,{onclose:t.onclosecart,children:[e.map((function(t){return Object(u.jsx)(q,{item:{id:t.id,key:t.id,name:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)})),Object(u.jsxs)("div",{className:j.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:j.a.actions,children:[Object(u.jsx)("button",{onClick:t.onclosecart,className:j.a["button--alt"],children:"close"}),Object(u.jsx)("button",{className:j.a.button,children:"order"})]})]})},I=n(12),w=n.n(I),B=n(15),P=n.n(B),F=function(t){var e=Object(a.b)();return Object(u.jsxs)("div",{id:t.id,className:P.a.eachItem,children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsx)("h4",{children:t.volume}),Object(u.jsx)("h3",{children:t.cost}),Object(u.jsx)("button",{onClick:function(){e(v.addItemToCart({id:t.id,key:t.key,name:t.name,price:t.cost}))},style:{color:"green"},children:" buy"})]},t.id)},Q=[{id:1,key:1,name:"Applejuice",cost:40,quantity:1,volume:"1 liter"},{id:2,key:2,name:"Mangojuice",cost:30,quantity:1,volume:"750 ml"},{id:3,key:3,name:"Mixjuice",cost:40,quantity:1,volume:"1 liter"},{id:4,key:4,name:"Colddrink",cost:50,quantity:1,volume:"1.5 liter"},{id:5,key:5,name:"Coffee",cost:25,quantity:1,volume:"250 ml"},{id:6,key:6,name:"liquor",cost:400,quantity:1,volume:"750 ml"}],A=function(){return Q.map((function(t){return Object(u.jsx)(F,{id:t.id,name:t.name,cost:t.cost,quantity:t.quantity,volume:t.volume},t.key)}))},M=function(){return Object(u.jsxs)("div",{style:{minWidth:"350px"},className:w.a.product,children:[Object(u.jsx)("h2",{className:w.a.h2,children:"Beverages"}),Object(u.jsx)(A,{})]})},T=n(13),z=n.n(T),K=[{id:7,key:7,name:"Biscuit",cost:20,quantity:1,volume:"1 packet"},{id:8,key:8,name:"Noodles",cost:30,quantity:1,volume:"1 packet"},{id:9,key:9,name:"Rice",cost:80,quantity:1,volume:"1 Kg"},{id:10,key:10,name:"Wheat",cost:50,quantity:1,volume:"1 Kg"},{id:11,key:11,name:"Namkeen",cost:75,quantity:1,volume:"1 packet"},{id:12,key:12,name:"Pulses",cost:150,quantity:1,volume:"250 gm"}],W=function(){return K.map((function(t){return Object(u.jsx)(F,{id:t.id,name:t.name,cost:t.cost,quantity:t.quantity,volume:t.volume},t.key)}))},E=function(){return Object(u.jsxs)("div",{style:{minWidth:"350px"},className:z.a.product,children:[Object(u.jsx)("h2",{className:z.a.h2,children:"CeralsAndFood"}),Object(u.jsx)(W,{})]})},H=n.p+"static/media/img.0a944dd0.jpg",R=n(16),L=n.n(R),S=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},D=n(8),G=n.n(D),J=function(t){var e=Object(a.c)((function(t){return t.cart.totalQuantity}));return Object(u.jsxs)("button",{onClick:t.onClick,className:G.a.button,children:[Object(u.jsx)("span",{className:G.a.icon,children:Object(u.jsx)(S,{})}),Object(u.jsx)("span",{children:"your basket"}),Object(u.jsx)("span",{className:G.a.badge,children:e})]})},U=function(t){return Object(u.jsxs)("header",{className:L.a.header,children:[Object(u.jsx)("h1",{children:"Your Basket"}),Object(u.jsx)("a",{href:"#Login",children:"Login"}),Object(u.jsx)(J,{onClick:t.onshowcart})]})},Y=function(){var t=Object(r.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(r.Fragment,{children:[n&&Object(u.jsx)(N,{onclosecart:function(){c(!1)}}),Object(u.jsxs)("div",{style:{backgroundImage:'url("im")'},children:[Object(u.jsx)(U,{onshowcart:function(){c(!0)}}),Object(u.jsx)("div",{style:{marginTop:"60px",marginBottom:"0px",height:"70px",textAlign:"center",color:"#ff6600",fontFamily:"Lucida Console",fontSize:"150%",backgroundColor:"white"},children:Object(u.jsx)("marquee",{scrollamount:"8",direction:"left",children:Object(u.jsx)("h4",{children:"Bring your grocery product at homedoor"})})}),Object(u.jsx)("img",{src:H,alt:"imag",style:{width:"40%",minWidth:"350px",borderRadius:"70%",float:"left",marginTop:"3%"}}),Object(u.jsx)(M,{}),Object(u.jsx)(E,{}),Object(u.jsx)(d,{})]})]})},Z=Object(O.a)({reducer:{cart:k.reducer}});i.a.render(Object(u.jsx)(a.a,{store:Z,children:Object(u.jsx)(Y,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.71ca7e56.chunk.js.map