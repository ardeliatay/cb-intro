// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

function findWaldo(arr, cb) {
  arr.forEach(function(person, index) {
    if (person === "Waldo") {
      cb(person, index, arr);
    }
  });
}


function actionWhenFound(person, index) {
  console.log("Found Waldo at index " + index + "!");
};




findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




