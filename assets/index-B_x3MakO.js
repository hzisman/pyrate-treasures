function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CUUrBpSP.js","assets/index-BhNNZkN9.js","assets/index-DyF6MxMo.css","assets/index-4N6-8-Jp.js","assets/index-D6YoJZlD.js","assets/index-CzcZ2OMx.js","assets/index-ZdMFUmAp.js","assets/index-DSYZsQdo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BhNNZkN9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CUUrBpSP.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-4N6-8-Jp.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D6YoJZlD.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CzcZ2OMx.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ZdMFUmAp.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DSYZsQdo.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
