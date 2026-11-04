const {x,y,w,h}=PIC;   // "Who surprises you most?": four portraits; the light stops on Resident 3; Resident 1 picks 3 (the practical details, like who clears the drop box), and later Resident 2 praises the same
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=11000, ph=t%T, FX=[4,23,42,61];
const lit=ph<1500 ? -1 : ph<2100 ? 0 : ph<2700 ? 1 : ph<3300 ? 2 : ph<3900 ? 3 : 2;
const won=ph>=4200;
FX.forEach((fx,i)=>{ const X=x+fx, gold=won && i===2;
  F(g,X,y+19,14,13,gold ? P.w4 : P.w1); F(g,X+1,y+20,12,11,P.cream);
  F(g,X+4,y+27,6,4,RC[i]); F(g,X+4,y+27,6,1,P.cream); ellF(g,X+7,y+24.5,2.2,2.2,P.skinM);
  txt3(X+6,y+33,''+(i+1),P.cream);
  if(lit===i) F(g,X-1,y+9,16,23,won ? 'rgba(255,236,170,0.2)' : 'rgba(255,236,170,0.35)'); });
if(won){ const sp=Math.floor(t/250)%4;   // sparkles round portrait 3, and the drop box
  for(const [a,b,q] of [[-2,18,0],[15,18,1],[-2,30,2],[15,30,3]]) if(q!==sp) Pp(g,x+42+a,y+b,P.w4);
  F(g,x+53,y+33,5,4,P.red); F(g,x+54,y+34,3,1,P.ink); F(g,x+53,y+33,5,1,P.peach); }
if(ph<1500) bub(x+36,y+9,'?',P.ink);
if(ph>=4200 && ph<6800) bub(x+8,y+9,'3',RC[0]);
if(ph>=7000 && ph<9600) bub(x+27,y+9,'3',RC[1]);
