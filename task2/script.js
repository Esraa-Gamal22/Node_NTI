let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  users = data;
  console.log(data)
  showData()
})
.catch((error) => {
  console.error('Error:', error);
});




 const creatEl = (type , textData , loction)=>{
          const ele = document.createElement(type);   
                ele.innerHTML = textData ;
                loction.appendChild(ele)
                return ele
 }

const  stateCheck=(val)=> val  ? "active" : "not active"



const showData =()=>{

users.forEach(
   (el) => {
    
      
const table =   document.getElementsByTagName('tbody')[0]
const row = creatEl('tr' , null , table  )

         creatEl('th' , el.id , row)
         creatEl('td' , el.name , row)
         creatEl('td' , el.username , row)

         
 const state = creatEl('td' , stateCheck(el.active)  , row)

  const tdEl = creatEl('td' , null , row)
  const btnEdit = creatEl('button' , 'edit' , tdEl)
  const btnDelet = creatEl('button' , 'delet' , tdEl)

  btnEdit.setAttribute("class","btn btn-succsess m-2 btn-sm");
  btnDelet.setAttribute("class","btn btn-danger m-2 btn-sm");

  btnEdit.addEventListener("click", ()=>{
      el.active = !el.active
      state.innerHTML= stateCheck(el.active)
 });

 btnDelet.addEventListener("click", ()=>{
      row.remove()
});

     
})

}