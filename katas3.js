const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472
];

function showResults(resultsFunctions) {
  const divToAppend = document.getElementById('resultsFunctions');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `${resultsFunctions}`;
  divToAppend.appendChild(paragrafo);
  // return resultsOfFunctions;
}

function kata1() {
  let resultsOfFunctions = [];
  for (let i = 1; i <= 25; i++) {
    resultsOfFunctions.push(i);
  }
  return resultsOfFunctions;
}
showResults(kata1());

function kata2() {
  let resultsOfFunctions = [];
  for (let i = 25; i >= 1; i--) {
    resultsOfFunctions.push(i);
  }
  return resultsOfFunctions;
}
showResults(kata2());

function kata3() {
  let resultsOfFunctions = [];
  for (let i = -1; i >= -25; i--) {
    resultsOfFunctions.push(i);
  }
  return resultsOfFunctions;
}
showResults(kata3());

function kata4() {
  let resultsOfFunctions = [];
  for (let i = -25; i <= -1; i++) {
    resultsOfFunctions.push(i);
  }
  return resultsOfFunctions;
}
showResults(kata4());

function kata5() {
  let resultsOfFunctions = [];
  for (let i = 25; i >= -25; i--) {
    if (i % 2 !== 0) {
      resultsOfFunctions.push(i);
    }
  }
  return resultsOfFunctions;
}

showResults(kata5());

function kata6() {
  let resultsOfFunctions = [];
  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0) {
      resultsOfFunctions.push(i);
    }
  }
  return resultsOfFunctions;
}
showResults(kata6());

function kata7() {
  let resultsOfFunctions = [];
  for (let i = 7; i <= 100; i++) {
    if (i % 7 === 0) {
      resultsOfFunctions.push(i);
    }
  }
  return resultsOfFunctions;
}
showResults(kata7());

function kata8() {
  let resultsOfFunctions = [];
  for (let i = 100; i >= 3; i--) {
    if (i % 3 === 0 || i % 7 === 0) {
      resultsOfFunctions.push(i);
    }
  }
  return resultsOfFunctions;
}
showResults(kata8());

function kata9() {
  let resultsOfFunctions = [];
  for (let i = 5; i <= 100; i++) {
    if (i % 5 === 0 && i % 2 !== 0) {
      resultsOfFunctions.push(i);
    }
  }
  return resultsOfFunctions;
}
showResults(kata9());

function kata10() {
  let resultsOfFunctions = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    resultsOfFunctions.push(sampleArray[i]);
  }
  return resultsOfFunctions;
}
showResults(kata10());

function kata11() {
  let resultsOfFunctions = [];
  for (let i = 1; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 === 0) {
      resultsOfFunctions.push(sampleArray[i]);
    }
  }
  return resultsOfFunctions;
}
showResults(kata11());

function kata12() {
  let resultsOfFunctions = [];
  for (let i = 1; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 !== 0) {
      resultsOfFunctions.push(sampleArray[i]);
    }
  }
  return resultsOfFunctions;
}
showResults(kata12());

function kata13() {
  let resultsOfFunctions = [];
  for (let i = 1; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 8 === 0) {
      resultsOfFunctions.push(sampleArray[i]);
    }
  }
  return resultsOfFunctions;
}
showResults(kata13());

function kata14() {
  let resultsOfFunctions = [];
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    resultsOfFunctions.push(sampleArray[i] * sampleArray[i]);
  }

  return resultsOfFunctions;
}
showResults(kata14());

function kata15() {
  let resultsOfFunctions = 0;
  for (let i = 1; i <= 20; i++) {
    resultsOfFunctions += i;
  }
  return resultsOfFunctions;
}
showResults(kata15());

function kata16() {
  let resultsOfFunctions = 0;
  for (let i = 0; i <= sampleArray.length - 1; i++) {
    resultsOfFunctions += sampleArray[i];
  }

  return resultsOfFunctions;
}
showResults(kata16());

function kata17() {
  let resultsOfFunctions = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] < resultsOfFunctions) {
      resultsOfFunctions = sampleArray[i];
    }
  }
  return resultsOfFunctions;
}
showResults(kata17());

function kata18() {
  let resultsOfFunctions = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > resultsOfFunctions) {
      resultsOfFunctions = sampleArray[i];
    }
  }
  return resultsOfFunctions;
}
showResults(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
  // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
  // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
  // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
  // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
  // implemente o código do kata bonus 5 aqui
}
