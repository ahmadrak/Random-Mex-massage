

const massages = ['good morning', 'good eveing ', 'good afternoon'];

const text = document.getElementsByClassName('text');

let btn = document.getElementsByClassName('btn');

function random(){

    let random = Math.floor(Math.random()*massages.length);

    return massages[random];
}

function result(){

    text.innerHTML = random();
}

btn.addEventListener('click',result);

//console.log(random());

