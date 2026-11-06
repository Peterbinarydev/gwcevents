(function(){
var w=window;
if(w.__i20AttributionLoaded)return;w.__i20AttributionLoaded=1;
!function(w,d,s,u,n,a,b){if(w[n])return;a=w[n]={q:[],t:+new Date,s:[],o:u,track:function(){a.q.push([+new Date].concat([].slice.call(arguments)))},setScope:function(){a.s=[].slice.call(arguments).filter(function(x){return typeof x==="string"});a.q.push([+new Date,"setScope"].concat(a.s))},scope:function(){var c=[].slice.call(arguments);return{track:function(){a.q.push([+new Date].concat([].slice.call(arguments)).concat([{__scope:c}]))}}}};b=d.createElement(s);b.async=1;b.src=u+"/s.js";d.getElementsByTagName(s)[0].parentNode.insertBefore(b,d.getElementsByTagName(s)[0])}(window,document,"script","https://t.whop.tw","whop");
w.whop.setScope("biz_JeTXRLJPEIENfE");
var q=w.i20AttributionQueue;if(!q||typeof q.length!=="number")q=[];
w.i20AttributionQueue={push:function(e){w.whop.track.apply(w.whop,e);return 0}};
for(var i=0;i<q.length;i++)w.i20AttributionQueue.push(q[i]);
var h=document.createElement("script");h.type="text/javascript";h.async=true;h.src="https://224197.t.hyros.com/v1/lst/universal-script?ph=65a2a98c0a63545f9e11dec5b77bde16fa497f763852e6b1dac2112b7d95606c&tag=!clicked&ref_url="+encodeURI(document.URL);document.head.appendChild(h);
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
var m="1191296310137403";w.fbq("set","autoConfig",false,m);w.fbq("init",m);w.fbq("track","PageView");
})();
