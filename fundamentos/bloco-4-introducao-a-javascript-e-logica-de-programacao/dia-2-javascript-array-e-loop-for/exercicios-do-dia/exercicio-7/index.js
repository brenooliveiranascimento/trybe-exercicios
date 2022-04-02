let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var min = Math.min( ...numbers );

for( let retorno of numbers ){
  if( retorno == min ){
    console.log(retorno)
  }
}