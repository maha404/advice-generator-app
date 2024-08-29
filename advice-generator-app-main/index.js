"use strict";

let btn = document.getElementById('btn');
let adviceBox = document.getElementById('adivce');

function getAdvice() {
    // console.log("Called 'getAdvice'");
    adviceBox.innerHTML = '';
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            adviceBox.innerHTML += `<p class="adviceId"> ADVICE #${data.slip.id}</p><p class="adviceText">"${data.slip.advice}"</p>`;
        })
        .catch(err => console.log(err));
}

btn.addEventListener('click', getAdvice);

getAdvice();