class heap{
    private heap: number[];
    private maxDepth: number;

    constructor(maxDepth: number){
        if(maxDepth < 1 || maxDepth > 100){
            throw new Error("maxDepth must be between 1 and 100");
        }
        this.heap = [];
        this.maxDepth = maxDepth;
    }

    public insert(value: number): void{
        if(this.heap.length >= this.maxDepth){
            throw new Error("heap is full");
        }
        this.heap.push(value);
    }

    public remove(): number{
        if(this.heap.length == 0){
            throw new Error("heap is empty");
        }
        return this.heap.pop()!;
    }

    public print(): void{
        console.log(this.heap);
    }
}

export default heap;