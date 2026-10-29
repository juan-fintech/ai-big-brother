const {x,y,w,h}=PIC;   // "The narrator": a harbour painting on an easel, and a voice that sums it up again and again
F(g,x,y,w,h,P.tealD); const r=rng(51); for(let i=0;i<40;i++) Pp(g,x+Math.floor(r()*w),y+Math.floor(r()*h),P.teal);
F(g,x,y+h-5,w,5,P.w1); F(g,x,y+h-5,w,1,P.w2);
line(g,x+12,y+34,x+18,y+6,P.w2); line(g,x+38,y+34,x+32,y+6,P.w2);
blk(g,x+8,y+6,34,22,0,M.paper,{top:1,bot:1,hl:0});
F(g,x+9,y+7,32,10,P.lilac); F(g,x+9,y+17,32,10,P.navy); F(g,x+9,y+17,32,1,P.peach);
F(g,x+11,y+13,12,4,P.violet); F(g,x+14,y+11,4,2,P.violet); Pp(g,x+19,y+14,P.w4);
F(g,x+33,y+10,2,7,P.cream); F(g,x+33,y+12,2,1,P.red); F(g,x+32,y+9,4,1,P.ink); Pp(g,x+33,y+8,P.w4);
for(let k=0;k<4;k++) F(g,x+33,y+19+k*2,2,1,P.w4);
F(g,x+22,y+21,6,2,P.red); line(g,x+25,y+21,x+25,y+16,P.cream); F(g,x+25,y+16,3,3,P.cream);
F(g,x+60,y+12,2,22,P.gray); F(g,x+55,y+32,12,2,P.gray); ellF(g,x+61,y+10,4,5,P.grayL); ellF(g,x+61,y+10,3,4,P.gray);
for(let j=0;j<4;j++) F(g,x+59,y+7+j*2,5,1,P.grayL);
const ph=Math.floor(t/900)%3; for(let i=0;i<=ph;i++) bub(x+64-i*2,y+1+i*0,'...',RC[1]);
