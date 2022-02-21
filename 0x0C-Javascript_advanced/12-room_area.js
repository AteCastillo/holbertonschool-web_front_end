let roomDimensions = {
    width: 50,
    length: 100,
    function getArea() {
        return roomDimensions.width * roomDimensions.length;
    }
}
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);