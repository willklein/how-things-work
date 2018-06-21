# eslint-plugin-willklein

Teaching how to write plugins at a workshop

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-willklein`:

```
$ npm install eslint-plugin-willklein --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-willklein` globally.

## Usage

Add `willklein` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "willklein"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "willklein/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





