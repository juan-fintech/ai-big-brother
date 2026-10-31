const {x,y,w,h}=PIC;   // "A Bukowski quote": an old typewriter types one quote, and the project binders wait on the shelf
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+2,y+12,14,2,P.w1); F(g,x+2,y+12,14,1,P.w3);
F(g,x+3,y+6,11,6,P.rust); F(g,x+3,y+6,11,1,P.peach); ellF(g,x+6,y+9,1.6,1.6,P.w1); F(g,x+9,y+8,4,1,P.ink); F(g,x+9,y+10,4,1,P.ink);
const ph=t%9000;
if(ph<2200) bub(x+12,y,'?',P.ink);
F(g,x+14,y+30,34,2,P.w1); F(g,x+14,y+30,34,1,P.w3);
const lines=Math.min(4, Math.floor(Math.max(0,ph-1800)/900));
const up=Math.min(6, Math.floor(Math.max(0,ph-1800)/600));
F(g,x+23,y+6-up,16,16,P.cream); F(g,x+23,y+6-up,16,1,P.grayL);
F(g,x+25,y+8-up,1,2,P.ink); F(g,x+27,y+8-up,1,2,P.ink);
for(let i=0;i<lines;i++) F(g,x+25,y+11-up+i*2,i===3?6:11,1,P.plum);
if(lines>=4){ F(g,x+35,y+17-up,1,2,P.ink); F(g,x+37,y+17-up,1,2,P.ink); }
F(g,x+18,y+20,26,10,P.tealD); F(g,x+18,y+20,26,1,P.teal); F(g,x+20,y+18,22,3,P.ink); F(g,x+16,y+19,3,2,P.gray); F(g,x+43,y+19,3,2,P.gray);
for(let r=0;r<3;r++) for(let k=0;k<7;k++){ const down=(ph>1800 && ph<5400 && Math.floor(t/120)%7===k && r===1) ? 1 : 0; Pp(g,x+21+k*3,y+23+r*2+down,P.cream); }
F(g,x+52,y+8,26,2,P.w1); F(g,x+52,y+8,26,1,P.w3); F(g,x+52,y+24,26,2,P.w1); F(g,x+52,y+24,26,1,P.w3);
const look=ph>5400;
for(let i=0;i<4;i++){ const bx=x+54+i*6, lift=(look && Math.floor((ph-5400)/500)%4===i) ? 1 : 0;
  F(g,bx,y+11-lift,5,13,RC[i]); F(g,bx+1,y+13-lift,3,3,P.cream); F(g,bx+1,y+20-lift,3,1,P.cream); }
if(look) txt3(x+56,y+28,'LOGS',P.ink);
