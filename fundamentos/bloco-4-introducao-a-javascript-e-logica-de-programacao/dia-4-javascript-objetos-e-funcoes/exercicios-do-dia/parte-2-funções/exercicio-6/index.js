var total = 0

function soma(n){
  for( let i = 0 ; i <= n ; i += 1 ){
    total += i
  }
  return total
}

console.log(soma(10))
