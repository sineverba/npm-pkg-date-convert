"use strict";

import moment = require("moment");

enum DateFormat {
  IsoFormat = "YYYYMMDD",
  HumanFormat = "DD/MM/YYYY",
}

/**
 *
 * Return a ISO date (YYYYMMDD) to human format (DD/MM/YYYY)
 *
 * @param {*} isoDate
 * @param {*} format
 */
export const fromIsoToHuman = (isoDate: string, format: string) => {
  const momentObj = moment(isoDate, DateFormat.IsoFormat);
  let currentFormat = DateFormat.HumanFormat.toString();
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
  let currentFormat = DateFormat.HumanFormat.toString();
  if (typeof format !== "undefined") {
    currentFormat = format;
  }
  const momentObj = moment(humanDate, currentFormat);
  return momentObj.format(DateFormat.IsoFormat);
};
