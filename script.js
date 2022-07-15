// alert('WOWWOWOWOWOOWOW');
const psw = document.querySelector('input[id="psw"]');
const Cpsw = document.querySelector('input[id="Cpsw"]');
const notMatch = document.querySelectorAll('.pswSpan');

let firstPSW;
let secPSW;
psw.addEventListener('change',(event) => {
  firstPSW = event.target.value;
  Cpsw.addEventListener('change',(event2) =>{
    secPSW = event2.target.value;
    if (firstPSW == secPSW){
      notMatch.forEach(match => {
        match.textContent = '✓';
        match.style.color = 'green';
      })
    } else {
      notMatch.forEach(match => {
        match.textContent = 'Passwords do not match.'
        match.style.color = 'red';
      })
    }
  })
})
