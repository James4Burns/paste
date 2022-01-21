import { defaultTheme } from "library/theme";
import {
  TComponent,
  TInputComponent,
  TInputComponentInputMode,
  TInputComponentType,
  TThemedComponent,
} from "types/component";

const Input: TComponent<TInputComponent & TThemedComponent> = ({
  autoComplete = "off",
  className = "",
  disabled = false,
  form,
  id,
  maxLength,
  minLength,
  name,
  onChange = () => {},
  placeholder,
  readOnly = false,
  required = false,
  theme = defaultTheme,
  type = "text",
  value,
}) => (
  <input
    autoComplete={autoComplete}
    className={`${theme.bg} ${theme.text} border ${theme.border} ${className}`}
    disabled={disabled}
    form={form}
    id={id}
    inputMode={getInputMode(type)}
    maxLength={maxLength}
    minLength={minLength}
    name={name}
    onChange={(event) => onChange(event.currentTarget.value)}
    placeholder={placeholder}
    readOnly={readOnly}
    required={required}
    type={type}
    value={value}
  />
);

const getInputMode = (type: TInputComponentType): TInputComponentInputMode => {
  switch (type) {
    case "password":
      return "text";
    case "search":
      return "search";
    case "tel":
      return "tel";
    case "text":
      return "text";
    case "url":
      return "url";
  }
};

export default Input;
