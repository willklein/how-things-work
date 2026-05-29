/**
 * @fileoverview Prefer using &#39;it&#39; over &#39;test&#39;
 * @author Alex Kessock
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-it"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("prefer-it", rule, {

    valid: [
        "it('should do something')",
        "describe('the thing')"
    ],

    invalid: [
        {
            code: "test('should do something')",
            errors: [{
                message: "Use it, not should.",
                type: "CallExpression"
            }]
        }
    ]
});
