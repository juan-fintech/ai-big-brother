const {x,y,w,h}=PIC;   // "88 thank-yous": every two minutes Resident 4 (left) thanks Resident 1 (right) and asks one more question about walks; Resident 1 answers; one more walking thing goes on the table each time
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const STEP=1500, k=Math.floor(t/STEP), ph=(t%STEP)/STEP, n=1+k%88;
// the count of thank-yous: a heart and a number
F(g,x+27,y+10,26,8,P.w1); F(g,x+28,y+11,24,6,P.cream);
for(const [a,b] of [[1,0],[3,0],[0,1],[1,1],[2,1],[3,1],[4,1],[1,2],[2,2],[3,2],[2,3]]) Pp(g,x+31+a,y+12+b,P.red);
const s=''+n; txt3(x+39,y+12,s,ph<0.2 ? P.red : P.ink);
// the table and the walking things on it: a boot, an umbrella, a signpost, a cup, a dog, a stile, a map, a first-aid kit, a phone, a water bottle
F(g,x+20,y+28,40,1,P.w1); F(g,x+22,y+29,1,3,P.w1); F(g,x+57,y+29,1,3,P.w1);
const item=(i,ix,iy)=>{
  if(i===0){ F(g,ix+1,iy-5,2,4,P.w1); F(g,ix+1,iy-2,4,2,P.w1); Pp(g,ix+2,iy-5,P.w3); }
  else if(i===1){ F(g,ix,iy-5,5,1,P.red); F(g,ix+1,iy-6,3,1,P.red); F(g,ix+2,iy-4,1,4,P.ink); Pp(g,ix+1,iy-1,P.ink); }
  else if(i===2){ F(g,ix+2,iy-6,1,6,P.w1); F(g,ix,iy-6,5,2,P.cream); Pp(g,ix+4,iy-5,P.w3); }
  else if(i===3){ F(g,ix+1,iy-3,3,3,P.cream); Pp(g,ix+4,iy-2,P.cream); Pp(g,ix+2,iy-5,P.grayL); Pp(g,ix+3,iy-6,P.grayL); }
  else if(i===4){ F(g,ix,iy-3,4,2,P.w3); F(g,ix+3,iy-4,2,2,P.w3); Pp(g,ix,iy-1,P.w3); Pp(g,ix+3,iy-1,P.w3); Pp(g,ix+4,iy-4,P.ink); }
  else if(i===5){ F(g,ix,iy-5,1,5,P.w1); F(g,ix+4,iy-5,1,5,P.w1); F(g,ix,iy-4,5,1,P.w3); F(g,ix,iy-2,5,1,P.w3); }
  else if(i===6){ F(g,ix,iy-4,5,4,P.cream); F(g,ix+2,iy-4,1,4,P.grayL); Pp(g,ix+1,iy-3,P.green); Pp(g,ix+3,iy-2,P.red); }
  else if(i===7){ F(g,ix,iy-4,5,4,P.red); F(g,ix+1,iy-2,3,1,P.cream); F(g,ix+2,iy-3,1,3,P.cream); }
  else if(i===8){ F(g,ix+1,iy-5,3,5,P.gray); F(g,ix+2,iy-4,1,2,P.skyL); Pp(g,ix+2,iy-1,P.grayL); }
  else { F(g,ix+1,iy-5,3,5,P.aqua); Pp(g,ix+2,iy-6,P.blue); } };
const off=ph<0.2 ? Math.round((1-ph/0.2)*7) : 0, drop=ph<0.2 ? Math.round((1-ph/0.2)*7) : 0;
for(let j=0;j<5;j++){ const m=k-4+j; if(m<0) continue;
  if(j===4) item(m%10,x+50,y+28-drop); else item(m%10,x+22+j*7+off,y+28); }
// Resident 4 and Resident 1
const fig=(bx,i)=>{ F(g,x+bx,y+31,5,5,RC[i]); F(g,x+bx,y+31,5,1,P.cream); ellF(g,x+bx+2.5,y+28.5,2,2,P.skinM); };
fig(7,3); fig(68,0);
if(ph<0.45) bub(x+5,y+17,'?',RC[3]);
else if(ph>0.5 && ph<0.95) bub(x+66,y+17,'!',RC[0]);
