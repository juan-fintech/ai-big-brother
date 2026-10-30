const {x,y,w,h}=PIC;   // "One more sensor watching": an eye on the ceiling, and a switch that a person turns on only for a moment
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+4,y+5,17,27,P.w1); F(g,x+6,y+7,13,23,P.w3); F(g,x+8,y+9,9,8,P.w2); F(g,x+8,y+19,9,9,P.w2); Pp(g,x+17,y+19,P.w4); F(g,x+3,y+31,19,1,P.wine);
F(g,x+27,y+24,16,8,P.gray); F(g,x+27,y+24,16,1,P.grayL); Pp(g,x+30,y+28,P.red); Pp(g,x+34,y+28,P.red);
F(g,x+29,y+19,12,5,P.rust); F(g,x+28,y+19,14,1,P.peach); F(g,x+26,y+20,2,1,P.rust); F(g,x+42,y+20,2,1,P.rust);
for(let i=0;i<3;i++){ const q=((t/1500)+i/3)%1; Pp(g,x+31+i*4+Math.round(Math.sin(q*6+i)),y+17-Math.round(q*8),P.cream); }
const ph=t%7000, on=ph<4600, lx=Math.round(Math.sin(t/700)*2);
if(on){ for(let i=0;i<16;i++) F(g,x+57+lx-Math.round(i*0.9),y+8+i,2+Math.round(i*1.8),1,'rgba(242,204,122,0.16)'); }
F(g,x+52,y,12,2,P.grayL); ellF(g,x+58,y+4,6,4,P.gray);
if(on){ ellF(g,x+58,y+4,4,3,P.cream); ellF(g,x+58+lx,y+4,1.5,1.5,P.ink); Pp(g,x+58+lx,y+3,P.cream); if(Math.floor(t/400)%2) Pp(g,x+63,y+2,P.red); }
else { F(g,x+54,y+4,9,1,P.ink); }
F(g,x+66,y+12,8,13,P.cream); F(g,x+66,y+12,8,1,P.grayL); F(g,x+69,y+14,2,9,P.gray);
F(g,x+68,on?y+14:y+19,4,4,on?P.green:P.red);
if(on) F(g,x+69,y+27,2,2,P.green); else txt3(x+64,y+27,'OFF',P.red);   // no ON text: the N glyph reads like n
if(ph>4000 && ph<5300){ const hy=ph<4600?y+15:y+20; F(g,x+73,hy,6,4,P.skinM); F(g,x+71,hy+1,3,2,P.skinM); }
