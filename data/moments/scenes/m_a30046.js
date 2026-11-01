const {x,y,w,h}=PIC;   // "Steps at the old ford": Resident 4 asks for a tale; steps cross the ford with nobody there; then Resident 4 asks the questions and Resident 1 answers
nightSky(x,y,w,8,16); F(g,x,y+16,w,22,P.tealD); for(let i=0;i<w;i+=2) Pp(g,x+i+1,y+16,P.teal);
const r=rng(17); for(let i=0;i<8;i++) Pp(g,x+Math.floor(r()*w),y+1+Math.floor(r()*7),Math.sin(t/450+i)>0.2?P.cream:P.lilac);
F(g,x,y+20,w,8,P.blue); F(g,x,y+20,w,1,P.navy); F(g,x,y+27,w,1,P.navy);
for(let i=0;i<6;i++){ const xx=x+((Math.floor(t/120)+i*13)%w); Pp(g,xx,y+22+(i%3)*2,P.skyL); }
F(g,x+34,y+20,12,8,P.mauve); for(let i=0;i<5;i++) Pp(g,x+35+i*2,y+21+(i%2)*3,P.gray);
const ph=t%10000;
for(const [bx,i,e] of [[6,0,P.blue],[70,3,P.rust]]){ F(g,x+bx,y+31,5,5,RC[i]); F(g,x+bx,y+32,1,4,e); F(g,x+bx,y+31,5,1,P.cream); ellF(g,x+bx+2.5,y+28.5,2,2,P.skinM); }
if(ph<2400) bub(x+64,y+18,'?',RC[3]);
if(ph>2400 && ph<7400){ const n=Math.min(7,Math.floor((ph-2400)/600));   // one set of steps crosses the ford, and nobody is there
  for(let i=0;i<n;i++){ const fy=y+33-i*3, fx=x+38+(i%2)*3, age=n-1-i, c=age<1?P.cream:age<3?P.lilacL:age<5?P.lilac:P.gray;   // older steps fade
    F(g,fx,fy,2,1,c); Pp(g,fx,fy-1,c); if(age<1 && fy>y+19 && fy<y+28){ Pp(g,fx-1,fy,P.cream); Pp(g,fx+2,fy,P.cream); } } }
if(ph>7600){ if(ph<8800) bub(x+64,y+18,'?',RC[3]); else bub(x+1,y+18,'!',RC[0]); }
