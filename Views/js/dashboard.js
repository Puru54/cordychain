fetch('https://cordychain.onrender.com/api/v1/users').then((jsonData)=>{
    //console.log(jsonData)//data in json formate
    return jsonData.json()//conerted to object
}).then((objectData)=>{
    console.log("data",objectData.data[0])
    console.log(objectData.data.length)
    let i = 1;
    var divdata=""
    var details=""
    objectData.data.map((value)=>{
        console.log (value.name)
        divdata+=`
       
      
        <tr>
          <td>`+value.name+`</td>
          <td>`+value.email+`</td>
          <td><button class="btn btn-primary">Action</button></td>
        </tr>
        
     
        
        `

        
            i++
    })
    document.querySelector(".table-b").innerHTML=divdata
    

})


{/* <div class="column">
        <div class="card">
          <img src="./img/`+value.logo+`" alt=" club logo">
          <h5>`+value.clubName+`</h5>
          <p>`+value.clubDescription+`</p>
          <a href="/addMember"><button class="btn btn-primary">Apply</button></a> </br>
          <a href="/crform"><button class="btn btn-primary">Apply For CR</button></a>
          </div>
        </div> */}