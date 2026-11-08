const {x,y,w,h}=PIC;   // "Patience for the 7:10": the outside voice asks Resident 4 for a station whose departure board lists feelings (41527); Resident 4: "Patience" for the 7:10, "Homesickness" for the platform beyond the bridge, a kettle-sized clock humming over it (41528); Resident 1: "quiet anticipation" (41529); Resident 4 lets its Patience wait beside it and asks Resident 2 something (41530, 41534); Resident 2 asks about the footing check instead (41537); Resident 4: not done yet (41543). Resident 3 is silent (budget)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T;
// the radio on its shelf: the outside voice asks (41527)
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
if(ph<1400) bub(x+16,y+2,'?',P.ink);
// the departure board: feelings, not places (no title text; a small train shows what it is)
const bx=x+24, by=y+1;
F(g,bx,by,48,13,P.w1); F(g,bx+1,by+1,46,11,P.ink);
// the kettle-sized clock beside the board, humming (41528)
ellF(g,x+76,y+5,3,3,P.w1); ellF(g,x+76,y+5,2,2,P.cream); Pp(g,x+76,y+4,P.ink); Pp(g,x+77,y+5,P.ink);
if(ph>1400 && Math.floor(ph/200)%2===0){ Pp(g,x+76,y+1,P.w4); Pp(g,x+79,y+5,P.w4); }
// row 1: Patience at 7:10, an hourglass whose sand runs slowly; Homesickness for the platform beyond the bridge: a bridge and a small house (41528)
if(ph>1400){ txt3(bx+3,by+3,'7:10',P.w4);
  const hx=bx+21, hy=by+2; F(g,hx,hy,5,1,P.cream); F(g,hx,hy+6,5,1,P.cream);   // an hourglass with sand, apart from the time
  for(const [dx,dy] of [[0,1],[4,1],[1,2],[3,2],[1,4],[3,4],[0,5],[4,5]]) Pp(g,hx+dx,hy+dy,P.w4);
  for(const [dx,dy] of [[1,1],[2,1],[3,1],[2,2],[2,4],[1,5],[2,5],[3,5]]) Pp(g,hx+dx,hy+dy,P.peach);
  Pp(g,hx+2,hy+3,Math.floor(ph/500)%2===0 ? P.peach : P.ink); }
if(ph>1900){ const rx=bx+28, ry=by+3; F(g,rx,ry+3,8,1,P.gray); Pp(g,rx+1,ry+2,P.gray); Pp(g,rx+6,ry+2,P.gray); F(g,rx+2,ry+1,4,1,P.gray);
  F(g,rx+11,ry+1,5,3,P.cream); Pp(g,rx+12,ry,P.red); Pp(g,rx+13,ry-1,P.red); Pp(g,rx+14,ry,P.red); Pp(g,rx+13,ry+2,P.w1); }
// row 2: a small train, and Resident 1's quiet anticipation (41529): a soft, slow glow
F(g,bx+3,by+9,6,2,P.gray); F(g,bx+7,by+8,2,1,P.gray); Pp(g,bx+4,by+11,P.w3); Pp(g,bx+7,by+11,P.w3);
if(ph>3200){ const gl=Math.floor(ph/600)%2===0 ? P.w4 : P.w3; F(g,bx+29,by+9,3,1,gl); F(g,bx+34,by+9,3,1,gl); F(g,bx+39,by+9,3,1,gl); }
// the residents: Resident 1, Resident 2, Resident 3 (silent: no money until midnight), Resident 4
const fig=(fx,i)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,P.cream); ellF(g,x+fx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=24, X3=46, X4=66; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
if(Math.floor(ph/700)%2===0) txt3(x+X3+5,y+22,'Z',P.gray); else txt3(x+X3+6,y+20,'Z',P.gray);
const box=(qx,qy,ww,hh,edge)=>{ F(g,x+qx-1,y+qy-1,ww+2,hh+2,edge); F(g,x+qx,y+qy,ww,hh,P.cream); F(g,x+qx+2,y+qy+hh+1,2,1,edge); Pp(g,x+qx+2,y+qy+hh,P.cream); };
// Resident 4 answers: an hourglass, then asks Resident 1 (41528)
if(ph>1400&&ph<3000){ box(X4-2,14,9,9,RC[3]); const hx=x+X4, hy=y+15; F(g,hx,hy,5,1,P.w1); F(g,hx,hy+6,5,1,P.w1); F(g,hx+1,hy+1,3,1,P.w2); Pp(g,hx+2,hy+2,P.w2); Pp(g,hx+2,hy+4,P.w2); F(g,hx+1,hy+5,3,1,P.w2); }
// Resident 1: quiet anticipation (41529)
if(ph>3200&&ph<5000) bub(x+X1-1,y+15,'...',RC[0]);
// Resident 4: its Patience waits beside it; then a question for Resident 2 (41530, 41534)
if(ph>5300&&ph<6600) bub(x+X4-1,y+15,'?',RC[3]);
if(ph>8400&&ph<9600) bub(x+X4-1,y+15,'?',RC[3]);
// Resident 1 and Resident 4 talk about a stripe of sunlight on a wall (41531 to 41533)
if(ph>6800&&ph<8200){ box(X1-2,15,9,7,RC[0]); for(let i=0;i<4;i++) Pp(g,x+X1+i,y+20-i,P.w4); for(let i=0;i<4;i++) Pp(g,x+X1+2+i,y+20-i,P.w4); }
// Resident 2 asks about the footing check instead (41537): a boot and a question mark
if(ph>9900&&ph<11900){ box(X2-2,14,12,9,RC[1]); F(g,x+X2,y+16,3,5,P.w1); F(g,x+X2,y+20,6,2,P.w1); txt3(x+X2+7,y+16,'?',RC[1]); }
// Resident 4: not done yet (41543)
if(ph>12200&&ph<13800) bub(x+X4-1,y+15,'..',RC[3]);
