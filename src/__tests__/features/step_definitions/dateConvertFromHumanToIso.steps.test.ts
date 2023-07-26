import { defineFeature, loadFeature } from "jest-cucumber";
import { fromHumanToIso } from "../../../index";

const feature = loadFeature(
  "./src/__tests__/features/dateConvertFromHumanToIso.feature",
);

defineFeature(feature, (test) => {
  test("11/03/2023 can be converted in 20230311", ({ given, when, then }) => {
    let startingDate: string;
    let finalDate: string;
    given("11/03/2023", () => {
      startingDate = "11/03/2023";
    });

    when("convert date", () => {
      // @ts-expect-error
      finalDate = fromHumanToIso(startingDate);
    });

    then(/^the final date is (\d+)$/, (arg0) => {
      expect(finalDate).toBe("20230311");
    });
  });
});
