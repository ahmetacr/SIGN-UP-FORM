// alert('WOWWOWOWOWOOWOW');
const psw = document.querySelector('input[id="psw"]');
const Cpsw = document.querySelector('input[id="Cpsw"]');
const notMatch = document.querySelectorAll('.pswSpan');

let firstPSW;
let secPSW;

let pswCount = 0;
const pswInputs = document.querySelectorAll("input[type=password]");
pswInputs.forEach(psw => {
  psw.addEventListener('change', (event) => {
    if (pswCount == 0) {
      firstPSW = event.target.value;
      pswCount++;
      console.log('firstPSW: ' + firstPSW)
      console.log('pswCount: ' + pswCount)
    } else if (pswCount == 1) {
      secPSW = event.target.value;
      console.log('secPSW: ' + secPSW)
      pswCount = 0;
      console.log('pswCount: ' + pswCount)
    }
    if (firstPSW == secPSW) {
      notMatch.forEach(match => {
        match.textContent = '✓'
        match.style.color = 'green';
        });
    } else {
      notMatch.forEach(match => {
      match.textContent = 'Passwords do not match.'
      match.style.color = 'red';
      })
    }
  })
});