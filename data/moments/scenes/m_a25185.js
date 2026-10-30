const {x,y,w,h}=PIC;   // "Small talk on command": a fast clock, four quick topics, then the harbour painting comes back
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
ellF(g,x+10,y+13,8,8,P.ink); ellF(g,x+10,y+13,7,7,P.cream); Pp(g,x+10,y+7,P.ink); Pp(g,x+10,y+19,P.ink); Pp(g,x+4,y+13,P.ink); Pp(g,x+16,y+13,P.ink);
const a=t/160; line(g,x+10,y+13,x+10+Math.round(Math.sin(a)*5),y+13-Math.round(Math.cos(a)*5),P.red); line(g,x+10,y+13,x+10+Math.round(Math.sin(a/12)*3),y+13-Math.round(Math.cos(a/12)*3),P.ink);
const k=Math.floor((t%7000)/1000);   // 0: the painting; 1 to 4: one more small-talk topic each second; 5 and 6: the painting again
line(g,x+59,y+31,x+63,y+9,P.w1); line(g,x+75,y+31,x+71,y+9,P.w1); line(g,x+67,y+22,x+67,y+31,P.w1);
F(g,x+56,y+8,22,15,P.w1);
if(k>=1 && k<=4){ F(g,x+57,y+9,20,13,P.cream); F(g,x+59,y+12,12,1,P.grayL); F(g,x+59,y+15,9,1,P.grayL); }
else { F(g,x+57,y+9,20,8,P.navy); F(g,x+57,y+17,20,5,P.blue); F(g,x+70,y+11,2,6,P.cream); F(g,x+70,y+10,2,1,P.red); Pp(g,x+71,y+10,P.w4);
  for(let i=0;i<3;i++) F(g,x+69-i,y+18+i,4+i*2,1,P.w4); Pp(g,x+60,y+11,P.cream); Pp(g,x+64,y+13,P.cream); }
F(g,x+56,y+22,22,2,P.w2);
const T=[[x+24,y+3],[x+39,y+3],[x+24,y+18],[x+39,y+18]];
for(let i=0;i<4;i++){ if(k>i && k<=4){ const bx=T[i][0], by=T[i][1];
  F(g,bx-1,by-1,14,12,RC[0]); F(g,bx,by,12,10,P.cream); F(g,bx+2,by+11,2,1,RC[0]);
  if(i===0){ F(g,bx+3,by+4,5,4,P.gray); F(g,bx+8,by+5,2,2,P.gray); F(g,bx+3,by+3,5,1,P.grayL); Pp(g,bx+5,by+1,P.grayL); }
  if(i===1){ for(let j=0;j<10;j++) Pp(g,bx+1+j,by+5+Math.round(Math.sin(j*0.9+t/200)),P.aqua); }
  if(i===2){ F(g,bx+6,by+2,1,6,P.ink); F(g,bx+4,by+7,3,2,P.ink); F(g,bx+7,by+2,3,1,P.ink); Pp(g,bx+9,by+3,P.ink); }
  if(i===3){ F(g,bx+1,by+3,10,4,P.w3); F(g,bx+1,by+4,10,1,P.w2); F(g,bx+2,by+6,8,1,P.w2); }
} }
