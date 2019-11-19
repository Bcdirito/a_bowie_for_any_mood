const generateRandomString = (length) => {
    let text = ""
    let alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv1234567890"

    for (let i = 0; i < length; i++){
        text += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length))
    }

    return text
}

module.exports = generateRandomString