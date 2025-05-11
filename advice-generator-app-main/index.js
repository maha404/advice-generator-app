"use strict";

let btn = document.getElementById('btn');
let adviceBox = document.getElementById('adivce');

async function getAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    adviceBox.innerHTML = '';

    try {
        let response = await fetch(url, { mode: 'cors', cache: 'no-store' });
        let data = await response.json();
        adviceBox.innerHTML = `<p class="adviceId">ADVICE #${data.slip.id}</p><p class="adviceText">"${data.slip.advice}"</p>`;
    } catch (err) {
        console.log(err);
        adviceBox.innerHTML = '<p class="error">Failed to fetch advice. Please try again later.</p>';
    }
}

btn.addEventListener('click', getAdvice);

getAdvice();