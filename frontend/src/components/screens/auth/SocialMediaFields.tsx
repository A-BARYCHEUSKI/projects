import { FC } from "react";

import { Button } from "../../ui/button/Button";

export const SocialMediaFields: FC = (): JSX.Element => {
  return (
    <div className="mb-[26px] border-b border-gray-300 pb-[5px] text-gray-600">
      <Button className="border-gray-500 border-2" disabled={false}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path
            d="m4.522 145.089-.71 2.652-2.6.055a10.221 10.221 0 0 1-.075-9.528l2.311.424 1.013 2.3a6.089 6.089 0 0 0 .057 4.1Z"
            transform="translate(0 -132.757)"
            style={{
              fill: "#fbbb00",
            }}
          />
          <path
            d="M271.429 208.176a10.2 10.2 0 0 1-3.637 9.863l-2.911-.149-.412-2.572a6.081 6.081 0 0 0 2.616-3.105h-5.456v-4.036h9.8Z"
            transform="translate(-251.201 -199.879)"
            style={{
              fill: "#518ef8",
            }}
          />
          <path
            d="M45.883 315.237a10.206 10.206 0 0 1-15.375-3.121l3.306-2.707a6.068 6.068 0 0 0 8.744 3.107Z"
            transform="translate(-29.293 -297.077)"
            style={{
              fill: "#28b446",
            }}
          />
          <path
            d="m44.2 2.349-3.306 2.706a6.067 6.067 0 0 0-8.945 3.177l-3.324-2.721A10.205 10.205 0 0 1 44.2 2.349Z"
            transform="translate(-27.483)"
            style={{
              fill: "#f14336",
            }}
          />
        </svg>
        Inscription avec Google
      </Button>
      <Button className="bg-[#4267B2] text-gray-100" disabled={true}>
        <svg
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }}
          width="20"
          height="20"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m374.245 285.825 14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.442 320.442 0 0 0 250.408 512a320.42 320.42 0 0 0 49.708-3.865v-222.31h74.129Z"
            style={{
              fill: "#ffffff",
              fillRule: "nonzero",
            }}
          />
        </svg>
        Inscription avec Facebook
      </Button>
    </div>
  );
};
