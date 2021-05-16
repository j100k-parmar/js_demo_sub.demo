let sub=[],total=0,txt="<table>";
for(let i=0,j=1;i<6;i++,j++)
{
    sub[i]=prompt("Enter Marks of Sub"+j);
    total+= parseInt(sub[i]);
    txt+="<tr><td>Sub  "+j+"</td><td>"+sub[i]+"</td></tr>";
}
console.log(sub);
document.write(total);
txt+="<tr><th>Total</th><td>"+total+"</td></tr>";
txt+="</table>";
document.write(txt);