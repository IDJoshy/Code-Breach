// Loader

const mail = document.querySelector(".mail");

window.addEventListener("load", () =>
{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () =>
    {
        mail.classList.remove("mail--hidden");
        loader.remove();
    })
})

const loader_images = document.querySelectorAll('.loader__image');

let loader_images_index = 0;
const loader_images_time = 250;

function loader_images_animation() {
    loader_images[loader_images_index].classList.remove('loader__image--active');
    loader_images_index = (loader_images_index + 1) % loader_images.length;
    loader_images[loader_images_index].classList.add('loader__image--active');
}

setInterval(loader_images_animation, loader_images_time);

// Hamburger Menu

const hamburger__menu = document.querySelector(".hamburger-menu");

const hamburger_button = document.querySelector(".navbar-menu__button--hamburger");

const hamburger_icon_open = document.querySelector(".navbar-menu__icon-open");

const hamburger_icon_close = document.querySelector(".navbar-menu__icon-close");

var hamburger__menu__status = new Boolean(false);

hamburger_button.addEventListener("click", () =>
{
    if (hamburger__menu__status == false)
    {
        ToggleMenu();
        hamburger__menu__status = new Boolean(true);
    }
    else
    {
        UnToggleMenu();
        hamburger__menu__status = new Boolean(false);
    }
});

function ToggleMenu()
{
    hamburger_icon_open.classList.add("navbar-menu__icon--hidden");
    hamburger_icon_close.classList.remove("navbar-menu__icon--hidden");
    hamburger__menu.classList.remove("hamburger-menu--hidden");
}

function UnToggleMenu()
{
    hamburger_icon_open.classList.remove("navbar-menu__icon--hidden");
    hamburger_icon_close.classList.add("navbar-menu__icon--hidden");
    hamburger__menu.classList.add("hamburger-menu--hidden");
}

// hamburger menu animations

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const hamburger_button_link = document.querySelectorAll(".hamburger-menu__link--animated");
const hamburger_button_link_text = document.querySelectorAll(".hamburger-menu__text");
const hamburger_button_link_image = document.querySelectorAll(".hamburger-menu__image");

hamburger_button_link[0].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        hamburger_button_link_text[0].innerText = hamburger_button_link_text[0].innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return hamburger_button_link_text[0].dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 4) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 25);
}

hamburger_button_link[1].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        hamburger_button_link_text[1].innerText = hamburger_button_link_text[1].innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return hamburger_button_link_text[1].dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 8) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

hamburger_button_link[2].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        hamburger_button_link_text[2].innerText = hamburger_button_link_text[2].innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return hamburger_button_link_text[2].dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 4) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 25);
}

hamburger_button_link[3].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        hamburger_button_link_text[3].innerText = hamburger_button_link_text[3].innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return hamburger_button_link_text[3].dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 5) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 20);
}

hamburger_button_link[4].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        hamburger_button_link_text[4].innerText = hamburger_button_link_text[4].innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return hamburger_button_link_text[4].dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 5) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}
// Hamburger Menu End