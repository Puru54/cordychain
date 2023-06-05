// function resetPassword() {
//     const email = document.getElementById('email').value;
//     const newPassword = document.getElementById('new-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     axios.patch(`http://localhost:4001/api/v1/users?email=${email}`, {
// password: newPassword
// })
// .then(response => {
// if (response.data.status === 'success') {
//   showAlert('success', 'Password updated successfully!');
//   console.log('Password updated successfully');
//   // Redirect to a success page or perform any other desired action
//   window.setTimeout(() => {
//    location.assign('/login')
//    }, 1500)
// }
// })
// .catch(error => {
// showAlert('error', 'Error: Failed to update password!');
// console.log('Failed to update password:', error);
// });
// }

import { showAlert } from "./alert.js"



document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    resetPassword(email, password)
})

const resetPassword = async ( email,password) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `https://cordychain.onrender.com/api/v1/users/email/${email}`,
            data: {
                email,
                password,
            
                
            },
        })
        console.log(res)
        if (res.data.status === 'success') {
            showAlert('success', 'password updated successfully')
            window.setTimeout(() => {
                location.assign('/login')
            }, 1500)
        }
    } catch (err) {
        let message =
            typeof err.response !== 'undefined'
                ? err.response.data.message
                : err.message
        showAlert('error', message)
    }
}

