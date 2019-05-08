import { Accounts } from 'meteor/accounts-base';

// Users usernames rather than email addresses
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});