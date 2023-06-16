"use strict"

// -----1-----

const result = 5 + 5 + "5"
console.log(result)
console.log("typeof>>", typeof result)

// -----2-----

const email = "kovalenkom2009@gmail.com"
console.log("Містить @?>>", email.includes("@"))
console.log(email.length)

// -----3-----

const str1 = "My "
const str2 = "name "
const str3 = "is "
let fullName = str1 + str2 + str3
fullName += "Viktor"
console.log(fullName)

// -----4-----

const userName = "Марино"
const payment = 600
alert(`Дякуємо ${userName}, до сплати ${payment} гривень!`)
