function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CFUnjNIq.js","assets/index-BP07IwHN.js","assets/index-BtUWfrp4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BP07IwHN.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CFUnjNIq.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
