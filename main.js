let btns = document.querySelectorAll('.rateButton');
let card2 = document.querySelector('.cardHolder2'); 
let card = document.querySelector('.cardHolder');
let span = document.querySelector('.userRate');
let submitBtn = document.querySelector('.submitButton'); 

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        const rating = e.target.textContent;
        span.textContent = rating;
    })
})

submitBtn.addEventListener('click', e => {
    card2.style.display = 'block';
    card.style.display = 'none';
})