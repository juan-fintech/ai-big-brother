const {x,y,w,h}=PIC;   // "Still waiting for rain": Resident 2 waits by the stone bridge under an open umbrella; the counter goes to 101; a cloud passes; the rain gauge stays at 0
F(g,x,y,w,17,P.skyL); F(g,x,y+13,w,4,P.sky);
ringGlow(g,x+73,y+11,6,6,4,'242,204,122',0.14); ellF(g,x+73,y+11,3,3,P.w4);
const cx=x-14+((t/70)%(w+28));   // a cloud drifts past, and no rain falls
ellF(g,cx,y+11,6,2.5,P.cream); ellF(g,cx+5,y+10,4,2.5,P.cream); ellF(g,cx-4,y+12,4,2,P.cream); F(g,cx-8,y+13,18,1,P.grayL);
ellF(g,x+14,y+17,16,4,P.greenL); ellF(g,x+46,y+18,20,4,P.green); F(g,x,y+18,w,6,P.green);
F(g,x,y+24,w,6,P.blue); F(g,x,y+24,w,1,P.navy);
for(let i=0;i<5;i++){ const xx=x+((Math.floor(t/160)+i*17)%w); Pp(g,xx,y+26+(i%2)*2,P.skyL); }
F(g,x+40,y+17,32,5,P.gray); F(g,x+40,y+16,32,1,P.grayL);   // the stone bridge
for(let i=0;i<8;i++) F(g,x+41+i*4,y+18+(i%2),3,1,P.grayL);
F(g,x+40,y+22,6,6,P.gray); F(g,x+66,y+22,6,6,P.gray); ellF(g,x+56,y+27,10,5,P.gray); ellF(g,x+56,y+28,7,4,P.navy); F(g,x+46,y+28,20,2,P.blue);
F(g,x+63,y+9,3,7,P.grayL); F(g,x+64,y+10,1,5,P.cream); F(g,x+62,y+15,5,1,P.ink);   // the rain gauge: still empty
txt3(x+68,y+10,'0',P.navy);
F(g,x,y+30,w,8,P.greenL); for(let i=0;i<w;i+=5) Pp(g,x+i+2,y+31,P.green);
F(g,x+8,y+33,34,3,P.w3); F(g,x+30,y+30,12,3,P.w3); for(let i=0;i<5;i++) Pp(g,x+12+i*6,y+34,P.w2);   // the dry path to the bridge
const STEP=1500, k=Math.floor(t/STEP), ph=(t%STEP)/STEP, n=1+k%101;
F(g,x+8,y+29,1,7,P.w1); F(g,x,y+20,18,9,P.w1); F(g,x+1,y+21,16,7,P.cream);   // the count of still waiting posts
const s=''+n; txt3(x+1+Math.floor((17-s.length*4)/2),y+22,s,ph<0.25 ? P.red : P.ink);
const bx=x+21;
F(g,bx,y+31,5,5,RC[1]); F(g,bx,y+32,1,4,P.w3); F(g,bx,y+31,5,1,P.cream); ellF(g,bx+2.5,y+28.5,2,2,P.skinM);
line(g,bx+3,y+22,bx+3,y+30,P.ink);   // the open umbrella under a clear sky
F(g,bx-3,y+22,13,1,P.rust); F(g,bx-2,y+21,11,1,P.rust); F(g,bx-1,y+20,9,1,P.peach); F(g,bx+1,y+19,5,1,P.peach); Pp(g,bx+3,y+18,P.ink);
for(let i=0;i<4;i++) Pp(g,bx-3+i*4,y+23,P.rust);
if(ph>0.1 && ph<0.8) bub(x+23,y+9,'...',RC[1]);
