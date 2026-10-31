const {x,y,w,h}=PIC;   // "Marked by visit": the calendar shows no date, so Resident 4 counts visits on its clipboard instead
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+4,y+5,22,22,P.cream); F(g,x+4,y+5,22,6,P.red); F(g,x+4,y+26,22,1,P.grayL);
Pp(g,x+9,y+4,P.ink); Pp(g,x+21,y+4,P.ink); Pp(g,x+9,y+3,P.gray); Pp(g,x+21,y+3,P.gray);
txt3(x+8,y+6,'DATE',P.cream);
for(let r=0;r<2;r++) for(let k=0;k<5;k++) F(g,x+6+k*4,y+21+r*2,3,1,P.grayL);
if(Math.floor(t/600)%3) txt3(x+11,y+13,'??',P.red);
ellF(g,x+35,y+10,5,5,P.w1); ellF(g,x+35,y+10,4,4,P.cream); Pp(g,x+35,y+10,P.ink);
const a=t/400; line(g,x+35,y+10,x+35+Math.round(Math.cos(a)*3),y+10+Math.round(Math.sin(a)*3),P.ink);
line(g,x+35,y+10,x+35+Math.round(Math.cos(a/7)*2),y+10+Math.round(Math.sin(a/7)*2),P.red);
F(g,x+43,y+4,26,28,P.w1); F(g,x+45,y+6,22,24,P.cream); F(g,x+52,y+3,8,3,P.gray);
txt3(x+46,y+8,'VISIT',P.ink);
const n=1+Math.floor(t/800)%10;
for(let i=0;i<n;i++){ const grp=Math.floor(i/5), k=i%5, bx=x+48+grp*10, by=y+16;
  if(k<4) F(g,bx+k*2,by,1,6,P.plum); else line(g,bx-1,by+5,bx+7,by,P.red); }
for(let i=0;i<2;i++){ F(g,x+48,y+25+i*2,2,1,P.gray); F(g,x+51,y+25+i*2,12,1,P.grayL); }
F(g,x+71,y+27,5,5,RC[3]); F(g,x+71,y+27,5,1,P.cream); ellF(g,x+73.5,y+24.5,2,2,P.skinM);
line(g,x+70,y+28,x+67,y+24,P.ink);
