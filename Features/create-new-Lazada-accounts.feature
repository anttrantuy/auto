Feature: Create new Lazada account

  Scenario Outline: Create new account-Test 001-Create new Lazada account successfully with valid information
    Given User accesses Lazada account creation page
    When User selects gender <gender>
    And Input email address <emailAddress>
    And Input name <name>
    And Input date of birth <dateOfBirth>
    And Input password and confirmed password <password>
    And Click "send" button
    Then System redirects to "Account Manager" screen
    And New account with name <name> is created successfully
    And <emailAddress> is displayed as registered email

    Examples: 
      | gender | emailAddress        | name   | dateOfBirth | password         |
      | Male   | Daniel999@gmail.com | Daniel | 19-11-1985  | password19111985 |
      | Female | Taylor123@gmail.com | Daniel | 22-01-1991  | password22011991 |
      | Male   |                     | Bella  | 19-11-1998  | password19111998 |
