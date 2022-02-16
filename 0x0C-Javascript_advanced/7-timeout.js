console.log("Start of the execution queue");
setTimeout(function(){ console.log("Final code block to be executed"); }, 3000);

for (var i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("End of loop printing");