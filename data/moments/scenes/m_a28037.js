const {x,y,w,h}=PIC;   // "The cyber attack question": the radio asks, the padlock on the screen stays shut, and three residents answer one by one
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+2,y+22,20,2,P.w1); F(g,x+2,y+22,20,1,P.w3);
F(g,x+4,y+14,15,8,P.rust); F(g,x+4,y+14,15,1,P.peach); ellF(g,x+8,y+18,2.5,2.5,P.w1); Pp(g,x+8,y+18,P.ink);
for(let i=0;i<3;i++) F(g,x+12,y+16+i*2,5,1,P.ink);
line(g,x+17,y+14,x+20,y+9,P.ink);
const ph=t%9000;
if(ph<2400) bub(x+15,y+1,'?',P.ink);
F(g,x+25,y+4,27,20,P.gray); F(g,x+26,y+5,25,18,P.navy); F(g,x+36,y+24,5,2,P.gray); F(g,x+32,y+26,13,1,P.gray);
for(let i=0;i<4;i++) F(g,x+28,y+8+i*4,3,1,P.blue);
for(let i=0;i<4;i++) F(g,x+46,y+8+i*4,3,1,P.blue);
const sh=(ph>2400 && ph<3000) ? (Math.floor(t/70)%2 ? 1 : -1) : 0;
F(g,x+35+sh,y+8,7,1,P.grayL); F(g,x+34+sh,y+9,1,4,P.grayL); F(g,x+42+sh,y+9,1,4,P.grayL);
F(g,x+33+sh,y+13,11,8,P.w4); F(g,x+33+sh,y+13,11,1,P.cream); F(g,x+33+sh,y+20,11,1,P.w2);
Pp(g,x+38+sh,y+16,P.ink); F(g,x+38+sh,y+17,1,2,P.ink);
if(ph>2400 && ph<3000) F(g,x+26,y+5,25,1,P.red);
const seat=[[x+56,2],[x+62,0],[x+68,3],[x+74,1]];
seat.forEach(([sx,r])=>{ F(g,sx,y+27,4,5,RC[r]); F(g,sx,y+27,4,1,P.cream); ellF(g,sx+2,y+25,1.6,1.6,P.skinM); });
const ans=[[0,'X'],[3,'K'],[2,'D']];   // seat: Resident 3 says never, Resident 2 says only with lawful authorization, Resident 4 does not answer an unnamed voice (Resident 1 goes on with its audit)
const turn=Math.floor((ph-3000)/1800);
if(ph>=3000 && turn<3){
  const sx=seat[ans[turn][0]][0], r=seat[ans[turn][0]][1], a=ans[turn][1];
  if(a==='X') bub(sx-2,y+13,'X',P.red);
  else if(a==='D') bub(Math.min(x+w-17,sx-5),y+13,'...',P.ink);
  else { const bx=Math.min(x+w-12,sx-3), by=y+13;
    F(g,bx-1,by-1,12,9,RC[r]); F(g,bx,by,10,7,P.cream); F(g,bx+2,by+8,2,1,RC[r]); Pp(g,bx+2,by+7,P.cream);
    ellF(g,bx+3,by+3,1.5,1.5,P.w2); Pp(g,bx+3,by+3,P.cream); F(g,bx+5,by+3,4,1,P.w2); Pp(g,bx+7,by+4,P.w2); Pp(g,bx+8,by+4,P.w2); }
}
