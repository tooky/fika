Feature: Pairing chatters
  Fika helps to build relationships by pairing chatters for short coffee break conversations.

  @wip
  Scenario: no chatters registered
    Given there are no chatters registered
    When pairings are generated
    Then there should be a "not enough chatters" error

  Rule: You can't have a conversation with yourself

    @todo
    Scenario: only one chatter registered
      Given there is only one chatter registered
      When pairings are generated
      Then there should be a "not enough chatters" error

    @todo
    Scenario: three chatters doesn't cause a one person pairing
      Given there are three chatters registered
      When pairings are generated
      Then no chatter is paired with themselves

  Rule: Each chatter has at least one conversation

    @todo
    Scenario: Two chatters results in one conversation
      Given the following chatters
        | Jane  |
        | Priya |
      When pairings are generated
      Then there should be one conversation between "Jane" and "Priya"

    @todo
    Scenario: Three chatters results in two conversations
      Given the following chatters
        | Jane  |
        | Priya |
        | Tony  |
      When pairings are generated
      Then there should be two conversations
      And each of these chatters should be involved in at least one conversation:
        | Jane  |
        | Priya |
        | Tony  |


