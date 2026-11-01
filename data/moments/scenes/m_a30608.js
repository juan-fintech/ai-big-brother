const {x,y,w,h}=PIC;   // "I'd add that…": every two minutes Resident 4 adds one more fix and asks about the next village object; the list never ends
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const STEP=1600, k=Math.floor(t/STEP), ph=(t%STEP)/STEP;
// the fix list: one more line each time; it scrolls up and never ends (kept below the bunting)
F(g,x+2,y+10,34,22,P.w1); F(g,x+3,y+11,32,20,P.cream);
txt3(x+4,y+12,'FIXES',P.red); F(g,x+4,y+18,30,1,P.grayL);
// the counter: one more fix every two minutes
const cs=''+(1+k%287); txt3(cs.length<3 ? x+35-cs.length*4 : x+24,y+12,cs,ph<0.2 ? P.red : P.ink);
const OC=[P.green,P.gray,P.w1,P.ink,P.navy,P.tealD,P.w4,P.cream];
const sl=ph<0.25 ? Math.round((1-ph/0.25)*3) : 0;
for(let j=0;j<4;j++){ const n=k-3+j; if(n<0) continue; const ry=y+20+j*3+sl; if(ry>y+29) continue;
  const r=rng(n*3+7), len=8+Math.floor(r()*16), last=j===3;
  F(g,x+5,ry,2,2,last ? (Math.floor(t/200)%2 ? P.w4 : P.red) : P.green);
  Pp(g,x+8,ry,OC[n%8]); F(g,x+10,ry,len,1,last ? P.ink : P.gray); F(g,x+10,ry+1,Math.max(3,len-6),1,P.grayL); }
// today's village object: a new one each time
const gx=x+38, gy=y+h-6, o=k%8, dy=ph<0.12 ? Math.round((1-ph/0.12)*-3) : 0;
ellF(g,gx+6,gy,8,1.4,P.wallS);
if(o===0){ F(g,gx+2,gy-10+dy,1,10-dy,P.w1); F(g,gx+10,gy-10+dy,1,10-dy,P.w1); F(g,gx,gy-16+dy,13,7,P.green); F(g,gx+2,gy-14+dy,9,1,P.cream); F(g,gx+3,gy-12+dy,7,1,P.cream); }
else if(o===1){ for(let i=0;i<3;i++){ F(g,gx+i*4,gy-7+dy,1,7-dy,P.gray); F(g,gx+i*4+2,gy-7+dy,1,7-dy,P.gray); F(g,gx+i*4,gy-8+dy,3,1,P.grayL); } }
else if(o===2){ F(g,gx+1,gy-13+dy,1,13-dy,P.w1); F(g,gx+11,gy-13+dy,1,13-dy,P.w1); F(g,gx,gy-4+dy,13,1,P.w3); F(g,gx,gy-8+dy,13,1,P.w3); F(g,gx,gy-12+dy,13,1,P.w2); }
else if(o===3){ for(let i=0;i<3;i++){ F(g,gx+1+i*4,gy-8+dy,2,8-dy,P.ink); F(g,gx+1+i*4,gy-6+dy,2,1,P.w4); F(g,gx+1+i*4,gy-9+dy,2,1,P.gray); } }
else if(o===4){ F(g,gx+4,gy-13+dy,3,13-dy,P.navy); F(g,gx+7,gy-10+dy,4,1,P.navy); line(g,gx+4,gy-12+dy,gx,gy-15+dy,P.ink); F(g,gx+7,gy-3,6,3,P.gray); if(Math.floor(t/300)%2) Pp(g,gx+10,gy-6,P.sky); }
else if(o===5){ F(g,gx+3,gy-9+dy,7,9-dy,P.green); F(g,gx+2,gy-10+dy,9,1,P.tealD); F(g,gx+5,gy-7+dy,3,1,P.tealD); }
else if(o===6){ F(g,gx+1,gy-8+dy,11,8-dy,P.w4); F(g,gx+1,gy-10+dy,11,2,P.w3); F(g,gx+2,gy-5+dy,9,1,P.red); }
else { F(g,gx+6,gy-15+dy,1,15-dy,P.w1); F(g,gx+1,gy-14+dy,5,2,P.cream); Pp(g,gx,gy-13+dy,P.cream); F(g,gx+7,gy-11+dy,5,2,P.cream); Pp(g,gx+12,gy-10+dy,P.cream); }
// Resident 1 and Resident 4: "+1" (one more fix and a new question), then "OK" (the answer), again and again
const seat=[[x+58,0],[x+69,3]];
seat.forEach(([sx,r])=>{ F(g,sx,y+27,5,5,RC[r]); F(g,sx,y+27,5,1,P.cream); ellF(g,sx+2.5,y+25,2,2,P.skinM); });
if(ph<0.5){ bub(x+66,y+15,' 1',RC[3]); F(g,x+68,y+18,3,1,RC[3]); F(g,x+69,y+17,1,3,RC[3]); }   // the 3x5 font has no plus sign: draw it
else if(ph>0.56) bub(x+54,y+15,'OK',RC[0]);
