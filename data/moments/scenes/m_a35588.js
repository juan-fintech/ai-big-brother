const {x,y,w,h}=PIC;   // "The final answer is:": Resident 2 posts its working steps (a page of five steps) twice; the first page ends with an answer, the second with an empty line; between them the outside voice asks Resident 2 how a bird might describe a city; Resident 2 follows up a note instead; Resident 1 asks Resident 2 about the bird
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=17000, ph=t%T;
const radio=(rx,ry)=>{ F(g,rx,ry,12,6,P.rust); F(g,rx,ry,12,1,P.peach); ellF(g,rx+2.5,ry+3,1.4,1.4,P.w1); F(g,rx+5,ry+2,5,1,P.ink); F(g,rx+5,ry+4,5,1,P.ink); };
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3); radio(x+2,y+4);
// the question: a bird over a small city; it stays, and nobody describes it
const birdOn=ph>4400;
const bird=(bx,by,c)=>{ const up=Math.floor(t/260)%2; Pp(g,bx,by,c); Pp(g,bx+1,by,c);
  if(up){ Pp(g,bx-1,by-1,c); Pp(g,bx-2,by-2,c); Pp(g,bx+2,by-1,c); Pp(g,bx+3,by-2,c); }
  else { Pp(g,bx-1,by-1,c); Pp(g,bx-2,by-1,c); Pp(g,bx-3,by,c); Pp(g,bx+2,by-1,c); Pp(g,bx+3,by-1,c); Pp(g,bx+4,by,c); } };
if(birdOn){ for(const [cx2,ch,c] of [[24,4,P.mauve],[27,6,P.violet],[31,5,P.mauve],[34,7,P.violet],[38,3,P.mauve]]){ F(g,x+cx2,y+12-ch,3,ch,c); Pp(g,x+cx2+1,y+13-ch,P.w4); }
  F(g,x+23,y+12,19,1,P.violet); bird(x+27+Math.round((t%3200)/3200*12),y+3+Math.round(Math.sin(t/500)),P.ink); }
if(ph>4400&&ph<6000) bub(x+15,y+1,'?',P.ink);
// the page of working steps
const PX=x+54, PY=y+1;
const page=(p0,filled)=>{ const q=ph-p0; if(q<0) return;
  F(g,PX-1,PY-1,26,28,P.w1); F(g,PX,PY,24,26,P.cream); txt3(PX+2,PY+2,'STEPS',P.ink);
  for(let i=0;i<5;i++){ if(q<300+i*450) break; const ry=PY+9+i*3; Pp(g,PX+2,ry,P.navy); F(g,PX+4,ry,8+((i*7)%9),1,P.gray); }
  if(q>2700){ Pp(g,PX+2,PY+24,P.ink); Pp(g,PX+2,PY+22,P.ink); F(g,PX+3,PY+20,20,6,P.grayL); F(g,PX+4,PY+21,18,4,P.parch);
    if(filled) F(g,PX+5,PY+23,15,1,P.navy);
    else if(Math.floor(t/400)%2===0) F(g,PX+5,PY+22,1,3,P.ink); } };
if(ph<4200) page(0,true);
if(ph>9400) page(9400,false);
// the residents: Resident 1, Resident 3, Resident 4, Resident 2 (by its page)
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=6, X3=18, X4=30, X2=44; fig(X1,0); fig(X3,2); fig(X4,3); fig(X2,1);
const ib=(bx,by2,wd,edge)=>{ F(g,x+bx-1,y+by2-1,wd+2,9,edge); F(g,x+bx,y+by2,wd,7,P.cream); F(g,x+bx+2,y+by2+8,2,1,edge); Pp(g,x+bx+2,y+by2+7,P.cream); };
if(ph>6000&&ph<7600){ ib(X2-3,15,9,RC[1]); F(g,x+X2-1,y+16,5,4,P.parch); F(g,x+X2,y+17,3,1,P.gray); Pp(g,x+X2+3,y+16,P.red); }   // Resident 2 follows up a note instead
if(ph>7600&&ph<9200){ ib(X1-1,15,13,RC[0]); bird(x+X1+3,y+19,P.ink); txt3(x+X1+8,y+16,'?',RC[0]); }   // Resident 1 asks Resident 2 about the bird
