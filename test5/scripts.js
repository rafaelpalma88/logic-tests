  function solution(ciclos) {

    let altura = 1;
    let ciclo = 'PRIMAVERA';

    for (let i = 1; i <= ciclos; i++ ) {

      if (ciclo === 'PRIMAVERA') {

        altura = altura * 2;
        ciclo = 'INVERNO';
      
      } else if (ciclo === 'INVERNO') {
      
        altura = altura + 1;
        ciclo = 'PRIMAVERA';
      
      }

    }
    console.log(altura);
    
  };

