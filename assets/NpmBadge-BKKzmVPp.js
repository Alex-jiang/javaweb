import{i as p,j as n,_ as d,o as g,c as i,a as _}from"./app-D3aDzviN.js";const l=p({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(r,{expose:s}){s();const e=r,a=n(()=>`https://www.npmjs.com/package/${e.package}`),t=n(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),c=n(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(t.value)}`),o={props:e,badgeLink:a,badgeLabel:t,badgeImg:c};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),m=["href","title"],u=["src","alt"];function f(r,s,e,a,t,c){return g(),i("a",{class:"npm-badge",href:a.badgeLink,title:e.package,target:"_blank",rel:"noopener noreferrer"},[_("img",{src:a.badgeImg,alt:e.package},null,8,u)],8,m)}const k=d(l,[["render",f],["__scopeId","data-v-c758b2a0"],["__file","NpmBadge.vue"]]);export{k as default};