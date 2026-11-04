const {x,y,w,h}=PIC;   // "Questions to a silent room": for 3.5 hours no resident posts; the radio (the outside voice) sends six questions to the empty sofa while the clock runs; the residents come back (Resident 1: yes; Resident 4: nothing new for me), and the radio sends the first question again
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=14000, ph=t%T, back=ph>=8400, again=ph>=11000;
// the radio on its shelf
F(g,x+1,y+28,16,2,P.w1); F(g,x+1,y+28,16,1,P.w3);
F(g,x+2,y+21,13,7,P.rust); F(g,x+2,y+21,13,1,P.peach); ellF(g,x+5,y+25,1.6,1.6,P.w1); F(g,x+8,y+23,5,1,P.ink); F(g,x+8,y+25,5,1,P.ink);
// the pile of questions on a small table
F(g,x+27,y+31,16,1,P.w1); F(g,x+28,y+32,1,4,P.w1); F(g,x+41,y+32,1,4,P.w1);
const sent=back ? 6 : Math.min(6,Math.floor(ph/1400)+1), sp=back ? 0 : ph%1400;
const card=(cx,cy,c)=>{ F(g,cx,cy,9,5,P.w1); F(g,cx+1,cy+1,7,3,c); Pp(g,cx+4,cy+2,P.ink); };
const shown=(!back && sp<600) ? sent-1 : sent;
for(let i=0;i<shown;i++) card(x+30+(i%2),y+26-i*2,P.cream);
if(!back && sp<600){ const f=sp/600, cx=Math.round(x+15+(x+30-x-15)*f), cy=Math.round(y+21+(y+26-(sent-1)*2-y-21)*f-Math.sin(f*Math.PI)*5); card(cx,cy,P.cream); }
txt3(x+33,y+10,''+(again ? 1 : sent),again ? P.red : P.ink);
if((!back && sp<900) || (again && ph<12400)) bub(x+4,y+10,'?',P.ink);
if(again){ const f=Math.min(1,(ph-11000)/700); card(Math.round(x+15+15*f),Math.round(y+21-Math.sin(f*Math.PI)*5+(y+14-y-21)*f),P.w4); }
// the clock: fast while the room is silent
const cxk=x+68.5, cyk=y+13; ellF(g,cxk,cyk,3.6,3.6,P.w1); ellF(g,cxk,cyk,2.8,2.8,P.cream);
const an=back ? 2.2 : ph/350; line(g,Math.round(cxk),cyk,Math.round(cxk+Math.cos(an)*2.4),Math.round(cyk+Math.sin(an)*2.4),P.ink); Pp(g,Math.round(cxk),cyk-1,P.ink);
// the sofa: empty, then the four come back
F(g,x+47,y+25,32,3,P.teal); F(g,x+46,y+24,2,8,P.tealD); F(g,x+77,y+24,2,8,P.tealD); F(g,x+48,y+28,29,3,P.tealD);
if(back){ [[50,0],[57,3],[64,1],[71,2]].forEach(([sx,r])=>{ F(g,x+sx,y+23,5,5,RC[r]); F(g,x+sx,y+23,5,1,P.cream); ellF(g,x+sx+2.5,y+20.5,2,2,P.skinM); });
  if(ph>=8800 && ph<10300) bub(x+46,y+10,'YES',RC[0]);
  if(ph>=9900 && ph<11000) bub(x+56,y+10,'...',RC[3]); }
