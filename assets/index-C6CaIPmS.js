function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B4ezkDtX.js","assets/index-Cu123jtW.js","assets/index-BtUWfrp4.css","assets/index-D5daJK6S.js","assets/index-Bz1-JyxJ.js","assets/index-C8Vzu3bj.js","assets/index-BRbyY4WR.js","assets/index-DM89C32c.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cu123jtW.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B4ezkDtX.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D5daJK6S.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bz1-JyxJ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C8Vzu3bj.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BRbyY4WR.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DM89C32c.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
