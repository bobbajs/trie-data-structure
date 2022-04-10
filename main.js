import { Node, Trie } from './Trie.js';

const trie = new Trie();

trie.insert('dogs');
trie.insert('doggie');
trie.insert('doggo');
trie.insert('doggy');

console.log(trie.autoComplete('d'))