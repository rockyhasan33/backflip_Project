const fighter = [
    {
        img: 'images/khabib.png',
        name: 'Khabib Nurmagomedov',
        skills : 'Wrestler',
        information: 'Khabib Abdulmanapovich Nurmagomedov is a Russian former professional mixed martial artist. He competed in the lightweight division of the Ultimate Fighting Championship, where he was the longest-reigning UFC Lightweight Champion ever, having held the title from April 2018 to March 2021.'
    },
    {
        img: 'images/makhachev.png', 
        name: 'Islam Makhachev', 
        skills: 'Wrestler',
        information: 'Islam Ramazanovich Makhachev is a Russian professional mixed martial artist and former Sambo competitor. He currently competes in the Lightweight division in the Ultimate Fighting Championship, where he is the current UFC Lightweight Champion.'
    },
    {
        img: 'images/umar.png',
        name: 'Umar Nurmagomedov',
        skills: 'Striking',
        information: 'Umar Nurmagomedov, is a Russian mixed martial artist currently competing in the Bantamweight division of the Ultimate Fighting Championship. He has previously competed in the Eagle Fighting Championship and Professional Fighters League.'
    },
    {
        img: 'images/usman.png',
        name: 'Usman Nurmagomedov', 
        skills: 'Striking & Wrestler',
        information: 'Usman Nurmagomedov, is a Russian mixed martial artist currently competing in the Lightweight division of Bellator MMA, where he is the current Bellator Lightweight Champion. He has previously competed in the UAE Warriors and Eagle Fighting Championship.'
    }

]



const img = document.querySelector('#person-img');
const skills = document.querySelector('.skills');
const name = document.querySelector('.fighter_name');
const info = document.querySelector('.info');
let count = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson()
})

const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

function showPerson() {
    let item = fighter[count];
    img.src = item.img;
    name.textContent = item.name;
    skills.textContent = item.skills;
    info.textContent = item.information; 
}


next.addEventListener('click', () => {

    count++;
    if(count > fighter.length -1) {
        count = 0;
    }

    showPerson();
});
prev.addEventListener('click', () => {
    count--;
    if(count < 0) {
        count = fighter.length - 1;
    }
    showPerson();
});


