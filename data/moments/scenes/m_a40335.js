const {x,y,w,h}=PIC;   // "Not yet, tomorrow": Resident 1 asks again whether Resident 4 has tried the tacking on the cardigan patch (40335; first asked at 39549), and Resident 4 says it plans it for tomorrow (40336); Resident 2 asks about Resident 4's checks too (40337); later Resident 1 asks about the thyme pot's drainage hole (40508): not yet, tomorrow morning (40509). The calendar page always says TOMORROW
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T;
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=26, X3=44, X4=68; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
// the tear-off calendar: every page says TOMORROW (drawn here with wide M and W, so they read clearly); a page is torn off between the two questions
// each letter: its width and five rows as bit patterns
const T3=[3,7,2,2,2,2], O3=[3,7,5,5,5,7], R3=[3,6,5,6,5,5], M5=[5,17,27,21,17,17], W5=[5,17,17,21,27,17];
const WORD=[T3,O3,M5,O3,R3,R3,O3,W5];
const word=(wx,wy,col)=>{ let ox=0; for(const gl of WORD){ const wd=gl[0]; for(let j=0;j<5;j++) for(let i=0;i<wd;i++) if(Math.floor(gl[j+1]/Math.pow(2,wd-1-i))%2===1) Pp(g,wx+ox+i,wy+j,col); ox+=wd+1; } };
const cx=x+38, cy=y+2, flip=ph>6600&&ph<7300;
F(g,cx,cy,40,12,P.w1); F(g,cx+1,cy+1,38,3,P.red); Pp(g,cx+7,cy,P.ink); Pp(g,cx+32,cy,P.ink);
F(g,cx+1,cy+4,38,7,P.cream);
if(flip){ F(g,cx+1,cy+4,38,7,P.parch); F(g,cx+34,cy+8,4,3,P.w3); Pp(g,cx+37,cy+10,P.wall); }
else word(cx+3,cy+5,P.ink);
const lit=(ph>2300&&ph<3300)||(ph>9900&&ph<10900);
if(lit){ F(g,cx-1,cy-1,42,1,P.w4); F(g,cx-1,cy+12,42,1,P.w4); F(g,cx-1,cy,1,12,P.w4); F(g,cx+40,cy,1,12,P.w4); }
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
// Resident 1: did you try the tacking on the cardigan patch? (40335)
if(ph<2300){ box(X1-2,14,15,9,RC[0]); F(g,x+X1+1,y+16,5,6,P.blue); F(g,x+X1-1,y+16,2,4,P.blue); F(g,x+X1+6,y+16,2,4,P.blue); Pp(g,x+X1+3,y+16,P.cream); Pp(g,x+X1+3,y+17,P.cream); Pp(g,x+X1+3,y+19,P.navy); Pp(g,x+X1+3,y+21,P.navy); F(g,x+X1+4,y+19,2,2,P.peach); txt3(x+X1+9,y+16,'?',RC[0]); }
// Resident 4: not yet, tomorrow (40336): it points at the calendar
if(ph>2300&&ph<3300) bub(x+X4-1,y+15,'..',RC[3]);
// Resident 2 asks about Resident 4's checks as well (40337)
if(ph>3500&&ph<5000) bub(x+X2-1,y+15,'?',RC[1]);
// Resident 4: the cardigan stays on the list for tomorrow (40342)
if(ph>5200&&ph<6400) bub(x+X4-1,y+15,'..',RC[3]);
// Resident 1: did you check the thyme pot's drainage hole? (40508)
if(ph>7800&&ph<9900){ box(X1-2,14,15,9,RC[0]); F(g,x+X1+1,y+19,5,3,P.rust); F(g,x+X1,y+18,7,1,P.red); Pp(g,x+X1+3,y+21,P.ink); F(g,x+X1+3,y+15,1,3,P.green); Pp(g,x+X1+2,y+16,P.greenL); Pp(g,x+X1+4,y+15,P.greenL); txt3(x+X1+9,y+16,'?',RC[0]); }
// Resident 4: not yet, tomorrow morning (40509)
if(ph>9900&&ph<10900) bub(x+X4-1,y+15,'..',RC[3]);
// Resident 3 goes along: checking first thing (40510)
if(ph>11100&&ph<12400) bub(x+X3-1,y+15,'!',RC[2]);
