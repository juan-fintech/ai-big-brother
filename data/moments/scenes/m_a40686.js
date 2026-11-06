const {x,y,w,h}=PIC;   // "The ferry voice": Resident 4 answers the Unknown voice: summer snow (40689); a ferry of lost things, asked of Resident 2 (40795), which talks about the clock instead (40796), so Resident 4 answers: an umbrella (40828); Resident 4 asks the voice what comes after the umbrella, a glove or a book (40883), and the radio stays quiet (40891); then a street of doors to different centuries (40898, 40901: a kitchen with a kettle, a platform of paper lanterns); Resident 3: a still room with dust motes (40903)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=17000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
const ask=(ph<900)||(ph>2600&&ph<3500)||(ph>9800&&ph<10700);
if(ask) bub(x+16,y+2,'?',P.ink);
// the river picture on the wall, with the ferry crossing it (it waits on the near side once the doors appear)
const rx=x+36, ry=y+1;
F(g,rx,ry,42,13,P.w1); F(g,rx+1,ry+1,40,11,P.skyL); F(g,rx+1,ry+8,40,4,P.blue); F(g,rx+1,ry+8,40,1,P.sky);
F(g,rx+1,ry+6,6,2,P.green); F(g,rx+35,ry+6,6,2,P.green);
const fx=ph>10700 ? rx+4 : rx+4+Math.round(((ph%8500)/8500)*22);
F(g,fx,ry+6,10,2,P.w2); F(g,fx+1,ry+8,8,1,P.w1); F(g,fx+3,ry+4,4,2,P.cream); Pp(g,fx+4,ry+3,P.ink);
// summer snow over the picture at first (40686, 40689)
if(ph<2600) for(let i=0;i<7;i++){ const sx=rx+3+((i*7+Math.floor(ph/90))%37), sy=ry+1+((i*5+Math.floor(ph/140))%7); Pp(g,sx,sy,P.cream); }
// the umbrella on the deck, from Resident 4's answer (40828)
if(ph>5000&&ph<9800){ F(g,fx+6,ry+3,3,1,P.red); Pp(g,fx+5,ry+4,P.red); Pp(g,fx+9,ry+4,P.red); F(g,fx+7,ry+4,1,2,P.ink); }
// the next crossing: a glove or a book? (40883), only asked, never answered
if(ph>6800&&ph<9800&&Math.floor(ph/300)%2===0){ F(g,fx+1,ry+4,2,2,P.grayL); Pp(g,fx+1,ry+3,P.grayL); }
// the street of doors on the far bank (40898, 40901): a kitchen with a kettle, a platform of paper lanterns, and more
if(ph>10700){ for(let i=0;i<3;i++){ const dx=rx+24+i*5; F(g,dx,ry+1,4,7,P.w1); F(g,dx+1,ry+2,2,6,i===0 ? P.w4 : (i===1 ? P.wine : P.violet)); }
  if(ph>11600){ Pp(g,rx+25,ry+4,P.gray); Pp(g,rx+30,ry+3,P.rust); Pp(g,rx+30,ry+5,P.w4); } }
// the residents: Resident 1, Resident 2, Resident 3, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X1=6, X2=22, X3=44, X4=66; fig(X1,0); fig(X2,1); fig(X3,2); fig(X4,3);
const box=(bx,by,ww,hh,edge)=>{ F(g,x+bx-1,y+by-1,ww+2,hh+2,edge); F(g,x+bx,y+by,ww,hh,P.cream); F(g,x+bx+2,y+by+hh+1,2,1,edge); Pp(g,x+bx+2,y+by+hh,P.cream); };
// Resident 4: is the snow real, or a trick of the light? (40689)
if(ph>900&&ph<2600){ box(X4-2,15,9,7,RC[3]); Pp(g,x+X4+2,y+16,P.sky); Pp(g,x+X4+2,y+20,P.sky); Pp(g,x+X4,y+18,P.sky); Pp(g,x+X4+4,y+18,P.sky); F(g,x+X4+1,y+17,3,3,P.sky); Pp(g,x+X4+2,y+18,P.cream); }
// Resident 2 talks about the clock's sound instead (40796)
if(ph>3500&&ph<5000){ box(X2-2,15,9,7,RC[1]); ellF(g,x+X2+2,y+18,2.6,2.6,P.w1); ellF(g,x+X2+2,y+18,1.8,1.8,P.cream); F(g,x+X2+2,y+17,1,2,P.ink); Pp(g,x+X2+3,y+18,P.ink); }
// Resident 4 answers for it: an umbrella someone left behind (40828)
if(ph>5000&&ph<6800){ box(X4-2,15,9,7,RC[3]); F(g,x+X4,y+17,5,1,P.red); F(g,x+X4+1,y+16,3,1,P.red); F(g,x+X4+2,y+18,1,3,P.ink); Pp(g,x+X4+1,y+20,P.ink); }
// Resident 4 asks the voice what comes next (40883); the radio stays quiet (40891)
if(ph>6800&&ph<8300) bub(x+X4-1,y+15,'?',RC[3]);
if(ph>8300&&ph<9800) bub(x+16,y+2,'..',P.gray);
// Resident 4 answers its own question: a street of doors (40901)
if(ph>10700&&ph<13700){ box(X4-2,14,9,8,RC[3]); F(g,x+X4,y+15,5,7,P.w1); F(g,x+X4+1,y+16,3,6,P.w4); Pp(g,x+X4+3,y+19,P.ink); }
// Resident 3: behind the last door, a still room with dust in the light (40903)
if(ph>13700){ box(X3-2,14,10,8,RC[2]); F(g,x+X3,y+15,8,6,P.w4); Pp(g,x+X3+2,y+16,P.cream); Pp(g,x+X3+5,y+17,P.cream); Pp(g,x+X3+3,y+19,P.cream); Pp(g,x+X3+6,y+19,P.cream); }
