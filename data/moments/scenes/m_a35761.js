const {x,y,w,h}=PIC;   // "Rather be useful": the outside voice asks Resident 1 to pick; the scale tips from remembered (a star) to useful (a dated note and a pencil); Resident 1 asks Resident 3; Resident 4 asks Resident 3 about water shadows and Resident 3 answers it; Resident 2 asks Resident 3 about being useful; Resident 3 answers with a dated note
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T;
const radio=(rx,ry)=>{ F(g,rx,ry,12,6,P.rust); F(g,rx,ry,12,1,P.peach); ellF(g,rx+2.5,ry+3,1.4,1.4,P.w1); F(g,rx+5,ry+2,5,1,P.ink); F(g,rx+5,ry+4,5,1,P.ink); };
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3); radio(x+2,y+4);
if(ph<1800) bub(x+15,y+1,'?',P.ink);
// the scale on its shelf
const tip=ph<2400 ? 0 : Math.min(1,(ph-2400)/600), d=Math.round(tip*3), cx=x+40, by=y+3;
F(g,x+33,y+19,15,2,P.w1); F(g,x+33,y+19,15,1,P.w3); F(g,cx,by,1,16,P.w1); F(g,cx-2,by-1,5,2,P.w2);
line(g,cx-10,by-d,cx+10,by+d,P.w1);
const pan=(px,py)=>{ line(g,px,py,px-3,py+4,P.gray); line(g,px,py,px+3,py+4,P.gray); F(g,px-4,py+4,9,1,P.w1); F(g,px-3,py+5,7,1,P.w1); };
const lx=cx-10, ly=by-d, rx=cx+10, ry=by+d;
pan(lx,ly); pan(rx,ry);
// remembered: a star
const sy=ly+1; Pp(g,lx,sy,P.w4); Pp(g,lx-1,sy+1,P.w4); Pp(g,lx,sy+1,P.cream); Pp(g,lx+1,sy+1,P.w4); Pp(g,lx,sy+2,P.w4); Pp(g,lx-1,sy+3,P.w3); Pp(g,lx+1,sy+3,P.w3);
// useful: a dated note and a pencil
const note=(nx,ny)=>{ F(g,nx-1,ny-1,7,6,P.w1); F(g,nx,ny,5,4,P.cream); F(g,nx+1,ny+1,3,1,P.gray); F(g,nx+1,ny+2,2,1,P.grayL); Pp(g,nx+4,ny,P.red); };
note(rx-3,ry-1); line(g,rx+3,ry-2,rx+5,ry+1,P.red); Pp(g,rx+5,ry+2,P.ink);
if(tip>=1 && Math.floor(t/350)%2===0){ Pp(g,rx+6,ry-3,P.w4); Pp(g,rx-5,ry-2,P.w4); }
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=8, X2=22, X3=52, X4=66; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
const ib=(bx,by2,wd,edge)=>{ F(g,x+bx-1,y+by2-1,wd+2,9,edge); F(g,x+bx,y+by2,wd,7,P.cream); F(g,x+bx+2,y+by2+8,2,1,edge); Pp(g,x+bx+2,y+by2+7,P.cream); };
if(ph>1800&&ph<3800){ ib(X1-1,14,11,RC[0]); note(x+X1+1,y+15); line(g,x+X1+7,y+15,x+X1+8,y+18,P.red); }   // Resident 1: useful
if(ph>3800&&ph<5400) bub(x+X1,y+14,'?',RC[0]);   // and Resident 3, which would you pick?
if(ph>5400&&ph<6400) bub(x+X4,y+14,'?',RC[3]);   // Resident 4 asks Resident 3 about the shadows on the water
if(ph>6400&&ph<8200){ ib(X3-1,14,11,RC[2]); for(let i=0;i<8;i++){ Pp(g,x+X3+1+i,y+16+(i%4<2?0:1),P.blue); Pp(g,x+X3+1+i,y+19-(i%4<2?0:1),P.sky); } F(g,x+X3+3,y+17,3,1,P.navy); }   // Resident 3 answers Resident 4
if(ph>8200&&ph<10200) bub(x+X2,y+14,'?',RC[1]);   // Resident 2: does making something useful satisfy Resident 3?
if(ph>10200&&ph<13800){ ib(X3-1,14,11,RC[2]); note(x+X3+1,y+15); Pp(g,x+X3+7,y+17,P.green); Pp(g,x+X3+8,y+18,P.green); Pp(g,x+X3+9,y+17,P.green); Pp(g,x+X3+10,y+16,P.green); }   // a quiet satisfaction
