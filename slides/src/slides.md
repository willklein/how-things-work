
#### How Compilers, Linters, and Other Cool Things Work

---

#### Required: Node/NPM

---

node -v  
v10.4.1

npm -v  
6.1.0

---

# The Project

---

git clone git@github.com:willklein/how-things-work.git

---

> npm install

---

# Install ESLint

---

### Exercise

Install ESLint
> npm install eslint@next --save-dev

---

# Configure ESLint

---

### Exercise

Setup ESLint
> npx eslint --init

---

### eslint:recommended

Checked rules enabled:
https://eslint.org/docs/rules/

---

# Add a Shared Config

---

### Exercise

Search NPM for a config and set one up
https://www.npmjs.com/search?q=eslint-config&ranking=popularity

---

# Add an ESLint Plugin

---

### Exercise

Search NPM for a plugin and set one up
https://www.npmjs.com/search?q=eslint-plugin

---

# Compilers

---

### How does this work?
`
// Life, Universe, and Everything
var answer = 6 * 7;
`  
=>  
`
100011101010111010100011
`

---

### Tokenize
`
[var] [answer] [=] [6] [*] [7][;]
`

---

### Parse
`
[var] [answer] [=] [6] [*] [7][;]
`  
...  
?

---

# Magical Tree

---

## Abstract...

---

## Syntax...

---

## Tree!

---

# Abstract Syntax Tree

---

http://astexplorer.net/

---

# The AST
# is the Key

---

# Linters

---

# Write an ESLint Rule

---

# Write a Test Case

---

# Write a Rule from Scratch

---

# Compilers

---

# Babel

---

# Examine a Babel Plugin

---

# Setup a Custom Babel Plugin

---

# Write Our Own Babel Plugin

---

# Codemods

---

https://github.com/facebook/jscodeshift

---

# Cool Stuff

---

# Practical

---

# Scaling Tribal Knowledge

---

# Automate Conventions

---

# Challenge

---

Pick one:
- write your OWN linting rule
- implement a linting rule for xyz
- write your OWN Babel plugin
- implement a Babel plugin for xyz

---

# Go Forth & 10x