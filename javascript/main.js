// Hamburger Menu

const hamburger__menu = document.querySelector(".navbar__hamburger__menu");

const hamburger_button = document.querySelector(".navbar__hamburger__button");

const hamburger_icon_open = document.querySelector(".navbar__hamburger__button__icons--open");

const hamburger_icon_close = document.querySelector(".navbar__hamburger__button__icons--close");

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
    hamburger_icon_open.classList.add("navbar__hamburger__button__icons--hidden");
    hamburger_icon_close.classList.remove("navbar__hamburger__button__icons--hidden");
    hamburger__menu.classList.remove("navbar__hamburger__menu--hidden");
}

function UnToggleMenu()
{
    hamburger_icon_open.classList.remove("navbar__hamburger__button__icons--hidden");
    hamburger_icon_close.classList.add("navbar__hamburger__button__icons--hidden");
    hamburger__menu.classList.add("navbar__hamburger__menu--hidden");
}

// hamburger menu animations

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

const hamburger_link = document.querySelectorAll(".navbar__hamburger__list__links--link");

hamburger_link[0].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= 9) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

hamburger_link[1].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= event.target.dataset.value.length) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

hamburger_link[2].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= event.target.dataset.value.length) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

hamburger_link[3].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= event.target.dataset.value.length) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

hamburger_link[4].onmouseover = event =>
{
    let iterations = 0;

    const interval = setInterval(() =>
    {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => 
        {
            if(index < iterations)
            {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 27)]
        })
        .join("");   

        if(iterations >= event.target.dataset.value.length) 
        {
            clearInterval(interval);
        }
        
        iterations += 1;
    }, 30);
}

// Hamburger Menu End