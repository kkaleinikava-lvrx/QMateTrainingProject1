import { Given, When, Then } from '@wdio/cucumber-framework';

function isItFriday(today) {
  return 'Nope';
}

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  common.assertion.expectEqual(this.actualAnswer, expectedAnswer);
  // assert.strictEqual(this.actualAnswer, expectedAnswer);
});