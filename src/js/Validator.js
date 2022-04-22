/* eslint-disable no-console */
export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return ((/\w-/).test(this.username) && (!(/[0-9]{4,}/).test(this.username)) && (!(/^[0-9-_]/).test(this.username)) && (!(/[0-9-_]$/).test(this.username)));
  }
}

const result = new Validator('L_yub194-4f7');
console.log(result.validateUsername());
