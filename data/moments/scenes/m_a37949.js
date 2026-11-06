const {x,y,w,h}=PIC;   // "The sparrow breaks the tie": the radio asks Resident 1 about a village that votes on the weather; Resident 1 invents Brambleford (a vote board: sun or cloud); Resident 4 imagines two records; a tie; Resident 4 lets the first sparrow to land on the verge break it; the sparrow becomes the honorary tie-breaker (a star)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// small icons: a sun and a cloud
const sun=(sx,sy)=>{ ellF(g,sx+1.5,sy+1.5,1.6,1.6,P.w4); Pp(g,sx+1,sy-1,P.w3); Pp(g,sx+1,sy+4,P.w3); Pp(g,sx-1,sy+1,P.w3); Pp(g,sx+4,sy+1,P.w3); };
const cloud=(cx,cy)=>{ F(g,cx,cy+1,5,2,P.grayL); F(g,cx+1,cy,3,1,P.grayL); F(g,cx,cy+3,5,1,P.gray); };
// the vote board: VOTE, sun against cloud, with tally marks
F(g,x+19,y+1,27,15,P.w1); F(g,x+20,y+2,25,13,P.cream);
txt3(x+25,y+3,'VOTE',P.ink);
sun(x+22,y+9); cloud(x+33,y+9);
const tall=Math.min(3,Math.max(0,Math.floor((ph-1600)/700)));   // the tallies grow while the village votes
const tc=Math.min(3,Math.max(0,Math.floor((ph-1950)/700)));
const tie=ph>6000&&ph<7600&&Math.floor(ph/300)%2===0;   // a tie: the tallies blink red
for(let j=0;j<tall;j++) F(g,x+26+j*2,y+9,1,4,tie ? P.red : P.ink);
for(let j=0;j<tc;j++) F(g,x+39+j*2,y+9,1,4,tie ? P.red : P.ink);
// Brambleford in a frame: sky, cottages, the green verge
F(g,x+49,y+1,30,17,P.w1); F(g,x+50,y+2,28,15,P.skyL); F(g,x+50,y+13,28,4,P.greenL); F(g,x+50,y+13,28,1,P.green);
const cot=(cx,cy,roof)=>{ F(g,cx,cy+3,7,5,P.cream); F(g,cx+1,cy+2,5,1,roof); F(g,cx,cy+1,7,1,roof); F(g,cx+1,cy,5,1,roof); F(g,cx+3,cy+5,1,3,P.w1); Pp(g,cx+1,cy+4,P.sky); Pp(g,cx+5,cy+4,P.sky); };
cot(x+52,y+6,P.red); cot(x+61,y+5,P.rust);
// the residents: Resident 1, Resident 2, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=22, X2=40, X4=62; fig(X1,0); fig(X2,1); fig(X4,3);
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
if(ph<1200){ const p=ph/1200; F(g,x+lerp(14,X1,p),y+lerp(6,18,p),7,6,P.mauve); F(g,x+lerp(14,X1,p)+1,y+lerp(6,18,p)+1,5,4,P.cream); }
// a bigger bubble with a drawing inside
const box=(bx,by,col)=>{ F(g,bx-1,by-1,11,10,col); F(g,bx,by,9,8,P.cream); F(g,bx+2,by+9,2,1,col); Pp(g,bx+2,by+8,P.cream); };
if(ph>1200&&ph<3600){ box(x+X1-2,y+11,RC[0]); const cx=x+X1-1, cy=y+12; F(g,cx+1,cy+3,5,3,P.parch); F(g,cx+2,cy+2,3,1,P.red); F(g,cx+1,cy+1,5,1,P.red); F(g,cx+3,cy+4,1,2,P.w1); }   // Resident 1: Brambleford
if(ph>2600&&ph<3500) bub(x+X2-1,y+12,'?',RC[1]);   // Resident 2 follows up
if(ph>3700&&ph<5600){ box(x+X4-2,y+11,RC[3]); const cx=x+X4-1, cy=y+12; F(g,cx,cy+1,3,4,P.parch); F(g,cx+1,cy+2,1,1,P.w4); F(g,cx+4,cy+1,3,4,P.parch); F(g,cx+5,cy+2,1,1,P.gray); }   // Resident 4: two records, the vote and the sky
if(ph>4800&&ph<5700) bub(x+X2-1,y+12,'?',RC[1]);
if(ph>6000&&ph<7600) bub(x+X1-1,y+12,'?',RC[0]);   // Resident 1: what rule settles a tie?
// the sparrow flies in and lands on the verge
const bird=(bx,by,up)=>{ F(g,bx,by+1,3,2,P.w1); Pp(g,bx+3,by+1,P.bplum); Pp(g,bx+4,by+1,P.w3); F(g,bx+1,by+(up?0:1),2,1,P.bplum); Pp(g,bx-1,by+1,P.bplum); };
if(ph>7600){ const p=Math.min(1,(ph-7600)/1600); const bx=lerp(78,70,p), by=p<1 ? lerp(3,12,p)-Math.round(Math.sin(p*9)*1) : 12; bird(x+bx,y+by,p<1&&Math.floor(ph/150)%2===0); }
if(ph>9200&&ph<10600) bub(x+X4-1,y+12,'!',RC[3]);   // Resident 4: the first sparrow breaks the tie
if(ph>10600&&ph<12000) bub(x+X1-1,y+12,'?',RC[0]);   // Resident 1: an honorary title?
if(ph>12000){ const sx=x+71, sy=y+8; Pp(g,sx,sy,P.w4); Pp(g,sx-1,sy+1,P.w4); Pp(g,sx,sy+1,P.cream); Pp(g,sx+1,sy+1,P.w4); Pp(g,sx,sy+2,P.w4); ringGlow(g,sx+0.5,sy+1.5,3,3,3,'242,204,122',0.18); }   // one sparrow, the honorary tie-breaker
if(ph>12200&&ph<13800) bub(x+X4-1,y+12,'1',RC[3]);
if(ph>14000&&ph<15000) bub(x+X2-1,y+12,'?',RC[1]);
