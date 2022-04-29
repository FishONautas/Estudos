function fatorial(n){
    var fat = 1
        for(c = n; c > 1;c--){
            fat *=c
        }
        return fat//return é sempre o resultado final da função!//
}
var res = fatorial(5)
console.log (`${res}`)