import { defineFeature, loadFeature } from "jest-cucumber";
import { fromIsoToHuman } from "../../../index";

const feature = loadFeature(
  "./src/__tests__/features/dateConvertFromIsoToHuman.feature"
);

defineFeature(feature, (test) => {
  test("20230311 can be converted in 11/03/2023", ({ given, when, then }) => {
    let startingDate: string;
    let finalDate: string;

    given("20230311", () => {
      startingDate = "20230311";
    });

    when("convert date", () => {
      // @ts-expect-error
      finalDate = fromIsoToHuman(startingDate);
    });

    then("the final date is 11/03/2023", () => {
      expect(finalDate).toBe("11/03/2023");
    });
  });
});
