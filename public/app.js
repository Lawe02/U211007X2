 let dataURL = '../data/exercise1.json';
 let req = new XMLHttpRequest();
 req.open('GET', dataURL); 
 req.responseType='json'; 
 req.send(); 

 console.log('Data received')

req.onload = () => {
    const data = req.response;
    console.log(data);

    const elementH1 = document.createElement('h1');
    const elementP = document .createElement('p');
    const elementImg = document.createElement('img');
    const elementBtn = document.createElement('button');
    elementImg.id  = 'imgId';
    elementBtn.id = 'btnId';
    
    elementH1.textContent = data.headline;
    elementP.textContent = data.intro;
    elementImg.setAttribute('src', data.articleImage);
    elementBtn.textContent = "Hide";

    elementBtn.addEventListener('click', ButtonHandler);

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);
    document.getElementById('Exercise1').appendChild(elementImg);
    document.getElementById('Exercise1').appendChild(elementBtn);

};

 const ButtonHandler = () => {
    const elementImg = document.getElementById('imgId');
    const elementBtn = document.getElementById('btnId')

    if (elementImg.style.display == 'none'){
        elementImg.style.display = 'block';
        elementBtn.textContent = 'Hide';
    } else {
        elementImg.style.display = 'none';
        elementBtn.textContent = 'Show';

    }

}