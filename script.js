//<======================================== PASSWORD CONTAINER =======================================>
const mainDiv = document.querySelector("#pwContainer")

//<======================================== BUTTONS =======================================>
const strong = document.querySelector("#strong")
const superStrong = document.querySelector("#superStrong")
const funny = document.querySelector("#funny")

//<======================================== REFERENCE FOR PW =======================================>
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "?", "/", ">", ".", "<", ",", "?", "{", "[", "]", "}"]
const funnyPw = [
    "what_is_the_password",
    "admin",
    123456789,
    "wifi",
    "merapassword",
    "password",
    "ineedapassword",
    "changeme",
    "secret",
    "iamforgetful",
    "newpassword",
    "IamACompleteIdiot",
    "nothing",
    "nothingagain",
    "iforgot",
    "user",
    "YouWontGuessThisOne",
    "PasswordShmashword",
    "doubleclick",
    "password123",
    "memorysucks",
    "earlyalzheimers",
    "LOL111",
    "MeinJhukegaNahi", "iamnottellingyoumypw", "masterpassword", "yetanotherpassword", "nomorepasswords", "cantremember", "myonlypassword", "MyName", "Idontknowmypassword", "Hacker", "Paraaaa", "PasswordThaxaina"
]

//<======================================== CLASS FOR PASSWORD =======================================>
class Password {

    constructor() {
        console.log("Generating the Password")
    }
    //<======================================== METHOD FOR STRONG PASS =======================================>
    strongPass() {
        let index = Math.floor(Math.random() * lowerCase.length)
        let index2 = Math.floor(Math.random() * lowerCase.length)
        let index3 = Math.floor(Math.random() * lowerCase.length)

        let uindex = Math.floor(Math.random() * upperCase.length)
        let uindex2 = Math.floor(Math.random() * upperCase.length)
        let uindex3 = Math.floor(Math.random() * upperCase.length)

        let nindex = Math.floor(Math.random() * numbers.length)
        let nindex2 = Math.floor(Math.random() * numbers.length)

        let cindex = Math.floor(Math.random() * symbols.length)
        let cindex2 = Math.floor(Math.random() * symbols.length)
        let iHTML = lowerCase[index] + upperCase[uindex] + lowerCase[index2] + symbols[cindex] + numbers[nindex] + lowerCase[index3] + upperCase[uindex2] + upperCase[uindex3] + symbols[cindex2] + numbers[nindex2]
        mainDiv.innerHTML = iHTML

    }

    //<======================================== METHOD FOR SUPER STRONG PASS =======================================>
    superStrongPass() {
        let index = Math.floor(Math.random() * lowerCase.length)
        let index2 = Math.floor(Math.random() * lowerCase.length)
        let index3 = Math.floor(Math.random() * lowerCase.length)
        let index4 = Math.floor(Math.random() * lowerCase.length)
        let index5 = Math.floor(Math.random() * lowerCase.length)

        let uindex = Math.floor(Math.random() * upperCase.length)
        let uindex2 = Math.floor(Math.random() * upperCase.length)
        let uindex3 = Math.floor(Math.random() * upperCase.length)

        let nindex = Math.floor(Math.random() * numbers.length)
        let nindex2 = Math.floor(Math.random() * numbers.length)

        let cindex = Math.floor(Math.random() * symbols.length)
        let cindex2 = Math.floor(Math.random() * symbols.length)
        let cindex3 = Math.floor(Math.random() * symbols.length)
        let cindex4 = Math.floor(Math.random() * symbols.length)

        let iHTML = lowerCase[index] + upperCase[uindex] + lowerCase[index2] + symbols[cindex] + lowerCase[index3] + upperCase[uindex2] + symbols[cindex2] + lowerCase[index4] + upperCase[uindex3] + numbers[nindex] + lowerCase[index5] + numbers[nindex2] + symbols[cindex3] + symbols[cindex4] + symbols[index]
        mainDiv.innerHTML = iHTML
    }

    //<======================================== METHOD FOR FUNNY PASS =======================================>
    funnyPass() {
        let index = Math.floor(Math.random() * funnyPw.length)
        mainDiv.innerHTML = funnyPw[index]
    }
}

//<======================================== PASSWORD OBJECT =======================================>
let pass = new Password

//<======================================== EVENT LISTENERS =======================================>
strong.addEventListener("click", () => {
    pass.strongPass()
})
superStrong.addEventListener("click", () => {
    pass.superStrongPass()
})
funny.addEventListener("click", () => {
    pass.funnyPass()
})