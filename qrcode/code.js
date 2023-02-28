// Require the package
const QRCode = require('qrcode');
const express = require('express');
const app = express();
// Creating the data
let data = {
    name: "Pritam Kumar",
    age: 27,
    department: "No Police",
    id: "aisuoiqu3234738jdhf100223"
}

// Converting the data into String format
let stringdata = JSON.stringify(data)
console.log(stringdata)

// Print the QR code to terminal
// QRCode.toString(stringdata, { type: 'terminal' },
// function(err, QRcode) {

//     if (err) return console.log("error occurred")

// Printing the generated code
// console.log(QRcode)
// })

// Converting the data into base64
// QRCode.toDataURL(stringdata, function(err, code) {
//     if (err) return console.log("error occurred")

//     // Printing the code
//     console.log(code)
// })
const data_String = async() => {
    const string = await QRCode.toDataURL(stringdata);
    console.log(string)
}
data_String();
app.get('/qrcode', async(req, res) => {
    const qr_code_qenerater = await QRCode.toString(stringdata, { type: 'terminal' });
    console.log(qr_code_qenerater);
    res.send(qr_code_qenerater);
});
app.listen(5000);