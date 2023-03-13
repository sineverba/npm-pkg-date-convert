"use strict";

import moment = require("moment");

const ISO_FORMAT = "YYYYMMDD";
const HUMAN_FORMAT = "DD/MM/YYYY";

/**
 *
 * Return a ISO date (YYYYMMDD) to human format (DD/MM/YYYY)
 *
 * @param {*} isoDate
 * @param {*} format
 */
export const fromIsoToHuman = (isoDate: string, format: string) => {
  const momentObj = moment(isoDate, ISO_FORMAT);
  let currentFormat = HUMAN_FORMAT;
  if (typeof format !== "undefined") {
    currentFormat = format;
  }
  return momentObj.format(currentFormat);
};

/**
 *
 * Return a human date (DD/MM/YYYY) to ISO format
 *
 * @param {*} humanDate
 * @param {*} format the initial format of human date
 */
export const fromHumanToIso = (humanDate: string, format: string) => {
  let currentFormat = HUMAN_FORMAT;
  if (typeof format !== "undefined") {
    currentFormat = format;
  }
  const momentObj = moment(humanDate, currentFormat);
  return momentObj.format(ISO_FORMAT);
};
