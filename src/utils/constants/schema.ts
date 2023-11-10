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

export const SCHEMA_CREATE_SPORT = yup.object({
  name: yup.string().required(fieldRequired),
  files: yup.array().min(1, "Phải có ít nhất một tệp"),
  address: yup.string().required(fieldRequired),
  price: yup.string().required(fieldRequired),
  description: yup.string().required(),
  phone: yup
    .string()
    .trim()
    .required()
    .matches(/^[0-9]*$/),
});

export const SCHEMA_UPDATE_SPORT = yup.object({
  name: yup.string().required(fieldRequired).trim(),
  file_img: yup.array().min(1, "Phải có ít nhất một tệp"),
  address: yup.string().required(fieldRequired).trim(),
  price: yup.string().required(fieldRequired).trim(),
  description: yup.string().required(fieldRequired).trim(),
  phone: yup
    .string()
    .trim()
    .required()
    .matches(/^[0-9]*$/),
});
