import { Then, After } from 'cucumber';
import myAccount from '../pageobjects/ta-myaccount.page';
import yahooPage from '../pageobjects/yahoo-search.page';

Then(/^I should see a list of search results$/, function () {
  yahooPage.isSearched().should.be.true;
  var a=yahooPage.searchResultGetText();
  console.log('print the text',a);
});

// *** belongs to ta-loging  feature
Then(/^I should see the message "([^"]*)" on my account page$/, function (message) {
  myAccount.getUserInfo().should.equal(message);
});


