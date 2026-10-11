// 1. Select elements
const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.querySelector("#box");

// 2. Change text content
title.textContent = "The DOM is alive!";
description.textContent = "This text was changed with JavaScript.";

// 3. Alter styling
title.style.color = "blue";
description.style.fontSize = "15px";

// 4. Add a CSS class
box.classList.add("active");