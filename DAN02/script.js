function findAverages(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}
function writeStudent(obj) {
  console.log(
    "Ime: " +
      obj.ime +
      " Prezime: " +
      obj.prezime +
      " Godina: " +
      obj.godina +
      " Ocjene: " +
      obj.ocjene +
      " Prosjek: " +
      obj.average
  );
}
function printAllStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    writeStudent(arr[i]);
  }
}
function selectGoodStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].average > 8.5) {
      writeStudent(arr[i]);
    } else {
      console.log(arr[i].ime);
    }
  }
}
function selectBestStudent(arr) {
  best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (best.average < arr[i].average) {
      best = arr[i];
    }
  }
  writeStudent(best);
}
function totalAverage(arr) {
  ar = [];
  for (let i = 0; i < arr.length; i++) {
    ar.push(arr[i].average);
  }
  console.log(findAverages(ar));
}
function sortStudents(arr) {
  arr.sort((a, b) => b.average - a.average);
  printAllStudents(arr);
}

const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];
console.log("---------e)----------");
for (let i = 0; i < studenti.length; i++) {
  studenti[i].average = findAverages(studenti[i].ocjene);
}
printAllStudents(studenti);
console.log("---------a)----------");
selectGoodStudents(studenti);
console.log("---------b)----------");
selectBestStudent(studenti);
console.log("---------c)----------");
totalAverage(studenti);
console.log("---------d)----------");
sortStudents(studenti);
