import type { NextPage } from "next";

import Button from "components/button";
import Checkbox from "components/checkbox";
import Label from "components/label";
import Select from "components/select";
import TextArea from "components/textarea";
import usePaste from "hooks/usePaste";
import { TPageComponent } from "types/component";
import useExpiration from "hooks/useExpiration";
import { expirations } from "types/expiration";
import useBurn from "hooks/useBurn";

const Home: NextPage<TPageComponent> = () => {
  const [burn, setBurn] = useBurn();
  const { expiration, changeExpiration } = useExpiration();
  const [paste, setPaste] = usePaste();

  return (
    <form className="flex flex-col gap-y-8 h-full w-full" id={formID}>
      <div className="flex flex-col gap-y-2 h-1/2 w-full">
        <Label htmlFor={pasteID} srOnly={false}>
          Paste:
        </Label>
        <TextArea
          form={formID}
          id={pasteID}
          name={pasteID}
          onChange={setPaste}
          required={true}
          value={paste}
        />
      </div>
      <div className="grid grid-cols-2 gap-y-8 w-1/3">
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
        <Button className="w-fit" form={formID}>
          Create
        </Button>
      </div>
    </form>
  );
};

const burnID = "burn";
const expirationID = "expiration";
const formID = "create";
const pasteID = "paste";

export default Home;
