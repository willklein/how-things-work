/**
 * @fileoverview Disallow using it(&#39;should ...&#39;) wording
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-it-should"),

    RuleTester = require("eslint").RuleTester;

const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
    };
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions });
ruleTester.run("no-it-should", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "it('does a thing', () => {})"
    ],

    invalid: [
        {
            code: "it('should do a thing')",
            errors: [{
                message: "Don't use it('should do ...'), use it('does ...')",
                type: "CallExpression"
            }]
        }
    ]
});
