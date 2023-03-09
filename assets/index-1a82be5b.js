(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();function q(){}function ke(l){return l()}function be(){return Object.create(null)}function se(l){l.forEach(ke)}function ze(l){return typeof l=="function"}function K(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let de;function Z(l,e){return de||(de=document.createElement("a")),de.href=e,l===de.href}function Me(l){return Object.keys(l).length===0}function i(l,e){l.appendChild(e)}function A(l,e,t){l.insertBefore(e,t||null)}function I(l){l.parentNode&&l.parentNode.removeChild(l)}function a(l){return document.createElement(l)}function re(l){return document.createTextNode(l)}function v(){return re(" ")}function j(l,e,t,o){return l.addEventListener(e,t,o),()=>l.removeEventListener(e,t,o)}function Se(l){return function(e){return e.preventDefault(),l.call(this,e)}}function n(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function je(l){return Array.from(l.childNodes)}function fe(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}function H(l,e){l.value=e??""}function oe(l,e,t){l.classList[t?"add":"remove"](e)}let ce;function ue(l){ce=l}function $e(){if(!ce)throw new Error("Function called outside component initialization");return ce}function qe(l){$e().$$.on_mount.push(l)}function Ce(l){$e().$$.on_destroy.push(l)}const ae=[],_e=[],pe=[],we=[],De=Promise.resolve();let he=!1;function Te(){he||(he=!0,De.then(Ee))}function ge(l){pe.push(l)}const ve=new Set;let ne=0;function Ee(){if(ne!==0)return;const l=ce;do{try{for(;ne<ae.length;){const e=ae[ne];ne++,ue(e),Le(e.$$)}}catch(e){throw ae.length=0,ne=0,e}for(ue(null),ae.length=0,ne=0;_e.length;)_e.pop()();for(let e=0;e<pe.length;e+=1){const t=pe[e];ve.has(t)||(ve.add(t),t())}pe.length=0}while(ae.length);for(;we.length;)we.pop()();he=!1,ve.clear(),ue(l)}function Le(l){if(l.fragment!==null){l.update(),se(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(ge)}}const me=new Set;let He;function x(l,e){l&&l.i&&(me.delete(l),l.i(e))}function Q(l,e,t,o){if(l&&l.o){if(me.has(l))return;me.add(l),He.c.push(()=>{me.delete(l),o&&(t&&l.d(1),o())}),l.o(e)}else o&&o()}function X(l){l&&l.c()}function R(l,e,t,o){const{fragment:s,after_update:c}=l.$$;s&&s.m(e,t),o||ge(()=>{const u=l.$$.on_mount.map(ke).filter(ze);l.$$.on_destroy?l.$$.on_destroy.push(...u):se(u),l.$$.on_mount=[]}),c.forEach(ge)}function W(l,e){const t=l.$$;t.fragment!==null&&(se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ne(l,e){l.$$.dirty[0]===-1&&(ae.push(l),Te(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function Y(l,e,t,o,s,c,u,g=[-1]){const h=ce;ue(l);const r=l.$$={fragment:null,ctx:[],props:c,update:q,not_equal:s,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:be(),dirty:g,skip_bound:!1,root:e.target||h.$$.root};u&&u(r.root);let w=!1;if(r.ctx=t?t(l,e.props||{},(f,b,...d)=>{const p=d.length?d[0]:b;return r.ctx&&s(r.ctx[f],r.ctx[f]=p)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](p),w&&Ne(l,f)),b}):[],r.update(),w=!0,se(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const f=je(e.target);r.fragment&&r.fragment.l(f),f.forEach(I)}else r.fragment&&r.fragment.c();e.intro&&x(l.$$.fragment),R(l,e.target,e.anchor,e.customElement),Ee()}ue(h)}class G{$destroy(){W(this,1),this.$destroy=q}$on(e,t){if(!ze(t))return q;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Me(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Pe(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p,y,E,$,M,C,_,T,z,m,k,B,V,P,F,O,U;return{c(){e=a("div"),t=a("form"),o=a("div"),o.innerHTML='<h3 class="svelte-19weiop">Antarësim</h3>',s=v(),c=a("div"),u=a("label"),g=a("span"),g.textContent="Emri *",h=v(),r=a("input"),w=v(),f=a("label"),b=a("span"),b.textContent="Mbiemri *",d=v(),p=a("input"),y=v(),E=a("div"),$=a("label"),M=a("span"),M.textContent="Email *",C=v(),_=a("input"),T=v(),z=a("div"),m=a("label"),k=a("span"),k.textContent="Mesazh për lëvizjen:",B=v(),V=a("input"),P=v(),F=a("div"),F.innerHTML='<button type="submit" class="svelte-19weiop">Dërgo</button>',n(o,"class","form-row svelte-19weiop"),n(g,"class","svelte-19weiop"),n(r,"type","text"),n(r,"placeholder","Pasho"),r.required=!0,n(r,"class","svelte-19weiop"),n(u,"class","svelte-19weiop"),n(b,"class","svelte-19weiop"),n(p,"type","text"),n(p,"placeholder","Vasa"),p.required=!0,n(p,"class","svelte-19weiop"),n(f,"class","svelte-19weiop"),n(c,"class","form-row svelte-19weiop"),n(M,"class","svelte-19weiop"),n(_,"type","email"),n(_,"placeholder","pashovasa@votaediaspores.com"),_.required=!0,n(_,"class","svelte-19weiop"),n($,"class","svelte-19weiop"),n(E,"class","form-row svelte-19weiop"),n(k,"class","svelte-19weiop"),n(V,"type","text"),n(V,"placeholder","Shpreh mbështetjen tënde..."),n(V,"class","svelte-19weiop"),n(m,"class","svelte-19weiop"),n(z,"class","form-row svelte-19weiop"),n(F,"class","form-row svelte-19weiop"),oe(F,"disabled",l[1]),n(t,"class","svelte-19weiop"),n(e,"class","form-container svelte-19weiop")},m(S,D){A(S,e,D),i(e,t),i(t,o),i(t,s),i(t,c),i(c,u),i(u,g),i(u,h),i(u,r),H(r,l[0].name),i(c,w),i(c,f),i(f,b),i(f,d),i(f,p),H(p,l[0].surname),i(t,y),i(t,E),i(E,$),i($,M),i($,C),i($,_),H(_,l[0].email),i(t,T),i(t,z),i(z,m),i(m,k),i(m,B),i(m,V),H(V,l[0].reason),i(t,P),i(t,F),O||(U=[j(r,"input",l[6]),j(r,"input",l[4]),j(p,"input",l[7]),j(p,"input",l[5]),j(_,"input",l[8]),j(_,"input",l[3]),j(V,"input",l[9]),j(t,"submit",Se(l[2]))],O=!0)},p(S,[D]){D&1&&r.value!==S[0].name&&H(r,S[0].name),D&1&&p.value!==S[0].surname&&H(p,S[0].surname),D&1&&_.value!==S[0].email&&H(_,S[0].email),D&1&&V.value!==S[0].reason&&H(V,S[0].reason),D&2&&oe(F,"disabled",S[1])},i:q,o:q,d(S){S&&I(e),O=!1,se(U)}}}function Fe(l,e,t){let o;const s={name:"",surname:"",email:"",reason:"",isNameValid:!1,isSurnameValid:!1,isEmailValid:!1};function c(){if(o)return;const d=new FormData;d.append("name",s.name),d.append("surname",s.surname),d.append("email",s.email),d.append("reason",s.reason),console.log(d),t(0,s.name="",s),t(0,s.surname="",s),t(0,s.email="",s),t(0,s.isNameValid=!1,s),t(0,s.isSurnameValid=!1,s),t(0,s.isEmailValid=!1,s)}function u(d){const p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t(0,s.isEmailValid=p.test(d.target.value),s)}function g(d){t(0,s.isNameValid=d.target.value.trim().length>=2,s)}function h(d){t(0,s.isSurnameValid=d.target.value.trim().length>=2,s)}function r(){s.name=this.value,t(0,s)}function w(){s.surname=this.value,t(0,s)}function f(){s.email=this.value,t(0,s)}function b(){s.reason=this.value,t(0,s)}return l.$$.update=()=>{l.$$.dirty&1&&t(1,o=!s.isEmailValid||!s.isNameValid||!s.isSurnameValid)},[s,o,c,u,g,h,r,w,f,b]}class Oe extends G{constructor(e){super(),Y(this,e,Fe,Pe,K,{})}}function Ie(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p,y,E,$,M,C,_,T,z,m,k,B,V,P,F,O,U;return{c(){e=a("div"),t=a("form"),o=a("div"),o.innerHTML='<h3 class="svelte-19weiop">Antarësim për shoqata</h3>',s=v(),c=a("div"),u=a("label"),g=a("span"),g.textContent="Emri *",h=v(),r=a("input"),w=v(),f=a("label"),b=a("span"),b.textContent="Tipi",d=v(),p=a("input"),y=v(),E=a("div"),$=a("label"),M=a("span"),M.textContent="Email *",C=v(),_=a("input"),T=v(),z=a("div"),m=a("label"),k=a("span"),k.textContent="Mesazh për lëvizjen *",B=v(),V=a("input"),P=v(),F=a("div"),F.innerHTML='<button type="submit" class="svelte-19weiop">Dërgo</button>',n(o,"class","form-row svelte-19weiop"),n(g,"class","svelte-19weiop"),n(r,"type","text"),n(r,"placeholder","Liri e Shqipërisë"),r.required=!0,n(r,"class","svelte-19weiop"),n(u,"class","svelte-19weiop"),n(b,"class","svelte-19weiop"),n(p,"type","text"),n(p,"placeholder","Shoqatë"),p.required=!0,n(p,"class","svelte-19weiop"),n(f,"class","svelte-19weiop"),n(c,"class","form-row svelte-19weiop"),n(M,"class","svelte-19weiop"),n(_,"type","email"),n(_,"placeholder","kristoluarasi@votaediaspores.com"),_.required=!0,n(_,"class","svelte-19weiop"),n($,"class","svelte-19weiop"),n(E,"class","form-row svelte-19weiop"),n(k,"class","svelte-19weiop"),n(V,"type","text"),n(V,"placeholder","Shpreh mbështetjen tënde..."),V.required=!0,n(V,"class","svelte-19weiop"),n(m,"class","svelte-19weiop"),n(z,"class","form-row svelte-19weiop"),n(F,"class","form-row svelte-19weiop"),oe(F,"disabled",l[1]),n(t,"class","svelte-19weiop"),n(e,"class","form-container svelte-19weiop")},m(S,D){A(S,e,D),i(e,t),i(t,o),i(t,s),i(t,c),i(c,u),i(u,g),i(u,h),i(u,r),H(r,l[0].organization),i(c,w),i(c,f),i(f,b),i(f,d),i(f,p),H(p,l[0].type),i(t,y),i(t,E),i(E,$),i($,M),i($,C),i($,_),H(_,l[0].email),i(t,T),i(t,z),i(z,m),i(m,k),i(m,B),i(m,V),H(V,l[0].message),i(t,P),i(t,F),O||(U=[j(r,"input",l[6]),j(r,"input",l[4]),j(p,"input",l[7]),j(_,"input",l[8]),j(_,"input",l[3]),j(V,"input",l[9]),j(V,"input",l[5]),j(t,"submit",Se(l[2]))],O=!0)},p(S,[D]){D&1&&r.value!==S[0].organization&&H(r,S[0].organization),D&1&&p.value!==S[0].type&&H(p,S[0].type),D&1&&_.value!==S[0].email&&H(_,S[0].email),D&1&&V.value!==S[0].message&&H(V,S[0].message),D&2&&oe(F,"disabled",S[1])},i:q,o:q,d(S){S&&I(e),O=!1,se(U)}}}function Ae(l,e,t){let o;const s={organization:"",type:"",email:"",message:"",isOrganizationValid:!1,isEmailValid:!1,isMessageValid:!1};function c(){if(o)return;const d=new FormData;d.append("organization",s.organization),d.append("type",s.type),d.append("email",s.email),d.append("message",s.message),console.log(d),t(0,s.organization="",s),t(0,s.type="",s),t(0,s.email="",s),t(0,s.message="",s),t(0,s.isOrganizationValid=!1,s),t(0,s.isEmailValid=!1,s),t(0,s.isMessageValid=!1,s)}function u(d){const p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t(0,s.isEmailValid=p.test(d.target.value),s)}function g(d){t(0,s.isOrganizationValid=d.target.value.trim().length>=2,s)}function h(d){t(0,s.isMessageValid=d.target.value.trim().length>=5,s)}function r(){s.organization=this.value,t(0,s)}function w(){s.type=this.value,t(0,s)}function f(){s.email=this.value,t(0,s)}function b(){s.message=this.value,t(0,s)}return l.$$.update=()=>{l.$$.dirty&1&&t(1,o=!s.isOrganizationValid||!s.isEmailValid||!s.isMessageValid)},[s,o,c,u,g,h,r,w,f,b]}class Be extends G{constructor(e){super(),Y(this,e,Ae,Ie,K,{})}}const Ue="/assets/backtotop-83a99c11.svg";function Je(l){let e,t,o,s,c;return{c(){e=a("button"),t=a("img"),Z(t.src,o=Ue)||n(t,"src",o),n(t,"alt","back to top"),n(t,"aria-label","back to top"),n(t,"class","svelte-1h5hp60"),n(e,"id","scroll-to-top-button"),n(e,"class","svelte-1h5hp60")},m(u,g){A(u,e,g),i(e,t),s||(c=j(e,"click",l[0]),s=!0)},p:q,i:q,o:q,d(u){u&&I(e),s=!1,c()}}}function xe(l){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};let t;return qe(()=>{t=document.getElementById("scroll-to-top-button"),window.addEventListener("scroll",()=>{window.pageYOffset>=window.innerHeight*1.5?(t.style.opacity=1,t.style.visibility="visible"):(t.style.opacity=0,t.style.visibility="hidden")})}),[e]}class Re extends G{constructor(e){super(),Y(this,e,xe,Je,K,{})}}function We(l){let e;return{c(){e=a("div"),e.innerHTML=`<h3>Historik</h3> 
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel velit eu
    ante faucibus feugiat a a libero. Ut at magna in odio hendrerit ullamcorper.
    Pellentesque mollis, justo eu dictum posuere, purus orci congue tortor, sit
    amet finibus ipsum justo ut nulla. Pellentesque vel sollicitudin quam. Sed
    aliquam sapien non tellus aliquam, at malesuada felis facilisis. Donec nec
    convallis nisl. Fusce rhoncus, lorem vitae bibendum consequat, dolor ipsum
    efficitur massa, in vehicula arcu augue a nisi. Vivamus lobortis euismod
    quam, ac convallis elit. Phasellus non metus in velit imperdiet blandit.
    Proin quis mauris ac massa scelerisque aliquam vel vel justo. Sed sit amet
    nunc erat. Sed malesuada dolor eu mollis pulvinar.</p> 
  <p>Maecenas a felis ut magna rutrum pharetra eget vitae est. Praesent rhoncus
    erat purus, id molestie enim malesuada eget. Proin ut semper tortor.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
    cubilia Curae; Nullam a consequat lectus. In hac habitasse platea dictumst.
    Integer quis eleifend eros, sed sollicitudin nisi. Sed cursus venenatis
    libero, at dignissim metus dictum vel. Aenean sit amet ultrices tellus.
    Suspendisse bibendum massa sed magna sagittis, at tristique quam faucibus.
    Etiam luctus bibendum mauris ac laoreet. Sed faucibus nisl sed nulla
    bibendum euismod. Maecenas imperdiet congue dui, vel tempor tortor molestie
    in. Sed bibendum ante et justo venenatis, in efficitur sapien tincidunt. Sed
    eget odio et risus mollis finibus.</p>`},m(t,o){A(t,e,o)},p:q,i:q,o:q,d(t){t&&I(e)}}}class Ke extends G{constructor(e){super(),Y(this,e,null,We,K,{})}}function Ye(l){let e,t,o,s,c,u=te(l[0],3)+"",g,h,r,w,f,b,d,p,y=te(l[1],2)+"",E,$,M,C,_,T,z,m,k=te(l[2],2)+"",B,V,P,F,O,U,S,D,ee=te(l[3],2)+"",le;return{c(){e=a("div"),t=a("div"),o=a("div"),o.textContent="Ditë",s=v(),c=a("div"),g=re(u),h=v(),r=a("div"),r.textContent=":",w=v(),f=a("div"),b=a("div"),b.textContent="Orë",d=v(),p=a("div"),E=re(y),$=v(),M=a("div"),M.textContent=":",C=v(),_=a("div"),T=a("div"),T.textContent="Minuta",z=v(),m=a("div"),B=re(k),V=v(),P=a("div"),P.textContent=":",F=v(),O=a("div"),U=a("div"),U.textContent="Sekonda",S=v(),D=a("div"),le=re(ee),n(o,"class","label svelte-3haaro"),n(c,"class","values days svelte-3haaro"),n(t,"class","box svelte-3haaro"),n(r,"class","colon svelte-3haaro"),n(b,"class","label svelte-3haaro"),n(p,"class","values hours svelte-3haaro"),n(f,"class","box svelte-3haaro"),n(M,"class","colon svelte-3haaro"),n(T,"class","label svelte-3haaro"),n(m,"class","values minutes svelte-3haaro"),n(_,"class","box svelte-3haaro"),n(P,"class","colon svelte-3haaro"),n(U,"class","label svelte-3haaro"),n(D,"class","values seconds svelte-3haaro"),n(O,"class","box svelte-3haaro"),n(e,"class","countdown svelte-3haaro")},m(L,N){A(L,e,N),i(e,t),i(t,o),i(t,s),i(t,c),i(c,g),i(e,h),i(e,r),i(e,w),i(e,f),i(f,b),i(f,d),i(f,p),i(p,E),i(e,$),i(e,M),i(e,C),i(e,_),i(_,T),i(_,z),i(_,m),i(m,B),i(e,V),i(e,P),i(e,F),i(e,O),i(O,U),i(O,S),i(O,D),i(D,le)},p(L,[N]){N&1&&u!==(u=te(L[0],3)+"")&&fe(g,u),N&2&&y!==(y=te(L[1],2)+"")&&fe(E,y),N&4&&k!==(k=te(L[2],2)+"")&&fe(B,k),N&8&&ee!==(ee=te(L[3],2)+"")&&fe(le,ee)},i:q,o:q,d(L){L&&I(e)}}}function te(l,e){return("0".repeat(e)+l).slice(-e)}function Ge(l,e,t){let o,s=new Date,c=new Date("2024-01-09"),u=0,g=0,h=0,r=0,w=0,f=0,b=0;function d(){s=new Date;const p=c-s;u=Math.floor(p/1e3),g=Math.floor(u/60),h=Math.floor(g/60),t(0,r=Math.floor(h/24)),t(1,w=h%24),t(2,f=g%60),t(3,b=u%60)}return qe(()=>{o=setInterval(()=>{d()},1e3)}),Ce(()=>{clearInterval(o)}),[r,w,f,b]}class Qe extends G{constructor(e){super(),Y(this,e,Ge,Ye,K,{})}}const Xe="/assets/whitelogo512-8663ff29.png";function Ze(l){let e,t,o,s,c,u;return{c(){e=a("header"),t=a("div"),o=a("img"),c=v(),u=a("div"),u.innerHTML=`<ul class="svelte-1he2bps"><a href="#white-paper" class="svelte-1he2bps"><li>White Paper</li></a> 
      <a href="#shoqata" class="svelte-1he2bps"><li>Shoqatat</li></a> 
      <a href="#antaresim" class="svelte-1he2bps"><li>Antarësim</li></a> 
      <a href="#historik" class="svelte-1he2bps"><li>Historik</li></a></ul>`,Z(o.src,s=Xe)||n(o,"src",s),n(o,"alt","Diaspora Logo"),n(o,"class","svelte-1he2bps"),n(t,"class","logo svelte-1he2bps"),n(u,"class","nav svelte-1he2bps"),n(e,"class","svelte-1he2bps")},m(g,h){A(g,e,h),i(e,t),i(t,o),i(e,c),i(e,u)},p:q,i:q,o:q,d(g){g&&I(e)}}}class et extends G{constructor(e){super(),Y(this,e,null,Ze,K,{})}}const tt="/assets/email-icon-1adfe874.svg";function st(l){let e,t,o,s,c,u,g,h,r,w,f;return{c(){e=a("div"),t=a("div"),t.innerHTML='Vendimi i Gjykatës Kushtetuese <div style="display: inline-block">09 Janar 2023 - 09 Janar 2024</div>',o=v(),s=a("div"),c=a("div"),u=a("img"),h=v(),r=a("input"),w=v(),f=a("div"),f.innerHTML='<button class="svelte-158jwg2">Njoftohu</button>',n(t,"class","vendimi-text svelte-158jwg2"),Z(u.src,g=tt)||n(u,"src",g),n(u,"alt","email icon"),n(c,"class","icon svelte-158jwg2"),n(r,"type","email"),n(r,"name","njoftohu"),n(r,"id","subscribe"),n(r,"placeholder","samifrasheri@votaediaspores.com"),n(r,"class","svelte-158jwg2"),n(f,"class","button svelte-158jwg2"),n(s,"class","subscribe-input svelte-158jwg2"),n(e,"class","container svelte-158jwg2")},m(b,d){A(b,e,d),i(e,t),i(e,o),i(e,s),i(s,c),i(c,u),i(s,h),i(s,r),i(s,w),i(s,f)},p:q,i:q,o:q,d(b){b&&I(e)}}}class lt extends G{constructor(e){super(),Y(this,e,null,st,K,{})}}const it="/assets/facebook-375ed0e6.svg",nt="/assets/insta-b7b00f11.svg",at="/assets/linkedin-426c1b88.svg",ot="/assets/tweet-f56b3cd2.svg",rt="/assets/youtube-1245d0a2.svg";function ut(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p,y,E,$,M,C,_,T,z,m,k,B;return{c(){e=a("div"),t=a("div"),o=a("a"),s=a("img"),u=v(),g=a("div"),h=a("a"),r=a("img"),f=v(),b=a("div"),d=a("a"),p=a("img"),E=v(),$=a("div"),M=a("a"),C=a("img"),T=v(),z=a("div"),m=a("a"),k=a("img"),Z(s.src,c=it)||n(s,"src",c),n(s,"alt","Facebook account"),n(o,"href","#"),n(t,"class","icon facebook svelte-9adjca"),Z(r.src,w=nt)||n(r,"src",w),n(r,"alt","Instagram account"),n(h,"href","#"),n(g,"class","icon instagram svelte-9adjca"),Z(p.src,y=at)||n(p,"src",y),n(p,"alt","Linkedin account"),n(d,"href","#"),n(b,"class","icon linkedin svelte-9adjca"),Z(C.src,_=ot)||n(C,"src",_),n(C,"alt","Twitter account"),n(M,"href","#"),n($,"class","icon twitter svelte-9adjca"),Z(k.src,B=rt)||n(k,"src",B),n(k,"alt","Youtube account"),n(m,"href","#"),n(z,"class","icon youtube svelte-9adjca"),n(e,"class","container svelte-9adjca")},m(V,P){A(V,e,P),i(e,t),i(t,o),i(o,s),i(e,u),i(e,g),i(g,h),i(h,r),i(e,f),i(e,b),i(b,d),i(d,p),i(e,E),i(e,$),i($,M),i(M,C),i(e,T),i(e,z),i(z,m),i(m,k)},p:q,i:q,o:q,d(V){V&&I(e)}}}class ct extends G{constructor(e){super(),Y(this,e,null,ut,K,{})}}function dt(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p;return o=new et({}),h=new Qe({}),f=new lt({}),d=new ct({}),{c(){e=a("div"),t=a("div"),X(o.$$.fragment),s=v(),c=a("div"),u=v(),g=a("div"),X(h.$$.fragment),r=v(),w=a("div"),X(f.$$.fragment),b=v(),X(d.$$.fragment),n(c,"class","space svelte-13p7kd5"),n(g,"class","countdown svelte-13p7kd5"),n(w,"class","contacts svelte-13p7kd5"),n(t,"class","content-area svelte-13p7kd5"),n(e,"class","background svelte-13p7kd5")},m(y,E){A(y,e,E),i(e,t),R(o,t,null),i(t,s),i(t,c),i(t,u),i(t,g),R(h,g,null),i(t,r),i(t,w),R(f,w,null),i(w,b),R(d,w,null),p=!0},p:q,i(y){p||(x(o.$$.fragment,y),x(h.$$.fragment,y),x(f.$$.fragment,y),x(d.$$.fragment,y),p=!0)},o(y){Q(o.$$.fragment,y),Q(h.$$.fragment,y),Q(f.$$.fragment,y),Q(d.$$.fragment,y),p=!1},d(y){y&&I(e),W(o),W(h),W(f),W(d)}}}class ft extends G{constructor(e){super(),Y(this,e,null,dt,K,{})}}function pt(l){let e,t,o,s,c,u,g,h,r,w;return{c(){e=a("div"),t=a("form"),o=a("div"),o.innerHTML='<h3 class="svelte-17k2vrr">Mbështet lëvizjen</h3>',s=v(),c=a("div"),u=a("button"),u.textContent=`${l[0].label}`,g=v(),h=a("div"),n(o,"class","form-row svelte-17k2vrr"),n(u,"class","paypal-button svelte-17k2vrr"),n(c,"class","form-row svelte-17k2vrr"),n(h,"class","form-row svelte-17k2vrr"),n(t,"class","svelte-17k2vrr"),n(e,"class","form-container svelte-17k2vrr")},m(f,b){A(f,e,b),i(e,t),i(t,o),i(t,s),i(t,c),i(c,u),i(t,g),i(t,h),r||(w=j(u,"click",l[1]),r=!0)},p:q,i:q,o:q,d(f){f&&I(e),r=!1,w()}}}function mt(l){const e={label:"Dhuro përmes PayPal",url:"https://www.paypal.com/paypalme/DPSHL"};return[e,()=>window.open(e.url,"_blank")]}class vt extends G{constructor(e){super(),Y(this,e,mt,pt,K,{})}}const ht="/assets/upload-469d678f.svg";function ye(l){let e;return{c(){e=a("p"),e.textContent="Tipi duhet pdf, midis madhësive 10kb dhe 10mb",n(e,"class","invalid-input svelte-1bvz3oc")},m(t,o){A(t,e,o)},d(t){t&&I(e)}}}function Ve(l){let e;return{c(){e=a("p"),e.textContent="Dërguar me sukses, faleminderit!",n(e,"class","successful-input svelte-1bvz3oc")},m(t,o){A(t,e,o)},d(t){t&&I(e)}}}function gt(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p,y,E,$,M,C,_,T,z,m,k,B,V,P,F,O,U,S,D,ee,le,L=l[0].isFileInvalid&&ye(),N=!l[0].isFileInvalid&&l[0].isFileSent&&Ve();return{c(){e=a("div"),t=a("form"),o=a("div"),o.innerHTML='<h3 class="svelte-1bvz3oc">Sugjero white-paper si të votohet:</h3>',s=v(),c=a("div"),u=a("label"),g=a("span"),g.textContent="Emri *",h=v(),r=a("input"),w=v(),f=a("label"),b=a("span"),b.textContent="Mbiemri *",d=v(),p=a("input"),y=v(),E=a("div"),$=a("label"),M=a("span"),M.textContent="Email *",C=v(),_=a("input"),T=v(),z=a("div"),m=a("label"),k=a("input"),B=v(),V=a("div"),P=a("img"),O=v(),U=a("span"),U.textContent="Ngarko PDF",S=v(),L&&L.c(),D=v(),N&&N.c(),n(o,"class","form-row svelte-1bvz3oc"),n(g,"class","svelte-1bvz3oc"),n(r,"type","text"),n(r,"placeholder","Hil"),r.required=!0,n(r,"class","svelte-1bvz3oc"),n(u,"class","svelte-1bvz3oc"),n(b,"class","svelte-1bvz3oc"),n(p,"type","text"),n(p,"placeholder","Mosi"),p.required=!0,n(p,"class","svelte-1bvz3oc"),n(f,"class","svelte-1bvz3oc"),n(c,"class","form-row svelte-1bvz3oc"),n(M,"class","svelte-1bvz3oc"),n(_,"type","email"),n(_,"placeholder","hilmosi@votaediaspores.com"),_.required=!0,n(_,"class","svelte-1bvz3oc"),n($,"class","svelte-1bvz3oc"),n(E,"class","form-row svelte-1bvz3oc"),n(k,"type","file"),n(k,"class","file-upload-input svelte-1bvz3oc"),n(k,"accept",".pdf"),k.required=!0,Z(P.src,F=ht)||n(P,"src",F),n(P,"alt","Upload icon"),n(P,"class","file-upload-icon svelte-1bvz3oc"),n(U,"class","file-upload-label"),n(V,"class","file-upload-content svelte-1bvz3oc"),n(m,"class","file-upload svelte-1bvz3oc"),oe(m,"disabled",l[1]),n(z,"class","form-row svelte-1bvz3oc"),n(t,"class","svelte-1bvz3oc"),n(e,"class","form-container svelte-1bvz3oc")},m(J,ie){A(J,e,ie),i(e,t),i(t,o),i(t,s),i(t,c),i(c,u),i(u,g),i(u,h),i(u,r),H(r,l[0].name),i(c,w),i(c,f),i(f,b),i(f,d),i(f,p),H(p,l[0].surname),i(t,y),i(t,E),i(E,$),i($,M),i($,C),i($,_),H(_,l[0].email),i(t,T),i(t,z),i(z,m),i(m,k),i(m,B),i(m,V),i(V,P),i(V,O),i(V,U),i(z,S),L&&L.m(z,null),i(z,D),N&&N.m(z,null),ee||(le=[j(r,"input",l[6]),j(r,"input",l[4]),j(p,"input",l[7]),j(p,"input",l[5]),j(_,"input",l[8]),j(_,"input",l[3]),j(k,"change",l[2])],ee=!0)},p(J,[ie]){ie&1&&r.value!==J[0].name&&H(r,J[0].name),ie&1&&p.value!==J[0].surname&&H(p,J[0].surname),ie&1&&_.value!==J[0].email&&H(_,J[0].email),ie&2&&oe(m,"disabled",J[1]),J[0].isFileInvalid?L||(L=ye(),L.c(),L.m(z,D)):L&&(L.d(1),L=null),!J[0].isFileInvalid&&J[0].isFileSent?N||(N=Ve(),N.c(),N.m(z,null)):N&&(N.d(1),N=null)},i:q,o:q,d(J){J&&I(e),L&&L.d(),N&&N.d(),ee=!1,se(le)}}}function bt(l,e,t){let o;const s={name:"",surname:"",email:"",file:null,isEmailValid:!1,isNameValid:!1,isSurnameValid:!1,isFileInvalid:!1,isFileSent:!1};function c(d){if(t(0,s.file=d.target.files[0],s),s.file.type!=="application/pdf"||s.file.size<10240||s.file.size>10485760){t(0,s.isFileInvalid=!0,s);return}else t(0,s.isFileInvalid=!1,s),u()}function u(){if(o)return;const d=new FormData;d.append("name",s.name),d.append("surname",s.surname),d.append("email",s.email),d.append("file",s.file),console.log(d),t(0,s.isFileSent=!0,s),t(0,s.name="",s),t(0,s.surname="",s),t(0,s.email="",s),t(0,s.file=null,s),t(0,s.isNameValid=!1,s),t(0,s.isSurnameValid=!1,s),t(0,s.isEmailValid=!1,s)}function g(d){const p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t(0,s.isEmailValid=p.test(d.target.value),s)}function h(d){t(0,s.isNameValid=d.target.value.trim().length>=2,s)}function r(d){t(0,s.isSurnameValid=d.target.value.trim().length>=2,s)}function w(){s.name=this.value,t(0,s)}function f(){s.surname=this.value,t(0,s)}function b(){s.email=this.value,t(0,s)}return l.$$.update=()=>{l.$$.dirty&1&&t(1,o=!s.isEmailValid||!s.isNameValid||!s.isSurnameValid)},[s,o,c,g,h,r,w,f,b]}class _t extends G{constructor(e){super(),Y(this,e,bt,gt,K,{})}}function wt(l){let e,t,o,s,c,u,g,h,r,w,f,b,d,p,y,E,$,M,C,_,T,z;return e=new ft({}),u=new Ke({}),w=new _t({}),d=new vt({}),E=new Oe({}),C=new Be({}),T=new Re({}),{c(){X(e.$$.fragment),t=v(),o=a("main"),s=a("div"),c=a("div"),X(u.$$.fragment),g=v(),h=a("div"),r=a("div"),X(w.$$.fragment),f=v(),b=a("div"),X(d.$$.fragment),p=v(),y=a("div"),X(E.$$.fragment),$=v(),M=a("div"),X(C.$$.fragment),_=v(),X(T.$$.fragment),n(c,"class","column1 svelte-13mnq09"),n(c,"id","historik"),n(r,"class","row1 svelte-13mnq09"),n(r,"id","white-paper"),n(b,"class","row2 svelte-13mnq09"),n(b,"id","donate"),n(y,"class","row3 svelte-13mnq09"),n(y,"id","antaresim"),n(M,"class","row4 svelte-13mnq09"),n(M,"id","shoqata"),n(h,"class","column2 svelte-13mnq09"),n(s,"class","container svelte-13mnq09"),n(o,"class","svelte-13mnq09")},m(m,k){R(e,m,k),A(m,t,k),A(m,o,k),i(o,s),i(s,c),R(u,c,null),i(s,g),i(s,h),i(h,r),R(w,r,null),i(h,f),i(h,b),R(d,b,null),i(h,p),i(h,y),R(E,y,null),i(h,$),i(h,M),R(C,M,null),A(m,_,k),R(T,m,k),z=!0},p:q,i(m){z||(x(e.$$.fragment,m),x(u.$$.fragment,m),x(w.$$.fragment,m),x(d.$$.fragment,m),x(E.$$.fragment,m),x(C.$$.fragment,m),x(T.$$.fragment,m),z=!0)},o(m){Q(e.$$.fragment,m),Q(u.$$.fragment,m),Q(w.$$.fragment,m),Q(d.$$.fragment,m),Q(E.$$.fragment,m),Q(C.$$.fragment,m),Q(T.$$.fragment,m),z=!1},d(m){W(e,m),m&&I(t),m&&I(o),W(u),W(w),W(d),W(E),W(C),m&&I(_),W(T,m)}}}class yt extends G{constructor(e){super(),Y(this,e,null,wt,K,{})}}new yt({target:document.getElementById("app")});
