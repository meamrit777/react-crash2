const emailRegex = new RegExp(/\S+@\S+\.\S+/);
export const emailValidator = (value: any) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,16}$/);
export const passwordValidator = (value: any) => (passwordRegex.test(value) ? '' : 'Please enter a valid password.');
