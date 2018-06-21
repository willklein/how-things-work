/**
 * @fileoverview Disallow using it('should ...') wording
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow using it('should ...') wording",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
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

            // give me methods
            "CallExpression": function(node) {
                var calleeNameIsIt = node.callee.name === 'it';
                var startsWithShould = (
                        node.arguments.length &&
                        typeof node.arguments[0].value === 'string' &&
                        node.arguments[0].value.startsWith('should')
                );

                if (calleeNameIsIt && startsWithShould) {
                    context.report({
                        node: node,
                        message: "Don't use it('should do ...'), use it('does ...')",
                        data: {
                            identifier: node.callee.name
                        }
                    });
                }
            }
        };
    }
};
