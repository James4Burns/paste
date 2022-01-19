import type { NextPage } from "next";

import Button from "components/button";
import Checkbox from "components/checkbox";
import Input from "components/input";
import Label from "components/label";
import Select from "components/select";
import TextArea from "components/textarea";
import { TPageComponent } from "types/component";

const Home: NextPage<TPageComponent> = ({ settings }) => {
  const selectOptions = ["Foo", "Baz", "Bar"];

  return (
    <div className="grid grid-cols-2 gap-y-4 items-center w-1/3">
      <Label>Button:</Label>
      <Button className="w-fit" theme={settings.theme}>
        Button
      </Button>
      <Label>Checkbox:</Label>
      <Checkbox theme={settings.theme} />
      <Label>Password Input:</Label>
      <Input theme={settings.theme} type="password" />
      <Label>Search Input:</Label>
      <Input theme={settings.theme} type="search" />
      <Label>Telephone Input:</Label>
      <Input theme={settings.theme} type="tel" />
      <Label>Text Input:</Label>
      <Input theme={settings.theme} />
      <Label>URL Input:</Label>
      <Input theme={settings.theme} type="url" />
      <Label>Select:</Label>
      <Select theme={settings.theme}>
        <>
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </>
      </Select>
      <Label>Text Area:</Label>
      <TextArea theme={settings.theme} />
    </div>
  );
};

export default Home;
