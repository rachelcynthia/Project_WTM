function cart()
{
    name=document.getElementById("desc1").value;
    price=document.getElementById("desc2").value;
    var table=document.getElementById("cart");
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    cell1.innerHTML=name;
    cell2.innerHTML=price;
}

