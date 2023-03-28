// Dark Theme Button
const darkBtn = document.querySelector(".button_darktheme");
const aside = document.querySelector(".aside");
const main = document.querySelector(".main");
const placeholder = document.querySelector(".placeholder_textarea");

function darkTheme()
{
    aside.classList.toggle("darktheme_lighter");
    main.classList.toggle("darktheme_deeper");
    placeholder.classList.toggle("darktheme_lighter");
    if (darkBtn.textContent === "Dark Theme")
        {darkBtn.textContent = "Light Theme"}
    else
        {darkBtn.textContent = "Dark Theme"}
}

darkBtn.addEventListener("click", darkTheme);


// Cancel Button
const cancelBtn = document.querySelector(".button_cancel");
const btnOption2 = document.querySelector(".button_option_2");
const placeholderContainer = document.querySelector(".placeholder_div");

function hideButton()
{
    btnOption2.classList.add("hide");
    placeholderContainer.classList.add("hide");
}

cancelBtn.addEventListener("click", hideButton);


// New Note button
const newNoteBtn = document.querySelector(".button_newnote");
const btnOption2Attribute = document.getElementsByClassName("button_option_2");

function newNoteButton()
{
    if (btnOption2Attribute[0].className.includes("hide"))
    {
        btnOption2.classList.remove("hide");
        placeholderContainer.classList.remove("hide");
        placeholder.value = 'This is a placeholder';
    }
}

newNoteBtn.addEventListener("click", newNoteButton);