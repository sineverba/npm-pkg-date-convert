Feature: Convert date from ISO to human
  It converts an ISO date (20230311) in human date (11/03/2023)

  Scenario: 20230311 can be converted in 11/03/2023
    Given 20230311
    When convert date
    Then the final date is 11/03/2023