$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create-new-Lazada-accounts.feature");
formatter.feature({
  "line": 1,
  "name": "Create new Lazada account",
  "description": "",
  "id": "create-new-lazada-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create new account-Test 001-Create new Lazada account successfully with valid information",
  "description": "",
  "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada account creation page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects gender \u003cgender\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Input email address \u003cemailAddress\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Input name \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Input date of birth \u003cdateOfBirth\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Input password and confirmed password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click \"send\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "System redirects to \"Account Manager\" screen",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "New account with name \u003cname\u003e is created successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\u003cemailAddress\u003e is displayed as registered email",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;",
  "rows": [
    {
      "cells": [
        "gender",
        "emailAddress",
        "name",
        "dateOfBirth",
        "password"
      ],
      "line": 16,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;1"
    },
    {
      "cells": [
        "Male",
        "",
        "Daniel",
        "19-11-1985",
        "password19111985"
      ],
      "line": 17,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;2"
    },
    {
      "cells": [
        "Female",
        "",
        "Daniel",
        "22-01-1991",
        "password22011991"
      ],
      "line": 18,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;3"
    },
    {
      "cells": [
        "Male",
        "",
        "Bella",
        "19-11-1998",
        "password19111998"
      ],
      "line": 19,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4651647101,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create new account-Test 001-Create new Lazada account successfully with valid information",
  "description": "",
  "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada account creation page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects gender Male",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Input email address ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Input name Daniel",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Input date of birth 19-11-1985",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Input password and confirmed password password19111985",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click \"send\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "System redirects to \"Account Manager\" screen",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "New account with name Daniel is created successfully",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": " is displayed as registered email",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewLazadaAccount.user_accesses_Lazada_account_creation_page()"
});
formatter.result({
  "duration": 7474891860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 20
    }
  ],
  "location": "CreateNewLazadaAccount.user_selects_gender(String)"
});
formatter.result({
  "duration": 235578186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "CreateNewLazadaAccount.input_email_address(String)"
});
formatter.result({
  "duration": 1794024439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daniel",
      "offset": 11
    }
  ],
  "location": "CreateNewLazadaAccount.input_name(String)"
});
formatter.result({
  "duration": 99774434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 20
    },
    {
      "val": "11",
      "offset": 23
    },
    {
      "val": "1985",
      "offset": 26
    }
  ],
  "location": "CreateNewLazadaAccount.input_date_of_birth(String,String,String)"
});
formatter.result({
  "duration": 648714068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password19111985",
      "offset": 38
    }
  ],
  "location": "CreateNewLazadaAccount.input_password_and_confirmed_password(String)"
});
formatter.result({
  "duration": 224035923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"send\"",
      "offset": 6
    }
  ],
  "location": "CreateNewLazadaAccount.click_button(String)"
});
formatter.result({
  "duration": 2993621736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Account Manager\"",
      "offset": 20
    }
  ],
  "location": "CreateNewLazadaAccount.system_redirects_to_screen(String)"
});
