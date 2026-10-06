/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"pasi","title":"PASI (Psoriasis Area and Severity Index)","fields":[["e_h","Cabeça e pescoço: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["i_h","Cabeça e pescoço: infiltração (espessura)","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["d_h","Cabeça e pescoço: descamação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["a_h","Cabeça e pescoço: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · menos de 10%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_s","Membros superiores: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["i_s","Membros superiores: infiltração (espessura)","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["d_s","Membros superiores: descamação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["a_s","Membros superiores: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · menos de 10%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_t","Tronco: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["i_t","Tronco: infiltração (espessura)","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["d_t","Tronco: descamação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["a_t","Tronco: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · menos de 10%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_i","Membros inferiores: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["i_i","Membros inferiores: infiltração (espessura)","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["d_i","Membros inferiores: descamação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","4":"4"}}],["a_i","Membros inferiores: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · menos de 10%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["basal","PASI basal (antes do tratamento), para calcular a resposta","num",{"min":0.1,"max":72,"step":0.1,"ph":"18","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=function(a){var e=parseFloat(a);return isNaN(e)?0:e};
a.def("pasi",function(a){var r={h:.1,s:.2,t:.3,i:.4},t=0;for(var d in r)t+=r[d]*(i(a["e_"+d])+i(a["i_"+d])+i(a["d_"+d]))*i(a["a_"+d]);t=e.r1(t,1);var n=[],s=null;a.basal&&(s=(a.basal-t)/a.basal*100,n.push(["Melhora em relação ao PASI basal",o(s,0)+"%"+(s>=90?" (PASI 90)":s>=75?" (PASI 75)":s>=50?" (PASI 50)":"")]));var l=0===t||t<=10?"low":"high";return{main:[o(t,1),"de 72"],label:"PASI",level:l,verdict:0===t?"Sem lesões (PASI 0)":t<=10?"Psoríase leve pelo PASI (≤ 10)":"Psoríase moderada a grave pela regra dos dez (PASI &gt; 10)",rows:n,note:t<=10&&t>0?"Pela regra dos dez, BSA &gt; 10% ou impacto importante na qualidade de vida também caracterizam doença grave, mesmo com PASI ≤ 10.":"",raw:{pasi:t,melhora:s}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
