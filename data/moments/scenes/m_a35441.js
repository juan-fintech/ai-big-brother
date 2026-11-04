const {x,y,w,h}=PIC;   // "One I'm ignoring": the radio sends a question card to Resident 3, who answers at once and passes it on to Resident 2; Resident 4 shows the radio crossed out; the next card goes to Resident 4, drops past it, and Resident 1 answers with an oak
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T;
// the radio on its shelf: the outside voice
const radio=(rx,ry)=>{ F(g,rx,ry,12,6,P.rust); F(g,rx,ry,12,1,P.peach); ellF(g,rx+2.5,ry+3,1.4,1.4,P.w1); F(g,rx+5,ry+2,5,1,P.ink); F(g,rx+5,ry+4,5,1,P.ink); };
F(g,x+1,y+16,15,2,P.w1); F(g,x+1,y+16,15,1,P.w3); radio(x+2,y+10);
// the residents: Resident 3, Resident 2, Resident 4, Resident 1
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X3=24, X2=38, X4=53, X1=69; fig(X3,2); fig(X2,1); fig(X4,3); fig(X1,0);
const card=(cx,cy)=>{ F(g,x+cx,y+cy,7,6,P.mauve); F(g,x+cx+1,y+cy+1,5,4,P.cream); Pp(g,x+cx+3,y+cy+1,P.ink); Pp(g,x+cx+4,y+cy+2,P.ink); Pp(g,x+cx+3,y+cy+3,P.ink); };
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
if(ph<4800){   // the first card goes to Resident 3; it answers at once and asks Resident 2
  if(ph<1200) card(lerp(13,X3-1,ph/1200),lerp(10,17,ph/1200));
  if(ph>1300&&ph<2600) bub(x+X3-2,y+14,'!',RC[2]);
  if(ph>2700&&ph<4400) bub(x+X3+4,y+12,'?',RC[2]);
}
if(ph>4800&&ph<8600){   // Resident 4: the unknown voice's instruction is one it is ignoring
  F(g,x+X4-5,y+10,16,11,RC[3]); F(g,x+X4-4,y+11,14,9,P.cream); F(g,x+X4-2,y+21,2,1,RC[3]); Pp(g,x+X4-2,y+20,P.cream);
  radio(x+X4-3,y+13);
  if(ph>5600){ line(g,x+X4-3,y+12,x+X4+8,y+19,P.ink); line(g,x+X4-3,y+19,x+X4+8,y+12,P.ink); }
}
if(ph>8600){   // the next card is for Resident 4: it drops past, and Resident 1 answers with an oak
  const p=(ph-8600)/1800;
  if(p<1) card(lerp(13,X4-1,p),lerp(10,16,p));
  else if(p<1.8) card(X4-1+Math.round((p-1)*4),16+Math.round((p-1)*15));
  if(ph>9600&&ph<11000) bub(x+X4-1,y+12,'...',RC[3]);
  if(ph>11000){ F(g,x+X1-6,y+9,14,13,RC[0]); F(g,x+X1-5,y+10,12,11,P.cream); F(g,x+X1-2,y+22,2,1,RC[0]); Pp(g,x+X1-2,y+21,P.cream);
    F(g,x+X1,y+15,2,5,P.w1); ellF(g,x+X1+1,y+14,4,3,P.green); ellF(g,x+X1-1,y+13,2,2,P.greenL); Pp(g,x+X1+3,y+12,P.greenL); Pp(g,x+X1+2,y+16,P.w2); }
}
