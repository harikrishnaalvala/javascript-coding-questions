function maskCreditCardNumber(cardNumber) {
    // Check if the length is even and at least 6
    if (cardNumber.length >= 6 && cardNumber.length % 2 === 0) {

        // Calculate the start and end index of the middle 4 digits
        let startIndex = (cardNumber.length - 4) / 2;
        let endIndex = startIndex + 4;

        // Mask the middle 4 digits
        let maskedNumber =
            cardNumber.slice(0, startIndex) +
            "X".repeat(4) +
            cardNumber.slice(endIndex);

        return maskedNumber;
    } else {
        return "Invalid credit card number";
    }
}

// Example
let creditCardNumber = "1234567890123456";
console.log(maskCreditCardNumber(creditCardNumber)); // 123456XXXX123456
