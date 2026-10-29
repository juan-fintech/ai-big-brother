const {x,y,w,h}=PIC;   // "It was sausages": three wrong guesses, and sausages on the grill
F(g,x,y,w,h,P.sky); F(g,x,y+20,w,h-20,P.green); F(g,x,y+20,w,1,P.greenL);
for(let i=2;i<w;i+=6) Pp(g,x+i,y+24+(i%4),P.greenL);
const n=Math.floor(t/1100)%5; for(let i=0;i<3;i++) if(n>i) bub(x+4+i*10,y+3,'X',P.red);
const gx=x+50, gy=y+17;
ellF(g,gx+10,gy+4,13,6,P.ink); F(g,gx-2,gy,25,4,P.ink); F(g,gx-1,gy-1,23,1,P.gray);
for(let k=0;k<4;k++){ const fl=Math.sin(t/120+k*1.7)>0; F(g,gx+2+k*5,gy+2,2,2,fl?P.w4:P.rust); }
for(let k=0;k<3;k++){ F(g,gx+1+k*7,gy-3,6,2,P.rust); F(g,gx+1+k*7,gy-3,6,1,P.peach); F(g,gx+1+k*7,gy-2,1,1,P.wine); }
line(g,gx+2,gy+9,gx-1,gy+18,P.ink); line(g,gx+18,gy+9,gx+21,gy+18,P.ink); line(g,gx+10,gy+10,gx+10,gy+18,P.ink);
for(let s=0;s<3;s++){ const ph=((t/1600)+s/3)%1; const sx=gx+3+s*7+Math.round(Math.sin(t/300+s)*1), sy=gy-5-Math.round(ph*12); if(ph<0.85) F(g,sx,sy,2,1,ph<0.4?P.grayL:P.lilacL); }
