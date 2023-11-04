import * as yup from "yup";

export const SCHEMA_LOGIN = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
export const SCHEMA_SIGNUP = yup.object({
  email: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Định dạng không hợp lệ"
    ),
  username: yup.string().required(),
});

export const SCHEMA_VERIFY_CODE = yup.object({
  email: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Định dạng không hợp lệ"
    ),
  verify_code: yup.string().required(),
  new_password: yup.string().required(),
  password_confirm: yup.string().required(),
});

export const FORGOT_PASSWORD_SCHEMA = yup.object({
  email: yup.string().min(6).max(30).email("isEmail").required("isRequired"),
});
