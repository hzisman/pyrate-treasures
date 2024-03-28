function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-WTXuu6Ye.js","assets/index-DIL4adcp.js","assets/index-DyF6MxMo.css","assets/index-0pTjsNRq.js","assets/index-CMDwpBcn.js","assets/index-BVefhuae.js","assets/index-C9asOeYx.js","assets/index-DtKtQkfg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DIL4adcp.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-WTXuu6Ye.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-0pTjsNRq.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CMDwpBcn.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BVefhuae.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C9asOeYx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DtKtQkfg.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
