

const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export default function emailValidator(email) {
  if (!email) {
    return false;
  }
  if (email.length > 254) {
    return false;
  }

  const valid = tester.test(email);
  if (!valid) {
    return false;
  }

  const parts = email.split('@');
  if (parts[0].length > 64) {
    return false;
  }

  const domainParts = parts[1].split('.');
  if (domainParts.some((part) => part.length > 63)) {
    return false;
  }

  return true;
}
