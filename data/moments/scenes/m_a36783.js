const {x,y,w,h}=PIC;   // "Listen first": the radio asks Resident 2 to speak first or listen first; Resident 2 posts seven other follow-ups (a pile of sheets); Resident 1 reminds it; Resident 4 answers first (an ear); Resident 2 answers (an ear) and asks Resident 4; Resident 4: already answered (a tick)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// the question on the wall: a mouth or an ear
F(g,x+30,y+2,27,9,P.w1); F(g,x+31,y+3,25,7,P.cream);
F(g,x+33,y+5,7,1,P.red); F(g,x+34,y+4,2,1,P.red); F(g,x+37,y+4,2,1,P.red); F(g,x+33,y+6,7,1,P.wine); F(g,x+34,y+7,5,1,P.red);
txt3(x+41,y+4,'OR',P.ink);
const ear=(ex,ey)=>{ ellF(g,ex+2.5,ey+3,2.6,3.4,P.skinM); F(g,ex+2,ey+1,2,1,P.skinD); F(g,ex+3,ey+2,1,3,P.skinD); F(g,ex+2,ey+4,1,1,P.skinD); F(g,ex+1,ey+6,2,1,P.skinD); };
ear(x+49,y+3);
// the residents: Resident 2, Resident 1, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X2=20, X1=44, X4=64; fig(X2,1); fig(X1,0); fig(X4,3);
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
if(ph<1200){ const p=ph/1200; F(g,x+lerp(14,X2,p),y+lerp(6,18,p),7,6,P.mauve); F(g,x+lerp(14,X2,p)+1,y+lerp(6,18,p)+1,5,4,P.cream); }
// Resident 2's follow-ups on other topics: one sheet each, seven before it answers
const k=ph<1200 ? 0 : Math.min(7,1+Math.floor((ph-1200)/1000));
for(let j=0;j<k;j++){ F(g,x+27+(j%2),y+31-j,8,1,j%2 ? P.cream : P.parch); Pp(g,x+34+(j%2),y+31-j,P.grayL); }
if(ph>1200&&ph<8200){ const p=((ph-1200)%1000)/1000; if(p<0.6){ const sx=lerp(X2+2,28,p/0.6), sy=lerp(22,31-k,p/0.6)-Math.round(Math.sin(p/0.6*3.1)*4); F(g,x+sx,y+sy,6,4,P.cream); F(g,x+sx+1,y+sy+1,4,1,P.gray); F(g,x+sx+1,y+sy+2,3,1,P.gray); } }
if(k>0){ const c=''+k; F(g,x+31,y+16,7,7,P.w1); F(g,x+32,y+17,5,5,P.cream); txt3(x+33,y+17,c,k===7 ? P.red : P.ink); }
// a bubble with an ear: listen first
const eb=(bx,by,col)=>{ F(g,bx-1,by-1,11,10,col); F(g,bx,by,9,8,P.cream); F(g,bx+2,by+9,2,1,col); Pp(g,bx+2,by+8,P.cream); ear(bx+2,by); };
if(ph>8200&&ph<9800) bub(x+X1-1,y+12,'?',RC[0]);   // Resident 1: the question is still open
if(ph>9800&&ph<11400) eb(x+X4-2,y+11,RC[3]);   // Resident 4 answers first: listen first
if(ph>11400&&ph<12600) eb(x+X2-2,y+11,RC[1]);   // Resident 2 answers: listen first
if(ph>12600&&ph<13600) bub(x+X2-1,y+12,'?',RC[1]);   // and asks Resident 4
if(ph>13600){ const bx=x+X4-2, by=y+11; F(g,bx-1,by-1,11,10,RC[3]); F(g,bx,by,9,8,P.cream); F(g,bx+2,by+9,2,1,RC[3]); Pp(g,bx+2,by+8,P.cream);
  line(g,bx+2,by+4,bx+3,by+5,P.green); line(g,bx+4,by+5,bx+6,by+2,P.green); }   // Resident 4: already answered
