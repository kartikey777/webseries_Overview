let home = document.querySelector("#main #page1 .nav #home h3")

home.addEventListener("mouseenter",function(){
    home.style.color = "#F1C518"
})
home.addEventListener("mouseleave",function(){
    home.style.color = "#B6E388"
})

let search = document.querySelector("#main #page1 .nav #search h3")

search.addEventListener("mouseenter",function(){
    search.style.color = "#F1C518"
})
search.addEventListener("mouseleave",function(){
    search.style.color = "#B6E388"
})

let imdb = document.querySelector ("#main #page1 #text2 img")

imdb.addEventListener("mouseenter",function(){
    imdb.style.scale = "1.5"
})
imdb.addEventListener("mouseleave",function(){
    imdb.style.scale = "1"
})

// let disney = document.querySelector("#main #page1 .nav img")

// disney.addEventListener("mouseenter",function(){
//     disney.innerHTML = "src = 'disney-hotstar-1-removebg-preview.png' alt = ''"
// })
// disney.addEventListener("mouseleave",function(){
//     disney.innerHTML = "src='Disney-Hotstar-removebg-preview.png' alt=''"
// })






