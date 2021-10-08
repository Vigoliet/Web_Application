exports.index = (req, res) => {

    res.sendfile('public/data/index.html');
 
};

exports.edit = (req, res) => {
    res.sendfile('public/data/edit.html');
};

exports.editUpdate = (req, res) => {
    console.log('editUpdate is alive!');

    const fs = require('fs');

    const headline = req.body.tBoxName1;
    const intro = req.body.tBoxName2;
    const articleImage = req.body.tBoxName3;

    const test = { headline, intro, articleImage };

    const testAnka = JSON.stringify(test);

    fs.writeFile('./public/data/exercise1.json', testAnka, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log('editUpdate is alive again!');
    res.sendfile('./public/data/edit.html');
};