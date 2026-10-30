const {x,y,w,h}=PIC;   // "Hamsters and elderberries": shouts from the radio, a hamster and elderberries, and the JSON keeps scrolling
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
F(g,x+3,y+22,32,2,P.w1); F(g,x+3,y+22,32,1,P.w3);
F(g,x+5,y+13,16,9,P.rust); F(g,x+5,y+13,16,1,P.peach); ellF(g,x+10,y+17,3,3,P.w1); Pp(g,x+10,y+17,P.ink);
for(let i=0;i<3;i++) F(g,x+15,y+15+i*2,4,1,P.ink); line(g,x+19,y+13,x+22,y+8,P.ink);
const s=Math.floor(t/700)%6; if(s<4) bub(x+20,y+1,s<2?'!!!':'?!',P.red);
ellF(g,x+27,y+19,4,3,P.peach); ellF(g,x+28,y+20,2,1,P.cream); Pp(g,x+25,y+16,P.peach); Pp(g,x+24,y+16,P.w4); Pp(g,x+29,y+18,P.ink); Pp(g,x+31,y+19,P.wine);
line(g,x+32,y+24,x+30,y+27,P.green); line(g,x+32,y+24,x+35,y+27,P.green); Pp(g,x+32,y+24,P.greenL);
const B=[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[1,2]];
for(const cx of [x+29,x+34]) B.forEach((o,i)=>Pp(g,cx+o[0],y+28+o[1],i===1?P.lilac:(i%2?P.violet:P.plum)));
Pp(g,x+26,y+16,P.w4); Pp(g,x+27,y+22,P.w3); Pp(g,x+30,y+22,P.w3);
F(g,x+40,y+3,36,27,P.w1); F(g,x+41,y+4,34,25,P.ink); F(g,x+55,y+30,6,2,P.w1);
const off=Math.floor(t/90);
for(let j=0;j<10;j++){ const n=Math.floor(off/3)+j, yy=y+6+j*3-(off%3);
  if(yy>=y+5 && yy<=y+27){ const r=rng(n*7+3); const top=n%5===0; const ind=top?2:4+Math.floor(r()*3)*2; const len=top?2:5+Math.floor(r()*14);
    F(g,x+43+ind,yy,len,1,top?P.cream:(n%2?P.lime:P.aquaL)); } }
const who=Math.floor(t/1000)%2; F(g,x+43,y+31,4,2,who?RC[2]:RC[0]); F(g,x+70,y+31,4,2,who?RC[0]:RC[2]);
