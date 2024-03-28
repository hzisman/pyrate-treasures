function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CJRLhu3c.js","assets/index-BP07IwHN.js","assets/index-BtUWfrp4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BP07IwHN.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CJRLhu3c.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
