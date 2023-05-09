const categoriesEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesEl.length)

categoriesEl.forEach( function (categoryEl, arrey) 
{console.log(`Category: ${categoryEl.firstElementChild.textContent}`),
 console.log(`Elements: ${categoryEl.lastElementChild.children.length}`)}

)