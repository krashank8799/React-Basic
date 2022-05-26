var request = require('request');

var options = {
    'method': 'POST',
    'url': 'https://api.sendchamp.com/api/v1/verification/confirm',
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SECRET_KEY'
    },
    body: JSON.stringify({
        "verification_code": "36284",
        "verification_reference": "VER-Jkrz2O4Hxet0F1muMqxw25jOv"
    })

};

request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});