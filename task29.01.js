// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/
let users = [
    {
      "userId": 1,
      "firstName": "Krish",
      "lastName": "Leeg",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@test.tt"
    },
    {
      "userId": 2,
      "firstName": "racks",
      "lastName": "jacson",
      "phoneNumber": "123456",
      "emailAddress": "racks.jacson@test.tt"
    },
    {
      "userId": 3,
      "firstName": "denial",
      "lastName": "roast",
      "phoneNumber": "333b33333",
      "emailAddress": "denial.roast@test.tt"
    },
    {
      "userId": 4,
      "firstName": "devid",
      "lastName": "nego",
      "phoneNumber": "222222222",
      "emailAddress": "devid.neo@test.tt"
    },
    {
      "userId": 5,
      "firstName": "jyne",
      "lastName": "mac",
      "phoneNumber": "111111111",
      "emailAddress": "jone.mac@test.tt"
    }
  ]; 
console.table(users);

var numbers = [0-9];
let CorrectPN = users.find ((phoneNumber) == numbers);
let IncorrectPN = users.find ((phoneNumber) == NaN);                   

if (phoneNumber = CorrectPN) {
  result = true
}
if (phoneNumber = IncorrectPN) {
  alert ("Incorrect Phone Number of the user")
}
