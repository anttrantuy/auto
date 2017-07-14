Feature: Search function lazada

  Scenario Outline: Search function lazada-Test 001-Perform seach with a keyword
    Given User accesses Lazada home page
    When User inputs keyword <keyword> to search text box
    And click Search button
    Then Lazada redirects to products search page <url>
    And Products which are related to <keyword> will be returned

    Examples: 
      | keyword | url                                                     |
      | test    | http://www.lazada.vn/catalog/?q=test                    |
      | canon   | http://www.lazada.vn/canon/?searchredirect=canon        |
      | honda   | http://www.lazada.vn/xe-may/honda/?searchredirect=honda |
