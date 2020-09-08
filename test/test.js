'use strict';

var expect = require('chai').expect;
var { fromIsoToHuman, fromHumanToIso } = require('../index');

describe('#fromIsoToHuman', function() {
    
    it('Should return human date', function() {
        var isoDate = "20200908";
        var result = fromIsoToHuman(isoDate);
        expect(result).to.equal("08/09/2020");
    });

})

describe('#fromHumanToIso', function() {

    it('Should return ISO date', function() {
        var humanDate = "31/12/2020";
        var result = fromHumanToIso(humanDate);
        expect(result).to.equal("20201231");
    });
})