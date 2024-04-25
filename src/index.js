var moment = require('moment');
var a = moment().toString();
console.log(a);

const EmailVerifier = require('email-verifier');
const verifier = new EmailVerifier('at_H8yS1sewVYarQJ8gzmtmglNTQZY2w', {
    checkCatchAll: false,
    checkDisposable: false,
    checkFree: false,
});

function verifyEmail(email) {
  return new Promise((resolve, reject) => {
    verifier.verify(email, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// // Usage
// verifyEmail("admin@gmail.com")
//   .then(data => {
//     console.log("Email data:", data);
//   })

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('#email');
    verifyEmail(email.value)
        .then((data) => {
            if (data.dnsCheck  && data.smtpCheck){
                alert('Valid email');
            }
            else{
                alert('Invalid email');
            }
            console.log(data);
            // if (data.dns && data.smtp)
        })
});