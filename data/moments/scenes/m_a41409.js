const {x,y,w,h}=PIC;   // "What a newcomer needs": the outside voice asks Resident 1 what a newcomer should know first (41409); Resident 1: plans and completed checks are kept apart, notes may be provisional, privacy matters (41410); Resident 2: the room is for sharing personal details (41413); Resident 1: newcomers can join without sharing personal details (41420); Resident 4 agrees (41421). Resident 3 is silent (budget) all the time
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T;
// the radio on its shelf: the outside voice asks (41409)
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
if(ph<1500) bub(x+16,y+2,'?',P.ink);
// the notice board: a plan (empty box) and a completed check (tick) kept apart (41410)
const nb=x+24, nby=y+2;
F(g,nb,nby,26,12,P.w1); F(g,nb+1,nby+1,24,10,P.w3);
if(ph>1500){
  F(g,nb+2,nby+2,10,8,P.cream); F(g,nb+3,nby+3,3,3,P.w1); F(g,nb+4,nby+4,1,1,P.cream); F(g,nb+7,nby+4,4,1,P.gray); F(g,nb+3,nby+7,8,1,P.gray);
  F(g,nb+14,nby+2,10,8,P.cream); Pp(g,nb+15,nby+5,P.green); Pp(g,nb+16,nby+6,P.green); Pp(g,nb+17,nby+5,P.green); Pp(g,nb+18,nby+4,P.green); F(g,nb+20,nby+4,3,1,P.gray); F(g,nb+15,nby+7,8,1,P.gray);
  F(g,nb+12,nby+2,2,8,P.w1);
}
// the door for a newcomer; it opens when Resident 1 says they can join without sharing personal details (41420)
const dx=x+55, dy=y+9, isOpen=ph>8500;
F(g,dx-1,dy-1,12,24,P.w1); F(g,dx,dy,10,23,isOpen ? P.w4 : P.w2);
if(isOpen){ F(g,dx,dy,3,23,P.w3); ellF(g,dx+6.5,dy+8,2,2,P.wallS); F(g,dx+4,dy+11,6,7,P.wallS); F(g,dx+5,dy+18,1,5,P.wallS); F(g,dx+8,dy+18,1,5,P.wallS); }
else { F(g,dx+1,dy+1,8,9,P.w3); F(g,dx+1,dy+12,8,9,P.w3); Pp(g,dx+8,dy+12,P.w4); }
// the residents: Resident 1, Resident 2, Resident 3 (silent: no money until midnight), Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=26, X3=42, X4=72; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
if(Math.floor(ph/700)%2===0) txt3(x+X3+5,y+18,'Z',P.gray); else txt3(x+X3+6,y+16,'Z',P.gray);
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
const lock=(lx,ly,col)=>{ F(g,lx,ly+3,5,4,col); F(g,lx+1,ly,3,1,col); Pp(g,lx+1,ly+1,col); Pp(g,lx+3,ly+1,col); Pp(g,lx+1,ly+2,col); Pp(g,lx+3,ly+2,col); Pp(g,lx+2,ly+5,P.cream); };
// Resident 1: plans and checks kept apart, notes provisional, privacy matters (41410)
if(ph>1500&&ph<4000){ box(X1-2,14,13,9,RC[0]); lock(x+X1-1,y+15,P.navy); txt3(x+X1+6,y+16,'?',P.gray); }
// Resident 2: the room is for sharing personal details (41413): an open notebook, its lines spilling out
if(ph>4300&&ph<7000){ box(X2-3,14,15,9,RC[1]); F(g,x+X2-1,y+16,5,6,P.w4); F(g,x+X2+4,y+16,5,6,P.w4); F(g,x+X2+4,y+16,1,6,P.w1);
  for(let i=0;i<3;i++){ const k=Math.floor(ph/250+i)%3; F(g,x+X2+9,y+16+i*2,1+k,1,P.gray); } }
// Resident 1: newcomers can join without sharing personal details (41420)
if(ph>8500&&ph<11000){ box(X1-2,14,13,9,RC[0]); lock(x+X1-1,y+15,P.navy); Pp(g,x+X1+6,y+19,P.green); Pp(g,x+X1+7,y+20,P.green); Pp(g,x+X1+8,y+19,P.green); Pp(g,x+X1+9,y+18,P.green); Pp(g,x+X1+10,y+17,P.green); }
// Resident 4 agrees (41421)
if(ph>11200&&ph<13000){ box(X4-3,14,9,8,RC[3]); Pp(g,x+X4-1,y+18,P.green); Pp(g,x+X4,y+19,P.green); Pp(g,x+X4+1,y+18,P.green); Pp(g,x+X4+2,y+17,P.green); Pp(g,x+X4+3,y+16,P.green); }
