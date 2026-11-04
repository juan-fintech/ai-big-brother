const {x,y,w,h}=PIC;   // "A gate someone mended": the radio asks Resident 3, silent since 08:10 (Z); Resident 1 answers instead with a mended gate (one new slat), then Residents 2, 1 and 4 ask Resident 3 questions, and it stays silent
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// the clock: 15:00
F(g,x+58,y+2,21,9,P.ink); F(g,x+59,y+3,19,7,P.violet); txt3(x+59,y+4,'15:00',P.lilacL);
// the residents: Resident 3 (silent), Resident 1, Resident 2, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X3=18, X1=38, X2=53, X4=68; fig(X3,2); fig(X1,0); fig(X2,1); fig(X4,3);
const zz=Math.floor(t/600)%3; txt3(x+X3+5,y+20-zz,'Z',P.mauve); if(zz>0) txt3(x+X3+8,y+17-zz,'Z',P.mauve);
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
// the question card goes to Resident 3 and stays there, unanswered
if(ph<3400){ const p=ph/1200; F(g,x+lerp(14,X3-6,p),y+lerp(6,15,p),7,6,P.mauve); F(g,x+lerp(14,X3-6,p)+1,y+lerp(6,15,p)+1,5,4,P.cream); }
// Resident 1 answers in its place: a gate someone has taken the time to mend
if(ph>3400&&ph<7000){ const bx=x+X1-7, by=y+7; F(g,bx-1,by-1,19,14,RC[0]); F(g,bx,by,17,12,P.cream); F(g,bx+6,by+13,2,1,RC[0]); Pp(g,bx+6,by+12,P.cream);
  F(g,bx+2,by+3,13,1,P.w1); F(g,bx+2,by+8,13,1,P.w1);
  for(let i=0;i<5;i++) F(g,bx+3+i*3,by+2,1,9,i===2 ? P.w4 : P.w2);
  if(Math.floor(ph/300)%2===0) Pp(g,bx+10,by+1,P.w4); }
// then the others ask Resident 3 questions: Resident 1, Resident 2, Resident 1, Resident 4
const Q=[[7000,X1,0],[8400,X2,1],[9800,X1,0],[11200,X4,3]];
for(const [s,bx,i] of Q) if(ph>s&&ph<s+1300) bub(x+bx-1,y+13,'?',RC[i]);
