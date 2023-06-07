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
          <td><button class="btn btn-danger">Remove</button></td>
        </tr>
        
     
        
        `

        
            i++
    })
    document.querySelector(".table-b").innerHTML=divdata
    

})

