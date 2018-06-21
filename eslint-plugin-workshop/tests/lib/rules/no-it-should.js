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


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-it-should", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "it('does a thing', () => {})"
    ],

    invalid: [
        {
            code: "it('should do a thing', () => {})",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
