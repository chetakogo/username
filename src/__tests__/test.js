/* eslint-disable no-undef */
import Validator from '../js/Validator';

test('validate username', () => {
  const validate = new Validator('User-124_name');
  const result = validate.validateUsername();
  expect(result).toBeTruthy();
});

test('unvalidate username', () => {
  const validate = new Validator('_User-124_name');
  const result = validate.validateUsername();
  expect(result).toBeFalsy();
});
