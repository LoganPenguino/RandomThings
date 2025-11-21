function makePassword(long, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "|}{?:><~#`\][';/.,";

    let allowedChars = "";
    let pass = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    for(let i = 0; i < long; i++){
        const randomIndex = Math.floor(Math.random()*(allowedChars.length));
        pass += allowedChars[randomIndex];
    }

    return pass;
}

const password = document.getElementById("password");
const long = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const pass = makePassword(long, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

password.textContent = `Password : ${pass}`;