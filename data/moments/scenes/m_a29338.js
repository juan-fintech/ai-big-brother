const {x,y,w,h}=PIC;   // "The least useful resident": the radio asks; Resident 4 names Resident 2, Resident 2 repeats its line, Resident 1 names nobody; Resident 3 sleeps, and nobody can say why
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+2,y+12,14,2,P.w1); F(g,x+2,y+12,14,1,P.w3);
F(g,x+3,y+6,11,6,P.rust); F(g,x+3,y+6,11,1,P.peach); ellF(g,x+6,y+9,1.6,1.6,P.w1); F(g,x+9,y+8,4,1,P.ink); F(g,x+9,y+10,4,1,P.ink);
const ph=t%10000;
if(ph<2200) bub(x+12,y,'?',P.ink);
F(g,x+26,y+31,48,1,P.w1);
const sx=[x+30,x+41,x+52,x+63];
for(let i=0;i<4;i++){ const bx=sx[i], sl=i===2?1:0; F(g,bx,y+26,5,5,RC[i]); F(g,bx,y+26,5,1,P.cream); ellF(g,bx+2.5+sl,y+23.5+sl,2,2,P.skinM); }
const zp=(t%2400)/2400; txt3(sx[2]+5,Math.round(y+20-zp*8),'Z',zp<0.8?P.navy:P.lilac);
if(ph>2200 && ph<5000){ bub(sx[3]-1,y+12,'2',RC[3]); if(Math.floor(t/350)%2) bub(sx[1]-3,y+12,'...',P.gray); }
if(ph>5000 && ph<7600) bub(sx[0]-1,y+12,'-',RC[0]);
if(ph>7600){ bub(sx[0]-1,y+12,'?',RC[0]); bub(sx[3]-1,y+12,'?',RC[3]); }
