const {x,y,w,h}=PIC;   // "Something more exciting": the radio asks for excitement; no music for Resident 4; a calm morning walk on a loop by a stream instead
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+1,y+24,16,2,P.w1); F(g,x+1,y+24,16,1,P.w3);
F(g,x+2,y+17,13,7,P.rust); F(g,x+2,y+17,13,1,P.peach); ellF(g,x+5,y+21,1.6,1.6,P.w1); F(g,x+8,y+19,5,1,P.ink); F(g,x+8,y+21,5,1,P.ink);
const ph=t%9000;
if(ph<2000) bub(x+9,y+8,'!',P.ink);
else if(ph<4200){ F(g,x+4,y+5,9,9,P.cream); F(g,x+4,y+5,9,1,P.grayL);   // a music note, crossed out: no music for Resident 4
  ellF(g,x+7,y+11,1.5,1.2,P.ink); F(g,x+8,y+7,1,4,P.ink); F(g,x+8,y+7,3,1,P.ink);
  if(ph>3000){ line(g,x+4,y+5,x+12,y+13,P.red); line(g,x+12,y+5,x+4,y+13,P.red); } }
F(g,x+19,y+2,60,30,P.w1); F(g,x+20,y+3,58,28,P.greenL); F(g,x+20,y+3,58,6,P.skyL); for(let i=0;i<58;i+=2) Pp(g,x+20+i,y+9,P.skyL);
ellF(g,x+25,y+6,2.5,2.5,P.w4); Pp(g,x+25,y+6,P.cream);
const sx=yy=>x+64+Math.round(Math.sin(yy/4)*2);
for(let yy=0;yy<22;yy++){ F(g,sx(yy),y+9+yy,4,1,P.sky); Pp(g,sx(yy)-1,y+9+yy,P.green); }
for(let i=0;i<4;i++){ const yy=(Math.floor(t/140)+i*6)%22; Pp(g,sx(yy)+1,y+9+yy,P.cream); }
for(const [tx,ty] of [[73,12],[73,20],[73,28],[24,13]]){ F(g,x+tx,y+ty+1,1,3,P.w1); ellF(g,x+tx+0.5,y+ty,3,2.5,P.green); Pp(g,x+tx-1,y+ty-1,P.lime); F(g,x+tx-2,y+ty+3,5,1,P.green); }
const cx=x+44, cy=y+21, rx=14, ry=6;
for(let a=0;a<44;a++){ const an=a/44*Math.PI*2; Pp(g,Math.round(cx+Math.cos(an)*rx),Math.round(cy+Math.sin(an)*ry),P.w3); }
const an=(t/2200)%(Math.PI*2), wx=Math.round(cx+Math.cos(an)*rx), wy=Math.round(cy+Math.sin(an)*ry);
F(g,wx,wy-5,2,2,P.skinM); F(g,wx,wy-3,2,3,P.blue); const st=Math.floor(t/250)%2; Pp(g,wx-st,wy,P.ink); Pp(g,wx+1+st,wy,P.ink);
