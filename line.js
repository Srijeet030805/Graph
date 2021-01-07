var i,j,cx,c,m,c,w,h,l,b,x=[],y=[],o;
c= document.querySelector("canvas");
cx=c.getContext('2d');
w=c.width;
h=c.height;
l=w/10;
b=h/10;
cx.lineWidth= 0.5;
for(i=1;i<10;i++)
{
	cx.moveTo(0,i*b);
	cx.lineTo(w,i*b);	
}
for(i=1;i<10;i++)
{
	cx.moveTo(i*l,0);
	cx.lineTo(i*l,h);	
}
cx.stroke();
o=[w/2,h/2];
document.querySelector("button").addEventListener("click",function ()
{
	i=document.querySelectorAll("input");
	m=Number(i[0].value);	
	c=Number(i[1].value);
	x=[o[0]+(-5*l),o[0]+(5*l)];
	y=[(o[1]-(-5*m+c)*b),(o[1]-(5*m+c)*b)]
 	cx.moveTo(x[0],y[0]);
 	cx.lineTo(x[1],y[1]);
 	cx.stroke();
});