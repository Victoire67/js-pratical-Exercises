function squareOdd(arr){
    return arr.filter(x=>x % 2 !== 0).map(x=>x**2)
}
