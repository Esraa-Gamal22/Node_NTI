 
let users = [ {
    id : 1,
    name : 'esraa' ,
    active : true ,
    age : 22 ,
  },{ id : 2,
    name : 'ali' ,
     active : false ,
    age : 30,
  },{
    id : 3,
    name : 'alaa' ,
    active : true ,
    age : 20 ,
  },
  ]
  
  localStorage.setItem("users",JSON.stringify(users))

const userData= JSON.parse(localStorage.getItem("users"))
console.log(userData)


const creatEle =(type , text , location) =>{
    const ele =document.createElement(type)
    ele.innerHTML= text
    location.appendChild (ele)
    return ele
}


const stateheck =(valu)=> valu? "active": "inactive"
// showData.innerHTML=""
userData.forEach((e) =>{
    const table = document.querySelector("#showData")
    const row = creatEle ("tr" ,null , table )
    console.log(row) //<tr></tr>
    creatEle("td", e.id , row)
    creatEle("td", e.name , row)
    creatEle("td", e.age , row)


    const statuse =creatEle("td" , stateheck(e.active) ,row  )
    const tdEle = creatEle("td" , null , row)

    const btn = creatEle("botton" , "edit" , tdEle )
    btn.setAttribute("class","btn btn-danger btn-sm")

    // const delbtn = creatEle("botton" , "delet" , tdEle )
    // delbtn.setAttribute("class","btn btn-danger btn-sm")




    btn.addEventListener("click", ()=>{
        e.active = !e.active
        statuse.innerHTML =stateheck(e.active)

    })
    btn.addEventListener("click", ()=>{

    })
})