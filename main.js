var express = require('express');
var session = require('express-session')

var cors = require('cors');
const sendMail = require("./utils/verifyemail")

const fast2sms = require('fast-two-sms')

var fs = require("fs");
var app = express();
var port = 8080

app.use(cors())
app.use(express.json());

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
}))

var correctOtp;

app.get('/', function(req, res) {
    console.log("hello world")
})

app.post("/savedetails", function(req, res) {


    var otp = Math.floor(Math.random() * (999999 - 100000) + 100000);

    correctOtp = otp;

    sendOtp(req.body.mobileNumber, otp);

    otpMail(req.body.userEmail, otp);

})

app.post("/checkotp", function(req, res) {
    console.log(req.body.otp, correctOtp)

    if (correctOtp == req.body.otp) {
        console.log("correct")
        res.json("correct Otp")
    } else {
        console.log("wrong")
        res.json("404")
    }
})

function otpMail(email, otp) {
    var url = 'Your OTP is - ' + otp

    sendMail(email,
        "Bhukkad's Place",
        otp,
        url,
        function(err) {
            if (err) {
                console.log("Error while sending OTP");
            } else {
                console.log("OTP sent Successfully");
            }
        })
}

function sendOtp(number, otp) {
    console.log(number, otp)
    var options = {
        authorization: "YOUR API KEY",
        message: otp,
        numbers: [number]
    }
    fast2sms.sendMessage(options).then(response => {
        console.log(response)
    }).catch(function(err) {
        console.log(err)
    })
}

app.listen(port, () => {
    console.log("server is running at port" + port)
})
