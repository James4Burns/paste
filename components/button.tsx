import { blankTheme } from "library/theme";
import type {
  TButtonComponent,
  TComponent,
  TParentComponent,
  TThemedComponent,
} from "types/component";

const Button: TComponent<
  TButtonComponent & TParentComponent & TThemedComponent
> = ({
  children,
  className = "",
  form,
  id,
  name,
  onClick = () => {},
  theme = blankTheme,
  type = "button",
}) => (
  <button
    className={`p-2 ${theme.bg} ${theme.text} border ${theme.border} ${className}`}
    form={form}
    id={id}
    name={name}
    onClick={() => onClick()}
    type={type}
  >
    {children}
  </button>
);

export default Button;
