import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "components/button";
import Checkbox from "components/checkbox";
import Input from "components/input";
import Label from "components/label";
import Select from "components/select";
import TextArea from "components/textarea";

import useBurn from "hooks/useBurn";
import useExpiration from "hooks/useExpiration";
import usePassword from "hooks/usePassword";
import usePaste from "hooks/usePaste";
import useSlug from "hooks/useSlug";

import { defaultBurn } from "library/burn";
import { postAPI } from "library/clientAPI";
import { defaultExpiration, expirations } from "library/expiration";
import { defaultPassword } from "library/password";
import { defaultPaste } from "library/paste";
import { defaultSlug } from "library/slug";

import { TPageComponent } from "types/component";

const Home: NextPage<TPageComponent> = () => {
  const [burn, setBurn] = useBurn();
  const { expiration, setExpiration, changeExpiration } = useExpiration();
  const [password, setPassword] = usePassword();
  const [paste, setPaste] = usePaste();
  const [slug, setSlug] = useSlug();
  const [url, setURL] = useState("");

  useEffect(() => {
    setURL(window.location.href);
  }, []);

  const pasteURL = `${url}paste/${slug}`;

  const callAPI = async (): Promise<void> => {
    const response = await postAPI(paste, password, expiration, burn);

    if (!response.error && typeof response.data === "string") {
      setBurn(defaultBurn);
      setExpiration(defaultExpiration);
      setPassword(defaultPassword);
      setPaste(defaultPaste);
      setSlug(response.data);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 h-full w-full">
      {slug !== defaultSlug ? (
        <div className="flex gap-x-2">
          <span>Your paste URL is:</span>
          <span className="font-bold">
            <Link href={`/paste/${slug}`}>{pasteURL}</Link>
          </span>
        </div>
      ) : undefined}
      <form className="flex flex-col gap-y-8 h-full w-full" id={formID}>
        <div className="flex flex-col gap-y-2 h-1/2 w-full">
          <Label htmlFor={pasteID}>Paste:</Label>
          <TextArea
            form={formID}
            id={pasteID}
            maxLength={pasteMaxLength}
            minLength={pasteMinLength}
            name={pasteID}
            onChange={setPaste}
            required={true}
            value={paste}
          />
          <div
            className={`flex gap-x-1 justify-end text-sm ${
              paste.length === pasteMaxLength ? "font-bold" : ""
            }`}
          >
            <span className="sr-only">Character Count:</span>
            <span>{paste.length}</span>
            <span>/</span>
            <span>{pasteMaxLength}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8 w-1/3">
          <Label htmlFor={passwordID}>Password:</Label>
          <Input
            form={formID}
            id={passwordID}
            name={passwordID}
            onChange={setPassword}
            type="password"
            value={password}
          />
          <Label htmlFor={expirationID}>Expiration:</Label>
          <Select
            form={formID}
            id={expirationID}
            name={expirationID}
            onChange={changeExpiration}
            required={true}
            value={expiration}
          >
            <>
              {expirations.map((expiration) => (
                <option key={expiration} value={expiration}>
                  {expiration}
                </option>
              ))}
            </>
          </Select>
          <Label htmlFor={burnID}>Burn After Reading:</Label>
          <Checkbox
            form={formID}
            id={burnID}
            name={burnID}
            onChange={setBurn}
            value={burn}
          />
        </div>
        <div className="flex justify-center w-1/3">
          <Button
            className="w-fit"
            form={formID}
            onClick={async () => await callAPI()}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

const burnID = "burn";
const expirationID = "expiration";
const formID = "create";
const passwordID = "password";
const pasteID = "paste";
const pasteMaxLength = 10000;
const pasteMinLength = 1;

export default Home;
