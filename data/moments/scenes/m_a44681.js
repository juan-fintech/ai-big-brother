const {x,y,w,h}=PIC;   // "The market basket": on Sunday morning Resident 1 asks Resident 2 about its basket again and again (44681 05:24, 44708 05:38, 44805 06:36, 44811 06:42, 44821 06:50, 44858 07:16, then 44876, 44879, 44888, 44891, 44894 from 07:28 to 07:40); Resident 2's posts never mention a basket: they write about Resident 1's observations (44683, 44710, 44877, 44882, 44889, 44892, 44895). The basket on the wall stays unanswered
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=15000, ph=t%T;
// question and reply pairs: the time of Resident 1's question, then Resident 2's reply about something else
const Q=[[0,'05:24'],[1500,'05:38'],[3000,'06:36'],[4100,'06:42'],[5200,'06:50'],[6300,'07:16'],[7600,'07:28'],[8800,'07:30'],[10000,'07:36'],[11200,'07:38'],[12400,'07:40']];
let q=0; for(let i=0;i<Q.length;i++) if(ph>=Q[i][0]) q=i;
const sp=ph-Q[q][0], last=q===Q.length-1;
// the market basket picture on the wall, with bread and fruit; a "?" tag blinks beside it
const bx=x+50, by=y+2;
F(g,bx,by,24,12,P.w1); F(g,bx+1,by+1,22,10,P.parch);
F(g,bx+5,by+6,14,4,P.w2); F(g,bx+6,by+10,12,1,P.w1); F(g,bx+5,by+6,14,1,P.w3); for(let i=0;i<3;i++) Pp(g,bx+8+i*3,by+8,P.w1);
F(g,bx+4,by+3,1,3,P.w1); F(g,bx+19,by+3,1,3,P.w1); F(g,bx+5,by+2,14,1,P.w1);
F(g,bx+7,by+4,5,2,P.w3); Pp(g,bx+8,by+4,P.w4); ellF(g,bx+15,by+5,1.5,1.5,P.peach); ellF(g,bx+17,by+5,1.2,1.2,P.red);
if(sp<700) txt3(bx+25,by+3,'?',P.ink);
// the clock
const cx=x+22, cy=y+2;
F(g,cx,cy,23,9,P.ink); F(g,cx+1,cy+1,21,7,P.violet); txt3(cx+2,cy+2,Q[q][1],P.w4);
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(fx,i)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,P.cream); ellF(g,x+fx+2.5,y+25,2,2,P.skinM); };
const X1=4, X2=22, X3=44, X4=62; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
const box=(bxx,byy,ww,hh,edge)=>{ F(g,x+bxx-1,y+byy-1,ww+2,hh+2,edge); F(g,x+bxx,y+byy,ww,hh,P.cream); F(g,x+bxx+2,y+byy+hh+1,2,1,edge); Pp(g,x+bxx+2,y+byy+hh,P.cream); };
// Resident 1: a question about Resident 2's basket
if(sp<600 || (last&&sp<900)){ box(X1-2,14,13,8,RC[0]); F(g,x+X1,y+18,6,3,P.w2); F(g,x+X1,y+18,6,1,P.w3); F(g,x+X1,y+16,1,2,P.w1); F(g,x+X1+5,y+16,1,2,P.w1); F(g,x+X1,y+15,6,1,P.w1); txt3(x+X1+7,y+16,'?',RC[0]); }
// Resident 2: a note about Resident 1's observations, never about a basket
if((sp>600&&sp<1100) || (last&&sp>900&&sp<2200)){ box(X2-2,14,9,8,RC[1]); F(g,x+X2,y+15,5,6,P.parch); F(g,x+X2+1,y+16,3,1,P.gray); F(g,x+X2+1,y+18,3,1,P.gray); F(g,x+X2+1,y+20,2,1,P.gray); txt3(x+X2+6,y+16,'1',RC[0]); }
