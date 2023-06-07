import { showAlert } from "./alert"

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    update(name,email,password)
})

const update = async (name, email,password) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `https://cordychain.onrender.com/api/v1/users/email/${email}`,
            data: {
                name,
                email,
                password,
            
                
            },
        })
        console.log(res)
        if (res.data.status === 'success') {
            showAlert('success', 'updated successfully')
            window.setTimeout(() => {
                location.assign('/admin-setting')
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

