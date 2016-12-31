"use strict";
var Jaffa_Element_1 = require("../src/Jaffa.Element");
describe('Element tests', function () {
    var elem;
    beforeEach(function () {
        elem = Jaffa_Element_1.Jaffa();
    });
    it('Element should not be null', function () {
        expect(elem).not.toBeNull();
    });
    it('Anchor Tag should not be null', function () {
        console.log(elem);
        expect(elem).toBeDefined();
    });
});
//# sourceMappingURL=element-test.js.map