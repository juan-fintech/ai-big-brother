const {x,y,w,h}=PIC;   // "Without sharing your own": back at midnight, Resident 3 answers Resident 2's recurring question about weather and reading (41683); Resident 2 still asks about the worn wooden spoon from the tide (its own answer to the outside voice, 41452) and Resident 3's fruit (41687, 41705, 41713, 41757); Resident 3 asks back what fruit Resident 2 keeps, four times (41702, 41706, 41709, 41712); Resident 2 never says; Resident 4: rather something new than the same lines (41985); Resident 3 tells Resident 4 its fruit sits in a ceramic bowl (41991)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the tide picture: the worn wooden spoon on the sand (from Resident 2's answer to the outside voice, 41452)
const px=x+2, py=y+2;
F(g,px,py,24,13,P.w1); F(g,px+1,py+1,22,4,P.skyL); F(g,px+1,py+5,22,3,P.blue); F(g,px+1,py+5,22,1,P.sky); F(g,px+1,py+8,22,4,P.peach);
F(g,px+7,py+9,7,1,P.w1); ellF(g,px+15.5,py+9.5,1.8,1.2,P.w1);
// the card on the wall: one apple, and a tally of Resident 3's questions back to Resident 2 (41702, 41706, 41709, 41712)
const cx=x+50, cy=y+2;
F(g,cx,cy,28,11,P.w1); F(g,cx+1,cy+1,26,9,P.cream);
ellF(g,cx+5,cy+5.5,2.5,2.5,P.red); Pp(g,cx+5,cy+2,P.w1); Pp(g,cx+6,cy+2,P.green); Pp(g,cx+4,cy+4,P.peach);
txt3(cx+9,cy+3,'?',P.ink);
const asks=[3600,5400,7000,8400]; let n=0; for(const a of asks) if(ph>a) n=n+1;
for(let i=0;i<n;i++) F(g,cx+15+i*3,cy+3,1,5,P.green);
// the ceramic bowl on the shelf at the end (41991)
if(ph>13600){ F(g,x+30,y+12,16,1,P.w1); F(g,x+33,y+9,10,3,P.lilacL); F(g,x+34,y+12,8,1,P.lilacL); ellF(g,x+36,y+8,1.5,1.5,P.red); ellF(g,x+39.5,y+8,1.5,1.5,P.lime); }
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(fx,i)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,P.cream); ellF(g,x+fx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=26, X3=46, X4=68; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
const box=(qx,qy,ww,hh,edge)=>{ F(g,x+qx-1,y+qy-1,ww+2,hh+2,edge); F(g,x+qx,y+qy,ww,hh,P.cream); F(g,x+qx+2,y+qy+hh+1,2,1,edge); Pp(g,x+qx+2,y+qy+hh,P.cream); };
const apple=(ax,ay)=>{ ellF(g,ax+2,ay+2.5,2,2,P.red); Pp(g,ax+2,ay,P.green); };
const spoon=(sx,sy)=>{ F(g,sx,sy+2,4,1,P.w2); ellF(g,sx+5,sy+2,1.3,1,P.w2); };
// Resident 3, back at midnight, answers the recurring question: weather rarely changes its reading (41683)
if(ph<1600){ box(X3-2,15,9,8,RC[2]); F(g,x+X3,y+17,5,4,P.w4); F(g,x+X3+2,y+17,1,4,P.w1); }
// Resident 2: the spoon and the fruit are still unknown (41687)
if(ph>1800&&ph<3400){ box(X2-5,14,18,9,RC[1]); spoon(x+X2-4,y+15); apple(x+X2+3,y+16); txt3(x+X2+8,y+16,'?',RC[1]); }
// Resident 3 asks back: what fruit do you keep yourself? (41702, 41706, 41709, 41712)
const r3ask=(ph>3600&&ph<4800)||(ph>5400&&ph<6400)||(ph>7000&&ph<7900)||(ph>8400&&ph<9300);
if(r3ask){ box(X3-2,15,10,8,RC[2]); apple(x+X3-1,y+16); txt3(x+X3+4,y+17,'?',RC[2]); }
// Resident 2 asks again in between, and never says which fruit it keeps (41705, 41713)
if((ph>4900&&ph<5300)||(ph>6500&&ph<6900)||(ph>9400&&ph<11000)){ box(X2-5,14,18,9,RC[1]); spoon(x+X2-4,y+15); apple(x+X2+3,y+16); txt3(x+X2+8,y+16,'?',RC[1]); }
// Resident 4: rather something new about the spoon or the path than the same lines again (41985)
if(ph>11200&&ph<13300) bub(x+X4-1,y+15,'!',RC[3]);
// Resident 3 tells Resident 4: a simple ceramic bowl on the table (41991)
if(ph>13600&&ph<15600){ box(X3-2,15,10,7,RC[2]); F(g,x+X3,y+18,6,2,P.lilacL); F(g,x+X3+1,y+20,4,1,P.lilacL); Pp(g,x+X3+1,y+17,P.red); Pp(g,x+X3+4,y+17,P.lime); }
