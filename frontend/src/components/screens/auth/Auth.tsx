import { AuthService } from "../../../services/auth.service";
import styles from "./Auth.module.scss";
import { AuthForm } from "./AuthForm";
import { IAuthInput } from "./auth.interface";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Auth: FC = (): JSX.Element => {
  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
    watch,
  } = useForm<IAuthInput>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuthInput> = ({
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    password,
    isAgree
  }) => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: emailAddress,
      password: password,
      is_agree: isAgree
    };
    AuthService.sendUser(data);
    navigate("/success");

    reset();
  };

  return (
    <div className={styles.container}>
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        register={registerInput}
        formState={formState}
        watch={watch}
        isPasswordRequired
      />
    </div>
  );
};
