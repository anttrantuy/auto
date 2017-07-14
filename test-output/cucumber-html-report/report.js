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
  "name": "User select gender \u003cgender\u003e",
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
        "Female",
        "",
        "Danny",
        "19-11-1985",
        "password19111985"
      ],
      "line": 17,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;2"
    },
    {
      "cells": [
        "Male",
        "",
        "Bella",
        "19-11-1998",
        "password19111998"
      ],
      "line": 18,
      "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4153296751,
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
  "name": "User select gender Female",
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
  "name": "Input name Danny",
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
  "name": "New account with name Danny is created successfully",
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
  "duration": 8684364288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 19
    }
  ],
  "location": "CreateNewLazadaAccount.user_select_gender(String)"
});
formatter.result({
  "duration": 205871326,
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
  "duration": 121727760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danny",
      "offset": 11
    }
  ],
  "location": "CreateNewLazadaAccount.input_name(String)"
});
formatter.result({
  "duration": 7700440003,
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
  "duration": 640235695,
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
  "duration": 236773209,
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
  "duration": 6231190664,
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
formatter.result({
  "duration": 10347308297,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027account-structure-page__title\u0027]\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.34 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027HSSSC1PCL01547\u0027, ip: \u0027169.254.90.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\DUYNGU~1\\AppData\\Local\\Temp\\scoped_dir16592_8826}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ec911e98f33b5543e85ad55a1311488a\n*** Element info: {Using\u003dxpath, value\u003d//h2[@class\u003d\u0027account-structure-page__title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat stepsDefinition.CreateNewLazadaAccount.system_redirects_to_screen(CreateNewLazadaAccount.java:79)\r\n\tat ✽.Then System redirects to \"Account Manager\" screen(create-new-Lazada-accounts.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danny",
      "offset": 22
    }
  ],
  "location": "CreateNewLazadaAccount.new_account_with_name_is_created_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 0
    }
  ],
  "location": "CreateNewLazadaAccount.is_displayed_as_registered_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 152907070,
  "status": "passed"
});
formatter.before({
  "duration": 179353758,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create new account-Test 001-Create new Lazada account successfully with valid information",
  "description": "",
  "id": "create-new-lazada-account;create-new-account-test-001-create-new-lazada-account-successfully-with-valid-information;;3",
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
  "name": "User select gender Male",
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
  "name": "Input name Bella",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Input date of birth 19-11-1998",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Input password and confirmed password password19111998",
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
  "name": "New account with name Bella is created successfully",
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
  "duration": 12166542386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 19
    }
  ],
  "location": "CreateNewLazadaAccount.user_select_gender(String)"
});
formatter.result({
  "duration": 577851737,
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
  "duration": 106351868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bella",
      "offset": 11
    }
  ],
  "location": "CreateNewLazadaAccount.input_name(String)"
});
formatter.result({
  "duration": 112863234,
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
      "val": "1998",
      "offset": 26
    }
  ],
  "location": "CreateNewLazadaAccount.input_date_of_birth(String,String,String)"
});
formatter.result({
  "duration": 669837998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password19111998",
      "offset": 38
    }
  ],
  "location": "CreateNewLazadaAccount.input_password_and_confirmed_password(String)"
});
formatter.result({
  "duration": 250199732,
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
  "duration": 2558584485,
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
formatter.result({
  "duration": 10268487167,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027account-structure-page__title\u0027]\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.27 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027HSSSC1PCL01547\u0027, ip: \u0027169.254.90.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\DUYNGU~1\\AppData\\Local\\Temp\\scoped_dir16592_8826}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ec911e98f33b5543e85ad55a1311488a\n*** Element info: {Using\u003dxpath, value\u003d//h2[@class\u003d\u0027account-structure-page__title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat stepsDefinition.CreateNewLazadaAccount.system_redirects_to_screen(CreateNewLazadaAccount.java:79)\r\n\tat ✽.Then System redirects to \"Account Manager\" screen(create-new-Lazada-accounts.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bella",
      "offset": 22
    }
  ],
  "location": "CreateNewLazadaAccount.new_account_with_name_is_created_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 0
    }
  ],
  "location": "CreateNewLazadaAccount.is_displayed_as_registered_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 111594444,
  "status": "passed"
});
formatter.uri("search-feature-lazada.feature");
formatter.feature({
  "line": 1,
  "name": "Search function lazada",
  "description": "",
  "id": "search-function-lazada",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search function lazada-Test 001-Perform seach with a keyword",
  "description": "",
  "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User inputs keyword \u003ckeyword\u003e to search text box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Lazada redirects to products search page \u003curl\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Products which are related to \u003ckeyword\u003e will be returned",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;",
  "rows": [
    {
      "cells": [
        "keyword",
        "url"
      ],
      "line": 11,
      "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;1"
    },
    {
      "cells": [
        "test",
        "http://www.lazada.vn/catalog/?q\u003dtest"
      ],
      "line": 12,
      "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;2"
    },
    {
      "cells": [
        "canon",
        "http://www.lazada.vn/canon/?searchredirect\u003dcanon"
      ],
      "line": 13,
      "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;3"
    },
    {
      "cells": [
        "honda",
        "http://www.lazada.vn/xe-may/honda/?searchredirect\u003dhonda"
      ],
      "line": 14,
      "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 218209949,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search function lazada-Test 001-Perform seach with a keyword",
  "description": "",
  "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User inputs keyword test to search text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Lazada redirects to products search page http://www.lazada.vn/catalog/?q\u003dtest",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Products which are related to test will be returned",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchProductsLazada.user_accesses_Lazada_page()"
});
formatter.result({
  "duration": 3553754683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "SearchProductsLazada.user_inputs_keyword_to_search_text_box(String)"
});
formatter.result({
  "duration": 569572213,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductsLazada.click_search_button()"
});
formatter.result({
  "duration": 3135996188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.lazada.vn/catalog/?q\u003dtest",
      "offset": 41
    }
  ],
  "location": "SearchProductsLazada.lazada_redirects_to_products_search_page(String)"
});
formatter.result({
  "duration": 2015610342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 30
    }
  ],
  "location": "SearchProductsLazada.products_which_are_related_to_will_be_returned(String)"
});
formatter.result({
  "duration": 110424117,
  "status": "passed"
});
formatter.after({
  "duration": 1388420,
  "status": "passed"
});
formatter.before({
  "duration": 239583083,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search function lazada-Test 001-Perform seach with a keyword",
  "description": "",
  "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User inputs keyword canon to search text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Lazada redirects to products search page http://www.lazada.vn/canon/?searchredirect\u003dcanon",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Products which are related to canon will be returned",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchProductsLazada.user_accesses_Lazada_page()"
});
formatter.result({
  "duration": 2753593808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "canon",
      "offset": 20
    }
  ],
  "location": "SearchProductsLazada.user_inputs_keyword_to_search_text_box(String)"
});
formatter.result({
  "duration": 461322293,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductsLazada.click_search_button()"
});
formatter.result({
  "duration": 3355766786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.lazada.vn/canon/?searchredirect\u003dcanon",
      "offset": 41
    }
  ],
  "location": "SearchProductsLazada.lazada_redirects_to_products_search_page(String)"
});
formatter.result({
  "duration": 2010717356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "canon",
      "offset": 30
    }
  ],
  "location": "SearchProductsLazada.products_which_are_related_to_will_be_returned(String)"
});
formatter.result({
  "duration": 113150283,
  "status": "passed"
});
formatter.after({
  "duration": 1355706,
  "status": "passed"
});
formatter.before({
  "duration": 199243538,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search function lazada-Test 001-Perform seach with a keyword",
  "description": "",
  "id": "search-function-lazada;search-function-lazada-test-001-perform-seach-with-a-keyword;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User accesses Lazada home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User inputs keyword honda to search text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Lazada redirects to products search page http://www.lazada.vn/xe-may/honda/?searchredirect\u003dhonda",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Products which are related to honda will be returned",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchProductsLazada.user_accesses_Lazada_page()"
});
formatter.result({
  "duration": 2159899523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "honda",
      "offset": 20
    }
  ],
  "location": "SearchProductsLazada.user_inputs_keyword_to_search_text_box(String)"
});
formatter.result({
  "duration": 480471518,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductsLazada.click_search_button()"
});
formatter.result({
  "duration": 3472091928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.lazada.vn/xe-may/honda/?searchredirect\u003dhonda",
      "offset": 41
    }
  ],
  "location": "SearchProductsLazada.lazada_redirects_to_products_search_page(String)"
});
formatter.result({
  "duration": 2008618851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "honda",
      "offset": 30
    }
  ],
  "location": "SearchProductsLazada.products_which_are_related_to_will_be_returned(String)"
});
formatter.result({
  "duration": 137762421,
  "status": "passed"
});
formatter.after({
  "duration": 1358913,
  "status": "passed"
});
});