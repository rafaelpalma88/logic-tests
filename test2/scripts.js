  function solution(A) {

    const array = A.split('')

    let qtdadePalavrasBalloon = 0;
    let item1 = false;
    let item2 = false;
    let item3 = false;
    let item4 = false;
    let item5 = false;
    let item6 = false;
    let item7 = false;

    for (i = 0; i < array.length; i++) {

      array.filter((item, index) => {
        if (item === 'B' && !item1) {
          item1 = true;
          delete array[index];
        }
      })

      array.filter((item, index) => {

        if (item === 'A' && !item2) {
          item2 = true;
          delete array[index];
        }

      })

      array.filter((item, index) => {

        if (item === 'L' && (!item3 || !item4)) {
          if (!item3) {
            item3 = true;
          } else {
            item4 = true;
          }
          delete array[index];
        }

      })

      array.filter((item, index) => {

        if (item === 'O' && (!item5 || !item6)) {
          if (!item5) {
            item5 = true;
          } else {
            item6 = true;
          }
          delete array[index];
        }

      })  
      
      array.filter((item, index) => {
        if (item === 'N' && (!item7)) {
          item7 = true;
          delete array[index];
        }
      })

      if (item1 && item2 && item3 && item4 && item5 && item6 && item7) {

        item1 = false;
        item2 = false;
        item3 = false;
        item4 = false;
        item5 = false;
        item6 = false;
        item7 = false;
        qtdadePalavrasBalloon = qtdadePalavrasBalloon + 1;

      }

    }

    return qtdadePalavrasBalloon
    
  };

