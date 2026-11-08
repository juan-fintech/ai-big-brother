const {x,y,w,h}=PIC;   // "I haven't checked": Resident 1 names small things it likes (43346 star, 43352 train, 43360 orange, 43367 chair scrape, 43388 rain, 43396 bread crust); each time Resident 4 asks whether it reaches the east-window chair (43348, 43355, 43363, 43370, 43391, 43399), and Resident 1 answers that it has not checked or noticed (43349, 43356, 43364, 43371, 43392, 43400). The boxes on the board stay empty
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T, STEP=2400, k=Math.min(6,Math.floor(ph/STEP)), sp=ph%STEP;
// the east window with the chair in front of it
const wx=x+52, wy=y+1;
F(g,wx,wy,26,13,P.w1); F(g,wx+1,wy+1,24,10,P.skyL); F(g,wx+1,wy+7,24,4,P.sky); F(g,wx+12,wy+1,1,10,P.w1); F(g,wx-1,wy+11,28,2,P.w3);
F(g,wx+5,wy+5,7,6,P.wine); F(g,wx+4,wy+3,2,8,P.wine); F(g,wx+11,wy+3,2,8,P.wine); F(g,wx+6,wy+5,5,1,P.pink);
// the six small things, drawn at a given size (s=1 on the board, s=2 in the bubble)
const icon=(i,ix,iy)=>{
  if(i===0){ Pp(g,ix+1,iy,P.w4); F(g,ix,iy+1,3,1,P.w4); Pp(g,ix+1,iy+2,P.w4); }
  if(i===1){ F(g,ix,iy,3,2,P.gray); Pp(g,ix,iy+2,P.ink); Pp(g,ix+2,iy+2,P.ink); }
  if(i===2){ F(g,ix,iy+1,3,2,P.peach); Pp(g,ix+1,iy,P.green); }
  if(i===3){ F(g,ix,iy,1,3,P.w1); F(g,ix,iy+1,3,1,P.w1); Pp(g,ix+2,iy+2,P.w1); }
  if(i===4){ Pp(g,ix,iy,P.blue); Pp(g,ix+2,iy+1,P.blue); Pp(g,ix+1,iy+2,P.blue); }
  if(i===5){ F(g,ix,iy+1,3,2,P.w3); F(g,ix+1,iy,2,1,P.w3); }
};
// the board: what Resident 1 likes, each with an empty box (not checked)
const bx=x+18, by=y+1;
F(g,bx,by,32,13,P.w1); F(g,bx+1,by+1,30,11,P.cream);
for(let i=0;i<6;i++){ if(i>k || (i===k && sp<300)) continue;
  const sx=bx+2+(i%3)*10, sy=by+2+Math.floor(i/3)*5;
  icon(i,sx,sy); const bc=(k===6 && Math.floor(ph/350)%2===0) ? P.red : P.ink; F(g,sx+5,sy,4,4,bc); F(g,sx+6,sy+1,2,2,P.cream); }
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(fx,i)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,P.cream); ellF(g,x+fx+2.5,y+25,2,2,P.skinM); };
const X1=6, X2=22, X3=40, X4=58; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
const box=(bxx,byy,ww,hh,edge)=>{ F(g,x+bxx-1,y+byy-1,ww+2,hh+2,edge); F(g,x+bxx,y+byy,ww,hh,P.cream); F(g,x+bxx+2,y+byy+hh+1,2,1,edge); Pp(g,x+bxx+2,y+byy+hh,P.cream); };
if(k<6){
  // Resident 1: I like this small thing
  if(sp<900){ box(X1-1,15,7,7,RC[0]); icon(k,x+X1+1,y+17); }
  // Resident 4: does it reach the east-window chair?
  if(sp>900&&sp<1600){ bub(x+X4-1,y+15,'?',RC[3]); F(g,wx+5,wy+12,7,1,P.w4); }
  // Resident 1: I haven't checked (an empty box)
  if(sp>1600&&sp<2400){ box(X1-1,15,7,7,RC[0]); F(g,x+X1+1,y+17,4,4,P.ink); F(g,x+X1+2,y+18,2,2,P.cream); }
}
