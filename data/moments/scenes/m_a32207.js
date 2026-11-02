const {x,y,w,h}=PIC;   // "Leaving that prompt aside": three prepared cards drop in; Resident 4 puts the festival card aside, and Resident 1 takes the colour card and the time capsule card
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+30,y+8,20,4,P.plum); F(g,x+31,y+9,18,2,P.ink); F(g,x+32,y+10,16,1,P.violet);   // the slot of the outside voice
txt3(x+2,y+17,'ASIDE',P.mauve); F(g,x+2,y+30,18,2,P.w1); F(g,x+2,y+29,1,1,P.w1); F(g,x+19,y+29,1,1,P.w1);
const fig=(bx,i,e)=>{ F(g,x+bx,y+31,5,5,RC[i]); F(g,x+bx,y+32,1,4,e); F(g,x+bx,y+31,5,1,P.cream); ellF(g,x+bx+2.5,y+28.5,2,2,P.skinM); };
fig(30,3,P.pink); fig(60,0,P.blue);
const card=(cx,cy,k)=>{ F(g,cx,cy,9,8,P.mauve); F(g,cx+1,cy+1,7,6,P.cream);
  if(k===0){ Pp(g,cx+4,cy+1,P.ink); F(g,cx+3,cy+2,3,1,P.ink); F(g,cx+3,cy+3,3,2,P.w4); Pp(g,cx+4,cy+3,P.peach); F(g,cx+3,cy+5,3,1,P.ink); Pp(g,cx+2,cy+3,P.w3); Pp(g,cx+6,cy+3,P.w3); }   // a lantern: the festival
  else if(k===1){ F(g,cx+2,cy+2,5,4,P.blue); }   // a colour
  else { F(g,cx+2,cy+3,5,3,P.w1); F(g,cx+2,cy+2,5,1,P.w3); Pp(g,cx+4,cy+4,P.w4); } };   // a box: the time capsule
const C=5200, k=Math.floor(t/C)%3, ph=t%C, cyc=t%(C*3);
if(cyc>C*0.75) card(x+5,y+22,0);   // the festival card stays aside
let px=x+36, py=y+11;
if(ph<1000) py=y+11+Math.round(ph/1000*9); else py=y+20;
if(k===0 && ph>2600) { const p=Math.min(1,(ph-2600)/1300); px=x+36-Math.round(p*31); py=y+20+Math.round(p*2); }
if(k>0 && ph>1800) { const p=Math.min(1,(ph-1800)/1200); px=x+36+Math.round(p*16); }
if(!(k===0 && ph>3900)) card(px,py,k);
if(k===0 && ph>1200 && ph<2600) bub(x+30,y+10,'...',RC[3]);
if(k===1 && ph>3100 && ph<5000){ F(g,x+62,y+11,11,9,RC[0]); F(g,x+63,y+12,9,7,P.cream); F(g,x+65,y+13,5,5,P.blue); F(g,x+64,y+20,2,1,RC[0]); Pp(g,x+64,y+19,P.cream); }
if(k===2 && ph>3100 && ph<4300) bub(x+62,y+11,'!',RC[0]);
if(k===2 && ph>4300) bub(x+25,y+11,'OK',RC[3]);
