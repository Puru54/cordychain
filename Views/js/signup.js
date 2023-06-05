// import { showAlert } from "./alert.js"

// export const signup = async (name, email,eID,password) => {
//     try {
//         const res = await axios({
//             method: 'POST',
//             url: 'http://localhost:4002/api/v1/users/signup',
//             data: {
//                 name,
//                 email,
//                 eID,
//                 password
                
//             },
//         })
        
//         if (res.data.status === 'success') {
//             showAlert('success', 'Accoount created successfully!')
//             window.setTimeout(() => {
//                 location.assign('/verifyemail')
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

import { showAlert } from "./alert.js"

export const signup = async (name, email, eID, password) => {
  try {
    // Fetch data from the API endpoint
    const response = await fetch('https://cordychain.onrender.com/api/v1/bafra');
    const jsonData = await response.json();
    const bafraData = jsonData.data;
    
    // Compare eID with bafraId
    const matchingBafra = bafraData.find((value) => value.bafraId1 === eID);
    
    if (matchingBafra) {
      // eID matches a bafraId, proceed with signup
      const res = await axios({
        method: 'POST',
        url: 'https://cordychain.onrender.com/api/v1/users/signup',
        data: {
          name,
          email,
          eID,
          password
        },
      });
      
      if (res.data.status === 'success') {
        showAlert('success', 'Account created successfully!');
        window.setTimeout(() => {
          location.assign('/verifyemail');
        }, 1500);
      }
    } else {
      // eID does not match any bafraId, show an error message
      showAlert('error', 'Error: Invalid eID!');
    }
  } catch (err) {
    showAlert('error', 'An error occurred while signing up!');
  }
};



document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // const passwordConfirm = document.getElementById('passwordConfirm').value
    const eID=document.getElementById('empID').value

  
    signup(name, email, eID, password)

    
})

