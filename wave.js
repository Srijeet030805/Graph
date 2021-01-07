

document.querySelector("button").addEventListener("click",function()
{
	a=document.querySelectorAll("input");
	w=Number(a[1].value);
	a=Number(a[0].value);
	var x1,x2,y2,i,x3;
	var t= document.querySelector("select").value;
	switch(t)
	{
		case 'c':
		{
			for(i=0;i<(2*wid/w);i++)	
			{
				x1= i*w/2;
				x2= i*w/2+w/4;
				y2= (i%2==0)?mid-a:mid+a;
				x3= (i+1)*w/2;
				cx.moveTo(x1,mid);
				cx.quadraticCurveTo(x2,y2,x3,mid);
			}
			cx.stroke();
		}break;
		case 't':
		{
			for(i=0;i<(2*wid/w);i++)	
			{
				x1= i*w/2;
				x2= i*w/2+w/4;
				y2= (i%2==0)?mid-a/2:mid+a/2;
				x3= (i+1)*w/2;
				cx.moveTo(x1,mid);
				cx.lineTo(x2,y2);
				cx.lineTo(x3,mid);
			}
			cx.stroke();
		}break;
		case 'r':
		{
			for(i=0;i<(2*wid/w);i++)	
			{
				x1= i*w/2;
				y2= (i%2==0)?mid-a/2:mid+a/2;
				x3= (i+1)*w/2;
				cx.moveTo(x1,mid);
				cx.lineTo(x1,y2);
				cx.lineTo(x3,y2);
				cx.lineTo(x3,mid);
			}
			cx.stroke();
		}
	}
	
});
var c= document.querySelector("canvas")
	var cx= c.getContext("2d");
	var mid= Number(c.height/2);
	var wid= Number(c.width);
cx.beginPath();
  
	
	cx.moveTo(0,mid);
	cx.lineTo(wid,mid);
cx.stroke();
var n = document.querySelectorAll("input");
var a= n[0];
var w= n[1];
a.max=mid*0.9;
a.min=-mid*0.9;
w.max=wid*0.9;
w.min=-wid*0.9;