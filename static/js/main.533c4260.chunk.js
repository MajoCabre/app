(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c(42),r=c.n(n),s=c(11),i=c(15),o=c(23),j=c(4),l=Object(a.createContext)(),u=l.Provider,b=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(s.a)(c,2),r=n[0],i=n[1],l=function(e){var t=!1;return r.forEach((function(c){c.id==e.id&&(t=!0)})),r.length>0&&t},b={cartList:r,agregarProducto:function(e){if(l(e)){var t=r.filter((function(t){return t.id!==e.id}));t.push(e),i(t)}else{var c=Object(o.a)(r);c.push(e),i(c)}},borrarProducto:function(e){var t=r.filter((function(t){return t.id!==e.id}));i(t)},vaciarCarrito:function(){i([])}};return Object(j.jsx)(u,{value:b,children:t})},d=function(){var e=Object(a.useContext)(l).cartList,t=Object(a.useState)(0),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){var t=0;e.forEach((function(e){t+=e.stock})),r(t)}),[e]),Object(j.jsxs)(i.b,{to:"/cart",className:"cart_widget",children:[Object(j.jsx)("img",{className:"icono",src:"carrito.png",alt:"carrito"}),n>0&&Object(j.jsx)("div",{className:"cart_widget_count",children:n})]})},O=function(){return Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:"logo_nav",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("img",{className:"logo",src:"logo.png",alt:"logo"})}),Object(j.jsx)(d,{})]})})},h=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("h1",{className:"titulo",children:"Contacto"})})},m=c(0),x=c.n(m),p=c(3),f=function(e){var t=e.img,c=e.categoria,a="/categorias/".concat(c);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"contenedor",children:Object(j.jsxs)(i.b,{className:"titulo_categoria",to:a,children:[Object(j.jsx)("h1",{children:c}),Object(j.jsx)("nav",{children:Object(j.jsx)("img",{className:"imagen_tortas",src:t,alt:"tortas"})})]})})})},v=function(e){var t=e.data;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(f,{categoria:e.categoria,img:e.img},e.categoria)}))})},g=c(45),N=c(17);g.a({apiKey:"AIzaSyCPRHZoRNuFL_6R_HRx49d_pZU8rRE6YBQ",authDomain:"coderhouse-react-a76a6.firebaseapp.com",projectId:"coderhouse-react-a76a6",storageBucket:"coderhouse-react-a76a6.appspot.com",messagingSenderId:"1056197126639",appId:"1:1056197126639:web:6c5b9440c0708cbcc1ae1a"});function _(){return N.f()}var k=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)(Object(p.a)(x.a.mark((function e(){var t,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=_(),e.next=4,Object(N.e)(Object(N.b)(t,"categorias"));case 4:c=e.sent,a=[],c.forEach((function(e){a.push(e.data())})),n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error adding document: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(j.jsx)(v,{data:c})},C=c(25),E=c(12),w=function(e){var t=e.item,c=e.onAdd,n=Object(a.useState)(0),r=Object(s.a)(n,2),o=r[0],l=r[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{className:"contenedor",children:[Object(j.jsx)("button",{className:"button",onClick:function(){o>0&&l(o-1)},children:Object(j.jsx)("span",{className:"material-icons",children:"remove_circle_outline"})}),Object(j.jsx)("button",{className:"button",onClick:function(){o<5&&l(o+1)},children:Object(j.jsx)("span",{className:"material-icons",children:" add_circle_outline "})})]}),Object(j.jsx)("p",{className:"contenedor",children:o}),Object(j.jsxs)("nav",{className:"contenedor",children:[Object(j.jsx)("button",{onClick:function(){var e=Object(C.a)({},t);e.stock=o,c(e)},className:"button",children:"Agregar al carrito"}),Object(j.jsx)(i.b,{className:"titulo_categoria",to:"/cart",children:Object(j.jsx)("button",{className:"button",children:"Confirmar mi compra: "})})]})]})},S=function(){var e=Object(E.f)().categoriaId,t=Object(a.useState)([]),c=Object(s.a)(t,2),n=c[0],r=c[1],o=Object(a.useContext)(l).agregarProducto;Object(a.useEffect)(Object(p.a)(x.a.mark((function t(){var c,a,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=_(),t.next=4,Object(N.e)(Object(N.b)(c,"/categorias/".concat(e,"/items")));case 4:a=t.sent,n=[],a.forEach((function(e){n.push(Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id}))})),r(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),[]);var u=function(e){o(e)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{className:"titulo_item",children:e}),n.map((function(t){var c="/categorias/".concat(e,"/item/").concat(t.id);return Object(j.jsxs)("nav",{children:[Object(j.jsx)("div",{className:"contenedor",children:Object(j.jsxs)(i.b,{className:"titulo_categoria",to:c,children:[Object(j.jsx)("h1",{children:t.nombre}),Object(j.jsx)("img",{className:"imagen_tortas",src:"../".concat(t.img),alt:"tortas"})]})}),Object(j.jsx)(w,{item:t,onAdd:u})]},t.nombre)}))]})})},I=function(){var e=Object(E.f)(),t=e.itemId,c=e.categoriaId,n=Object(a.useState)([]),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.useEffect)(Object(p.a)(x.a.mark((function e(){var a,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=_(),n=Object(N.c)(a,"/categorias/".concat(c,"/items"),t),e.next=5,Object(N.d)(n);case 5:(r=e.sent).exists()&&o(r.data()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"container",children:[Object(j.jsxs)("h1",{className:"titulo_item",children:[i.nombre," ",i.precio]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"imagen_tortas",src:"../../../".concat(i.img),alt:"tortasddd"})})]})})},y=function(e){var t=e.onClick,c=Object(a.useState)(""),n=Object(s.a)(c,2),r=n[0],i=n[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],d=Object(a.useState)(""),O=Object(s.a)(d,2),h=O[0],m=O[1],f=function(){var e=Object(p.a)(x.a.mark((function e(c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),t({buyer:{name:r,phone:u,email:h}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"user_form",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:"productos",children:"Nombre:"}),Object(j.jsx)("input",{type:"text",name:"name",value:r,onChange:function(e){var t;i(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:"productos",children:"Telefono:"}),Object(j.jsx)("input",{type:"text",name:"phone",value:u,onChange:function(e){var t;b(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:"productos",children:"Email:"}),Object(j.jsx)("input",{type:"text",name:"email",value:h,onChange:function(e){var t;m(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})]}),Object(j.jsx)("div",{className:"contenedor",children:Object(j.jsx)("button",{className:"button confirm_button",onClick:f,children:"Comprar"})})]})},F=function(){var e=Object(a.useContext)(l),t=e.vaciarCarrito,c=e.borrarProducto,n=e.cartList,r=Object(a.useState)(0),o=Object(s.a)(r,2),u=o[0],b=o[1],d=Object(a.useState)(!1),O=Object(s.a)(d,2),h=O[0],m=O[1],f=Object(a.useState)(null),v=Object(s.a)(f,2),g=v[0],k=v[1];Object(a.useEffect)((function(){var e=0;n.forEach((function(t){var c=parseInt(t.precio),a=t.stock*c;e+=a})),b(e),n.length?m(!0):m(!1)}),[n]);var E=function(){m(!1),t()},w=function(){var e=Object(p.a)(x.a.mark((function e(t){var c,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(C.a)(Object(C.a)({},t),{},{items:n.map((function(e){return{id:e.id,title:e.nombre,price:parseInt(e.precio)}})),total:u,date:new Date}),a=_(),e.next=4,Object(N.a)(Object(N.b)(a,"compras"),c);case 4:r=e.sent,k(r.id),E();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:n.length>0&&Object(j.jsx)("div",{className:"titulo_item",children:"Esta es su seleccion de productos!!!"})}),Object(j.jsx)("div",{children:n.length>0&&n.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"contenedor",children:[Object(j.jsxs)("div",{className:"productos",children:[e.stock," unidades de ",e.nombre]}),Object(j.jsx)("button",{className:"button",onClick:function(){return function(e){c(e)}(e)},children:"Eliminar del carrito"})]})})}))}),Object(j.jsx)("div",{children:n.length>0&&Object(j.jsxs)("div",{className:"titulo_item",children:["El total de su compra es de ",u]})}),Object(j.jsx)("div",{children:0===n.length&&Object(j.jsx)("div",{className:"titulo_item",children:"Su carrito esta vacio"})}),Object(j.jsx)("div",{children:n.length>0&&Object(j.jsx)("div",{className:"contenedor",children:Object(j.jsx)("button",{className:"button",onClick:E,children:"Vaciar mi carrito"})})}),Object(j.jsx)("div",{children:0===n.length&&Object(j.jsx)(i.b,{to:"/",className:"contenedor",children:Object(j.jsx)("button",{className:"button",children:"Ir a la pagina principal"})})}),h&&Object(j.jsx)(y,{onClick:w}),g&&Object(j.jsxs)("div",{className:"factura",children:[Object(j.jsx)("span",{className:"titulo_item",children:"Su compra ha sido exitosa, su numero de orden es:"}),Object(j.jsx)("span",{className:"productos orden-id",children:g})]})]})},P=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(b,{children:[Object(j.jsx)(O,{}),Object(j.jsxs)(E.c,{children:[Object(j.jsx)(E.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{})}),Object(j.jsx)(E.a,{exact:!0,path:"/categorias/:categoriaId",children:Object(j.jsx)(S,{})}),Object(j.jsx)(E.a,{exact:!0,path:"/categorias/:categoriaId/item/:itemId",children:Object(j.jsx)(I,{})}),Object(j.jsx)(E.a,{exact:!0,path:"/cart",children:Object(j.jsx)(F,{})}),Object(j.jsx)(E.a,{children:Object(j.jsx)("div",{children:"No se ha encontrado!"})})]}),Object(j.jsx)(h,{})]})})};c(57);r.a.render(Object(j.jsx)(P,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.533c4260.chunk.js.map