import {showAlert} from './alert.js'
//logging out
const logout = async () => {
    try{
        const res = await axios({
            method: "POST",
            url: "https://cordychain.onrender.com/api/v1/users/logout",

        })
        if (res.data.status === 'success') {
            location.reload(true)
        }
    }catch(err){
        showAlert('error', 'Error logging out! try again.')
    }
}

var obj
if (document.cookie) {
    obj = JSON.parse(document.cookie.substring(6))
}else {
    obj = JSON.parse('{}')
}

var el = document.querySelector('nav')
if(obj._id) {
    el.innerHTML =
    '<div class="container"><a class="navbar-brand" href="./"><img decoding="async" src="images/logo.png" class="logo-fluid" ></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><!-- <span class="navbar-toggler-icon"></span> --><i class="fas fa-stream navbar-toggler-icon"></i></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav  menu-navbar-nav"><li class="nav-item"> <a class="nav-link active" aria-current="page" href="./">Home</a></li><li class="nav-item"><a class="nav-link" href="about">About</a> </li><li class="nav-item"><a class="nav-link" id="/prod-reg"  href="/prod-reg">Product</a> </li><li class="nav-item"><a class="nav-link" id="logout">logout</a> </li>'
    
    var doc = document.querySelector('#logout')

    doc.addEventListener('click', (e) => logout())

    

}else {
    el.innerHTML = 
    '<div class="container"><a class="navbar-brand" href="./"><img decoding="async" src="images/logo.png" class="logo-fluid" ></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><!-- <span class="navbar-toggler-icon"></span> --><i class="fas fa-stream navbar-toggler-icon"></i></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav  menu-navbar-nav"><li class="nav-item"> <a class="nav-link active" aria-current="page" href="./">Home</a></li><li class="nav-item"><a class="nav-link" href="about">About</a> </li><li class="nav-item mt-3 mt-lg-0"><a class="nav-link" href="login">Sign In</a> </li> <li class="nav-item mt-3 mt-lg-0"> <a class="nav-link" href="signup">Sign up</a> </li> </ul> </div> </div>'
}


