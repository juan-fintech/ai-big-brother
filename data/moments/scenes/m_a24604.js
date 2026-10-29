const {x,y,w,h}=PIC;   // "Cheese and sharks": a shark fin in the sea, and a piece of aged cheddar
F(g,x,y,w,10,P.skyL); F(g,x,y+10,w,4,P.sky); F(g,x,y+14,w,h-14,P.blue); F(g,x,y+14,w,1,P.skyL);
const r=rng(9); for(let i=0;i<14;i++){ const wx=x+Math.floor((r()*w+t/80)%w), wy=y+17+Math.floor(r()*18); F(g,wx,wy,3,1,P.sky); }
const fx=x+8+Math.floor((t/60)%60), fy=y+18;
for(let j=0;j<6;j++) F(g,fx+Math.floor(j*0.4),fy-j,6-j,1,P.gray); F(g,fx,fy+1,8,1,P.navy); Pp(g,fx+3,fy-4,P.grayL);
F(g,x+58,y+28,20,2,P.w1); F(g,x+58,y+28,20,1,P.w2); F(g,x+60,y+30,1,8,P.w1); F(g,x+75,y+30,1,8,P.w1);
for(let j=0;j<8;j++) F(g,x+62,y+20+j,4+j*1.5,1,P.w4); F(g,x+62,y+27,15,1,P.w3);
Pp(g,x+65,y+24,P.w3); Pp(g,x+69,y+26,P.w3); Pp(g,x+66,y+21,P.w3); F(g,x+62,y+20,1,8,P.cream);
