class ArrayStats {
    constructor(arr) {
        this.sum = arr.reduce((acc, next) => acc + next, 0);
        this.average = this.sum / arr.length;
        this.min = Math.min(...arr);
        this.max = Math.max(...arr);
    }
}
console.log(new ArrayStats([1, 2, 3, 4, 5]))