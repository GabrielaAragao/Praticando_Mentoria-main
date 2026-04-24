function mostrarMensagem(msg) { // defino a função do display  que é mostrar a mensagem dos sensores 
  console.log(msg); // o console.log é para a saida da mensagem no display
}
function esperar(milissegundos) {// definindo uma função do time da mensagem em milesegundos
 }
async function principal() {
  
  mostrarMensagem("sensor 1");
  await (1000); //coloco em milissegundos 
  
  mostrarMensagem("sensor 2"); // foi adicionado o awai em cada sensor para que a mensagem no display seja exibida no tempo definido
  await (2000);
  
  mostrarMensagem ("sensor 3");
  await (2000);
  
  mostrarMensagem("sensor 4");
  await (1000);

  // const number = s1  //definindo o valor do sensor 1
  // const number2 = s2  //definindo o valor do sensor 2
  // const number3 = s3  //definindo o valor do sensor 3
  // const number4 = s4  //definindo o valor do sensor 4


  const numberSensor = [s1, s2, s3, s4]; //definindo os sensores em um array
  const numberValue = [100, 200, 300, 400]; //definindo os valores dos sensores em um array
  const array1 = numberSensor.concat(numberValue); //definindo um array concatenado dos sensores e seus valores
  // é um tipo de array que utilizei para mesclar os arrays para facilitar a leitura e comparados sensores e valores 


  if (numberValue[0] >= 100) { //definindo a condição do sensor 1
    mostrarMensagem("sensor 1 ativado");
  }
  if (numberValue[1] >= 200) { //definindo a condição do sensor 2
    mostrarMensagem("sensor 2 ativado");
  }
  if (numberValue[2] >= 300) { //definindo a condição do sensor 3
    mostrarMensagem("sensor 3 ativado");
  }
  if (numberValue[3] >= 400) { //definindo a condição do sensor 4
    mostrarMensagem("sensor 4 ativado");
  }
  
  
}
// chamando a função
principal();
