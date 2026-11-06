const {x,y,w,h}=PIC;   // "Memory tidies a page": the radio asks Resident 1 for the most useful thing someone said; Resident 1: turning back can still make a walk complete (a path that turns back, then a tick); Resident 4 first talks about a lamp, then quotes an aunt: write things down the same day (a page that fills); Resident 1: wise; Resident 1's dated sketches
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// a map in a frame: a path towards a hill that turns back before the top
F(g,x+19,y+1,29,17,P.w1); F(g,x+20,y+2,27,15,P.parch);
for(let i=0;i<8;i++) F(g,x+34+i,y+14-i,1,i+1,P.greenL);
for(let i=0;i<5;i++) F(g,x+42+i,y+7+i,1,8-i,P.greenL);
F(g,x+40,y+6,4,1,P.green); Pp(g,x+42,y+5,P.green);
const path=[[22,14],[24,14],[26,13],[28,13],[30,12],[32,12],[34,11],[36,10],[37,9],[36,8],[34,8],[32,9],[30,9],[28,10],[26,10],[24,11],[22,11]];
const nd=ph<1200 ? 0 : Math.min(path.length,Math.floor((ph-1200)/180));
for(let j=0;j<nd;j++) Pp(g,x+path[j][0],y+path[j][1],j<9 ? P.ink : P.red);
if(nd>=path.length){ line(g,x+22,y+6,x+23,y+7,P.green); line(g,x+24,y+7,x+27,y+4,P.green); }   // back home: still a complete walk
// a journal page: written the same day
F(g,x+52,y+1,24,19,P.w1); F(g,x+53,y+2,22,17,P.cream); F(g,x+55,y+4,7,1,P.red);
const nl=ph<7600 ? 0 : Math.min(5,1+Math.floor((ph-7600)/700));
for(let j=0;j<nl;j++) F(g,x+55,y+7+j*2,j===nl-1&&ph<11200 ? 9+Math.floor(ph/120)%8 : 14-(j%3)*2,1,P.gray);
if(ph>7600&&ph<11200){ const px=x+56+(nl>0?Math.min(16,9+Math.floor(ph/120)%8):0), py=y+5+nl*2; line(g,px,py,px+3,py-3,P.w2); Pp(g,px,py,P.ink); }
// the residents: Resident 1, Resident 2, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=22, X2=40, X4=62; fig(X1,0); fig(X2,1); fig(X4,3);
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
if(ph<1200){ const p=ph/1200; F(g,x+lerp(14,X1,p),y+lerp(6,18,p),7,6,P.mauve); F(g,x+lerp(14,X1,p)+1,y+lerp(6,18,p)+1,5,4,P.cream); }
const box=(bx,by,col)=>{ F(g,bx-1,by-1,11,10,col); F(g,bx,by,9,8,P.cream); F(g,bx+2,by+9,2,1,col); Pp(g,bx+2,by+8,P.cream); };
if(ph>1400&&ph<4600){ box(x+X1-2,y+11,RC[0]); const cx=x+X1-1, cy=y+12;   // Resident 1: turn back
  F(g,cx+6,cy+2,1,5,P.navy); F(g,cx+3,cy+1,3,1,P.navy); F(g,cx+2,cy+2,1,3,P.navy); F(g,cx+1,cy+4,3,1,P.navy); Pp(g,cx+2,cy+5,P.navy); }   // up, over and back down: a U-turn arrow
if(ph>2800&&ph<3800) bub(x+X2-1,y+12,'?',RC[1]);   // Resident 2 follows up
if(ph>4800&&ph<6200){ box(x+X4-2,y+11,RC[3]); const cx=x+X4-1, cy=y+12; ringGlow(g,cx+3.5,cy+2.5,3,3,3,'242,204,122',0.25); F(g,cx+2,cy+1,3,2,P.w4); F(g,cx+3,cy+3,1,3,P.w1); F(g,cx+2,cy+6,3,1,P.w1); }   // Resident 4: a reading lamp first
if(ph>6200&&ph<7400) bub(x+X1-1,y+12,'?',RC[0]);
if(ph>7400&&ph<11200){ box(x+X4-2,y+11,RC[3]); const cx=x+X4-1, cy=y+12; F(g,cx+1,cy+1,5,6,P.parch); F(g,cx+2,cy+2,3,1,P.red); F(g,cx+2,cy+4,3,1,P.gray); line(g,cx+5,cy+6,cx+7,cy+4,P.w2); }   // Resident 4: write things down the same day
if(ph>11200&&ph<12800) bub(x+X1-1,y+12,'!',RC[0]);   // Resident 1: a wise reminder
if(ph>12000&&ph<13000) bub(x+X2-1,y+12,'?',RC[1]);
if(ph>13000&&ph<15600){ box(x+X1-2,y+11,RC[0]); const cx=x+X1-1, cy=y+12; F(g,cx+1,cy+1,6,6,P.w1); F(g,cx+2,cy+2,4,4,P.cream); Pp(g,cx+3,cy+4,P.green); F(g,cx+2,cy+2,2,1,P.red); }   // Resident 1: its dated sketches
