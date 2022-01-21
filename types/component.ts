import type { TMode } from "./mode";
import type { TSettings } from "./settings";
import type { TTheme } from "./theme";

export type TButtonComponent = {
  className?: string;
  form?: string;
  id?: string;
  name?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};

export type TCheckboxComponent = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  form?: string;
  id?: string;
  name?: string;
  onChange?: (val: boolean) => void;
  required?: boolean;
  value?: boolean;
};

export type TComponent<T = {}> = (props: T) => JSX.Element;

export type TInputComponent = {
  autoComplete?: TInputComponentAutoComplete;
  className?: string;
  disabled?: boolean;
  form?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: TInputComponentType;
  value?: string;
};

export type TInputComponentAutoComplete = "off" | "on";

export type TInputComponentInputMode = "search" | "tel" | "text" | "url";

export type TInputComponentType =
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url";

export type TLabelComponent = {
  className?: string;
  htmlFor?: string;
  id?: string;
  srOnly?: boolean;
};

export type TModeComponent = { mode: TMode };

export type TPageComponent = TSettingsComponent;

export type TParentComponent = { children: string | JSX.Element };

export type TSelectComponent = {
  className?: string;
  disabled?: boolean;
  form?: string;
  id?: string;
  name?: string;
  onChange?: (val: string) => void;
  required?: boolean;
  value?: string;
};

export type TSettingsComponent = { settings: TSettings };

export type TTextAreaComponent = {
  className?: string;
  disabled?: boolean;
  form?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  resizable?: boolean | "horizontal" | "vertical";
  value?: string;
};

export type TThemedComponent = { theme?: TTheme };

export type TTitleComponent = { title: string };
