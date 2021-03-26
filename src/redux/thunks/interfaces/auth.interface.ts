export interface SIGNUP_VALUES {
  UserChannelType: string;
  FirstName: string;
  LastName: string;
  Email: string;
  CountryCode: number;
  ReferrerCode: string;
  Password: string;
  PhoneNumber: string;
  ConfirmPassword: string;
  CountryPhoneNumberCode: number;
}

export interface LOGIN_VALUES {
  UserDetail: string;
  Password: string;
  UserChannelType: string;
}

export interface PROFILE_VALUES {
  Id: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Password: string;
  ConfirmPassword: string;
  PictureUrl: string;
  Email: string;
  PhoneNumber: string;
}

export interface CHANGE_PASSWORD_URLPARAMS {
  UserId: string;
  currentPassword: string;
  newPassword: string;
}

export interface VERIFY_OTP_REQUEST {
  EmailAddress: string;
  Otp: number;
}

export interface REQUEST_OTP_REQUEST {
  EmailAddress: string;
  Password: string;
  PhoneNumber: string;
  ConfirmPassword: string;
}

export interface PROFILE_INTL_USER_REQUEST {
  IdentificationType: string;
  IdentificationNumber: string;
  IdentificationImage: string;
}
