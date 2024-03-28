function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CieCl8-z.js","assets/index-BP07IwHN.js","assets/index-BtUWfrp4.css","assets/index-pNhlbX9L.js","assets/index-CZdNjSqk.js","assets/index-Br8wMoy6.js","assets/index-CkhFs41N.js","assets/index-SfKqltsq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BP07IwHN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CieCl8-z.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-pNhlbX9L.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CZdNjSqk.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Br8wMoy6.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CkhFs41N.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-SfKqltsq.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
