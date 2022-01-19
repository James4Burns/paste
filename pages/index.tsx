import Button from "components/button";
import Checkbox from "components/checkbox";
import Label from "components/label";
import Select from "components/select";
import TextArea from "components/textarea";
import type { NextPage } from "next";

import { TPageComponent } from "types/component";

const Home: NextPage<TPageComponent> = () => {
  return (
    <form className="flex flex-col gap-y-8 h-full w-full" id={formID}>
      <div className="flex flex-col gap-y-2 h-1/2 w-full">
        <Label htmlFor={pasteID} srOnly={false}>
          Paste:
        </Label>
        <TextArea form={formID} id={pasteID} name={pasteID} required={true} />
      </div>
      <div className="grid grid-cols-2 gap-y-8 w-1/3">
        <Label htmlFor={expirationID}>Expiration:</Label>
        <Select
          form={formID}
          id={expirationID}
          name={expirationID}
          required={true}
        >
          <></>
        </Select>
        <Label htmlFor={burnID}>Burn After Reading:</Label>
        <Checkbox form={formID} id={burnID} name={burnID} />
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
const formID = "createForm";
const pasteID = "paste";

export default Home;
