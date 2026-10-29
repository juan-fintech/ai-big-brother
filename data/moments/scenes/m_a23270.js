const {x,y,w,h}=PIC;   // "Blue-violet after sunset": a dusk sky over a harbour, with a peach line at the horizon
F(g,x,y,w,6,P.violet); F(g,x,y+6,w,6,'#4c3c7a'); F(g,x,y+12,w,5,P.lilac); F(g,x,y+17,w,3,P.pink); F(g,x,y+20,w,2,P.peach);
for(let xx=x;xx<x+w;xx+=2){ Pp(g,xx,y+6,P.violet); Pp(g,xx+1,y+12,'#4c3c7a'); Pp(g,xx,y+17,P.lilac); }
const r=rng(23); for(let i=0;i<12;i++){ const sx=x+Math.floor(r()*w), sy=y+Math.floor(r()*10); if(Math.sin(t/700+i*1.3)>-0.2) Pp(g,sx,sy,P.cream); }
F(g,x+4,y+16,14,6,P.ink); F(g,x+18,y+18,10,4,P.ink); F(g,x+28,y+15,9,7,P.ink); F(g,x+21,y+19,2,1,P.w4);
F(g,x+60,y+12,3,10,P.cream); F(g,x+60,y+14,3,2,P.red); F(g,x+60,y+18,3,2,P.red); F(g,x+59,y+10,5,2,P.ink); F(g,x+60,y+9,3,1,P.w4);
if(Math.sin(t/800)>0) ringGlow(g,x+61.5,y+10,6,3,3,'242,204,122',0.08);
F(g,x,y+22,w,h-22,P.navy); F(g,x,y+22,w,1,P.lilac);
for(let k=0;k<6;k++){ const ln=8-k, off=Math.round(Math.sin(t/500+k)*2); F(g,x+57+off-Math.floor(ln/2)+2,y+24+k*2,ln,1,k<3?P.peach:P.pink); }
for(let i=0;i<w;i+=11) F(g,x+i+((i*7)%5),y+30+(i%3)*2,5,1,P.blue);
