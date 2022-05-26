var express = require('express');
var session = require('express-session')
var Nexmo = require("nexmo")
var TMClient = require('textmagic-rest-client');

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
    res.end("todos");
})

app.post("/savedetails", function(req, res) {
    console.log(req.body.userName + req.body.userEmail)


    var otp = Math.floor(Math.random() * (999999 - 100000) + 100000);

    correctOtp = otp;

    // sendOtp(req.body.mobileNumber, otp);
    //xyz(req.body.mobileNumber, otp);

    otpMail(req.body.userEmail, otp);


    //otpSend(req.body.mobileNumber, otp);

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
                res.render("error.ejs", { errorMsg: "Error While sending Otp!" })
            } else {
                console.log("OTP sent Successfully");
                //res.status(200);
                //res.render("message.ejs",{msg :"We have sent an OTP to your Mail Please Check Your Mail"})
            }
        })
}

function xyz(number, otp) {
    const request = require('request');

    const options = {
        method: 'POST',
        url: 'https://smsapi-com3.p.rapidapi.com/sms.do',
        qs: { access_token: 'undefined' },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'smsapi-com3.p.rapidapi.com',
            'X-RapidAPI-Key': '41c5faf111msh4e0c1d7a0bddfecp1abbedjsn0b0c18bf4bfe',
            useQueryString: true
        },
        body: {
            to: number,
            message: otp,
            from: '',
            normalize: '',
            group: '',
            encoding: '',
            flash: '',
            test: '',
            details: '',
            date: '',
            date_validate: '',
            time_restriction: 'follow',
            allow_duplicates: '',
            idx: '',
            check_idx: '',
            max_parts: '',
            fast: '',
            notify_url: '',
            format: 'json'
        },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}

function otpSend(number, otp) {
    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({ text: 'test message', phones: '9990001' }, function(err, res) {
        console.log('Messages.send()', err, res);
    });
}

function sentOtp(number, otp) {
    let nexmo = new Nexmo({
        apiKey: "deea0efd",
        apiSecret: "bPkMGM9eoj7ZRB66"
    })

    /*nexmo.message.sendSms("krashank", number, otp,
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.dir(data)
            }
        });*/

    const from = "Krashank"
    const to = number
    const text = 'Otp is' + otp

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}

function sendOtp(number, otp) {
    console.log(number, otp)
    var options = {
        authorization: "EJFZaNSkWCUPCR7GNmqZGSUE6yjZYP3Yti1OIc2IwxQTyqjTzsr6dkwAkBgO",
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