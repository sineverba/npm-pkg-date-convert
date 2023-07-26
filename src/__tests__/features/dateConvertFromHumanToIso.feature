Feature: Convert date from human to ISO
  It converts a human date (11/03/2023) in ISO date (20230311)

  Scenario: 11/03/2023 can be converted in 20230311
    Given 11/03/2023
    When convert date
    Then the final date is 20230311