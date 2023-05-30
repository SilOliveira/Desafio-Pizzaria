//getelementbyid
//const pegaValorDaConta=document.getElementById("valorConta")

//function exibirValorDaConta(){
//   console.log(pegaValorDaConta.value)
//}
//pegaValorDaConta.addEventListener("change", exibirValorDaConta);

//addEventListener

//function sendForm(){
//    const pegaValorDaConta=document.getElementById("valorConta");
//    const pegaValorDaTaxa=document.getElementById("valorTaxa");
//    const pegaQuantidadePessoas= document.getElementById("quantidadePessoas");
 //  if(pegaValorDaConta.value =="") {
//    alert("Insira o valor da conta");
 //   }
 //   else if (pegaValorDaTaxa.value ==""){
 //       alert("Insira o valor da taxa");
 //   } else if (pegaQuantidadePessoas.value =="") {
 //       alert("Insira a quantidade de Pessoas");
 //   } else {
 //      formEvent ();
 //   }
//}

function calcularConta (){
  const pegaValorDaConta=document.getElementById("valorConta");
  const pegaValorDaTaxa=document.getElementById("valorTaxa");
  const pegaQuantidadePessoas= document.getElementById("quantidadePessoas");
  const valorCalculoTaxa= parseFloat(pegaValorDaConta.value * pegaValorDaTaxa.value)/100;
  const calcValorFinal= (parseFloat(pegaValorDaConta.value) + parseInt(valorCalculoTaxa))/parseInt(pegaQuantidadePessoas.value);

  document.getElementById("resultado").innerHTML= "O valor a ser pago por cada cliente é de: </br>R$ " + calcValorFinal.toFixed(2);

}

function formEvent(){
    const form=document.getElementById("form");
    form.addEventListener("submit", (e)=> {
        e.preventDefault ();

        calcularConta();
    })
}