
const http=require("http")
// ="http://jsonplaceholder.typicode.com/users"

const getData=(url)=>{

const req=http.req(url, (res)=>{
    let allData=""
    res.on("data",(mydata)=>{
    allData+=mydata.toString();
   })
        res.on("end",()=>{
        console.log(JSON.parse(allData))
        })
})


req.on("error", (err)=>console.log(`error ${err}`))
req.end()

}


module.exports = {
    getData
}
