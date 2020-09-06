const meetnhire = require('../model/meetnhire');
//Create A Room Record
exports.createRoom = (req, res) => {
    Object.assign(meetnhire, req.body);
    console.log(meetnhire);
    let obj = new Object();
    const roomName = meetnhire.roomName;
    const secret = meetnhire.secret;
    if (roomName != '' && roomName != undefined) {
        roomName.trim();
        if (secret != '' && secret != undefined && secret == 'Meet-N-Hire-2020') {
            secret.trim();
            obj.status = 'true';
            obj.url = `https://vc.meetnhire.com/#/${roomName}`;

        } else {
            obj.status = 'false';
            obj.url = "";
        }
    } else {
        obj.status = 'false';
        obj.url = "";
    }
    res.send(obj);
};