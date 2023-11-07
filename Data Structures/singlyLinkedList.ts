class SLL{
    public head: node;

    constructor(value: number){
        this.head = new node(value);
    }

    public push(value: number): void{
        let current = this.head;
        while(current.next !== undefined){
            current = current.next;
        }
        current.next = new node(value);
    }

    public unshift(value: number): void{
        let newHead = new node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    public pop(): void{
        let current = this.head;
        while(current.next !== undefined){
            if(current.next.next == undefined){
                current.next = undefined;
                return;
            }
            current = current.next;
        }
    }

    public shift(): void{
        this.head = this.head.next!;
    }

    public print(): void{
        let current = this.head;
        while(current !== undefined){
            process.stdout.write(`${current.value} `);
            current = current.next!;
        }
        process.stdout.write("\n");
    }

    public length(): number{
        let current = this.head;
        let count = 0;
        while(current !== undefined){
            count++;
            current = current.next!;
        }
        return count;
    }

    public insertBefore(value: number, newValue: number): void{
        let current = this.head;
        while(current !== undefined){
            if(current.next!.value === value){
                let newNode = new node(newValue);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next!;
        }
    }

    public remove(value: number): void{
        let current = this.head;
        while(current !== undefined){
            if(current.next!.value === value){
                current.next = current.next!.next;
                return;
            }
            current = current.next!;
        }
    }

    public reverse(): void{
        let current = this.head;
        let prev: node | undefined = undefined;
        let next: node | undefined = undefined;
        while(current !== undefined){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next!;
        }
        this.head = prev!;
    }
}





class node{
    public value: number;
    public next: node | undefined;

    constructor(value: number){
        this.value = value;
        this.next = undefined;
    }
}

export default SLL;