import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import Input from "components/input";
import Label from "components/label";
import TextArea from "components/textarea";

import useEncryptedPaste from "hooks/useEncryptedPaste";
import usePassword from "hooks/usePassword";

import { apiRoute, getAPI } from "library/clientAPI";
import { defaultPaste } from "library/paste";

import { TResponse } from "types/api";
import { TComponent, TPageComponent } from "types/component";

import { toString } from "utilities/string";
import useDecryptedPaste from "hooks/useDecryptedPaste";

const Paste: NextPage<TPageComponent> = () => {
  const router = useRouter();
  const slug = toString(router.query["slug"]) ?? "";

  const { data, error } = useSWR<
    TResponse<{ paste: string; encrypted: boolean } | {}>
  >(`${apiRoute}/${slug}`, getAPI);

  const encryptedPaste = useEncryptedPaste(data);
  const [password, setPassword] = usePassword();
  const paste = useDecryptedPaste(encryptedPaste, password);

  if (error) {
    return <Error />;
  } else if (!data) {
    return <Loading />;
  } else if (data.error) {
    return <Error />;
  } else if (!("paste" in data.data) || !("encrypted" in data.data)) {
    return <Loading />;
  }

  const encrypted = data.data.encrypted;

  return (
    <form className="flex flex-col gap-y-8 h-full w-full" id={formID}>
      {encrypted ? (
        <>
          <DisplayPaste
            paste={paste === defaultPaste ? encryptedPaste : paste}
          />
          <div className="grid grid-cols-2 gap-y-8 w-1/3">
            <Label htmlFor={passwordID}>Password:</Label>
            <Input
              form={formID}
              id={passwordID}
              onChange={setPassword}
              type="password"
              value={password}
            />
          </div>
        </>
      ) : (
        <DisplayPaste paste={paste} />
      )}
    </form>
  );
};

const DisplayPaste: TComponent<{ paste: string }> = ({ paste }) => (
  <div className="flex flex-col gap-y-2 h-1/2 w-full">
    <Label htmlFor={pasteID}>Paste:</Label>
    <TextArea form={formID} id={pasteID} readOnly={true} value={paste} />
  </div>
);

const Error: TComponent = () => <div>Not Found</div>;

const Loading: TComponent = () => <div>Loading...</div>;

const formID = "view";
const passwordID = "password";
const pasteID = "paste";

export default Paste;
