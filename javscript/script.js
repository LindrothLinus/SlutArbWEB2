async function onButtonClick() {
    const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '04b3dedf44msh4eb020b14b4f97bp180c3bjsn3344c80c2a67',
            'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const joke = await response.text();
    const trimmedJoke = removeSpecialCharacters(joke);
    console.log(trimmedJoke);
    document.getElementById("jokes").innerHTML = `<h1>${trimmedJoke}</h1>`;
    imgGenerator();


}
onButtonClick();


function removeSpecialCharacters(inputString) {
    const exclude = /["{}\[\]]/g;
    const newString = inputString.replace(exclude, '');
    return newString;
}

function imgGenerator(){
    const allImg = ["bild1.jpg","bild2.jpg","bild3.jpg","bild4.jpg","bild5.jpg"]

    var rand =Math.floor(Math.random()*allImg.length);
    var img1 = allImg[rand];
    document.getElementById("imgPlace").src = `./img/${img1}`;
}






