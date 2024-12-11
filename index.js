const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
    },




});



const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.replace('index.html');
});


function main() {
    if (localStorage.getItem('isauth')) {
        profile();
        let register = document.querySelector('.register');
        if (register) {
            register.remove();
        }

    } else {
        //register
    }

}

let modalIsOpen = false;

function modalWindow() {
    let modal = document.querySelector('.modalWindow');

    if (!modalIsOpen) {
        let body = document.body;
        let div = document.createElement('div');
        let user_name = localStorage.getItem('name');
        div.className = 'modalWindow';
        div.innerHTML = `
            <h2>Личный кабинет</h2>
            <h2>Имя: ${user_name}</h2>
            <button onclick="exit()" class = "exits" >Выход</button>
        `;
        body.appendChild(div);
        modal = div;
        modalIsOpen = true;
    } else {
        if (modal) {
            modal.remove();
        }
        modalIsOpen = false;
    }
}

function profile() {
    let navbar = document.querySelector('.navbar');
    let div = document.createElement('div');
    div.className = 'profile';
    div.innerHTML = `
        <button id='profile_button'>Профиль</button>
    `;
    navbar.appendChild(div);
    let profileButton = document.getElementById('profile_button');

    profileButton.addEventListener('click', modalWindow);
}

// function profile() {
//     if (localStorage.getItem('isauth')) {
//         let register = document.querySelector('.register');
//         if (register) {
//             register.remove();
//         }

//         let profile = document.querySelector('.profile');
//         let button = document.createElement('button');
//         button.textContent = 'Профиль';
//         button.id = 'profile_button';

//         // button.onclick = modalWindow;

//         profile.appendChild(button);

//     } else {
//         console.log('данных нету');
//     }
// }

// function modalWindow() {


//     let modal = document.querySelector('.modalWindow');
//     modal.style.display = 'block';


// }







function exit() {

    localStorage.clear();
    location.reload();
}

document.addEventListener('DOMContentLoaded', main);













