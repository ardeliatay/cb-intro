var dogs = ["Border Collie", "Golden Retriever", "Samoyed", "Havanese", "Husky"]

function map(dog, cb) {
  for(var item in dog) {
  cb(dog[item])
  }
};

function printValue(item) {
console.log(item)
};

function upperCase(item) {
  console.log(item.toUpperCase());
};

map(dogs, printValue);
map(dogs, upperCase);
