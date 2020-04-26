/*
 * Implement all your JavaScript in this file!
 */
                                               
/*
 * vereficando a ver  a versao do jquery
 * console.log(jQuery.fn.jquery);
*/
//vairaveis de controo - Uso para monitorar e definir oo estados das restricoes impostas
var operC = 'undefined',  truk = 'undefined';
var vinput1,  vinput2, valor, vinput, valor, restriti;

// Função que adiciona os números no Visor quando pressionado os botões
 $('.num').click(function(){

   vinput = $('#display').val();

        valor = $(this).val();
     if(typeof vinput == 'null' || truk != 'undefined'){
        truk = 'undefined';
            $('#display').val(valor);
      }else{
           valor = vinput + $(this).val();
          $('#display').val(valor);
      } 
            
 });

 $('#clearButton').click(function(){
    valor = "";
    $('#display').val(valor );
    truk = 'undefined';
    operC = 'undefined';
  ko = -1;// Variavel - controlo restricao 15, assegir + e depois =
 });

 $('#addButton').click(function(){
  if( truk == 'undefined' && operC != 'undefined' ){ //perminte ralizar etapas 6 e 7 do caso #4 imposto na ficha 
    vinput2 = $('#display').val();
    calcOper(operC, vinput1, vinput2);
    truk ='derrfined';
  operC = 'defined'
  }
    vinput1 = $('#display').val();
    operC ='mais';
    truk  = operC;
 });

 $('#subtractButton').click(function(){
  if( truk == 'undefined' && operC != 'undefined' ){
    vinput2 = $('#display').val();
    calcOper(operC, vinput1, vinput2);
    truk ='derrfined';
  operC = 'defined'
  }
    vinput1 = $('#display').val();
    operC = 'menos';
    truk = operC;
 });

 $('#multiplyButton').click(function(){
  if( truk == 'undefined' && operC != 'undefined' ){
    vinput2 = $('#display').val();
    calcOper(operC, vinput1, vinput2);
    operC = 'clizadu';
  }
    vinput1 = $('#display').val();
    operC = 'mult';
    truk = operC;
   
 });

 $('#divideButton').click(function(){
  if( truk == 'undefined' && operC != 'undefined' ){
    vinput2 = $('#display').val();
    calcOper(operC, vinput1, vinput2);
  }
     vinput1 = $('#display').val();
     operC = 'div';
     truk = operC;
 });

// Função que executa as operações básicas da calculadora
function calcOper(operC, vinput1, vinput2){
    if (operC == "mais"){
        valor = Number(vinput1) + Number(vinput2);
    }else if (operC == "menos"){
              valor =Number(vinput1) - Number(vinput2);
       }else if (operC == "mult"){
                 valor = Number(vinput1) * Number(vinput2);
          }else if(operC == "div"){
                 valor = Number(vinput1) / Number(vinput2);
            }else if(operC == "clizadu"){}
            ko = 0; 
    return  $('#display').val(valor);
 }

 $('#equalsButton').click(function(){
    if(truk == 'undefined'){ // contrala todas as restricaoes impostas no click du botao "igual"
     vinput2 = $('#display').val();
   calcOper(operC, vinput1, vinput2);
   
  truk ='derrfined';
   restriti = operC;
  operC = 'defined'
   } else if (restriti == "mais" && ko == 0 ){ 
      valor += Number(vinput2);
      }else if (restriti == "menos" && ko == 0){
        valor -= Number(vinput2);
          }else if (restriti == "mult" && ko == 0){
            valor *=Number(vinput2);
             }else if(restriti == "div" && ko == 0){
                valor /=Number(vinput2);
             } 
     $('#display').val(valor);
    
 });