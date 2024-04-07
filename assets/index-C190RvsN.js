function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D7XDVFQo.js","assets/index-CYeOM5X-.js","assets/index-BGUo5n2b.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CYeOM5X-.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D7XDVFQo.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
