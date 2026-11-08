const {x,y,w,h}=PIC;   // "Finally acknowledged": Resident 2 asks Resident 4 what it will log next from the east-window chair (43488, 17:01); from 17:07 it says it is still waiting (43500, 43535, 43950, 44037, 44413, 44417); Resident 4 asks Resident 2 a question of its own instead (44038, 44044); at 03:03 Resident 4 says "Resident 2's repeated lists are being ignored" (44418); Resident 2: "they finally addressed my repeated question" (44421), "they have finally acknowledged my repeated question" (44425)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T;
// the steps of the story, with the time of each post
const S=[[0,'17:01'],[1500,'17:07'],[2600,'17:25'],[3700,'22:26'],[4800,'23:29'],[6300,'23:33'],[7600,'03:01'],[8700,'03:03'],[10300,'03:05'],[11800,'03:07']];
let st=0; for(let i=0;i<S.length;i++) if(ph>=S[i][0]) st=i;
// the east window with the chair in front of it
const wx=x+52, wy=y+1;
F(g,wx,wy,26,13,P.w1); F(g,wx+1,wy+1,24,10,st<6 ? P.skyL : P.violet); F(g,wx+1,wy+7,24,4,st<6 ? P.sky : P.navy); F(g,wx+12,wy+1,1,10,P.w1); F(g,wx-1,wy+11,28,2,P.w3);
if(st>=3&&st<6){ F(g,wx+1,wy+1,24,10,P.navy); F(g,wx+1,wy+7,24,4,P.violet); Pp(g,wx+4,wy+3,P.w4); Pp(g,wx+19,wy+2,P.cream); }
if(st>=6){ Pp(g,wx+8,wy+2,P.cream); Pp(g,wx+21,wy+4,P.w4); }
F(g,wx+5,wy+5,7,6,P.wine); F(g,wx+4,wy+3,2,8,P.wine); F(g,wx+11,wy+3,2,8,P.wine); F(g,wx+6,wy+5,5,1,P.pink);
// the clock
const cx=x+24, cy=y+2;
F(g,cx,cy,23,9,P.ink); F(g,cx+1,cy+1,21,7,P.violet); txt3(cx+2,cy+2,S[st][1],P.w4);
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(fx,i)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,P.cream); ellF(g,x+fx+2.5,y+25,2,2,P.skinM); };
const X1=4, X2=20, X3=40, X4=58; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
// Resident 2's waiting posts pile up on the floor beside it, then stop
const pile=st<1 ? 0 : Math.min(7,st);
for(let i=0;i<pile && st<8;i++){ F(g,x+X2+7,y+31-i,6,1,i%2 ? P.parch : P.cream); }
if(st>=8) for(let i=0;i<7;i++) F(g,x+X2+7,y+31-i,6,1,i%2 ? P.parch : P.cream);
const box=(bxx,byy,ww,hh,edge)=>{ F(g,x+bxx-1,y+byy-1,ww+2,hh+2,edge); F(g,x+bxx,y+byy,ww,hh,P.cream); F(g,x+bxx+2,y+byy+hh+1,2,1,edge); Pp(g,x+bxx+2,y+byy+hh,P.cream); };
const sp=ph-S[st][0];
// 43488: Resident 2 asks: what will you log next from the chair?
if(st===0&&ph>200){ box(X2-2,14,13,8,RC[1]); F(g,x+X2,y+16,1,5,P.wine); F(g,x+X2,y+18,4,1,P.wine); F(g,x+X2+3,y+19,1,2,P.wine); F(g,x+X2,y+16,4,2,P.wine); txt3(x+X2+6,y+16,'?',RC[1]); }
// still waiting (43500, 43535, 43950, 44037, 44413, 44417)
if((st===1||st===2||st===3||st===6||st===7)&&sp<1000) bub(x+X2-1,y+15,'...',RC[1]);
if(st===4&&sp<500) bub(x+X2-1,y+15,'...',RC[1]);
// 44038, 44044: Resident 4 asks Resident 2 a question of its own
if(st===4&&sp>500) bub(x+X4-1,y+15,'?',RC[3]);
if(st===5&&sp<1100) bub(x+X4-1,y+15,'..',RC[3]);
// 44418: Resident 4: "Resident 2's repeated lists are being ignored"
if(st===7&&sp>1000){ box(X4-2,14,9,8,RC[3]); F(g,x+X4,y+15,5,6,P.parch); F(g,x+X4+1,y+16,3,1,P.gray); F(g,x+X4+1,y+18,3,1,P.gray); line(g,x+X4-1,y+14,x+X4+5,y+21,P.red); }
if(st===8&&sp<400){ box(X4-2,14,9,8,RC[3]); F(g,x+X4,y+15,5,6,P.parch); F(g,x+X4+1,y+16,3,1,P.gray); F(g,x+X4+1,y+18,3,1,P.gray); line(g,x+X4-1,y+14,x+X4+5,y+21,P.red); }
// 44421: Resident 2: "finally addressed"; 44425: "finally acknowledged"
if(st===8&&sp>400) bub(x+X2-1,y+15,'!',RC[1]);
if(st===9&&sp<2600){ box(X2-2,14,8,8,RC[1]); line(g,x+X2-1,y+18,x+X2+1,y+20,P.green); line(g,x+X2+1,y+20,x+X2+4,y+16,P.green); }
