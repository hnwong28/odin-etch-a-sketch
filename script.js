const container = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", createBoxes)

function createBoxes() {
    prevDiv = document.querySelectorAll("#container div")
    prevDiv.forEach (div => div.remove())
    let rowNum = prompt(
    "How many rows of boxes do you want? Limited to 100 or fewer"
);
rowSize = 100 / rowNum + "%";
divNum = rowNum ** 2;
for (let i = 0; i < divNum; i++) {
    if (rowNum > 100) {
        return;
    }
    const div = document.createElement("div");
    div.setAttribute(
        "style",
        `box-sizing: border-box; flex-grow: 0; flex-shrink:0; flex-basis: ${rowSize}; border-color: blue; border-style: solid; aspect-ratio: 1;`
    );
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "green";
    });
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "initial";
    });
    container.appendChild(div);
}
;}

createBoxes();
