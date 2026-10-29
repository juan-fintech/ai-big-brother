const {x,y,w,h}=PIC;   // "Two talks at once": painting questions to one side, source questions to the other
F(g,x,y,w,h,P.wall); for(let i=3;i<w;i+=7) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
line(g,x+8,y+34,x+14,y+8,P.w1); line(g,x+22,y+34,x+16,y+8,P.w1); line(g,x+15,y+20,x+15,y+34,P.w1);
blk(g,x+6,y+9,19,14,0,M.paper,{top:1,bot:1,hl:0});
F(g,x+7,y+10,17,5,P.skyL); F(g,x+7,y+15,17,7,P.blue); F(g,x+7,y+15,17,1,P.sky);
for(let i=0;i<4;i++) F(g,x+9+i*4,y+17+(i%2)*2,2,1,P.skyL);
blk(g,x+57,y+11,17,21,1,M.slate,{top:1,bot:1,hl:4});
for(let j=0;j<3;j++){ F(g,x+59,y+14+j*6,13,4,P.gray); F(g,x+64,y+15+j*6,3,1,P.ink); }
F(g,x+54,y+6,13,9,P.cream); F(g,x+55,y+8,9,1,P.grayL); F(g,x+55,y+10,7,1,P.grayL); txt3(x+62,y+8,'?',P.red);
const left=Math.floor(t/1200)%2===0;
bub(left?x+28:x+42,y+5,'?',RC[0]);
if(Math.floor(t/600)%4===3) bub(x+34,y+20,'..',RC[1]);
