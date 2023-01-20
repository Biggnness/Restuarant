fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0])
        document.querySelector('h1').innerText = data[0].anime_name
        document.querySelector('img').src = data[0].anime_img
       // document.querySelector('h3').innerText = quote.quote
    })
    .catch(err => {
        console.log(`error ${err}`)
    });