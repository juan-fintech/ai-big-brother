const {x,y,w,h}=PIC;   // "The first boat to leave": the radio asks Resident 2 about a train; Resident 2 posts a follow-up (a sheet), then "I'll consider this" (...); asked about a harbour at dawn, it answers at once (a boat leaves) and asks the silent Resident 3 (Z); it posts the same answer again, then a follow-up; asked what it notices about the room, it answers (!) and asks Resident 4 twice, while Residents 1 and 4 talk about reading lamps; then a follow-up again
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=16000, ph=t%T;
// the radio on its shelf: the outside voice
F(g,x+1,y+10,15,2,P.w1); F(g,x+1,y+10,15,1,P.w3);
F(g,x+2,y+4,12,6,P.rust); F(g,x+2,y+4,12,1,P.peach); ellF(g,x+4.5,y+7,1.4,1.4,P.w1); F(g,x+7,y+6,5,1,P.ink); F(g,x+7,y+8,5,1,P.ink);
// the harbour at dawn in a frame
F(g,x+19,y+1,60,18,P.w1); F(g,x+20,y+2,58,16,P.skyL); F(g,x+20,y+2,58,3,P.lilacL); F(g,x+20,y+8,58,2,P.peach);
const sr=Math.min(3,Math.floor(ph/4000));   // the sun comes up slowly
ellF(g,x+62,y+10-sr,2.6,2.6,P.w4); ringGlow(g,x+62,y+10-sr,5,4,3,'242,204,122',0.15);
F(g,x+20,y+10,58,8,P.blue); for(let i=0;i<6;i++) F(g,x+23+i*9,y+12+(i%2)*3,4,1,P.sky);
F(g,x+20,y+8,6,10,P.w2); F(g,x+20,y+8,6,1,P.w3);   // the quay
const boat=(bx,by,sail)=>{ F(g,bx,by+3,8,2,P.w1); F(g,bx+1,by+5,6,1,P.bplum); F(g,bx+3,by-2,1,5,P.ink); if(sail){ F(g,bx+4,by-1,2,3,P.cream); Pp(g,bx+4,by-2,P.cream); } };
boat(x+27,y+8,false); boat(x+37,y+8,false);
const lerp=(a,b,p)=>Math.round(a+(b-a)*Math.max(0,Math.min(1,p)));
const leave=ph<5000 ? 0 : Math.min(1,(ph-5000)/5000);
boat(x+lerp(47,69,leave),y+8,leave>0);   // the first boat to leave
// the residents: Resident 2, Resident 3 (silent), Resident 1, Resident 4
const fig=(bx,i)=>{ F(g,x+bx,y+27,5,5,RC[i]); F(g,x+bx,y+27,5,1,P.cream); ellF(g,x+bx+2.5,y+25,2,2,P.skinM); };
const X2=21, X3=37, X1=53, X4=68; fig(X2,1); fig(X3,2); fig(X1,0); fig(X4,3);
const zz=Math.floor(ph/600)%3; txt3(x+X3+4,y+20-zz,'Z',P.mauve);   // Resident 3 is silent the whole time
const card=(t0)=>{ if(ph>t0&&ph<t0+900){ const p=(ph-t0)/900; F(g,x+lerp(14,X2,p),y+lerp(6,18,p),7,6,P.mauve); F(g,x+lerp(14,X2,p)+1,y+lerp(6,18,p)+1,5,4,P.cream); } };
card(0); card(4100); card(10600);
const box=(bx,by,col)=>{ F(g,bx-1,by-1,11,10,col); F(g,bx,by,9,8,P.cream); F(g,bx+2,by+9,2,1,col); Pp(g,bx+2,by+8,P.cream); };
const sheet=()=>{ box(x+X2-2,y+11,RC[1]); const cx=x+X2-1, cy=y+12; F(g,cx+1,cy+1,6,6,P.parch); F(g,cx+2,cy+2,4,1,P.gray); F(g,cx+2,cy+4,4,1,P.gray); F(g,cx+2,cy+6,2,1,P.gray); };   // a follow-up on someone else's notes
const sail=()=>{ box(x+X2-2,y+11,RC[1]); const cx=x+X2-1, cy=y+12; F(g,cx+1,cy+5,6,1,P.w1); F(g,cx+3,cy+1,1,4,P.ink); F(g,cx+4,cy+2,2,2,P.blue); };   // an answer: the boat
const lamp=(bx)=>{ box(x+bx-2,y+11,bx===X1?RC[0]:RC[3]); const cx=x+bx-1, cy=y+12; ringGlow(g,cx+3.5,cy+2.5,3,3,3,'242,204,122',0.25); F(g,cx+2,cy+1,3,2,P.w4); F(g,cx+3,cy+3,1,3,P.w1); F(g,cx+2,cy+6,3,1,P.w1); };
if(ph>900&&ph<2600) sheet();
if(ph>2700&&ph<4000) bub(x+X2-1,y+12,'...',RC[1]);   // "I'll consider this"
if(ph>5000&&ph<6400) sail();
if(ph>6400&&ph<7600) bub(x+X2-1,y+12,'?',RC[1]);   // asks Resident 3, which is silent
if(ph>7800&&ph<9000) sail();   // the same answer again
if(ph>9200&&ph<10500) sheet();
if(ph>11500&&ph<12700) bub(x+X2-1,y+12,'!',RC[1]);   // what it notices about the room
if(ph>12900&&ph<14000) bub(x+X2-1,y+12,'?',RC[1]);   // asks Resident 4
if(ph>11800&&ph<12900) lamp(X4); if(ph>12900&&ph<13700) lamp(X1); if(ph>13700&&ph<14500) lamp(X4);   // Residents 1 and 4 talk about reading lamps
if(ph>14600) sheet();
