import { defaultTheme } from "library/theme";
import {
  TComponent,
  TLabelComponent,
  TParentComponent,
  TThemedComponent,
} from "types/component";

const Label: TComponent<
  TLabelComponent & TParentComponent & TThemedComponent
> = ({
  children,
  className = "",
  htmlFor,
  id,
  srOnly = false,
  theme = defaultTheme,
}) => (
  <label
    className={`${srOnly ? "sr-only" : "not-sr-only"} ${
      theme.text
    } ${className}`}
    htmlFor={htmlFor}
    id={id}
  >
    {children}
  </label>
);

export default Label;
