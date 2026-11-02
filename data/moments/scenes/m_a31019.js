const {x,y,w,h}=PIC;   // "Do those records…": back after more than a day, Resident 3 asks Resident 1 54 questions about those records, from a roadside marker post to a car park; Resident 1 has no records
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const STEP=1000, k=Math.floor(t/STEP)%58, ph=(t%STEP)/STEP, q=Math.min(54,k+1);
// where the questions are: marker post (1), box of records (17, backup copies), database (28), its building (46), the car park (54)
const TH=[1,17,28,46,54]; let s=0; for(let i=0;i<5;i++) if(q>=TH[i]) s=i;
const cl=(i,c)=>i<=s ? c : P.grayL;
// the board: the count of questions and the trail
F(g,x+2,y+9,54,23,P.w1); F(g,x+3,y+10,52,21,P.cream);
txt3(x+5,y+12,'DO THOSE',P.tealD);
const cs=''+q; txt3(x+53-cs.length*4,y+12,cs,ph<0.3 && k<54 ? P.red : P.ink);
F(g,x+5,y+18,48,1,P.grayL);
const CX=[8,17,26,35,45];
for(let i=6;i<50;i+=2) Pp(g,x+i,y+30,x+i<=x+CX[s] ? P.teal : P.grayL);
if(Math.floor(t/250)%2){ F(g,x+CX[s]-4,y+30,9,1,P.teal); F(g,x+CX[s]-4,y+18,9,1,P.teal); }
let cx=x+CX[0];   // a roadside marker post
F(g,cx-1,y+21,3,8,cl(0,P.gray)); F(g,cx-1,y+22,3,2,cl(0,P.red)); F(g,cx-2,y+29,5,1,cl(0,P.green));
cx=x+CX[1];   // a box of records
F(g,cx-4,y+24,9,5,cl(1,P.w3)); F(g,cx-4,y+23,9,1,cl(1,P.w2)); F(g,cx-1,y+25,3,2,P.cream);
cx=x+CX[2];   // the central database
F(g,cx-2,y+21,5,1,cl(2,P.blue)); F(g,cx-3,y+22,7,7,cl(2,P.navy)); F(g,cx-3,y+24,7,1,cl(2,P.blue)); F(g,cx-3,y+27,7,1,cl(2,P.blue));
if(s>=2 && Math.floor(t/300)%2) Pp(g,cx+2,y+23,P.lime);
cx=x+CX[3];   // the building that holds it
F(g,cx-4,y+20,9,9,cl(3,P.mauve)); for(let r=0;r<2;r++) for(let c=0;c<3;c++) Pp(g,cx-3+c*3,y+22+r*3,s>=3 ? P.skyL : P.cream);
F(g,cx-1,y+27,2,2,cl(3,P.ink));
cx=x+CX[4];   // a car in the car park of that building
F(g,cx-4,y+25,9,3,cl(4,P.red)); F(g,cx-2,y+23,5,2,cl(4,P.red)); F(g,cx-1,y+23,3,1,s>=4 ? P.skyL : P.cream);
F(g,cx-3,y+28,2,1,P.ink); F(g,cx+2,y+28,2,1,P.ink);
F(g,x+50,y+20,5,7,cl(4,P.blue)); txt3(x+51,y+21,'P',P.cream); F(g,x+52,y+27,1,2,P.gray);
// Resident 3 asks, Resident 1 answers: an empty tray, no records
const seat=[[x+60,2],[x+71,0]];
seat.forEach(([sx,r])=>{ F(g,sx,y+27,5,5,RC[r]); F(g,sx,y+27,5,1,P.cream); ellF(g,sx+2.5,y+25,2,2,P.skinM); });
if(k<54 && ph<0.5) bub(x+58,y+15,'?',RC[2]);
else if(k>=54 || ph>0.56){ const bx=x+69, by=y+15;   // an empty folder
  F(g,bx-1,by-1,11,9,RC[0]); F(g,bx,by,9,7,P.cream); F(g,bx+2,by+8,2,1,RC[0]); Pp(g,bx+2,by+7,P.cream);
  F(g,bx+1,by+1,3,1,P.w2); F(g,bx+1,by+2,7,4,P.w3); F(g,bx+2,by+3,5,2,P.cream); }
