export default function validate(value: string) {
  console.log(value);
  let error = '';
  if (!value) {
    error = 'Please enter a team name.';
  } else if (value.length > 20) {
    error = 'Team name must be less than 20 characters.';
  } else if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
    error = 'Use only letters, numbers or spaces.';
  } else if (!/^\S(.*\S)?$/.test(value)) {
    error = "Team name can't start or end with a space.";
  }
  return error;
}
