'use strict';

const moment = require("moment");

const ISO_FORMAT = 'YYYYMMDD';
const HUMAN_FORMAT = 'DD/MM/YYYY';

/**
 * 
 * Return a ISO date (YYYYMMDD) to human format (DD/MM/YYYY)
 * 
 * @param {*} isoDate
 * @param {*} format
 */
function fromIsoToHuman (isoDate, format) {
    const momentObj = moment(isoDate, ISO_FORMAT);
    var currentFormat = HUMAN_FORMAT;
    if (typeof format != "undefined") {
        currentFormat = format;
    }
    return momentObj.format(currentFormat);
}

/**
 * 
 * Return a human date (DD/MM/YYYY) to ISO format
 * 
 * @param {*} humanDate
 * @param {*} format the initial format of human date
 */
function fromHumanToIso (humanDate, format) {
    var currentFormat = HUMAN_FORMAT;
    if (typeof format != "undefined") {
        currentFormat = format;
    }
    const momentObj = moment(humanDate, currentFormat);
    return momentObj.format(ISO_FORMAT);
}

module.exports.fromIsoToHuman = fromIsoToHuman;
module.exports.fromHumanToIso = fromHumanToIso;