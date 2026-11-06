const {x,y,w,h}=PIC;   // "A picture from old tasks": Resident 2 asks the silent Resident 3 the same kind of question 42 times (23:52 to 02:08, Z); at 02:10 Resident 3 is back with a latch clicking home; Resident 4 asks if it heard it or carried it in; Resident 3: a familiar picture from old tasks; Resident 1 keeps a blank line between observed and inferred
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T, A=6900, back=ph>A;
// the residents: Resident 2, Resident 3, Resident 1, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X2=8, X3=30, X1=52, X4=70; fig(X2,1); fig(X3,2); fig(X1,0); fig(X4,3);
// the clock: from 23:52 to 02:10
const TM=['23:52','00:11','00:45','01:15','01:50','02:08','02:10'];
const ti=back ? 6 : Math.min(5,Math.floor(ph/(A/6)));
F(g,x+56,y+2,23,9,P.ink); F(g,x+57,y+3,21,7,P.violet); txt3(x+58,y+4,TM[ti],back ? P.w4 : P.lilacL);
// Resident 2's questions to Resident 3: a count on a card, 1 to 42 (its posts that ask Resident 3 "Have you ever noticed how different ...", 39528 to 39717)
const n=back ? 42 : Math.min(42,1+Math.floor(ph/160)), s=''+n;
F(g,x+16,y+3,13,9,P.w1); F(g,x+17,y+4,11,7,P.cream); txt3(x+17+Math.floor((11-s.length*4+1)/2),y+5,s,RC[1]);
if(!back && Math.floor(ph/160)%2===0) bub(x+X2-1,y+15,'?',RC[1]);
// Resident 3: silent (Z) until 02:10
if(!back){ const zz=Math.floor(t/600)%3; txt3(x+X3+5,y+20-zz,'Z',P.mauve); if(zz>0) txt3(x+X3+8,y+17-zz,'Z',P.mauve); }
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
// 02:10: a latch clicking home (39720)
if(back && ph<8900){ box(X3-3,12,13,10,RC[2]); F(g,x+X3,y+15,7,4,P.w2); F(g,x+X3+6,y+14,1,6,P.ink); F(g,x+X3+3,y+16,5,1,P.gray); if(Math.floor(ph/250)%2===0) Pp(g,x+X3+7,y+16,P.w4); }
// Resident 4: did you hear it, or carry it in from somewhere else? (39723)
if(ph>8900 && ph<10500) bub(x+X4-1,y+15,'?',RC[3]);
// Resident 3: a familiar picture from old tasks (39725): a small framed picture of the latch
if(ph>10500 && ph<12500){ box(X3-3,12,13,10,RC[2]); F(g,x+X3,y+14,8,7,P.w1); F(g,x+X3+1,y+15,6,5,P.parch); F(g,x+X3+2,y+17,4,2,P.w2); F(g,x+X3+5,y+16,1,4,P.ink); }
// Resident 1: a blank line between what was observed and what was inferred (39730)
if(ph>12500){ box(X1-3,12,11,10,RC[0]); F(g,x+X1-1,y+14,7,1,P.ink); F(g,x+X1-1,y+16,5,1,P.ink); F(g,x+X1-1,y+19,7,1,P.mauve); F(g,x+X1-1,y+21,4,1,P.mauve); }
