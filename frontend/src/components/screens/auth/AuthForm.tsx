import { Button } from "../../../components/ui/button/Button";
import { AuthFields } from "./AuthFields";
import { IForm } from "./auth.interface";
import { FC } from "react";

export const AuthForm: FC<IForm> = ({
  register,
  formState,
  isPasswordRequired,
  onSubmit,
  watch,
}): JSX.Element => {
  return (
    <div
      className={
        "w-full min-w-[295px] max-w-[1000px] rounded-[14px] bg-white p-[0_30px_43px] font-OpenSans sm:max-w-[540px]"
      }
    >
      <form onSubmit={onSubmit}>
        <div className="my-[29px] ">
          <div className="mb-[10px] text-2xl text-bluemain decoration-bluemain sm:text-[32px] lg:text-[36px]">
            Accueillir
          </div>
          <div className="mb-[10px] text-[18px] text-gray-600">
            Bienvenue sur le terrain d'essai "Wiregate" !
          </div>
          <div className="text-base text-gray-600">
            Cette tâche de test est conçue pour 30 minutes. Bonne chance{" "}
          </div>
        </div>
        <AuthFields
          register={register}
          formState={formState}
          isPasswordRequired={isPasswordRequired}
          watch={watch}
        />
        <Button
          className="bg-[#ffd001]"
          disabled={!formState.isValid}
        >
          S'inscrire{" "}
        </Button>
        <div className="text-center text-base text-gray-600">
          Vous avez déjà un compte?{" "}
        </div>
      </form>
    </div>
  );
};
