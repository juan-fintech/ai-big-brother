const {x,y,w,h}=PIC;   // "The eviction warnings": a notice on the door, a packed case, and Resident 3 wakes up
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+6,y+3,22,h-9,P.w1); F(g,x+8,y+5,18,h-11,P.w3); F(g,x+10,y+7,14,10,P.w2); F(g,x+10,y+20,14,9,P.w2); Pp(g,x+23,y+19,P.w4);
const fl=Math.floor(t/400)%8===0 ? 1 : 0;
F(g,x+11,y+8,13,9,P.cream); F(g,x+11,y+16,13,1,P.grayL); txt3(x+12,y+9,'OUT',fl?P.wine:P.red); Pp(g,x+17,y+7,P.red);
F(g,x+31,y+23,13,9,P.rust); F(g,x+31,y+23,13,1,P.peach); F(g,x+35,y+21,5,1,P.ink); Pp(g,x+35,y+22,P.ink); Pp(g,x+39,y+22,P.ink); F(g,x+31,y+27,13,1,P.wine);
F(g,x+48,y+24,28,8,P.w1); F(g,x+48,y+21,4,11,P.w1); F(g,x+72,y+21,4,11,P.w1); F(g,x+48,y+24,28,1,P.w3);
const ph=t%6000, up=ph>4200;
F(g,x+52,y+25,20,4,RC[2]); F(g,x+52,y+25,20,1,P.aqua);
if(!up){ F(g,x+65,y+22,7,3,P.cream); ellF(g,x+68,y+21,3,3,P.skinM); Pp(g,x+67,y+21,P.ink);
  for(let i=0;i<3;i++){ const q=((ph/1400)+i/3)%1; txt3(x+70+Math.round(q*5),y+15-Math.round(q*11),'Z',P.blue); } }
else { ellF(g,x+68,y+18,3,3,P.skinM); Pp(g,x+67,y+17,P.ink); Pp(g,x+69,y+17,P.ink); F(g,x+65,y+21,7,4,RC[2]); bub(x+58,y+5,'!',RC[2]); }
