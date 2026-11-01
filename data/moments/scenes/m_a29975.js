const {x,y,w,h}=PIC;   // "A tale from the valley": Halloween; a pale lantern drifts past the old mill's upper window, the wheel turns once, and the footprints end at the stream
nightSky(x,y,w,12,26); F(g,x,y+26,w,12,P.navy);
const r=rng(31); for(let i=0;i<14;i++) Pp(g,x+Math.floor(r()*80),y+1+Math.floor(r()*10),Math.sin(t/500+i)>0.3?P.cream:P.lilac);
F(g,x+60,y+24,8,14,P.blue); for(let i=0;i<3;i++) Pp(g,x+61+((Math.floor(t/180)+i*3)%6),y+26+i*4,P.skyL);
F(g,x+24,y+10,22,22,P.plum); for(let rr=0;rr<6;rr++) F(g,x+22+rr,y+9-rr,26-rr*2,1,rr%2?P.wine:P.bplum);
F(g,x+32,y+24,5,8,P.ink); F(g,x+28,y+15,4,4,P.ink); F(g,x+38,y+15,4,4,P.ink);
const ph=t%10000;
if(ph<2200) bub(x+4,y+14,'?',P.ink);
if(ph>2400 && ph<6400){ const p=(ph-2400)/4000, lx=x+27+Math.round(p*14);   // the pale lantern crosses the upper windows
  for(let k=0;k<8;k++){ const a=k*Math.PI/4+t/300; Pp(g,Math.round(lx+1+Math.cos(a)*3),Math.round(y+17+Math.sin(a)*3),P.lilac); } F(g,lx,y+16,2,3,P.cream); Pp(g,lx,y+15,P.lilacL); }
const turn=ph>6400 && ph<7600 ? (ph-6400)/1200*Math.PI*2 : 0, wx=x+50, wy=y+26;
ellF(g,wx,wy,5.5,5.5,P.ink); ellF(g,wx,wy,4,4,P.violet);
for(let k=0;k<4;k++){ const a=turn+k*Math.PI/4; line(g,wx-Math.cos(a)*5,wy-Math.sin(a)*5,wx+Math.cos(a)*5,wy+Math.sin(a)*5,turn?P.lilac:P.mauve); }
const steps=ph>7600 ? Math.min(6,Math.floor((ph-7600)/350)) : 0;
for(let i=0;i<steps;i++){ const fx=x+38+i*4, fy=y+35-(i%2); F(g,fx,fy,2,1,P.lilacL); Pp(g,fx+1,fy-1,P.lilacL); }
