// 이메일 validator
export const emailValidator = (value) => {
  const exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!exp.test(value)) return false;
  return true;
};

// 비밀번호 validator (최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자)
export const passwordValidator = (value) => {
  const exp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  if (!exp.test(value)) return false;
  return true;
};
