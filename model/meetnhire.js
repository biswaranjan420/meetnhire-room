class Meetnhire {
    Meetnhire(startTime, endTime, orgName, secret, roomName) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.orgName = orgName;
        this.secret = secret;
        this.roomName = roomName;
    }
    getMeetnhire() {
        return Meetnhire;
    }
}