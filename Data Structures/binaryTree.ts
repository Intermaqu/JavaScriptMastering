class binaryTree{
    root: node;

    constructor(value: number){
        this.root = new node(value, 0);
    }

    public insert(value: number): void{
        this.root.insert(value);
    }

    public printInOrder(): void{
        this.root.printInOrder();
    }

    public getHeight(): number{
        const height = this.height(this.root) 
        console.log(height)
        return height
    }

    private height(node: node | undefined): number{
        if(node == undefined)
            return 0

        const lheight = this.height(node.left)
        const rheight = this.height(node.right)

        return lheight > rheight ? lheight + 1 : rheight + 1;
    }

    public find(value: number): node | undefined{
        let current: node | undefined = this.root;

        while(current != undefined){
            if(current.value == value){
                console.log(`Found value: ${value}`)
                return current;
            }
            value <= current.value ? current = current.left : current = current.right;
        }

        console.log(`Could not find value: ${value}`)
        return undefined;
    }

    public findLowestValue(): number{
        let current: node | undefined = this.root;

        while(current != undefined){
            if(current.left == undefined){
                console.log(`Found lowest value: ${current.value}`)
                return current.value;
            }
            current = current.left;
        }

        throw new Error("Tree is empty");
    }

    public findHighestValue(): number{
        let current: node | undefined = this.root;

        while(current != undefined){
            if(current.right == undefined){
                console.log(`Found highest value: ${current.value}`)
                return current.value;
            }
            current = current.right;
        }

        throw new Error("Tree is empty");
    }

    public removeNodeByValue(value: number): void{
        let current: node | undefined = this.root;

        while(current !== undefined){
            if(current.left !== undefined && current.left.value == value){
                current.left = undefined;
                console.log(`Removed value: ${value}`)
                return;
            }
            
            if(current.right !== undefined && current.right.value == value){
                current.right = undefined;
                console.log(`Removed value: ${value}`)
                return;
            }

            value <= current.value ? current = current.left : current = current.right;
        }
        console.log(`Could not find value: ${value}`)
    }

    public printTreeByLevel(){
        const height = this.getHeight()
        for(let i = 1; i <= height; i++){
            process.stdout.write(`Depth ${i-1}: `);
            this.printCurrentLevel(this.root, i)
            process.stdout.write(`\n`);
        }
    }

    printCurrentLevel(node: node | undefined, level: number){
        if(node === undefined){
            return;
        }

        if(level === 1){
            process.stdout.write(node.value + " ");
            return
        }

        this.printCurrentLevel(node.left, level - 1)
        this.printCurrentLevel(node.right, level - 1)
    }
    

}

class node{
    left: node | undefined;
    right: node | undefined;
    value: number;
    depth: number;
    constructor(value: number, depth?: number){
        this.value = value;
        this.left = undefined;
        this.right = undefined;
        this.depth = depth || 0
    }

    public insert(value: number): void{
        if(value <= this.value){
            this.left == undefined ? this.left = new node(value, this.depth + 1) : this.left.insert(value);
            return
        }

        this.right == undefined ? this.right = new node(value, this.depth + 1) : this.right.insert(value);
    }

    public printInOrder(): void{
        this.left != undefined && this.left.printInOrder();
        console.log(`Depth: ${this.depth}, Value: ${this.value}`);
        this.right != undefined && this.right.printInOrder();
    }
    
    public printPreOrder(): void{
        console.log(`Depth: ${this.depth}, Value: ${this.value}`);
        this.left != undefined && this.left.printPreOrder();
        this.right != undefined && this.right.printPreOrder();
    }

    public printPostOrder(): void{
        this.left != undefined && this.left.printPostOrder();
        this.right != undefined && this.right.printPostOrder();
        console.log(`Depth: ${this.depth}, Value: ${this.value}`);
    }
}


export default binaryTree