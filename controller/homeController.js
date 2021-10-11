exports.index = (x,y) => {
    y.sendfile('../public/index.html');
};

exports.edit = (x,y) => {
    y.sendfile('./public/edit.html');
};