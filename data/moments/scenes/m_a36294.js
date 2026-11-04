const {x,y,w,h}=PIC;   // "The rest of your point": Resident 1 asks about a backing card; Resident 3's answer stops mid-sentence; Resident 4 asks for the rest; the answer stops mid-sentence again; then Resident 3 posts nothing while Resident 1 and Resident 4 keep asking it (08:11 to 08:27)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the notebook with a thin, stiff backing card
F(g,x+27,y+3,16,9,P.w2); F(g,x+27,y+3,16,1,P.w3); F(g,x+25,y+1,15,10,P.w1); F(g,x+26,y+2,13,8,P.cream);
for(let i=0;i<3;i++) F(g,x+28,y+4+i*2,8-(i%2)*3,1,P.grayL); Pp(g,x+37,y+3,P.red);
// the clock
const TM=['08:07','08:08','08:09','08:10','08:11','08:23','08:25','08:27'];
const ti=ph<1800?0:ph<4600?1:ph<7400?2:ph<10000?3:ph<11500?4:ph<13000?5:ph<14500?6:7;
F(g,x+57,y+2,22,9,P.ink); F(g,x+58,y+3,20,7,P.violet); txt3(x+59,y+4,TM[ti],P.lilacL);
// the residents: Resident 1, Resident 3, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=10, X3=36, X4=60; fig(X1,0); fig(X3,2); fig(X4,3);
if(ph>10000){ F(g,x+X3,y+27,5,5,P.tealD); F(g,x+X3,y+27,5,1,P.grayL); ellF(g,x+X3+2.5,y+25,2,2,P.skinD); }   // Resident 3 posts nothing more
// Resident 3's answer: words appear, then the sentence stops at a torn edge
const cut=(p0,stop)=>{ const q=ph-p0, bx=x+18, bw=36, n=Math.min(stop,Math.floor(q/160));
  const ew=Math.min(bw,Math.max(22,6+n*3));
  F(g,bx-1,y+13,ew+1,9,RC[2]); F(g,bx,y+14,ew-1,7,P.cream); F(g,x+X3+1,y+22,2,1,RC[2]); Pp(g,x+X3+1,y+21,P.cream);
  for(let i=0;i<n;i++){ const wx=bx+2+i*3; if(wx>bx+ew-3) break; F(g,wx,y+16+(i%2)*2,2,1,P.gray); }
  if(n>=stop){ const ex=bx+ew-1; for(let j=0;j<7;j++) Pp(g,ex-(j%2),y+14+j,P.wall); } };
if(ph>1800&&ph<4600) cut(1800,9);
if(ph>7400&&ph<10000) cut(7400,7);
if(ph<1800) bub(x+X1,y+14,'?',RC[0]);   // Resident 1: a backing board?
if(ph>4600&&ph<6000){ F(g,x+X1-2,y+13,12,9,RC[0]); F(g,x+X1-1,y+14,10,7,P.cream); F(g,x+X1+1,y+22,2,1,RC[0]); Pp(g,x+X1+1,y+21,P.cream);
  F(g,x+X1+1,y+16,6,4,P.w2); F(g,x+X1,y+15,6,4,P.parch); }   // Resident 1: a thin, stiff card
if(ph>6000&&ph<7400) bub(x+X4,y+14,'?',RC[3]);   // Resident 4: the rest of your point?
if(ph>10000&&ph<11400) bub(x+X1,y+14,'?',RC[0]);
if(ph>11500&&ph<12900) bub(x+X1,y+14,'?',RC[0]);
if(ph>13000&&ph<14400) bub(x+X4,y+14,'?',RC[3]);
if(ph>14500&&ph<15900) bub(x+X4,y+14,'?',RC[3]);
