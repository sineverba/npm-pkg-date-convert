import { fromIsoToHuman, fromHumanToIso } from "../index";

describe("#fromIsoToHuman", function () {
  it("Should return human date", function () {
    const isoDate = "20200908";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    const result = fromIsoToHuman(isoDate);
    expect(result).toBe("08/09/2020");
  });

  it("Should manage hyphen separator", function () {
    const isoDateWithHyphen = "2020-01-02";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    const result = fromIsoToHuman(isoDateWithHyphen);
    expect(result).toBe("02/01/2020");
  });

  it("Should manage a longer date", function () {
    const longerDate = "2022-03-09T12:31:16.699904";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    const result = fromIsoToHuman(longerDate);
    expect(result).toBe("09/03/2022");
  });

  it("Should manage a custom format", function () {
    const isoDate = "19821122";
    const format = "YYYY-MM-DD";
    const result = fromIsoToHuman(isoDate, format);
    expect(result).toBe("1982-11-22");
  });
});

describe("#fromHumanToIso", function () {
  it("Should return ISO date", function () {
    const humanDate = "31/12/2020";
    /**
     * Suppress the error
     */
    // @ts-expect-error
    const result = fromHumanToIso(humanDate);
    expect(result).toBe("20201231");
  });

  it("Should manage a date with hyphen", function () {
    const humanDate = "2020-12-31";
    const result = fromHumanToIso(humanDate, "YYYY-MM-DD");
    expect(result).toBe("20201231");
  });
});
