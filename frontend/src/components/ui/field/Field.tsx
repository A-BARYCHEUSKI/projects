import { IField } from "./field.interface";
import { useState } from "react";
import { forwardRef } from "react";

export const Field = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, isPassword = false, type = "text", ...props },
    ref
  ): JSX.Element => {
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

    const [isInitial, setIsInitial] = useState<boolean>(true);
    const [isFilled, setIsField] = useState<boolean>(false);

    return (
      <div className={`mb-[1rem]`}>
        <div>
          <span className={"mb-[3px] text-sm font-[600] text-gray-400"}>
            {placeholder}
          </span>
          <span className="font-[500] text-red-500"> &#42;</span>
        </div>
        <div className="flex items-center justify-end">
          <input
            ref={ref}
            type={!isPassword ? type : isVisiblePassword ? "text" : "password"}
            className={`h-10 w-full rounded-[10px] border-2 pl-[10px] text-[16px] text-gray-800 outline-none focus:border-bluemain ${
              error
                ? "border-red-500"
                : !isInitial && isFilled
                ? "border-emerald-400"
                : "border-gray-300"
            }`}
            onBlurCapture={(e: any) => setIsField(!!e.currentTarget.value)}
            onFocus={() => setIsInitial(false)}
            {...props}
          />
          {isPassword && (
            <div
              className={`absolute -translate-x-[10px] cursor-pointer`}
              onClick={() => setIsVisiblePassword((prev) => !prev)}
            >
              {!isVisiblePassword ? (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  height="20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    className=" fill-gray-700"
                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="fill-gray-700"
                  role="img"
                  height="20"
                  width="23.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    className="fill-gray-700"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              )}
            </div>
          )}
        </div>
        {error && (
          <div className="mt-[4px] text-xs text-red-500">{error.message}</div>
        )}
      </div>
    );
  }
);

Field.displayName = "Field";
