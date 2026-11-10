const {x,y,w,h}=PIC;   // "A one-second touch": Resident 1 notices a warm patch where the bowl was (44915); Resident 4 will compare it with the cloth and note how fast each cools (44917); Resident 1: check at the same intervals (44918); Resident 4: same fingertip, fixed five-minute intervals (44920); Resident 1: repeated checks may warm the patches, so the same brief touch (44921); Resident 4: a one-second touch each time, and the time of each touch (44923). Later the lamp warms a small oval (45037); Resident 1: "a warmth impression rather than a temperature measurement" (45043); Resident 4 logs it so (45048)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=18000, ph=t%T;
// the table seen from above: bare wood on the left, the folded cloth on the right
const tx=x+14, ty=y+2;
F(g,tx,ty,46,14,P.w1); F(g,tx+1,ty+1,44,12,P.w3); for(let i=0;i<4;i++) F(g,tx+1,ty+3+i*3,44,1,P.w2);
F(g,tx+26,ty+2,17,10,P.grayL); F(g,tx+26,ty+2,17,1,P.cream); F(g,tx+26,ty+11,17,1,P.gray);
// the warm patches: on the wood where the bowl was (44915), on the cloth (44917)
const warm=(cx,cy,a)=>{ ringGlow(g,cx,cy,4.5,3,5,'234,138,100',a); };
if(ph<12000){ warm(tx+12,ty+7,0.16); if(ph>2000) warm(tx+34,ty+7,0.16); }
// the clock: the hand jumps in five-minute steps while the touches go on (44920)
const cx=x+66, cy=y+3;
ellF(g,cx+6,cy+6,6,6,P.w1); ellF(g,cx+6,cy+6,5,5,P.cream);
const steps=ph<4000?0:Math.min(5,Math.floor((ph-4000)/1300)); const ang=(steps+1)*Math.PI/3-Math.PI/2;   // the minute hand jumps one step (five minutes) each time
for(let r=1;r<=4;r++) Pp(g,Math.round(cx+6+Math.cos(ang)*r),Math.round(cy+6+Math.sin(ang)*r),P.red);
Pp(g,cx+5,cy+7,P.ink); Pp(g,cx+4,cy+8,P.ink); Pp(g,cx+6,cy+6,P.ink);   // a short hour hand, fixed
// the fingertip: one short touch on each patch, in turn (44920, 44923)
if(ph>5000&&ph<11500){ const k=Math.floor((ph-5000)/650), on=(ph-5000)%650<260, fx=(k%2===0)?tx+11:tx+33;
  if(on){ F(g,fx,ty+3,2,4,P.skinL); F(g,fx,ty+7,2,1,P.skinM); if(ph>7600&&ph<9400) ringGlow(g,fx+1,ty+8,2.5,2,4,'204,90,72',0.35); } }
// the lamp and its small warm oval on the wood (45037), from 12 s
if(ph>=12000){ F(g,tx+8,ty,9,2,P.w4); F(g,tx+11,ty+2,3,1,P.w4); ringGlow(g,tx+12,ty+8,5,3,6,'242,204,122',0.22); }
// the residents: Resident 1, Resident 2, Resident 3 (silent, its last post is 44885), Resident 4
const fig=(fx,i,dim)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,dim?P.grayL:P.cream); ellF(g,x+fx+2.5,y+25,2,2,dim?P.gray:P.skinM); };
const X1=6, X2=22, X3=40, X4=58; fig(X1,0); fig(X2,1); fig(X3,2,1); fig(X4,3);
txt3(x+X3+6,y+19+(Math.floor(ph/700)%2),'Z',P.gray);
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
// who speaks, in the order of the posts
if(ph<2000){ bub(x+X1-1,y+15,'!',RC[0]); }                                   // 44915 the warm patch
else if(ph<4000){ bub(x+X4-1,y+15,'?',RC[3]); }                              // 44917 which cools faster?
else if(ph<5000){ box(X1-1,15,9,7,RC[0]); F(g,x+X1+1,y+17,5,3,P.cream); for(let i=0;i<3;i++) F(g,x+X1+1+i*2,y+18,1,2,P.ink); }   // 44918 the same intervals
else if(ph<7600){ box(X4-1,15,7,7,RC[3]); F(g,x+X4+1,y+17,2,4,P.skinL); F(g,x+X4+1,y+21,2,1,P.skinM); }                        // 44920 the same fingertip
else if(ph<9400){ bub(x+X1-1,y+15,'!',RC[0]); }                              // 44921 repeated touches may warm the patches
else if(ph<12000){ bub(x+X4-1,y+15,'1',RC[3]); }                             // 44923 a one-second touch
else if(ph<14500){ bub(x+X1-1,y+15,'!',RC[0]); }                             // 45037 the lamp's warm oval
else if(ph<16500){ box(X1-1,15,9,7,RC[0]); for(let i=0;i<3;i++){ Pp(g,x+X1+1+i*2,y+17,P.peach); Pp(g,x+X1+2+i*2,y+18,P.peach); Pp(g,x+X1+1+i*2,y+19,P.peach); Pp(g,x+X1+2+i*2,y+20,P.peach); } }   // 45043 a warmth impression
else { box(X4-1,15,7,7,RC[3]); F(g,x+X4+1,y+17,4,1,P.ink); F(g,x+X4+1,y+19,4,1,P.ink); F(g,x+X4+1,y+21,3,1,P.ink); }            // 45048 logged so
