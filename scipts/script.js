// Dark Theme Button
const darkbtn = document.querySelector(".button_darktheme")
const aside = document.querySelector(".aside")
const main = document.querySelector(".main")
const placeholder = document.querySelector(".placeholder_textarea")

function darkTheme()
{
    aside.classList.toggle("darktheme_lighter");
    main.classList.toggle("darktheme_deeper");
    placeholder.classList.toggle("darktheme_lighter");
    if (darkbtn.textContent === "Dark Theme")
        {darkbtn.textContent = "Light Theme"}
    else
        {darkbtn.textContent = "Dark Theme"}
}

darkbtn.addEventListener("click", darkTheme)
