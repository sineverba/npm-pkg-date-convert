import { fromIsoToHuman, fromHumanToIso } from "../index";

describe("#fromIsoToHuman", function () {
  it("Should return human date", function () {
    var isoDate = "20200908";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    var result = fromIsoToHuman(isoDate);
    expect(result).toBe("08/09/2020");
  });

  it("Should manage hyphen separator", function () {
    var isoDateWithHyphen = "2020-01-02";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    var result = fromIsoToHuman(isoDateWithHyphen);
    expect(result).toBe("02/01/2020");
  });

  it("Should manage a longer date", function () {
    var longerDate = "2022-03-09T12:31:16.699904";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    var result = fromIsoToHuman(longerDate);
    expect(result).toBe("09/03/2022");
  });

  it("Should manage a custom format", function () {
    var isoDate = "19821122";
    var format = "YYYY-MM-DD";
    var result = fromIsoToHuman(isoDate, format);
    expect(result).toBe("1982-11-22");
  });
});

describe("#fromHumanToIso", function () {
  it("Should return ISO date", function () {
    var humanDate = "31/12/2020";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    var result = fromHumanToIso(humanDate);
    expect(result).toBe("20201231");
  });

  it("Should manage a date with hyphen", function () {
    var humanDate = "2020-12-31";
    var result = fromHumanToIso(humanDate, "YYYY-MM-DD");
    expect(result).toBe("20201231");
  });
});