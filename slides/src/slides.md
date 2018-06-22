
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

Placeholder: react denver

---

Placeholder: thumbnail conference talks

---

Developers! Developers! Developers!!!

---

#### How Compilers, Linters, and Other Cool Things Work

---

# How Things Work

---

Placeholder: i have no idea what i'm doing meme

---

Placeholder: oh i get it/nodding kid at computer meme

---

Placeholder: cat on unicorn lazers  
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

#### Along the way, unlock secret knowledge

---

# Compilers

---

# Linters

---

# Compilers Again!

---

Placeholder: I'm going on an adventure

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

## Exercise!
![dino exercise](fun/climb.gif)

---

# Install ESLint

---
`npm install eslint@next --save-dev`

---

## Exercise!
![dino exercise](fun/bar.gif)

---

# Configure ESLint

---

Setup ESLint
`npx eslint --init`

---

### eslint:recommended

Checked rules enabled:
https://eslint.org/docs/rules/

---

## Exercise!
![dino exercise](fun/climb.gif)

---

Search NPM: https://www.npmjs.com/  
for: `eslint-config`   
& `eslint-plugin`

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

http://astexplorer.net/

---

# The AST
# is the Key

---

# Linters

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
- (optional) fix what's 

---

# Look at an Example

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