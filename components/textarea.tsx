import { blankTheme } from "library/theme";
import {
  TComponent,
  TTextAreaComponent,
  TThemedComponent,
} from "types/component";

const TextArea: TComponent<TTextAreaComponent & TThemedComponent> = ({
  className = "",
  disabled = false,
  form,
  maxLength,
  minLength,
  name,
  onChange = () => {},
  placeholder,
  readOnly = false,
  required = false,
  resizable = false,
  theme = blankTheme,
  value,
}) => (
  <textarea
    className={`h-full w-full ${theme.bg} ${theme.text} border ${
      theme.border
    } ${getResizableClass(resizable)} ${className}`}
    disabled={disabled}
    form={form}
    maxLength={maxLength}
    minLength={minLength}
    name={name}
    onChange={(event) => onChange(event.currentTarget.value)}
    placeholder={placeholder}
    readOnly={readOnly}
    required={required}
    value={value}
  ></textarea>
);

const getResizableClass = (
  option: boolean | "horizontal" | "vertical"
): string => {
  if (typeof option === "boolean") {
    if (option) {
      return "resize";
    } else {
      return "resize-none";
    }
  } else {
    if (option === "horizontal") {
      return "resize-x";
    } else {
      return "resize-y";
    }
  }
};

export default TextArea;
