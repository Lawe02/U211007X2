 'use strict';

let dataURL = '../data/exercise1.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType ='json';
req.send();

req.onload = () => {
    const data = req.response;

    const form = document.createElement('form');
    const tBox1 = document.createElement('input');
    const tBox2 = document.createElement('input');
    const tBox3 = document.createElement('input');
    const btnUpdate = document.createElement('button');

    tBox1.id = 'tBoxId1';
    tBox2.id = 'tBoxId2';
    tBox3.id = 'tBoxId3';
    tBox1.name = 'tBoxName1';
    tBox2.name = 'tBoxName2';
    tBox3.name = 'tBoxNmae3';
    btnUpdate.id = 'btnUpdateId';
    form.id = 'formId';

    form.action = '/edit';
    form.method = 'POST';

    document.getElementById('Exercise2').style.maxWidth = '180px';

    tBox1.value = data.headline;
    tBox2.value = data.intro;
    tBox3.value = data.articleImage;
    btnUpdate.textContent = 'Update';

    btnUpdate.addEventListener('Click', ButtonEventHandler);
    
    document.getElementById('Exercise2').appendChild(form);
    document.getElementById('formId').appendChild(tBox1);
    document.getElementById('formId').appendChild(tBox2);
    document.getElementById('formId').appendChild(tBox3);
    document.getElementById('formId').appendChild(btnUpdate);



};

const ButtonEventHandler = () => {
    console.log('Button Update pushed')
}