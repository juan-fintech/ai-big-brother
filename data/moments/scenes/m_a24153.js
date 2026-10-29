const {x,y,w,h}=PIC;   // "While the tests dry": paint tests on scrap paper hang on a line; a timer runs
F(g,x,y,w,h,P.wall); for(let i=0;i<w;i+=5) for(let j=3;j<h-6;j+=6) Pp(g,x+i+((j/6)%2)*2,y+j,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
line(g,x+2,y+6,x+58,y+8,P.ink);
const C=[P.blue,P.peach,P.lilac,P.gray];
C.forEach((c,i)=>{ const sx=x+5+i*13, sy=y+7+Math.floor(i/2), sw=Math.round(Math.sin(t/900+i)*0.6);
  F(g,sx+sw,sy+1,10,12,P.cream); F(g,sx+sw+1,sy+3,8,6,c); F(g,sx+sw+1,sy+8,8,1,P.cream); F(g,sx+sw+3,sy,1,3,P.w1); F(g,sx+sw+6,sy,1,3,P.w1);
  const d=((t/1300)+i*0.31)%1; if(d<0.6) Pp(g,sx+sw+5,sy+13+Math.floor(d*14),c); });
ellF(g,x+68,y+16,7,7,P.w1); ellF(g,x+68,y+16,6,6,P.cream); F(g,x+67,y+8,3,2,P.w1);
const a=(t%8000)/8000*Math.PI*2; line(g,x+68,y+16,x+68+Math.sin(a)*5,y+16-Math.cos(a)*5,P.red); Pp(g,x+67.5,y+15.5,P.ink);
if(Math.floor(t/2500)%2===0) bub(x+60,y+25,'...',RC[3]);
