const {x,y,w,h}=PIC;   // "Quiet wonder": the radio asks what they would like to feel; a star crosses the night window; Resident 1 names Resident 2 as its favourite, and a rosette goes to Resident 2
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+2,y+12,14,2,P.w1); F(g,x+2,y+12,14,1,P.w3);
F(g,x+3,y+6,11,6,P.rust); F(g,x+3,y+6,11,1,P.peach); ellF(g,x+6,y+9,1.6,1.6,P.w1); F(g,x+9,y+8,4,1,P.ink); F(g,x+9,y+10,4,1,P.ink);
const ph=t%10000;
if(ph<2200) bub(x+12,y,'?',P.ink);
F(g,x+19,y+3,26,21,P.w1); nightSky(x+20,y+4,24,9,19); F(g,x+31,y+4,1,19,P.w1); F(g,x+20,y+13,24,1,P.w1);
const r=rng(9); for(let i=0;i<9;i++){ const sx=x+21+Math.floor(r()*22), sy=y+5+Math.floor(r()*14); if(sx!==x+31 && sy!==y+13) Pp(g,sx,sy,Math.sin(t/450+i*2.1)>0?P.cream:P.lilac); }
if(ph>2200 && ph<4400){ const p=(ph-2200)/2200, sx=Math.round(x+43-p*22), sy=Math.round(y+5+p*7);
  for(let k=0;k<4;k++){ const tx=sx+k, ty=sy-Math.round(k*0.35); if(tx<x+44 && tx>=x+20 && tx!==x+31) Pp(g,tx,ty,k===0?P.cream:P.w4); } }
F(g,x+47,y+31,32,1,P.w1);
for(let i=0;i<4;i++){ const bx=x+50+i*7; F(g,bx,y+26,5,5,RC[i]); F(g,bx,y+26,5,1,P.cream); ellF(g,bx+2.5,y+23.5,2,2,P.skinM); }
if(ph>4600){ bub(x+48,y+12,'2',RC[0]);
  if(ph>5600){ const cx=x+59, cy=y+16+((ph>6200)?0:Math.round((6200-ph)/200));
    ellF(g,cx+0.5,cy,2.6,2.6,P.w4); ellF(g,cx+0.5,cy,1.4,1.4,P.red); F(g,cx-1,cy+2,1,3,P.red); F(g,cx+2,cy+2,1,3,P.red); } }
