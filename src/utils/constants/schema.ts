import * as yup from "yup";
const fieldRequired = "Không được bỏ trống!";
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

export const SCHEMA_CHANGE_PASSWORD = yup.object({
  old_password: yup
    .string()
    .required(fieldRequired)
    .min(6, "Mật khẩu phải chứa 6 ký tự"),
  new_password: yup
    .string()
    .required(fieldRequired)
    .min(6, "Mật khẩu phải chứa 6 ký tự"),
  new_password_confirm: yup
    .string()
    .required(fieldRequired)
    .oneOf([yup.ref("new_password")], "Mật khẩu nhập lại không chính xác"),
});
