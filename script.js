fetch('https://reqres.in/api/users').then((information)=>{
    information.json().then((data)=>{
    
    handledata(data)
})
})

function handledata(operation){
    console.log(operation);
    let list=operation.data;
    console.log(list);
    let html=" ";
    list.forEach((obj)=>{
        html+=`<div class="user">
        <h1>${obj.first_name} ${obj.last_name}</h1>
        <h2><br>Email:-  <br> 
        ${obj.email}</h2>
        <img src="${obj.avatar}" />
    </div>
        `
    })
    document.getElementById("bramha").innerHTML=html
    console.log(html)
}    