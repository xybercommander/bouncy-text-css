const text = document.querySelector(".title");
const changeColor = document.querySelector(".btn");

// changeColor.addEventListener('click', () => {
//     text.classList.toggle("change");
// })

const listInput = document.querySelector(".list-input");
const nameList = document.querySelector(".namelist");

changeColor.addEventListener('click', () => {
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);
    nameList.appendChild(newLi);
});