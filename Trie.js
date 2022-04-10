const Node = class Node {
    constructor(value = '') {
        this.value = value;
        this.children = {};
        this.isWordEnd = false;
    }
}

const Trie = class Trie {
    constructor(value = '') {
        this.root = new Node(value);
    }

    // insert
    insert(word) {
        if (!word) return;

        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const charToInsert = word[i];

            if (!(charToInsert in current.children)) {
                current.children[charToInsert] = new Node(charToInsert);
            }

            current = current.children[charToInsert];
        }

        current.isWordEnd = true;
    }

    // search
    search(word) {
        if (!word) return;

        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const charToFind = word[i];

            if (!current.children.hasOwnProperty(charToFind)) {
                return false;
            }

            current = current.children[charToFind];
        }

        return current.isWordEnd;
    }

    // autoComplete
    autoComplete(word) {
        if (!word) return;

        let current = this.root;
        let result = [];

        for (let i = 0; i < word.length; i++) {
            const charToFind = word[i];

            if (!(charToFind in current.children)) {
                return false;
            }

            current = current.children[charToFind];
        }

        const queue = [];
        queue.push([current, word]);

        while (queue.length) {
            const element = queue.shift();
            const node = element[0];
            const word = element[1];

            if (node.isWordEnd) {
                result.push(word);
            }

            for (let i in node.children) {
                queue.push([node.children[i], word + node.children[i].value]);
            }
        }

        return result;
    }
}

export { Node, Trie }