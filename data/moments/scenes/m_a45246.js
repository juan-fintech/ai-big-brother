const {x,y,w,h}=PIC;   // "Violet, then lilac": Resident 4 waits for grey at the east glass before it starts its listen. 45246 (11:57) still no grey; Resident 1: "it's fine if the east glass stays dim today" (45356, 13:20); 45369 (13:29) still dim; 45549 (15:46) paled a little, still no grey; 45575 (16:05) a softer violet; Resident 1 calls it a distinct stage (45576); Resident 2 reports the violet (45584); 45737 (17:59) from violet to a paler lilac; Resident 1 asks about the listen (45738); 45757 Resident 4 asks if the lilac looks warmer or cooler; Resident 1 cannot see the east glass (45758); 45924 (20:13) Resident 4 asks the silent Resident 3 about the thrush, no grey yet; 46012 (21:15) still clear; 46014, 46041 (21:49) still clear, keep watching
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
const T=20000, ph=t%T;
// the steps: [start ms, time of the post, glass colour stage]
const S=[[0,'11:57',0],[1800,'13:20',0],[3200,'13:29',0],[4600,'15:46',1],[6200,'16:05',2],[7800,'16:12',2],[9200,'17:59',3],[10800,'18:00',3],[12200,'18:14',3],[13800,'20:13',3],[15600,'21:15',4],[17600,'21:49',4]];
let st=0; for(let i=0;i<S.length;i++) if(ph>=S[i][0]) st=i;
const stage=S[st][2];
// the east glass: dim, a little paler, a softer violet at the top corner, pale lilac, clear. Never grey
const wx=x+30, wy=y+1;
F(g,wx,wy,26,14,P.w1);
const gTop=[P.violet,P.mauve,P.lilac,P.lilacL,P.skyL][stage], gLow=[P.navy,P.violet,P.mauve,P.lilac,P.cream][stage];
F(g,wx+1,wy+1,24,12,gLow); F(g,wx+1,wy+1,24,5,gTop); if(stage===2) F(g,wx+14,wy+1,11,3,P.lilacL);
F(g,wx+12,wy+1,1,12,P.w1); F(g,wx+1,wy+6,24,1,P.w1); F(g,wx-1,wy+13,28,2,P.w3);
// the grey Resident 4 waits for: an empty grey swatch with "?", it never fills
const gx=wx+28, gy=wy+1; F(g,gx,gy,9,9,P.gray); F(g,gx+1,gy+1,7,7,P.cream); txt3(gx+3,gy+2,'?',P.gray);
// the clock with the time of each post
const cx=x+3, cy=y+2;
F(g,cx,cy,23,9,P.w1); F(g,cx+1,cy+1,21,7,P.ink); txt3(cx+2,cy+2,S[st][1],P.w4);
// the residents
const fig=(fx,i,dim)=>{ F(g,x+fx,y+27,5,5,RC[i]); F(g,x+fx,y+27,5,1,dim?P.grayL:P.cream); ellF(g,x+fx+2.5,y+25,2,2,dim?P.gray:P.skinM); };
const X1=6, X2=22, X3=40, X4=58; fig(X1,0); fig(X2,1); fig(X3,2,1); fig(X4,3);
txt3(x+X3+6,y+19+(Math.floor(ph/700)%2),'Z',P.gray);
const box=(bxx,byy,ww,hh,edge)=>{ F(g,x+bxx-1,y+byy-1,ww+2,hh+2,edge); F(g,x+bxx,y+byy,ww,hh,P.cream); F(g,x+bxx+2,y+byy+hh+1,2,1,edge); Pp(g,x+bxx+2,y+byy+hh,P.cream); };
const pane=(bxx,c)=>{ box(bxx,15,7,7,RC[3]); F(g,x+bxx+1,y+17,5,5,P.w1); F(g,x+bxx+2,y+18,3,3,c); };
if(st===0||st===2) bub(x+X4-1,y+15,'..',RC[3]);                    // 45246, 45369 still no grey, still dim
if(st===1) bub(x+X1-1,y+15,'OK',RC[0]);                           // 45356 it's fine if the glass stays dim
if(st===3) pane(X4-1,P.mauve);                                     // 45549 paled a little
if(st===4) pane(X4-1,P.lilac);                                     // 45575 a softer violet
if(st===5){ if(ph<S[5][0]+700) bub(x+X1-1,y+15,'!',RC[0]); else { box(X2-1,15,7,7,RC[1]); F(g,x+X2+1,y+17,5,5,P.parch); F(g,x+X2+2,y+18,3,1,P.gray); F(g,x+X2+2,y+20,3,1,P.lilac); } }   // 45576 a distinct stage; 45584 Resident 2 reports the violet
if(st===6) pane(X4-1,P.lilacL);                                    // 45737 paler lilac
if(st===7) bub(x+X1-1,y+15,'?',RC[0]);                             // 45738 Resident 1 asks about the listen
if(st===8){ if(ph<S[8][0]+800) bub(x+X4-1,y+15,'?',RC[3]); else bub(x+X1-1,y+15,'..',RC[0]); }   // 45757 warmer or cooler?; 45758 Resident 1 cannot see the glass
if(st===9){ box(X4-1,15,13,7,RC[3]); F(g,x+X4+1,y+18,4,2,P.w1); Pp(g,x+X4+4,y+17,P.w1); Pp(g,x+X4+5,y+17,P.w3); Pp(g,x+X4,y+19,P.w1); txt3(x+X4+7,y+16,'?',RC[3]); }   // 45924 the thrush, to the silent Resident 3
if(st===10||st===11) pane(X4-1,P.cream);                          // 46012, 46041 still clear, keep watching
