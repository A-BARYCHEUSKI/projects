import { FormState, UseFormRegister } from "react-hook-form";

export interface IAuthInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
}

export interface IAuthFields {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  isPasswordRequired?: boolean;
  watch: any;
}

export interface IForm extends IAuthFields {
  onSubmit: React.FormEventHandler;
}
