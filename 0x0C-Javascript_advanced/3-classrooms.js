function createClassRoom(numbersOfStudents){
    function studentSeat(seat) {
        return function() {
            return seat;
        }
        let students = [];
        for (let it = 0; it < numbersOfStudents; it++) {
            students.push(studentSeat(it + 1));
        }
        return students;
    }
}
let classRoom = createClassRoom(10);