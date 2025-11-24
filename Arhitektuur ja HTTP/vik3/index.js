const url = "https://jsonplaceholder.typicode.com/posts"

async function getData() {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

        //get DOM, get element by id
        const divData = document.getElementById("jsondata")
    // divData.innerText = "Hello"

    data.forEach(post => {
        divData.innerHTML += post.title + "<br/>"
    })
}

getData()