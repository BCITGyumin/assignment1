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
    }
    placeholder.value = 'This is a placeholder';
}

newNoteBtn.addEventListener("click", newNoteButton);


// Notes Array
const notesArray = [{title:"note one", body:"this is my first note"}, {title:"note two", body:"this is my second note"}];


// Save Button
const saveBtn = document.querySelector(".button_save");
const asideList = document.querySelector(".aside_list");

function saveNote()
{
    title = prompt("Please write the title:");
    body = placeholder.value;
    if (!(title === ""))
    {
        notesArray.push({
            "title": title,
            "body": body
        })
        const lst = document.createElement("li");
        asideList.appendChild(lst).innerText = title;
        lst.classList.add("aside_title");
    }
}

saveBtn.addEventListener("click", saveNote);


// Side Bar List Loading
const titleList = document.querySelector(".aside_list");

function sidebarLoad(event) 
{
    const clickedTitleElmt = event.target;
    const clickedTitle = clickedTitleElmt.innerText;

    for (let item of notesArray)
    {
        if(item["title"] === clickedTitle)
        {
            placeholder.value = item["body"];
            
            if (btnOption2Attribute[0].className.includes("hide"))
            {
                btnOption2.classList.remove("hide");
                placeholderContainer.classList.remove("hide");
            }
        }
    }
}


titleList.addEventListener("click", sidebarLoad);
