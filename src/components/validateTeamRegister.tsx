export default function validate(value: string) {
  console.log(value);
  let error = '';
  if (!value) {
    console.log('empty string');
    error = 'Please enter a team name.';
  } else if (value.length > 20) {
    console.log('too long');
    error = 'Team name must be less than 20 characters.';
  } else if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
    console.log('not matching regEx');
    error = 'Use only letters, numbers or spaces.';
  }
  return error;
}
