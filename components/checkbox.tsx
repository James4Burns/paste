import { blankTheme } from "library/theme";
import {
  TCheckboxComponent,
  TComponent,
  TThemedComponent,
} from "types/component";

const Checkbox: TComponent<TCheckboxComponent & TThemedComponent> = ({
  checked,
  className = "",
  disabled = false,
  form,
  name,
  onChange = () => {},
  required = false,
  theme = blankTheme,
}) => (
  <input
    checked={checked}
    className={`p-2 ${theme.bg} border ${theme.border} ${className}`}
    disabled={disabled}
    form={form}
    name={name}
    onChange={(event) => onChange(event.currentTarget.checked)}
    required={required}
    type="checkbox"
  />
);

export default Checkbox;
