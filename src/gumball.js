/*
Gumball
 */

(function(root, factory){

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root['Gumball'] = factory();
    }

})(this, function() {

    var Gumball = {

        resource : {},
        method : {},

        addResource : function(namespace, name, obj) {
            if (!this.resource[namespace]) {
                this.resource[namespace] = {};
            }
            this.resource[namespace][name] = obj;
        },

        addMethod : function(namespace, methodName, cb) {
            if (cb) {
                if (!this.method[namespace]) {
                    this.method[namespace] = {};
                }
                this.method[namespace][methodName] = cb;
            } else {
                this.method[namespace] = methodName;
            }
        },

        getMethod : function(namespace, methodName) {
            return (methodName) ? this.method[namespace][methodName] : this.method[namespace];
        },

        getResource : function(namespace, methodName) {
            return (methodName) ? this.resource[namespace][methodName] : this.resource[namespace];
        }

    };

    return Gumball;

});