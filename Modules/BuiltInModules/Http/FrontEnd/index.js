const btn = document.querySelector("#btn");
const post_btn = document.querySelector("#post_btn");
const lists = document.querySelector("#lists");
btn.addEventListener("click",()=>{
    const URL = "http://localhost:3500/json";
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=>{
        for(let item of data)
        {
            const li = document.createElement("li");
            li.innerText = item.login;
            lists.appendChild(li);
        }
    })
    .catch(error=>{

    })
})


post_btn.addEventListener("click",()=>{
    const URL = "http://localhost:3500/json";
    fetch(URL,{
        method:"POST",
        body:JSON.stringify({
            "name":"samiul khan"
        }),
        headers:{
            "content-type":"application/json",
        
        }
        

        
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
})