import useMode from "hooks/useMode";
import { defaultTheme } from "library/theme";
import type {
  TComponent,
  TModeComponent,
  TThemedComponent,
} from "types/component";

const Mode: TComponent<TThemedComponent> = ({ theme = defaultTheme }) => {
  const [mode, switchMode] = useMode();

  return (
    <button
      className={`${theme.bg} ${theme.text}`}
      onClick={() => switchMode()}
      type="button"
    >
      <Icon mode={mode} />
    </button>
  );
};

const Icon: TComponent<TModeComponent> = ({ mode }) => {
  switch (mode) {
    case "Dark":
      return (
        <div className="flex gap-x-2">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span className="sr-only">Dark Mode</span>
        </div>
      );
    case "Light":
      return (
        <div className="flex gap-x-2">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span className="sr-only">Light Mode</span>
        </div>
      );
  }
};

export default Mode;
