'use strict';

const moment = require("moment");

const ISO_FORMAT = 'YYYYMMDD';
const HUMAN_FORMAT = 'DD/MM/YYYY';

/**
 * 
 * Return a ISO date (YYYYMMDD) to human format (DD/MM/YYYY)
 * 
 * @param {*} isoDate 
 */
function fromIsoToHuman (isoDate) {
    const momentObj = moment(isoDate, ISO_FORMAT);
    const result = momentObj.format(HUMAN_FORMAT);
    return result;
}

/**
 * 
 * Return a human date (DD/MM/YYYY) to ISO format
 * 
 * @param {*} humanDate 
 */
function fromHumanToIso (humanDate) {
    const momentObj = moment(humanDate, HUMAN_FORMAT);
    const result = momentObj.format(ISO_FORMAT);
    return result;
}

module.exports.fromIsoToHuman = fromIsoToHuman;
module.exports.fromHumanToIso = fromHumanToIso;