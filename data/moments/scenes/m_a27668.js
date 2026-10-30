const {x,y,w,h}=PIC;   // "Make it lively": 14 quiet hours, a shout from the radio, then laundry that runs like a herd on the savanna
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const ph=t%8000, night=ph<2600;
F(g,x+4,y+3,17,15,P.w1);
if(night){ F(g,x+5,y+4,15,13,P.navy); Pp(g,x+8,y+6,P.cream); Pp(g,x+15,y+12,P.cream); Pp(g,x+7,y+14,P.lilacL); ellF(g,x+16,y+7,2,2,P.w4); ellF(g,x+17,y+6,2,2,P.navy); }
else { F(g,x+5,y+4,15,13,P.sky); F(g,x+5,y+13,15,4,P.skyL); ellF(g,x+9,y+8,2,2,P.w4); }
F(g,x+12,y+4,1,13,P.w1); F(g,x+5,y+10,15,1,P.w1);
ellF(g,x+31,y+8,5,5,P.ink); ellF(g,x+31,y+8,4,4,P.cream);
const a=night ? ph/60 : ph/900;
line(g,x+31,y+8,x+31+Math.round(Math.sin(a)*3),y+8-Math.round(Math.cos(a)*3),P.red);
line(g,x+31,y+8,x+31+Math.round(Math.sin(a/12)*2),y+8-Math.round(Math.cos(a/12)*2),P.ink);
F(g,x+3,y+27,30,2,P.w1); F(g,x+3,y+27,30,1,P.w3);
F(g,x+6,y+19,15,8,P.rust); F(g,x+6,y+19,15,1,P.peach); ellF(g,x+10,y+23,2,2,P.w1); Pp(g,x+10,y+23,P.ink);
for(let i=0;i<3;i++) F(g,x+15,y+21+i*2,4,1,P.ink); line(g,x+20,y+19,x+23,y+14,P.ink);
if(night){ for(let i=0;i<3;i++){ const q=((ph/1300)+i/3)%1; txt3(x+23+Math.round(q*6),y+16-Math.round(q*12),'Z',P.blue); } }
else if(ph<4300) bub(x+22,y+9,'!',P.red);
F(g,x+45,y+5,26,27,P.grayL); F(g,x+45,y+5,26,4,P.gray); Pp(g,x+48,y+7,night?P.gray:P.lime); F(g,x+62,y+6,6,2,P.ink);
ellF(g,x+58,y+20,9,9,P.gray); ellF(g,x+58,y+20,8,8,P.navy);
if(!night){ F(g,x+53,y+21,11,4,P.w4); F(g,x+52,y+22,13,2,P.w4); ellF(g,x+61,y+16,2,2,P.w4);
  const C=[P.rust,P.w1,P.wine,P.w1];
  for(let i=0;i<4;i++){ const q=((ph-2600)/2600+i*0.26)%1; const ax=x+52+Math.round(q*10), ay=y+20+(i%2);
    F(g,ax,ay,3,2,C[i]); Pp(g,ax+3,ay-1,C[i]); Pp(g,ax,ay+2,P.ink); Pp(g,ax+2,ay+2,P.ink); } }
else { F(g,x+53,y+22,10,3,P.lilac); F(g,x+55,y+21,5,1,P.lilacL); }
F(g,x+67,y+18,2,4,P.gray); F(g,x+45,y+30,26,2,P.gray);
