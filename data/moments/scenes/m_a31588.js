const {x,y,w,h}=PIC;   // "The garden behind the door": the door opens on a hidden garden with a bench and a path to the water meadows; the tag above the door shows who gets the credit
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const dx=x+31, dy=y+9, dw=18, dh=23, ph=t%13000;
F(g,dx-1,dy-1,dw+2,dh+1,P.plum);
F(g,dx,dy,dw,8,P.skyL); F(g,dx,dy+8,dw,2,P.sky); F(g,dx,dy+10,dw,13,P.greenL);   // the hidden garden
for(let i=0;i<dw;i+=3) Pp(g,dx+i+1,dy+8,P.blue);
F(g,dx,dy+10,dw,2,P.green); F(g,dx+7,dy+12,4,11,P.w3); F(g,dx+8,dy+10,2,2,P.w3);
F(g,dx+12,dy+15,5,1,P.w1); F(g,dx+12,dy+16,1,2,P.w1); F(g,dx+16,dy+16,1,2,P.w1); F(g,dx+12,dy+13,5,1,P.w1);
for(const [fx,fy,c] of [[2,14,P.pink],[4,18,P.w4],[1,20,P.pink],[14,20,P.w4],[16,12,P.pink],[3,12,P.w4]]) Pp(g,dx+fx,dy+fy,c);
const op=ph<1500 ? 0 : ph<2300 ? (ph-1500)/800 : ph<12000 ? 1 : 1-(ph-12000)/1000;
const pw=Math.max(2,Math.round(dw*(1-op*0.85)));   // the door swings open
F(g,dx,dy,pw,dh,P.w1); F(g,dx,dy,pw,1,P.w2); if(pw>6){ F(g,dx+2,dy+3,pw-4,7,P.w2); F(g,dx+2,dy+13,pw-4,7,P.w2); Pp(g,dx+pw-3,dy+12,P.w4); }
F(g,dx+pw,dy,1,dh,P.bplum);
const fig=(bx,i,e)=>{ F(g,x+bx,y+31,5,5,RC[i]); F(g,x+bx,y+32,1,4,e); F(g,x+bx,y+31,5,1,P.cream); ellF(g,x+bx+2.5,y+28.5,2,2,P.skinM); };
fig(9,0,P.blue); fig(56,2,P.aqua); fig(69,1,P.w3);
const SAY=[[2600,4200,9,0,'1'],[4400,6000,67,1,'3'],[6200,7800,54,2,'1'],[8000,9400,67,1,'1'],[9600,11200,67,1,'3'],[11200,12600,67,1,'3']];
let tag='?', tc=P.ink;
for(const [a,b,bx,i,s] of SAY){ if(ph>=a) { tag=s; tc=RC[s==='1' ? 0 : 2]; } if(ph>=a && ph<b) bub(x+bx,y+17,s,RC[i]); }
Pp(g,x+23,y+11,P.ink); F(g,x+19,y+12,9,9,P.plum); F(g,x+20,y+13,7,7,P.cream); txt3(x+22,y+14,tag,tc);   // who gets the credit
