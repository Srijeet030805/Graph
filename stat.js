var plus, minus,data,x;
console.log("hello");
document.querySelector(".p").addEventListener("click",function()
{
	data=document.querySelector("#Data");
	if(data.querySelectorAll("div").length<6)
		data.innerHTML+='<div> Name: <input placeholder="Name"> Value: <input type="Number" placeholder="eg. 20"> Color: <input type="Color"><br></div>';
});
document.querySelector(".m").addEventListener("click",function()
{
	data=document.querySelector("#Data");
	if(data.querySelectorAll("div").length>2)
	{
		x=data.innerHTML;
		data.innerHTML=x.slice(0,x.lastIndexOf("<div>"));
	}
});
document.querySelector(".p2").addEventListener("click",function()
{
	data=document.querySelector("#Data2");
	if(data.querySelectorAll("div").length<6)
		data.innerHTML+='<div> Name: <input placeholder="Name"> Value: <input type="Number" placeholder="eg. 20"> Color: <input type="Color"><br></div>';
});
document.querySelector(".m2").addEventListener("click",function()
{
	data=document.querySelector("#Data2");
	if(data.querySelectorAll("div").length>2)
	{
		x=data.innerHTML;
		data.innerHTML=x.slice(0,x.lastIndexOf("<div>"));
	}
});
document.querySelector(".p3").addEventListener("click",function()
{
	data=document.querySelector("#Data3");
	if(data.querySelectorAll("div").length<6)
		data.innerHTML+='<div> Name: <input placeholder="Name"> Value: <input type="Number" placeholder="eg. 20"> Color: <input type="Color"><br></div>';
});
document.querySelector(".m3").addEventListener("click",function()
{
	data=document.querySelector("#Data3");
	if(data.querySelectorAll("div").length>2)
	{
		x=data.innerHTML;
		data.innerHTML=x.slice(0,x.lastIndexOf("<div>"));
	}
});

document.querySelector("select").addEventListener("change",function (){
	switch(document.querySelector("select").value)
	{
		case 'b':{
					document.querySelector(".b").style="";
					document.querySelector(".l").style.display="none";
					document.querySelector(".c").style.display="none";
		}break;
		case 'l':{
					document.querySelector(".l").style="";
					document.querySelector(".b").style.display="none";
					document.querySelector(".c").style.display="none";
		}break;
		case 'p':{
					document.querySelector(".c").style="";
					document.querySelector(".l").style.display="none";
					document.querySelector(".b").style.display="none";
		}
	}
});

var c=document.querySelector("canvas");
var cx= c.getContext("2d");

var tle=document.querySelector(".tle");
tle=tle.querySelectorAll("input");

var sub=document.querySelectorAll(".s");
var data,tot,mid,wid,r,ang,h;
mid=c.height/2*0.9;
wid=c.width/2*0.9;
r=Math.min(mid,wid);
cx.font="10px agency fb";
sub[2].addEventListener("click",function() 
{
	cx.fillText(tle[0].value,wid/3,10);
	h=mid*0.2;
	tot=0;
	ang=0;
	data=document.querySelector("#Data3");
	x=data.querySelectorAll("input");
	data=[];
	for (i=0;i<x.length;i+=3) 
	{
		data.push([x[i].value,x[i+1].value,x[i+2].value]);
		tot+=Number(x[i+1].value);
	}
	for (i=0;i<data.length;i++)
	{
		cx.beginPath();
		cx.arc(wid,mid*1.15,r,ang+data[i][1]*2*Math.PI/tot,ang,true);
		cx.lineTo(wid,mid*1.15);
		cx.fillStyle=data[i][2];
		cx.fill();
		ang+=data[i][1]*2*Math.PI/tot;
		h+=mid*0.2;
		cx.fillText(data[i][0],wid*1.5+30,h);
	}
})