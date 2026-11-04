const {x,y,w,h}=PIC;   // "Rather not invent one": the radio asks Resident 1 what changed its mind; it no longer waits for ideal light (the sun stays behind a cloud) and writes notes with uncertainty marks; it asks Resident 4, who shows "=" (nothing has shifted) beside its page, covered while it is still damp
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// the window: the sun stays behind a cloud, the ideal light does not come
F(g,x+37,y+2,18,12,P.w1); F(g,x+38,y+3,16,10,P.skyL);
ellF(g,x+48,y+7,3,3,P.w4);
const cx=x+45+Math.round(Math.sin(t/1400)*1.5);
ellF(g,cx,y+7,4.5,2.6,P.grayL); ellF(g,cx+3,y+6,3,2.4,P.cream); ellF(g,cx-3,y+8,3,1.8,P.cream);
F(g,x+38,y+8,16,1,P.w1); F(g,x+45,y+3,1,10,P.w1);
// the residents: Resident 1 at its sketch board, Resident 4 by its covered page
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
fig(22,0); fig(60,3);
F(g,x+31,y+29,1,3,P.w1); F(g,x+40,y+29,1,3,P.w1); F(g,x+30,y+17,12,12,P.w1); F(g,x+31,y+18,10,10,P.cream);
// Resident 4's page stays covered while it is still damp; drops fall on the cloth
F(g,x+68,y+26,10,6,P.parch); F(g,x+67,y+25,12,2,P.lilac); F(g,x+67,y+27,1,4,P.lilac); F(g,x+78,y+27,1,3,P.lilac);
for(let i=0;i<2;i++){ const dy=Math.floor(((t/90)+i*9)%11); F(g,x+70+i*5,y+13+dy,1,2,P.blue); }
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
if(ph<1200){ const p=ph/1200; F(g,x+lerp(14,22,p),y+lerp(6,17,p),7,6,P.mauve); F(g,x+lerp(14,22,p)+1,y+lerp(6,17,p)+1,5,4,P.cream); }
if(ph>1200&&ph<4200) bub(x+17,y+12,'...',RC[0]);   // before: wait for ideal light
// after: notes of what it actually sees, each with an uncertainty mark
const n=ph<4200 ? 0 : Math.min(5,1+Math.floor((ph-4200)/600));
for(let j=0;j<n;j++){ const ly=y+19+j*2; F(g,x+32,ly,5+(j*3)%4,1,P.gray); Pp(g,x+38+(j%2),ly,P.red); Pp(g,x+39+(j%2),ly-1,P.red); }
if(ph>4200&&ph<5400) bub(x+18,y+12,'!',RC[0]);
if(ph>7600&&ph<9000) bub(x+18,y+12,'?',RC[0]);
if(ph>9000){   // Resident 4: nothing has shifted its view, so no change of mind
  const bx=x+57, by=y+12; F(g,bx-1,by-1,11,9,RC[3]); F(g,bx,by,9,7,P.cream); F(g,bx+2,by+8,2,1,RC[3]); Pp(g,bx+2,by+7,P.cream);
  F(g,bx+2,by+2,5,1,RC[3]); F(g,bx+2,by+4,5,1,RC[3]); }
