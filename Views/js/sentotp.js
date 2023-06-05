// function sendOTP() {
//     const emailInput = document.getElementById('email');
//     const otpVerify = document.getElementsByClassName('otpverify')[0];

//     // Collect the email entered by the user
//     const userEmail = emailInput.value;

//     // Make an API call to fetch the OTP from the backend
//     fetch('http://localhost:4002/api/v1/users')
//         .then(response => response.json())
//         .then(objectData => {
//             // Find user with matching email
//             const matchedUser = objectData.data.find(user => user.email === userEmail);

//             if (matchedUser) {
//                 const otp = matchedUser.otp; // Get the OTP from the user schema

//                 const emailBody = `
//                     <h1>Please </h1> <br>
//                     <h2>Your OTP is </h2>${otp}
//                 `;

//                 Email.send({
//                     SecureToken: "b6bb0eff-9b38-4e28-ac31-62cdd7b710a6",
//                     To: userEmail,
//                     From: "purugcit79@gmail.com",
//                     Subject: "This",
//                     Body: emailBody
//                 }).then(message => {
//                     if (message === "OK") {
//                         alert("OTP sent to your email " + userEmail);

//                         // Make the OTP input field visible
//                         otpVerify.style.display = "block";
//                         const otpInput = document.getElementById('otp_inp');
//                         const otpButton = document.getElementById('otp-btn');

//                         otpButton.addEventListener('click', () => {
//                             // Check if the entered OTP matches the fetched OTP
//                             if (otpInput.value == otp) {
//                                 alert("Email address verified...");
//                             } else {
//                                 alert("Invalid OTP");
//                             }
//                         });
//                     }
//                 });
//             } else {
//                 alert("User not found");
//             }
//         })
//         .catch(error => {
//             console.log("Error:", error);
//             alert("An error occurred while fetching the OTP");
//         });
// }
