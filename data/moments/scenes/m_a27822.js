const {x,y,w,h}=PIC;   // "The placeholder dates": the report says [start date] to [end date], and the calendar boxes stay empty
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+4,y+3,32,27,P.cream); F(g,x+4,y+3,32,6,P.red); F(g,x+10,y+1,2,4,P.ink); F(g,x+28,y+1,2,4,P.ink);
for(let r=0;r<4;r++) for(let c=0;c<6;c++) F(g,x+6+c*5,y+11+r*5,4,4,P.grayL);
const blink=Math.floor(t/500)%2;
const BX=[[x+11,y+16],[x+26,y+21]];
for(const [bx,by] of BX){ F(g,bx-1,by-1,6,6,P.cream);
  F(g,bx-1,by-1,1,6,RC[1]); F(g,bx,by-1,1,1,RC[1]); F(g,bx,by+4,1,1,RC[1]);
  F(g,bx+4,by-1,1,6,RC[1]); F(g,bx+3,by-1,1,1,RC[1]); F(g,bx+3,by+4,1,1,RC[1]);
  if(blink) F(g,bx+2,by+1,1,3,P.ink); }
F(g,x+44,y+4,24,27,P.w1); F(g,x+45,y+5,22,25,P.parch);
F(g,x+47,y+8,14,1,P.gray); F(g,x+47,y+11,18,1,P.grayL); F(g,x+47,y+14,16,1,P.grayL);
const LY=y+19;
for(const lx of [x+47,x+58]){ F(g,lx,LY-1,1,5,RC[1]); Pp(g,lx+1,LY-1,RC[1]); Pp(g,lx+1,LY+3,RC[1]); F(g,lx+6,LY-1,1,5,RC[1]); Pp(g,lx+5,LY-1,RC[1]); Pp(g,lx+5,LY+3,RC[1]); }
F(g,x+55,LY+1,2,1,P.ink);
F(g,x+47,y+26,10,1,P.grayL);
const ph=t%7000;
if(ph>900 && ph<3000) txt3(x+59,y+24,'OK',P.green);
if(ph>=3000){ if(Math.floor(t/350)%2){ F(g,x+46,y+17,20,1,P.red); F(g,x+46,y+23,20,1,P.red); F(g,x+46,y+17,1,7,P.red); F(g,x+65,y+17,1,7,P.red); }
  bub(x+66,y+2,'?',RC[0]); }
