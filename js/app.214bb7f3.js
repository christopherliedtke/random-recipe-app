(function(e){function t(t){for(var n,c,o=t[0],s=t[1],l=t[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/random-recipe-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"app"}},[r("GetRecipeBtn",{on:{receivedNewRecipe:e.setRecipe}}),r("DisplayRecipe",{attrs:{recipe:this.recipe}})],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[e.categories.length>0?r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{name:"category",id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedCategory=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("Any")]),e._l(e.categories,(function(t){return r("option",{key:t.idCategory},[e._v(" "+e._s(t.strCategory)+" ")])}))],2):e._e(),r("button",{staticClass:"btn-primary",on:{click:e.getRecipes}},[e._v("Random Recipe")])])},o=[],s=(r("96cf"),r("1da1")),l=r("bc3a"),u=r.n(l),p={name:"GetRecipeBtn",props:{},data:function(){return{categories:[],selectedCategory:""}},created:function(){this.getAllCategories(),this.getRecipes()},methods:{getRecipes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.selectedCategory){t.next=12;break}return t.next=4,u.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(e.selectedCategory));case 4:return n=t.sent,a=n.data.meals[Math.floor(Math.random()*n.data.meals.length)].idMeal,t.next=8,u.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(a));case 8:i=t.sent,r=i.data.meals[0],t.next=16;break;case 12:return t.next=14,u.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 14:c=t.sent,r=c.data.meals[0];case 16:e.$emit("receivedNewRecipe",r),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),console.log("Error on getRecipes(): ",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()},getAllCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("https://www.themealdb.com/api/json/v1/1/categories.php");case 3:r=t.sent,e.categories=r.data.categories,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("Error on getAllCategories(): ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},d=p,f=r("2877"),h=Object(f["a"])(d,c,o,!1,null,null,null),v=h.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"display-recipe"},[r("img",{attrs:{src:e.recipe.strMealThumb,alt:e.recipe.strMeal}}),r("h2",[e._v(e._s(e.recipe.strMeal))]),r("button",{staticClass:"btn-primary",on:{click:function(t){e.showRecipeDetail=!e.showRecipeDetail}}},[e._v(" "+e._s(e.showRecipeDetail?"Hide Details":"Show Details")+" ")]),e.showRecipeDetail?r("div",{staticClass:"recipe-details"},[r("h3",[e._v("Ingredients")]),r("ul",e._l(e.ingredients,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.name)+" – ("+e._s(t.measure)+") ")])})),0),r("h3",[e._v("Instructions")]),e._l(e.instructions,(function(t){return r("p",{key:t},[e._v(" "+e._s(t)+" ")])})),e.recipe.strSource?r("a",{staticClass:"btn-primary",staticStyle:{margin:"1rem 0 2rem 0"},attrs:{href:e.recipe.strSource,target:"_blank",rel:"noopener noreferrer"}},[e._v("Original Source")]):e._e(),e.youtubeUrl?r("iframe",{attrs:{src:e.youtubeUrl,height:"315",frameborder:"0",allowfullscreen:""}}):e._e()],2):e._e()])},g=[],b=(r("4160"),r("caad"),r("a15b"),r("ac1f"),r("2532"),r("5319"),r("1276"),{name:"DisplayRecipe",props:{recipe:{type:Object}},data:function(){return{showRecipeDetail:!1}},computed:{ingredients:function(){var e=this,t=[];for(var r in this.recipe)r.includes("Ingredient")&&this.recipe[r]&&t.push({id:r.replace("strIngredient",""),name:this.recipe[r]});var n=function(r){r.includes("Measure")&&e.recipe[r]&&t.forEach((function(n,a){n.id==r.replace("strMeasure","")&&(t[a].measure=e.recipe[r])}))};for(var a in this.recipe)n(a);return t},instructions:function(){return this.recipe.strInstructions.split(".").join(".#separator").split("#separator")},youtubeUrl:function(){return this.recipe.strYoutube.replace("watch?v=","embed/")}}}),y=b,w=Object(f["a"])(y,m,g,!1,null,null,null),_=w.exports,R={name:"App",components:{GetRecipeBtn:v,DisplayRecipe:_},data:function(){return{recipe:{}}},methods:{setRecipe:function(e){this.recipe=e}}},j=R,x=(r("5c0b"),Object(f["a"])(j,a,i,!1,null,null,null)),O=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.214bb7f3.js.map