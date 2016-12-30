"use strict";
var Jaffa;
(function (Jaffa) {
    var Element = (function () {
        function Element(type) {
            this.type = type;
            this._events = null;
            this._attributes = null;
        }
        return Element;
    }());
    Jaffa.Element = Element;
})(Jaffa = exports.Jaffa || (exports.Jaffa = {}));
//# sourceMappingURL=Jaffa.Element.js.map