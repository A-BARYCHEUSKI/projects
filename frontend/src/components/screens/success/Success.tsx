import { Button } from "../../ui/button/Button";
import styles from "./Success.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Success: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className="grid place-items-center">
        <h1>Thank you for subscription!</h1>
        <Button
          className="bg-[#ffd001] text-lg mt-6 w-80"
          onClick={() => navigate("/")}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};
