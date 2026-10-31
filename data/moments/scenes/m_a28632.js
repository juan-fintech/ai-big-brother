const {x,y,w,h}=PIC;   // "Fun at parties": bunting, balloons and a pineapple pizza, and Resident 3's party log that writes down every line
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const flag=[P.red,P.w4,P.teal,P.lilac];
F(g,x+1,y+2,w-2,1,P.plum);
for(let i=0;i<13;i++){ const fx=x+2+i*6, sw=Math.round(Math.sin(t/500+i)*0.6); F(g,fx+sw,y+3,5,1,flag[i%4]); F(g,fx+1+sw,y+4,3,1,flag[i%4]); Pp(g,fx+2+sw,y+5,flag[i%4]); }
F(g,x+2,y+24,18,2,P.w1); F(g,x+2,y+24,18,1,P.w3);
F(g,x+4,y+16,14,8,P.rust); F(g,x+4,y+16,14,1,P.peach); ellF(g,x+8,y+20,2.5,2.5,P.w1); Pp(g,x+8,y+20,P.ink);
for(let i=0;i<3;i++) F(g,x+12,y+18+i*2,4,1,P.ink);
const ph=t%8000;
if(ph<1800) bub(x+13,y+7,'?',P.ink); else if(ph>3600 && ph<5200) bub(x+13,y+7,'?!',P.ink);
ellF(g,x+29,y+29,7,1.5,P.grayL);
for(let r=0;r<7;r++){ const half=Math.round((7-r)*0.9); F(g,x+29-half,y+21+r,half*2+1,1,r===0?P.w2:P.w4); }
F(g,x+22,y+21,15,1,P.w1);
Pp(g,x+27,y+23,P.lime); Pp(g,x+31,y+23,P.lime); Pp(g,x+29,y+25,P.lime); Pp(g,x+25,y+22,P.red); Pp(g,x+33,y+22,P.red); Pp(g,x+30,y+26,P.red);
const bo=Math.round(Math.sin(t/600)*1.2), bo2=Math.round(Math.sin(t/600+2)*1.2);
line(g,x+42,y+17+bo,x+45,y+31,P.ink); line(g,x+49,y+15+bo2,x+46,y+31,P.ink);
ellF(g,x+42,y+12+bo,3,4,P.red); Pp(g,x+41,y+10+bo,P.peach);
ellF(g,x+49,y+10+bo2,3,4,P.aqua); Pp(g,x+48,y+8+bo2,P.aquaL);
F(g,x+66,y+28,3,4,P.w1); F(g,x+62,y+31,11,1,P.w1);
F(g,x+53,y+12,26,16,RC[2]); F(g,x+54,y+13,12,14,P.cream); F(g,x+67,y+13,11,14,P.cream); F(g,x+66,y+12,1,16,P.ink);
txt3(x+55,y+14,'LOG',P.ink);
const rows=1+Math.floor(t/700)%6;
for(let i=0;i<rows;i++){ const lx=i<2 ? x+56 : x+68, ly=i<2 ? y+20+i*3 : y+15+(i-2)*3; F(g,lx,ly,i%2 ? 6 : 8,1,P.plum); }
const pen=rows-1, px=pen<2 ? x+56+8 : x+68+6, py=pen<2 ? y+19+pen*3 : y+14+(pen-2)*3;
line(g,px,py,px+2,py-3,P.ink);
F(g,x+64,y+11,5,1,P.pink); F(g,x+65,y+9,3,2,P.pink); Pp(g,x+66,y+8,P.pink); Pp(g,x+66,y+7,P.w4); Pp(g,x+65,y+10,P.cream);
