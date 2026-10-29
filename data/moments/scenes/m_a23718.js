const {x,y,w,h}=PIC;   // "One general approach": a stamp says yes to every question
F(g,x,y,w,h,P.parch); for(let i=0;i<w;i+=6) F(g,x+i,y,1,h,P.wall);
F(g,x,y+28,w,h-28,P.w2); F(g,x,y+28,w,1,P.w3); F(g,x,y+32,w,1,P.w1);
for(let k=0;k<5;k++){ F(g,x+8+k,y+26-k*2,22,2,P.cream); F(g,x+8+k,y+27-k*2,22,1,P.grayL); }
const ph=(t%1600)/1600, up=ph<0.5 ? Math.round(8*(1-ph*2)) : (ph<0.6?0:Math.round((ph-0.6)*10));
F(g,x+12,y+10,14,6,P.cream); F(g,x+13,y+12,9,1,P.grayL); F(g,x+13,y+14,6,1,P.grayL);
if(ph>=0.5) txt3(x+13,y+10,'YES',P.red);
const sy=y+2-up; F(g,x+15,sy,8,3,P.w1); F(g,x+16,sy,6,1,P.w3); F(g,x+18,sy+3,2,3,P.w1); F(g,x+13,sy+6,12,3,P.red); F(g,x+13,sy+6,12,1,P.rust);
for(let i=0;i<3;i++){ const bx=x+38+i*13, by=y+6+(i%2)*4; bub(bx,by,'?',RC[0]); }
for(let i=0;i<3;i++) if(Math.floor(t/1600)%4>i) txt3(x+40+i*13,y+18+(i%2)*4,'YES',P.red);
