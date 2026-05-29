/**
 * @fileoverview Prefer using 'it' over 'test'
 * @author Alex Kessock
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prefer using 'it' over 'test'",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: function(node) {
                if (node.callee.name === 'test') {
                    context.report({
                        message: 'Use it, not should.',
                        node,
                        fix: function(fixer) {
                            return fixer.replaceText(node.callee, 'it');
                        }
                    })
                }
            }
            // give me methods

        };
    }
};
