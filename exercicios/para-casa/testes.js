const array = [1,2,9]
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

let i = 0;

while (i < array.length) {
  console.log(array[i]);
  i++;
}

for (const element of array) {
    console.log(element);
  }

  array.forEach((element) => {
    console.log(element);
  });

