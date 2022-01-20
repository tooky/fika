import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import {Action, Actor} from "@cucumber/screenplay";

type ErrorMessage = () => Action<string>
export const lastErrorMessage: ErrorMessage = () => {
  return (actor: Actor) => {
    return 'fake error message'
  }
}

Given("there are no chatters registered", function () {});
When("pairings are generated", function () {});

Then("there should be a {string} error", function (expectedErrorMessage) {
  const errorMessage = this.defaultActor.ask(lastErrorMessage)
  assert.equal(lastErrorMessage, expectedErrorMessage)
});

