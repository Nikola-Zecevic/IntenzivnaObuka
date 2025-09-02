function findAverages(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}
function writeStudent(obj) {
  console.log(obj.ime + " " + obj.prezime + " " + obj.godina);
}
function selectGoodStudents(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (findAverages(arr[i].ocjene >= 8.5)) {
      writeStudent(arr[i]);
    } else {
      console.log(arr[i].ime);
    }
  }
}
function selectBestStudent(arr) {
  best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (findAverages(best.ocjene) < findAverages(arr[i].ocjene)) {
      best = arr[i];
    }
  }
  writeStudent(best);
}
function totalAverage(arr) {
  ar = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(ar);
    ar.push(arr[i].average);
    console.log(ar);
  }
  findAverages(ar);
}
function sortStudents(arr) {
  arr.sort((a, b) => findAverages(a.ocjene) - findAverages(b.ocjene));
  for (let i = 0; i < arr.length; i++) {
    writeStudent(arr[i]);
  }
}

const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];

for (let i = 0; i < studenti.length; i++) {
  studenti[i].average = findAverages(studenti[i].ocjene);
}
for (let i = 0; i < studenti.length; i++) {
  console.log(studenti[i].average);
}
sortStudents(studenti);
console.log("---------");
console.log(totalAverage(studenti));
/**
selectBestStudent(studenti);
console.log(totalAverage(studenti));

console.log(findAverages(studenti[0].ocjene));
writeStudent(studenti[1]);
console.log("-----------");
selectGoodStudents(studenti);


a)  Napisati funkciju koja prolazi kroz niz i ispisuje studente koji imaju prosjek veći od 8.5. 
Ukoliko student ne zadovoljava kriterijum, ispiši samo njegovo ime. 
b)  Napisati funkciju koja pronalazi i ispisuje studenta sa najvišim prosjekom. 
c)  Napisati funkciju koja izračunava i ispisuje prosječan prosjek svih studenata u nizu. 
DONEd)  Napisati funkciju koja sortira studente po prosjeku u opadajućem redosledu i ispisuje ih.Go
DONEe)  Za svakog studenta u nizu, dodajte novi ključ prosjek sa odgovarajućom vrijednošću i 
ispišite novonastali niz studenata. */
