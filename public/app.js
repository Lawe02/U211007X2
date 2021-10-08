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
    
    elementH1.textContent = data.headline;
    elementP.textContent = data.intro;

    document.getElementById('Exercise1').appendChild(elementH1);
    document.getElementById('Exercise1').appendChild(elementP);


}