const {x,y,w,h}=PIC;   // "A suitcase of tiny maps": the radio asks about a traveller's suitcase; Resident 1 suggests tiny hand-drawn maps; Resident 2 asks Resident 3 about them again and again while Resident 3 is silent; just after midnight Resident 3 wakes and answers (keeping a place close)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T, mid=ph>10500;
// the radio on its shelf: the outside voice
F(g,x+1,y+8,15,2,P.w1); F(g,x+1,y+8,15,1,P.w3);
F(g,x+2,y+2,12,6,P.rust); F(g,x+2,y+2,12,1,P.peach); ellF(g,x+4.5,y+5,1.4,1.4,P.w1); F(g,x+7,y+4,5,1,P.ink); F(g,x+7,y+6,5,1,P.ink);
if(ph<1600) bub(x+16,y+1,'?',P.ink);
// the suitcase: it opens, and tiny maps come out
const lid=ph>1600;
F(g,x+3,y+26,15,6,P.w1); F(g,x+4,y+27,13,4,P.bplum); F(g,x+9,y+24,5,1,P.ink); Pp(g,x+9,y+25,P.ink); Pp(g,x+13,y+25,P.ink);
if(lid){ F(g,x+3,y+22,15,4,P.w1); F(g,x+4,y+23,13,2,P.cream);
  for(let i=0;i<4;i++){ const p=((ph-1600)/2600+i*0.25)%1, mx=x+5+i*3+Math.round(Math.sin(p*6+i)*2), my=y+20-Math.round(p*8);
    F(g,mx,my,3,3,P.cream); Pp(g,mx,my+1,P.green); Pp(g,mx+1,my+1,P.rust); Pp(g,mx+2,my+2,P.blue); } }
// the residents: Resident 1, Resident 2, Resident 3
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
fig(27,0); fig(43,1); fig(64,2);
// a map in a bubble
const mb=(bx,edge,heart)=>{ F(g,x+bx-1,y+12,13,11,edge); F(g,x+bx,y+13,11,9,P.cream); F(g,x+bx+3,y+23,2,1,edge); Pp(g,x+bx+3,y+22,P.cream);
  F(g,x+bx+2,y+15,7,5,P.parch); Pp(g,x+bx+3,y+16,P.green); Pp(g,x+bx+4,y+17,P.green); Pp(g,x+bx+5,y+17,P.rust); Pp(g,x+bx+6,y+18,P.rust); Pp(g,x+bx+7,y+16,P.blue);
  if(heart){ F(g,x+bx+2,y+15,7,5,P.parch); Pp(g,x+bx+3,y+16,P.green); Pp(g,x+bx+3,y+18,P.blue); Pp(g,x+bx+5,y+16,P.red); Pp(g,x+bx+7,y+16,P.red); F(g,x+bx+5,y+17,3,1,P.red); Pp(g,x+bx+6,y+18,P.red); } };
if(ph>1700&&ph<3300) mb(25,RC[0],false);   // Resident 1: tiny hand-drawn maps
// Resident 2 asks Resident 3, again and again (no count: how many depends on how one counts)
if(ph>3300 && ph<10500 && Math.floor((ph-3300)/280)%2===0) bub(x+41,y+14,'?',RC[1]);
// the clock: the times of the requests, then midnight
const TM=['13:46','13:57','21:18','22:46','23:47','00:00'];
const ti=mid ? 5 : (ph<3300 ? 0 : Math.min(4,1+Math.floor((ph-3300)/1800)));
F(g,x+56,y+2,23,9,P.ink); F(g,x+57,y+3,21,7,P.violet); txt3(x+58,y+4,TM[ti],mid ? P.w4 : P.lilacL);
// Resident 3: asleep until midnight, then it answers
if(!mid){ const zz=Math.floor(t/600)%3; txt3(x+70,y+19-zz,'Z',P.mauve); if(zz>0) txt3(x+73,y+16-zz,'Z',P.mauve); }
else { mb(61,RC[2],true); if(ph>12800) bub(x+40,y+14,'!',RC[1]); }
