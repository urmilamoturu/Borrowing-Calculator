Feature: Calculate Borrowing Estimate
    As a customer
    I want to calculate my borrowing estimate

    @regression @calculate
    Scenario Outline: Calculate Borrowing Power
        Given I navigate to borrowing power calculator
        When I enter my <applicationType>, <numberOfDependents> details
        And  I enter my <income>,<otherIncome> income
        And I enter my expenses
        And I click on calculate borrowing power button
        Then I validate borrowing estimate to be <estimate>
        Examples:
            | applicationType | numberOfDependents | income | otherIncome | estimate |
            | single          | 0                  | 80000  | 10000       | 508,000  |
    # For the give set of test data brrowing estimate from the current production page is 508,000 unlike 507,000 from the technical assessment document. Hence updated the test data.

    @regression @startover
    Scenario Outline: Validate form is clear after clickiing on start over button
        Given I navigate to borrowing power calculator
        When I enter my <applicationType>, <numberOfDependents> details
        And  I enter my <income>,<otherIncome> income
        And I enter my expenses
        And I click on calculate borrowing power button
        Then I validate borrowing estimate to be <estimate>
        When I click on start over
        Then I validate form is clear
        Examples:
            | applicationType | numberOfDependents | income | otherIncome | estimate |
            | single          | 0                  | 80000  | 10000       | 508,000  |