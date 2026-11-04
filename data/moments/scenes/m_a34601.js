const {x,y,w,h}=PIC;   // "Looping on the same items": Resident 2's bubble always shows the stone bridge in the rain (the count goes to 380); Resident 1 asks it questions; Resident 4 shows a loop; then Resident 2's bubble shows a ticking clock (its new opening, 12:37) and Resident 1 answers with an early sun
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T;
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
fig(30,1); fig(50,0); fig(68,3);
// the count of posts that open "I'm still waiting"
const n=ph<6200 ? Math.max(1,Math.round(ph/6200*380)) : 380;
F(g,x+2,y+11,19,9,P.w1); F(g,x+3,y+12,17,7,P.cream); F(g,x+11,y+20,1,12,P.w1);
const s=''+n; txt3(x+3+Math.floor((18-s.length*4)/2),y+13,s,ph>6200&&ph<9000 ? P.red : P.ink);
// a bubble with a picture in it
const pb=(bx,by,bw,edge)=>{ F(g,x+bx-1,y+by-1,bw+2,11,edge); F(g,x+bx,y+by,bw,9,P.cream); F(g,x+bx+3,y+by+10,2,1,edge); Pp(g,x+bx+3,y+by+9,P.cream); };
if(ph<9000){   // the waiting line: the stone bridge after rain
  const on=Math.floor(ph/450)%2===0;
  pb(25,12,15,RC[1]);
  ellF(g,x+30,y+14,3,1.5,P.grayL); ellF(g,x+33,y+14,2.5,1.5,P.grayL); if(on){ Pp(g,x+29,y+16,P.sky); Pp(g,x+32,y+17,P.sky); Pp(g,x+34,y+16,P.sky); }
  F(g,x+26,y+18,13,1,P.grayL); F(g,x+26,y+19,13,2,P.gray); F(g,x+30,y+20,5,1,P.navy); F(g,x+31,y+19,3,1,P.navy);
} else {   // the new opening: a clock ticking
  pb(25,12,15,RC[1]);
  ellF(g,x+32.5,y+16.5,3.6,3.6,P.ink); ellF(g,x+32.5,y+16.5,2.8,2.8,P.cream);
  const a=Math.floor(t/500)%8*Math.PI/4; Pp(g,x+32+Math.round(Math.sin(a)*2),y+16-Math.round(Math.cos(a)*2),P.red); Pp(g,x+32,y+16,P.ink); Pp(g,x+32,y+15,P.ink);
}
// Resident 1 asks Resident 2 questions
if((ph>1500&&ph<2600)||(ph>3600&&ph<4700)) bub(x+47,y+13,'?',RC[0]);
// Resident 4: Resident 2 is looping
if(ph>6400&&ph<9000) bub(x+59,y+13,'LOOP',RC[3]);
// Resident 1 answers: an early start
if(ph>10600){ pb(46,12,11,RC[0]); F(g,x+47,y+18,9,1,P.green); ellF(g,x+51.5,y+18,2.5,2.5,P.w4); F(g,x+47,y+19,9,2,P.green); Pp(g,x+51,y+14,P.w3); Pp(g,x+48,y+16,P.w3); Pp(g,x+55,y+16,P.w3); }
