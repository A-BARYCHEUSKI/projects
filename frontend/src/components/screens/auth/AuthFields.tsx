import {
    emailRegex, nameRegex,
    passwordRegex,
    phoneNumberRegex,
} from "../../../shared/regex";
import { Field } from "../../ui/field/Field";
import { FC, useRef, useState } from "react";

export const AuthFields: FC<any> = ({
  register,
  formState: { errors },
  isPasswordRequired = false,
  watch,
}): JSX.Element => {
  const password = useRef({});
  password.current = watch("password", "");

  const [minLength, setMinLength] = useState(8);

  const onKeyDown = function(e: KeyboardEvent) {
      if (e.key === 'Backspace') {
          console.log('delete');
          setMinLength(0);
      }
  };

  return (
    <>
      <Field
        {...register("firstName", {
          required: "First Name is required",
          minLength: {
            value: 4,
            message: "First Name must be at least 4 characters",
          },
          maxLength: {
            value: !navigator.userAgent.includes("Chrome") ? 40 : 28,
            message: "First Name must be less than 28 characters",
          },
          pattern: {
              value: nameRegex,
              message: "Please enter a valid first name",
          },
        })}
        placeholder="Votre prenom"
        error={errors.firstName}
      />
      <Field
        {...register("lastName", {
          required: "Last Name is required",
          minLength: {
            value: 4,
            message: "Last Name must be at least 4 characters",
          },
          maxLength: {
            value: 28,
            message: "Last Name must be less than 28 characters",
          },
          pattern: {
              value: nameRegex,
              message: "Please enter a valid first name",
          },
        })}
        placeholder="Votre nom"
        error={errors.lastName}
        style={{minWidth: '400px'}}
      />
      <Field
        {...register("phoneNumber", {
          required: "Phone Number is required",
          minLength: {
            value: minLength,
            message: "Phone Number must be at least 8 characters",
          },
          maxLength: {
            value: 16,
            message: "Phone Number must be less than 16 characters",
          },
          pattern: {
            value: phoneNumberRegex,
            message: "Ce champ est requis",
          },
        })}
        placeholder="Numéro de téléphone"
        error={errors.phoneNumber}
        onKeyDown={onKeyDown}
      />
      <Field
        {...register(
          "emailAddress",
          isPasswordRequired
            ? {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Please enter a valid email address",
                },
              }
            : {}
        )}
        placeholder="Votre email"
        error={errors.emailAddress}
      />
      <Field
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 28,
            message: "Password must be less than 28 characters",
          },
          pattern: {
              value: passwordRegex,
              message: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
          },
        })}
        placeholder="Votre mot de passe"
        error={errors.password}
        name="password"
        isPassword
      />

      <Field
        type="password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 28,
            message: "Password must be less than 28 characters",
          },
          validate: (value: string) =>
            value === password.current || "The passwords do not match",
        })}
        placeholder="Confirmez vorte mot de passe"
        error={errors.confirmPassword}
        isPassword
      />

      <div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 m-[16px_0_8px]">
          <Field
            type='checkbox'
            className="w-4 h-4 cursor-pointer accent-bluemain shrink-0 border"
            {...register("isAgree", {
              required: {
                value: true,
              },
            })}
          />
          <p className="text-sm text-gray-600">
            J'ai lu et accepté les conditions générales d'utilisation de Wiregate
          </p>
        </div>
        {errors.isAgree && (
          <span className="mb-3 text-xs text-red-500">
            {errors.isAgree.message}
          </span>
        )}
      </div>
    </>
  );
};
