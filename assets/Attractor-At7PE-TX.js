import{P as x}from"./ParticlesInteractorBase-vfDeBun3.js";import{H as f,W as p}from"./index-Cu123jtW.js";const l=1e3,g=1;class q extends x{constructor(t){super(t)}clear(){}init(){}interact(t){const o=this.container;t.attractDistance===void 0&&(t.attractDistance=f(t.options.move.attract.distance)*o.retina.pixelRatio);const y=t.attractDistance,i=t.getPosition(),d=o.particles.quadTree.queryCircle(i,y);for(const e of d){if(t===e||!e.options.move.attract.enable||e.destroyed||e.spawning)continue;const u=e.getPosition(),{dx:v,dy:m}=p(i,u),r=t.options.move.attract.rotate,c=v/(r.x*l),n=m/(r.y*l),a=e.size.value/t.size.value,s=g/a;t.velocity.x-=c*a,t.velocity.y-=n*a,e.velocity.x+=c*s,e.velocity.y+=n*s}}isEnabled(t){return t.options.move.attract.enable}reset(){}}export{q as Attractor};
