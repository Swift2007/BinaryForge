/* BinaryForge interactions — no libraries.
   - sticky header state, mobile menu (a11y)
   - smooth scroll w/ header offset + active link
   - reveal on scroll w/ stagger + soft fade-out
   - contact validation + Formspree placeholder
*/
(function(){
"use strict";
var header=document.querySelector(".site-header");
var toggle=document.querySelector(".nav-toggle");
var menu=document.getElementById("nav-menu");
var links=Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
/* Page load: hero entrance */
window.addEventListener("DOMContentLoaded",function(){
document.body.classList.add("is-loaded");
document.querySelectorAll(".hero-anim").forEach(function(el,i){
el.style.setProperty("--hd",(i*110)+"ms");
el.classList.add("in");
});
document.getElementById("year").textContent=String(new Date().getFullYear());
});
/* Header blur after scroll */
function onScroll(){header.classList.toggle("scrolled",window.scrollY>8);}
onScroll();window.addEventListener("scroll",onScroll,{passive:true});
/* Mobile menu */
function setMenu(open){
toggle.setAttribute("aria-expanded",String(open));
toggle.setAttribute("aria-label",open?"Close menu":"Open menu");
menu.classList.toggle("open",open);
document.body.classList.toggle("menu-open",open);
}
toggle.addEventListener("click",function(){
setMenu(toggle.getAttribute("aria-expanded")!=="true");
});
document.addEventListener("keydown",function(e){
if(e.key==="Escape"&&menu.classList.contains("open")){setMenu(false);toggle.focus();}
});
menu.addEventListener("click",function(e){
if(e.target.closest("a"))setMenu(false);
});
/* Theme: dark default, light via toggle, remembered + logo swap */
var themeBtn=document.getElementById("theme-toggle");
var brandLogo=document.querySelector(".brand-logo");
var footerLogo=document.querySelector(".footer-logo");
var LOGO_DARK="assets/binaryforge-logo.svg";
var LOGO_LIGHT="assets/binaryforge-logo-light.svg";
function currentTheme(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark";}
function paintTheme(t){
if(t==="light"){document.documentElement.setAttribute("data-theme","light");}
else{document.documentElement.removeAttribute("data-theme");}
var logo=t==="light"?LOGO_LIGHT:LOGO_DARK;
if(brandLogo)brandLogo.src=logo;
if(footerLogo)footerLogo.src=logo;
if(themeBtn){
var toLight=t!=="light";
themeBtn.setAttribute("aria-pressed",String(!toLight));
themeBtn.setAttribute("aria-label",toLight?"Switch to light mode":"Switch to dark mode");
}
try{localStorage.setItem("bf-theme",t);}catch(e){}
}
paintTheme(currentTheme());
if(themeBtn)themeBtn.addEventListener("click",function(){
paintTheme(currentTheme()==="light"?"dark":"light");
});
var reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
links.forEach(function(a){
a.addEventListener("click",function(e){
var id=a.getAttribute("href");
if(!id||id.charAt(0)!=="#")return;
var t=document.querySelector(id);
if(!t)return;
e.preventDefault();
var y=t.getBoundingClientRect().top+window.scrollY-72;
window.scrollTo({top:y,behavior:reduceMotion?"auto":"smooth"});
history.replaceState(null,"",id);
});
});
var spy=new IntersectionObserver(function(es){
es.forEach(function(en){
if(en.isIntersecting){
links.forEach(function(a){a.classList.toggle("is-active",a.getAttribute("href")==="#"+en.target.id);});
}
});
},{rootMargin:"-45% 0px -50% 0px"});
["home","why","services","contact"].forEach(function(id){
var s=document.getElementById(id);if(s)spy.observe(s);
});
var revealer=new IntersectionObserver(function(es){
es.forEach(function(en){
var el=en.target;
if(en.isIntersecting){el.classList.add("visible");el.classList.remove("leaving");}
else if(en.boundingClientRect.top>0){el.classList.remove("visible");}
else{el.classList.add("leaving");}
});
},{threshold:.12,rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".reveal").forEach(function(el){revealer.observe(el);});
var form=document.getElementById("contact-form");
var status=document.getElementById("form-status");
var submit=document.getElementById("cf-submit");
var FORMSPREE_ENDPOINT="";
function setErr(id,msg){
var f=document.getElementById(id);
var s=document.querySelector('[data-error-for="'+id+'"]');
if(s)s.textContent=msg||"";
if(f)f.setAttribute("aria-invalid",msg?"true":"false");
return !msg;
}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);}
if(form){
["cf-name","cf-email","cf-message"].forEach(function(id){
var f=document.getElementById(id);
f.addEventListener("input",function(){setErr(id,"");status.textContent="";status.className="form-status";});
});
form.addEventListener("submit",function(e){
e.preventDefault();
var name=document.getElementById("cf-name").value.trim();
var email=document.getElementById("cf-email").value.trim();
var msg=document.getElementById("cf-message").value.trim();
var ok=true;
ok=setErr("cf-name",name.length>=2?"":"Please enter your name.")&&ok;
ok=setErr("cf-email",validEmail(email)?"":"Please enter a valid email address.")&&ok;
ok=setErr("cf-message",msg.length>=10?"":"Please tell us a little more (10+ characters).")&&ok;
if(!ok){status.textContent="Please fix the highlighted fields.";status.className="form-status err";return;}
submit.disabled=true;submit.textContent="Sending...";
status.textContent="";status.className="form-status";
function done(good,note){
submit.disabled=false;submit.textContent="Send message";
status.textContent=note;status.className="form-status "+(good?"ok":"err");
if(good)form.reset();
}
if(!FORMSPREE_ENDPOINT){
setTimeout(function(){done(true,"Thanks! Your message is ready — connect a form endpoint in js/main.js to receive it live.");},700);
return;
}
fetch(FORMSPREE_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({name:name,email:email,message:msg})}).then(function(r){
if(r.ok)done(true,"Thanks! We got your message and will reply within one business day.");
else done(false,"Something went wrong sending your message. Please email us directly.");
}).catch(function(){done(false,"Network error. Please try again or email us directly.");});
});
}
})();
