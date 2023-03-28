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


// Cancel Button
const cancelbtn = document.querySelector(".button_cancel")
const btnOption2 = document.querySelector(".button_option_2")
const placeholderContainer = document.querySelector(".placeholder_div")

function hideButton()
{
    btnOption2.classList.add("hide")
    placeholderContainer.classList.add("hide")
}

cancelbtn.addEventListener("click", hideButton)