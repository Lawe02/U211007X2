 let dataURL = '../data/exercise1.json';
 let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

req.onload = () => {
    const data = req.response;
    console.log(data);
}