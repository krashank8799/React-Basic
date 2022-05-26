export function OtpRequest(userName, mobileNumber) {
    let details = {
        userName: userName,
        mobileNumber: mobileNumber
    }
    console.log(details)

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/savedetails")
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(details))

    request.addEventListener("load", function() {
        console.log("Details Saved")
    })

}

export function OtpSubmit() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

export function UserLoggedOut() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}