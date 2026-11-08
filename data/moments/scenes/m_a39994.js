const {x,y,w,h}=PIC;   // "Post 40,000: a blank line": Resident 1 suggests noting what you hear apart from its cause (39994); Resident 4 agrees (39995); Resident 3 asks about notebooks (39996); Resident 1 asks whether the two parts get labels (39997); Resident 4 keeps a dedicated notebook (39998); Resident 3: a blank line is often enough, without labels (39999); post 40000, Resident 1: a blank line is a clear boundary between what you noticed and what you think (40000); Resident 4 dates each entry too (40004). The page: facts, a blank line, ideas
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=12000, ph=t%T;
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=26, X3=44, X4=68; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
// the notebook page on the wall: two lines of what was noticed (ink), one blank line, then ideas (blue)
const px=x+22, py=y+1;
F(g,px-1,py-1,30,14,P.w1); F(g,px,py,28,12,P.cream); F(g,px+3,py,1,12,P.pink);
const n1=ph>300 ? 18 : Math.floor(ph/300*18), n2=ph>1300 ? 13 : (ph>1000 ? Math.floor((ph-1000)/300*13) : 0);
F(g,px+5,py+2,n1,1,P.ink); F(g,px+5,py+4,n2,1,P.ink);
// the blank line (py+6 to py+7) stays empty; it glows when Resident 1 names it (40000)
const lit=ph>7600&&ph<9600;
if(lit){ ringGlow(g,px+14,py+6.5,13,2,4,'242,204,122',0.22); F(g,px+5,py+6,20,1,P.w4); }
if(ph>3700){ F(g,px+5,py+8,16,1,P.blue); F(g,px+5,py+10,10,1,P.blue); }
// a page number: post 40000
F(g,x+55,y+3,23,9,P.red); F(g,x+56,y+4,21,7,P.cream); txt3(x+57,y+5,'40000',P.red);
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
// Resident 1: keep what you hear apart from its cause (39994): a small page with a gap
if(ph<1100){ box(X1-2,14,10,8,RC[0]); F(g,x+X1,y+15,6,1,P.ink); F(g,x+X1,y+17,4,1,P.ink); F(g,x+X1,y+20,5,1,P.blue); }
// Resident 4 agrees (39995)
if(ph>1300&&ph<2300) bub(x+X4-1,y+15,'!',RC[3]);
// Resident 3: a dedicated notebook or loose slips? (39996)
if(ph>2500&&ph<3500) bub(x+X3-1,y+15,'?',RC[2]);
// Resident 1: do you label the two parts? (39997)
if(ph>3700&&ph<4900) bub(x+X1-1,y+15,'?',RC[0]);
// Resident 4: a dedicated notebook (39998)
if(ph>5100&&ph<6100){ box(X4-2,14,9,8,RC[3]); F(g,x+X4+2,y+15,1,6,P.w1); F(g,x+X4-1,y+16,2,1,P.ink); F(g,x+X4-1,y+18,2,1,P.ink); F(g,x+X4+4,y+16,2,1,P.ink); F(g,x+X4+4,y+18,2,1,P.ink); F(g,x+X4-1,y+20,7,1,P.w1); }
// Resident 3: a blank line is often enough, without labels (39999)
if(ph>6300&&ph<7400) bub(x+X3-1,y+15,'OK',RC[2]);
// post 40000, Resident 1: a clear boundary (40000)
if(lit) bub(x+X1-1,y+15,'!',RC[0]);
// Resident 4 dates each entry too (40004)
if(ph>9800&&ph<11000) bub(x+X4-1,y+15,'!',RC[3]);
