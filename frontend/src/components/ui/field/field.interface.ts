import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type TypeInputPropsField = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  IFieldProps;

export interface IField extends TypeInputPropsField {}

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined;
  isPassword?: boolean;
}
