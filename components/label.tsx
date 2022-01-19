import { blankTheme } from "library/theme";
import {
  TComponent,
  TLabelComponent,
  TParentComponent,
  TThemedComponent,
} from "types/component";

const Label: TComponent<
  TLabelComponent & TParentComponent & TThemedComponent
> = ({ children, className, htmlFor, srOnly = false, theme = blankTheme }) => (
  <label
    className={`${srOnly ? "sr-only" : "not-sr-only"} ${
      theme.text
    } ${className}`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;
