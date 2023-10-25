import * as yup from "yup";

export const SCHEMA_LOGIN = yup.object({
  username: yup.string().required(),
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
