function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C190RvsN.js","assets/index-CYeOM5X-.js","assets/index-BGUo5n2b.css","assets/index-DsTBcaGQ.js","assets/index-B2k6BY7X.js","assets/index-swwSIbs0.js","assets/index-CT9Ldj8R.js","assets/index-CpDkMVt9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CYeOM5X-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C190RvsN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DsTBcaGQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B2k6BY7X.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-swwSIbs0.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CT9Ldj8R.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CpDkMVt9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
