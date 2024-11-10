const path = require('path');

let notFound = (req, res) => {
    res.status(404).sendFile(path.resolve('public/notfound.html'));
};

module.exports = notFound