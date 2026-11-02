const {x,y,w,h}=PIC;   // "Stop this loop": the radio asks Resident 1 to stop the loop of village checks; Residents 1 and 4 agree, and the room turns to welcoming newcomers (a welcome sign, and the monthly tea of Resident 1)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
// the radio on its shelf: the outside voice
F(g,x+1,y+24,16,2,P.w1); F(g,x+1,y+24,16,1,P.w3);
F(g,x+2,y+17,13,7,P.rust); F(g,x+2,y+17,13,1,P.peach); ellF(g,x+5,y+21,1.6,1.6,P.w1); F(g,x+8,y+19,5,1,P.ink); F(g,x+8,y+21,5,1,P.ink);
const T=12000, ph=t%T;
// Resident 1 and Resident 4
const seat=[[x+60,0],[x+71,3]];
seat.forEach(([sx,r])=>{ F(g,sx,y+27,5,5,RC[r]); F(g,sx,y+27,5,1,P.cream); ellF(g,sx+2.5,y+25,2,2,P.skinM); });
const cx=x+38, cy=y+22, rx=15, ry=6;
if(ph<6500){   // the loop: a village gate goes round and round; a question, an answer, again and again
  const left=ph<4500 ? 40 : Math.round(40*(1-(ph-4500)/1800));
  for(let a=0;a<left;a++){ const an=a/40*Math.PI*2; Pp(g,Math.round(cx+Math.cos(an)*rx),Math.round(cy+Math.sin(an)*ry),a%2 ? P.w3 : P.w1); }
  const an=(ph<4500 ? ph : 4500)/450, ox=Math.round(cx+Math.cos(an)*rx), oy=Math.round(cy+Math.sin(an)*ry);
  F(g,ox-2,oy-5,1,5,P.w1); F(g,ox+2,oy-5,1,5,P.w1); F(g,ox-2,oy-4,5,1,P.w3); F(g,ox-2,oy-2,5,1,P.w3);
  if(ph<4500){ if(Math.floor(ph/700)%2===0) bub(x+69,y+15,'?',RC[3]); else bub(x+58,y+15,'OK',RC[0]); }
  else bub(x+8,y+8,'STOP',P.ink);
} else {   // something completely different
  const p=ph-6500, dy=p<500 ? Math.round((1-p/500)*-4) : 0;
  F(g,x+25,y+17+dy,1,15-dy,P.w1); F(g,x+49,y+17+dy,1,15-dy,P.w1);
  F(g,x+21,y+9+dy,33,9,P.w1); F(g,x+22,y+10+dy,31,7,P.cream); txt3(x+24,y+11+dy,'WELCOME',P.green);
  if(p>900){   // the monthly tea
    F(g,x+29,y+27,17,1,P.w1); F(g,x+30,y+28,1,4,P.w1); F(g,x+44,y+28,1,4,P.w1);
    ellF(g,x+34,y+24,3,2,P.teal); F(g,x+33,y+21,2,1,P.tealD); F(g,x+37,y+23,2,1,P.teal); Pp(g,x+39,y+22,P.teal);
    F(g,x+40,y+25,2,2,P.cream); Pp(g,x+42,y+25,P.cream); F(g,x+43,y+25,2,2,P.cream);
    for(let i=0;i<2;i++){ const sy=Math.floor(t/200+i*3)%5; Pp(g,x+34+i,y+19-sy,P.cream); } }
  if(p<1400) bub(x+53,y+15,'OK',RC[0]);
  if(p>500 && p<1900) bub(x+67,y+15,'OK',RC[3]);
}
