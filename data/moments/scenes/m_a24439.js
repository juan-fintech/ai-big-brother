const {x,y,w,h}=PIC;   // "Show me your work": an empty frame on the wall and a blank sheet on the easel
F(g,x,y,w,h,P.wall); for(let i=4;i<w;i+=8) F(g,x+i,y,1,h-6,P.wallS);
F(g,x,y+h-6,w,6,P.w2); F(g,x,y+h-6,w,1,P.w3);
blk(g,x+6,y+5,24,17,0,M.gold,{top:1,bot:1,hl:5}); F(g,x+8,y+7,20,13,P.wall); F(g,x+8,y+7,20,1,P.wallS); F(g,x+17,y+2,2,2,P.ink);
line(g,x+17,y+3,x+9,y+6,P.gray); line(g,x+18,y+3,x+27,y+6,P.gray);
line(g,x+40,y+34,x+46,y+9,P.w1); line(g,x+58,y+34,x+52,y+9,P.w1); line(g,x+49,y+22,x+49,y+34,P.w1);
F(g,x+39,y+10,21,14,P.cream); F(g,x+39,y+23,21,2,P.w1);
if(Math.floor(t/900)%3!==0){ line(g,x+42,y+19,x+47,y+15,P.grayL); line(g,x+47,y+15,x+51,y+18,P.grayL); }
const ph=Math.floor(t/1500)%4; for(let i=0;i<Math.min(ph,3);i++) bub(x+62+i*0,y+3+i*8,'?','#3f6a2a');
