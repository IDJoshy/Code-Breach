// Loader

window.addEventListener("load", () =>
{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");
});

const loader_images = document.querySelectorAll('.loader__content--image');

let loader_images_index = 0;
const loader_images_time = 250;

function loader_images_animation() {
    loader_images[loader_images_index].classList.remove('loader__content--image-active');
    loader_images_index = (loader_images_index + 1) % loader_images.length;
    loader_images[loader_images_index].classList.add('loader__content--image-active');
}

setInterval(loader_images_animation, loader_images_time);

// Hamburger Menu

const hamburger__menu = document.querySelector(".hamburger__menu");

const hamburger_button = document.querySelector(".navbar__content--button");

const hamburger_icon_open = document.querySelector(".navbar__button--icon-open");

const hamburger_icon_close = document.querySelector(".navbar__button--icon-close");

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
    hamburger_icon_open.classList.add("navbar__button--hidden");
    hamburger_icon_close.classList.remove("navbar__button--hidden");
    hamburger__menu.classList.remove("navbar__menu--hidden");
}

function UnToggleMenu()
{
    hamburger_icon_open.classList.remove("navbar__button--hidden");
    hamburger_icon_close.classList.add("navbar__button--hidden");
    hamburger__menu.classList.add("navbar__menu--hidden");
}

// hamburger menu animations

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const hamburger_button_link = document.querySelectorAll(".hamburger__button--link");
const hamburger_button_link_text = document.querySelectorAll(".hamburger__button--link-text");
const hamburger_button_link_image = document.querySelectorAll(".hamburger__button--image");

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