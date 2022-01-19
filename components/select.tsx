import { blankTheme } from "library/theme";
import {
  TComponent,
  TParentComponent,
  TSelectComponent,
  TThemedComponent,
} from "types/component";

const Select: TComponent<
  TParentComponent & TSelectComponent & TThemedComponent
> = ({
  children,
  className = "",
  disabled = false,
  form,
  id,
  name,
  onChange = () => {},
  required = false,
  theme = blankTheme,
  value,
}) => (
  <select
    className={`${theme.bg} ${theme.text} border ${theme.border} ${className}`}
    disabled={disabled}
    form={form}
    id={id}
    name={name}
    onChange={(event) => onChange(event.currentTarget.value)}
    required={required}
    value={value}
  >
    {children}
  </select>
);

export default Select;
