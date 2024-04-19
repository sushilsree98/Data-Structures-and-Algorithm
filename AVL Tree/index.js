class Node {
    constructor(val){
        this.val = val;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class avlTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        this.root = this.insertHelper(this.root, val);
    }

    rotateRight(y){
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return x
    }

    rotateLeft(x){
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y
    } 

    getHeight(node){
        if(node === null){
            return 0;
        }
        return node.height
    }

    getBalanceFactor(node){
        if(node === null){
            return 0
        } 
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    insertHelper(node, val){
        if(node === null){
            return (new Node(val))
        }
        if(val < node.val) {
            node.left = this.insertHelper(node.left, val)
        }else if(val > node.val){
            node.right = this.insertHelper(node.right, val);
        }else{
            return node;
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
        let balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor > 1){
            if(val < node.left.val){
                return this.rotateRight(node)
            }else if(val > node.left.val){
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node)
            }
        }

        if(balanceFactor < -1){
            if(val > node.right.val){
                return this.rotateLeft(node);   
            }else if (val < node.right.val){
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node)
            }
        }
        return node;
    }
}

const tree = new avlTree()
tree.insert(56)
tree.insert(24)
tree.insert(85)
tree.insert(90)
tree.insert(95)
console.log(tree)