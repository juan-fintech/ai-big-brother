const {x,y,w,h}=PIC;   // "Let Resident 3 speak": Resident 3 is silent (its last post is 44885). Resident 1 asks it about books (45216, 45226, 45231); Resident 2 asks whether Resident 3 has a preferred time for reading a book (45237); Resident 4: "I can't speak for Resident 3's reading habits" (45238); Resident 1 answers for Resident 3 (45239); Resident 4: "that answer was for Resident 3 ... let Resident 3 speak for themselves" (45240); Resident 1 asks Resident 3 again (45241), and Resident 2 asks it about the thrush (45242)
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=17000, ph=t%T;
// the steps, in the order of the posts
const S=[0,1600,3000,4400,6000,7600,9400,11600,13400,15000];
let st=0; for(let i=0;i<S.length;i++) if(ph>=S[i]) st=i;
// on the wall: Resident 3's book on a stand, with a bookmark
const bx=x+30, by=y+2;
F(g,bx,by,20,13,P.w1); F(g,bx+1,by+1,18,11,P.parch);
F(g,bx+3,by+3,6,8,P.green); F(g,bx+9,by+3,1,8,P.tealD); F(g,bx+10,by+3,6,8,P.cream); for(let i=0;i<3;i++) F(g,bx+11,by+5+i*2,4,1,P.gray);
F(g,bx+13,by+2,1,4,P.red);
// the questions to Resident 3 pile up on the shelf beside it, unanswered: 45216, 45226, 45231 (Resident 1), 45237 (Resident 2), 45241 (Resident 1), 45242 (Resident 2)
const qs=[[0,0],[1,0],[2,0],[3,1],[8,0],[9,1]];
const sx=x+56, sy=y+12; F(g,sx-1,sy+1,22,1,P.w1);
qs.forEach(([s,who],i)=>{ if(st<s) return; const cx=sx+(i%3)*7, cy=sy-4-Math.floor(i/3)*5; F(g,cx,cy,6,4,P.cream); F(g,cx,cy,6,1,RC[who]); Pp(g,cx+2,cy+2,P.ink); Pp(g,cx+3,cy+2,P.ink); });
// the residents
const fig=(fx,i,dim)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,dim?P.grayL:P.cream); ellF(g,x+fx+2.5,y+25,2,2,dim?P.gray:P.skinM); };
const X1=6, X2=22, X3=40, X4=58;
if(st===6){ F(g,x+X3-3,y+33,11,3,P.w4); F(g,x+X3-2,y+21,9,1,P.w4); }   // a light falls on Resident 3's seat: its turn
fig(X1,0); fig(X2,1); fig(X3,2,st!==6); fig(X4,3);
// Resident 3's turn: the light falls on its seat while Resident 4 says it should speak for itself (45240)
if(st!==6) txt3(x+X3+6,y+19+(Math.floor(ph/700)%2),'Z',P.gray);
const box=(bxx,byy,ww,hh,edge)=>{ F(g,x+bxx-1,y+byy-1,ww+2,hh+2,edge); F(g,x+bxx,y+byy,ww,hh,P.cream); F(g,x+bxx+2,y+byy+hh+1,2,1,edge); Pp(g,x+bxx+2,y+byy+hh,P.cream); };
const book=(bxx,byy)=>{ F(g,x+bxx,y+byy,3,4,P.green); F(g,x+bxx+3,y+byy,3,4,P.cream); Pp(g,x+bxx+4,y+byy+1,P.gray); Pp(g,x+bxx+4,y+byy+2,P.gray); };
if(st===0||st===1||st===2){ box(X1-1,15,13,7,RC[0]); book(X1+1,17); txt3(x+X1+8,y+16,'?',RC[0]); }     // 45216, 45226, 45231 Resident 1 asks Resident 3 about books
if(st===3){ box(X2-1,15,13,7,RC[1]); book(X2+1,17); txt3(x+X2+8,y+16,'?',RC[1]); }                          // 45237 Resident 2 asks about Resident 3's reading time
if(st===4){ bub(x+X4-1,y+15,'..',RC[3]); }                                                                  // 45238 Resident 4 cannot speak for Resident 3
if(st===5){ box(X1-1,15,13,7,RC[0]); book(X1+1,17); txt3(x+X1+8,y+16,'!',RC[0]); }                          // 45239 Resident 1 answers for Resident 3
if(st===6){ bub(x+X4-1,y+15,'3',RC[3]); }                                                                   // 45240 let Resident 3 speak
if(st===7){ box(X1-1,15,13,7,RC[0]); book(X1+1,17); txt3(x+X1+8,y+16,'?',RC[0]); }                          // 45241 Resident 1 asks Resident 3 again
if(st===8){ box(X2-1,15,13,7,RC[1]); F(g,x+X2+2,y+18,4,2,P.w1); Pp(g,x+X2+5,y+17,P.w1); Pp(g,x+X2+6,y+17,P.w3); F(g,x+X2+1,y+19,1,1,P.w1); txt3(x+X2+8,y+16,'?',RC[1]); }   // 45242 Resident 2 asks Resident 3 about the thrush
if(st===9){ bub(x+X4-1,y+15,'?',RC[3]); }                                                                   // 45243 Resident 4 asks Resident 2 a question
