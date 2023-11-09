/* eslint-disable @typescript-eslint/no-non-null-assertion */
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd: boolean = false;

  constructor(isEnd?: boolean) {
    if (isEnd) this.isEnd = isEnd;
  }

  addChild(char: string, isEnd: boolean = false): TrieNode {
    const childNode = new TrieNode(isEnd);
    this.children.set(char, childNode);
    return childNode;
  }

  hasChild(char: string): boolean {
    return this.children.has(char);
  }

  getChild(char: string): TrieNode | null {
    const childNode = this.children.get(char);
    return childNode !== undefined ? childNode : null;
  }
}

class Trie {
  root = new TrieNode();

  insert(word: string): void {
    let node = this.root;

    for (let i = 0, wordLength = word.length; i < wordLength; i += 1) {
      const char = word.charAt(i);

      if (node.hasChild(char)) node = node.getChild(char)!;
      else node = node.addChild(char);
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    return this.getNode(word)?.isEnd ?? false;
  }

  startsWith(prefix: string): boolean {
    return this.getNode(prefix) !== null;
  }

  private getNode(prefix: string): TrieNode | null {
    let node = this.root;

    for (let i = 0, prefixLength = prefix.length; i < prefixLength; i += 1) {
      const char = prefix.charAt(i);

      if (!node.hasChild(char)) return null;

      node = node.getChild(char)!;
    }

    return node;
  }
}
