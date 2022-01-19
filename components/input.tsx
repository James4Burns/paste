import { defaultTheme } from "library/theme";
import { TComponent, TInputComponent, TThemedComponent } from "types/component";

const Input: TComponent<TInputComponent & TThemedComponent> = ({
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

const getInputMode = (type: "password" | "search" | "tel" | "text" | "url") => {
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
