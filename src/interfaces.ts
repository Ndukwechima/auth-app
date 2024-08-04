export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordForm {
  email: string;
}

export interface OTPForm {
  otp: string;
  newPassword: string;
  confirmPassword: string;
}
