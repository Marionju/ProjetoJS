//function pegueDados(){
//    event.preventDefault();
//    console.log(
//        document.getElementById('name').Value,
//        document.getElementById('email').Value,
//        document.getElementById('subject').Value,
//        document.getElementById('message').Value,
//    )
//}
document.querySelector('.formulario').onsubmit = function (event) {
    event.preventDefault();
    console.log(this.namespaceURI, this.email, this.subject, this.message);
}