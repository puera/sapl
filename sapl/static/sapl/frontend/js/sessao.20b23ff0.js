!function(t){function o(o){for(var n,i,s=o[0],c=o[1],l=o[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(u&&u(o);f.length;)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(n=!1)}n&&(a.splice(o--,1),t=i(i.s=e[0]))}return t}var n={},r={sessao:0},a=[];function i(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)i.d(e,n,function(o){return t[o]}.bind(null,n));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/static/sapl/frontend/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var u=c;a.push([3,"chunk-vendors"]),e()}({"18cd":function(t,o,e){},3:function(t,o,e){t.exports=e("b80c")},"332f":function(t,o,e){var n={"./pt-br":"d2d4","./pt-br.js":"d2d4"};function r(t){var o=a(t);return e(o)}function a(t){if(!e.o(n,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="332f"},b80c:function(t,o,e){"use strict";e.r(o),function(t){var o=e("768b"),n=(e("ffc1"),e("ac4d"),e("8a81"),e("ac6a"),e("28a5"),e("96cf"),e("3b8d")),r=(e("7f7f"),e("cadf"),e("551c"),e("f751"),e("097d"),e("a026")),a=e("310e"),i=e.n(a),s=e("e68d"),c=e("bc3a"),l=e.n(c),u=(e("18cd"),e("407d")),d=e.n(u),f=e("3003");r.default.use(s.a),r.default.use(f.a),r.default.component(d.a.name,d.a);var p,_,m,h=e("c1df");new r.default({delimiters:["[[","]]"],el:"#lista-discurso",data:{lista_selecionada:"",parlamentares_selecionados:[],selecionado_add:!1,selecionado_painel:!1,orador:-1,cronometros_lista:[],counting:[]},asyncComputed:{tipo_listas:{get:(m=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.a.get("/api/sessao/tipolistadiscurso/?page_size=200").then((function(t){return t.data.results})));case 1:case"end":return t.stop()}}),t)}))),function(){return m.apply(this,arguments)}),default:[]},parlamentares:{get:(_=Object(n.a)(regeneratorRuntime.mark((function t(){var o,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=window.location.href.split("/")[4],e="/api/sessao/sessaoplenaria/"+o+"/parlamentares_presentes/?page_size=200",t.abrupt("return",l.a.get(e).then((function(t){return t.data.results.map((function(t){return{id:t.id,nome:t.nome_parlamentar}}))})));case 3:case"end":return t.stop()}}),t)}))),function(){return _.apply(this,arguments)}),default:[]}},computed:{},watch:{lista_selecionada:(p=Object(n.a)(regeneratorRuntime.mark((function t(o,e){var n,r,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/api/painel/cronometro/?cronometrolista__tipo_lista_id="+this.lista_selecionada.id,t.next=3,l.a.get(n).then((function(t){return t.data.results}));case 3:this.cronometros_lista=t.sent,r=window.location.href.split("/")[4],l.a.get("/sistema/get-orador-lista/"+r+"/"+this.lista_selecionada.id).then((function(t){a.orador=t.data.orador[0],console.log(t.data.orador[0]),a.parlamentares_selecionados=t.data.parlamentares.map((function(t){return{id:t[0],nome:t[1]}}))}));case 6:case"end":return t.stop()}}),t,this)}))),function(t,o){return p.apply(this,arguments)}),cronometros_lista:function(t,o){var e=[];t.forEach((function(t){var o,n=h.duration(t.duracao_cronometro);if("S"==t.status)e.push(!1),o=(o=t.last_stop_duration?h.duration(t.last_stop_duration):h.duration(t.duracao_cronometro))._milliseconds;else if("R"==t.status)e.push(!1),o=(o=h.duration(t.duracao_cronometro))._milliseconds;else if("I"==t.status){e.push(!0);var r=h(t.ultima_alteracao_status),a=h(h.now()).diff(r);o=a<n._milliseconds?n._milliseconds-a:n._milliseconds}var i={_original:n._milliseconds,_atual:o};t.duracao_cronometro=i})),this.counting=e},selecionado_painel:function(t,o){1==t&&this.cronometros_lista.forEach((function(t){if("I"==t.status){var o=t.duracao_cronometro._original,e=h(t.ultima_alteracao_status),n=h(h.now()).diff(e),r={_original:o,_atual:n<o?o-n:o};t.duracao_cronometro=r}}))}},methods:{saveParlamentarLista:function(){var o=[],e=!0,n=!1,r=void 0;try{for(var a,i=this.parlamentares_selecionados[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var s=a.value;o.push(s.id)}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}var c=window.location.href.split("/")[4];t.get("/sistema/salva-listadiscurso-parlamentares/",{parlamentares_selecionados:o,lista_selecionada:this.lista_selecionada.id,sessao_pk:c},(function(t,o){"success"==o&&console.log("Salvo.")}))},setOrador:function(o){var e=this.parlamentares_selecionados[o].id,n=window.location.href.split("/")[4];this.orador!=e?this.orador=e:this.orador=-1,t.get("/sistema/salva-orador-listadiscurso/",{orador_pk:this.orador,tipo_lista_pk:this.lista_selecionada.id,sessao_pk:n},(function(t,o){"success"==o&&console.log("Orador Salvo.")}))},startCountdown:function(o){this.$refs.countdown[o].start(),r.default.set(this.counting,o,!0),t.get("/painel/cronometro",{tipo:"cronometro_"+this.cronometros_lista[o].id,action:"start",last_time:"0"})},stopCountdown:function(o){this.$refs.countdown[o]._data.counting=!1,this.cronometros_lista[o].duracao_cronometro._atual=this.$refs.countdown[o]._data.totalMilliseconds,r.default.set(this.counting,o,!1);var e=document.getElementById("cronometro_"+this.cronometros_lista[o].id).value;t.get("/painel/cronometro",{tipo:"cronometro_"+this.cronometros_lista[o].id,action:"stop",last_time:e})},resetCountdown:function(o){this.$refs.countdown[o]._data.counting=!1,this.cronometros_lista[o].duracao_cronometro._atual=this.cronometros_lista[o].duracao_cronometro._original,r.default.set(this.counting,o,!1),t.get("/painel/cronometro",{tipo:"cronometro_"+this.cronometros_lista[o].id,action:"reset",last_time:"0"})},handleCountdownEnd:function(o){r.default.set(this.counting,o,!1),t.get("/painel/cronometro",{tipo:"cronometro_"+this.cronometros_lista[o].id,action:"stop",last_time:this.$refs.countdown[o]._data.totalMilliseconds})},transform:function(t){return Object.entries(t).forEach((function(e){var n=Object(o.a)(e,2),r=n[0],a=n[1],i=a<10?"0".concat(a):a;t[r]=i})),t},abrir_painel:function(){var t="/painel-discurso/"+window.location.href.split("/")[4]+"/"+this.lista_selecionada.id;return window.open(t,"Comprovante","width=800, height=800, scrollbars=yes"),!1}},components:{draggable:i.a}})}.call(this,e("1157"))}});