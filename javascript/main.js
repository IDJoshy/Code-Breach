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