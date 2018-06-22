
#### How Compilers, Linters, and Other Cool Things Work

---

# Hello, New Friends! ❤️

---

![family](fun/family.jpg)

---

# I really, really, love this stuff...

---

![DinosaurJS](fun/dinosaurjs.jpg)

---

![ESLint](fun/eslint.jpg)

---

![Babel](fun/babel.png)

---

![React Denver](fun/react-denver.png)

---

![conference talk](fun/scaling.png)
![conference talk](fun/scaling3.png)
![conference talk](fun/e2e.png)

---

![Developers](fun/developers.gif)

---

#### How Compilers, Linters, and Other Cool Things Work

---

# How Things Work

---


![what am i doing](fun/no-idea.webp)

---


![gets it](fun/gets-it.webp)

---

![unicorn](fun/unicorn.jpg)
Follow me, and become a unicorn!

---

# Open your favorite terminal

---

# Flex your git fu

---

# Let the Installs Roll

---

#### Required: Node/NPM

Use NVM if you have it or https://nodejs.org

---

node -v  
v10.4.1  
npm -v  
6.1.0

---

## Yarn  

`brew install yarn --without-node`  
https://yarnpkg.com/

---

## VS Code
https://code.visualstudio.com

---

# Find Our Why

---

# Two Types of Problems

---

# When I join a team...

---

# When I code review...

---

# Automate Best Practices

---

![adventure](fun/adventure.webp)

---

## Exercise!
![dino exercise](fun/jump.webp)

---

# Run an App

---

`git clone git@github.com:willklein/how-things-work.git`

---

`cd how-things-work/realworld-app`

---

`yarn`
or
`npm install`

---

`yarn start`
or
`npm run start`

---

# Let's Look at an Example

---

## Exercise!
![dino exercise](fun/climb.gif)

---

# Install ESLint

---

`yarn add eslint`  
or  
`npm install eslint --save-dev`

---

## Exercise!
![dino exercise](fun/bar.gif)

---

# Configure ESLint

---

`npx eslint --init`

---

### eslint:recommended

Checked rules enabled:
https://eslint.org/docs/rules/

---

# Remember that React plugin?

---

# Plugins for XYZ

---

- any adopted library/framework
- accessbility
- security
- DOM APIs

---

## Exercise!
![dino exercise](fun/climb.gif)

---

Search NPM: https://www.npmjs.com/  
for: `eslint-config`  
& `eslint-plugin`

---

# But how???

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

# Stages of a Compiler

---

1. Parsing
2. Transformation
3. Code Generation

---

# Parsing
- Lexical Analysis
- Syntactic Analysis

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

# ...

---

# Abstract Syntax Tree!!!

---
## Exercise!

http://astexplorer.net/

---

# The AST
# is the Key

---

# How Do Linters Work?

---

## load configuration & rules

---

## iterate through files

---

## parse each file (Program)

---

## walk the syntax tree

---

## apply matching rules

---

## report on rule breakers

---

## (optional) fix what's broken

---


1. load configuration & rules
- iterate through files
- parse each file (Program)
- walk the syntax tree
- apply matching rules
- report on rule breakers
- (optional) fix what's broken

---

# Let's Look at an Example

---

https://github.com/eslint/eslint/blob/master/lib/rules/no-nested-ternary.js

---

## Break!

---

## Exercise!
![dino exercise](fun/soccer.gif)

---

# Write an ESLint Rule

---

https://github.com/eslint/generator-eslint  
`npm i -g yo`  
`npm i -g generator-eslint`

---

`yo eslint`

---

1. Identify a problem
2. Generate a plugin & rule
3. Create a test case
4. Implement rule
5. Profit!

---



---

# What else could we do?

---

# Compilers

---

![Babel](fun/babel.png)

---

# Examine a Babel Plugin

---

https://github.com/babel/babel

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

# What have we learned?

---

- how linters work
- how compilers work
- how to write an ESLint plugin
- how to write a Babel plugin
- ASTs are cool
- the answer to life, the universe, and everything

---

# Go Forth & 10x