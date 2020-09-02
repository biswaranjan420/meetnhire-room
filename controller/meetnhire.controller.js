const meetnhire = require('../model/meetnhire');
//Create A Room Record
exports.createRoom = (req, res) => {
    Object.assign(meetnhire, req.body);
    console.log(meetnhire);
    let obj = new Object();
    const roomName = meetnhire.roomName;
    if (roomName != '' && roomName != undefined) {
        roomName.trim();
        obj.status = 'true';
        obj.url = `https://vc.meetnhire.com/#/${roomName}`;

    } else {
        obj.status = 'false';
        obj.url = "";
    }
    res.send(obj);
};