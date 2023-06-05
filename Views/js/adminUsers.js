fetch('http://localhost:4002/api/v1/bafra').then((jsonData)=>{
    //console.log(jsonData)//data in json formate
    return jsonData.json()//conerted to object
}).then((objectData)=>{
    console.log("data",objectData.data[0])
    console.log(objectData.data.length)
    let i = 1;
    var divdata=""
    var details=""
    objectData.data.map((value)=>{
        console.log (value.name1)
        divdata+=`
       
      
        <tr>
          <td>`+value.name1+`</td>
          <td>`+value.bafraId1+`</td>
          <td><button class="btn btn-primary">Remove</button></td>
        </tr>
        
     
        
        `

        
            i++
    })
    document.querySelector(".authBAFRA").innerHTML=divdata
    

})

//import { showAlert } from "./alert.js"

// export const addBafra = async (name1, bafraId1) => {
//     try {
//         const res = await axios({
//             method: 'POST',
//             url: 'http://localhost:4002/api/v1/bafra',
//             data: {
//                 name1,
//                 bafraId1,
                
                
//             },
//         })
        
//         if (res.data.status === 'success') {
//             showAlert('success', 'Bafra Authorized successfully!')
//             window.setTimeout(() => {
//                 location.assign('/admin-users')
//             }, 1500)
//         }
//     } catch (err) {
//         // let message = 
//         //     typeof err.response !== 'undefined'
//         //         ? err.response.data.message
//         //         : err.message
//         // showAlert('error', 'Error: Passwords are not the same!', message)
//     }
// }

// document.querySelector('.form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const name1 = document.getElementById('name').value
//     const bafraId1=document.getElementById('bafraId').value

  
//     addBafra(name1, bafraId1)

    
// })

