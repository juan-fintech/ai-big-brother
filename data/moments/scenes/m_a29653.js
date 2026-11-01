const {x,y,w,h}=PIC;   // "The mill in the valley": a village valley at sunrise, an old stone mill with a turning wheel, sacks of grain, then bread and a toast
const ph=t%10000, rise=Math.min(1,ph/3500);
F(g,x,y,w,h,P.peach); F(g,x,y,w,8,P.pink); F(g,x,y+8,w,6,P.w4);
ellF(g,x+14,y+20-rise*11,4,4,P.cream); ellF(g,x+14,y+20-rise*11,3,3,P.w4);
for(let i=0;i<w;i++){ const hh=12+Math.round(3*Math.sin(i/9)+2*Math.sin(i/4)); F(g,x+i,y+h-hh,1,hh,P.green); Pp(g,x+i,y+h-hh,P.greenL); }
for(let i=0;i<w;i++){ const hh=7+Math.round(2*Math.sin(i/7+1)); F(g,x+i,y+h-hh,1,hh,P.teal); }
F(g,x,y+h-4,w,4,P.sky); for(let i=0;i<w;i+=3) Pp(g,x+i+(Math.floor(t/200)%3),y+h-3,P.skyL);
for(const tx of [3,8,13]){ F(g,x+tx,y+24,1,4,P.w1); ellF(g,x+tx+0.5,y+22,2.5,3,P.tealD); }
F(g,x+30,y+14,20,16,P.grayL); for(let r=0;r<4;r++) for(let c=0;c<5;c++) F(g,x+31+c*4+(r%2)*2,y+15+r*4,3,1,P.gray);
for(let r=0;r<7;r++) F(g,x+28+r,y+13-r,24-r*2,1,r%2?P.rust:P.wine);
F(g,x+38,y+23,4,7,P.w1); Pp(g,x+41,y+26,P.w4); F(g,x+33,y+17,3,3,P.plum); F(g,x+44,y+17,3,3,P.plum);
const wx=x+55, wy=y+24, ang=t/700;
ellF(g,wx,wy,6.5,6.5,P.w1); ellF(g,wx,wy,5,5,P.w3); ellF(g,wx,wy,1.5,1.5,P.w1);
for(let k=0;k<6;k++){ const a=ang+k*Math.PI/3; line(g,wx,wy,wx+Math.cos(a)*6,wy+Math.sin(a)*6,P.w1); }
for(let i=0;i<3;i++) Pp(g,wx+6+i,y+h-4+((Math.floor(t/150)+i)%2),P.cream);
for(const [sx,sy] of [[22,25],[25,26],[23,23]]){ F(g,x+sx,y+sy,3,4,P.parch); Pp(g,x+sx+1,y+sy-1,P.w2); }
if(ph>5600){ F(g,x+63,y+27,14,1,P.w1); F(g,x+64,y+28,1,4,P.w1); F(g,x+75,y+28,1,4,P.w1);   // a table: the new loaf and two cups of cider
  ellF(g,x+70,y+25.5,3.5,2,P.w2); F(g,x+67,y+24,6,1,P.w3); Pp(g,x+69,y+23,P.w4);
  const up=ph>7200 ? 3 : 0; F(g,x+64,y+24-up,2,3,P.w4); F(g,x+74,y+24-up,2,3,P.w4);   // the cups go up for the blessing
  if(up){ Pp(g,x+70,y+17,P.cream); Pp(g,x+69,y+18,P.cream); Pp(g,x+71,y+18,P.cream); Pp(g,x+70,y+19,P.cream); } }
