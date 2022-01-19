import Mode from "./mode";
import { defaultTheme } from "library/theme";
import type {
  TComponent,
  TParentComponent,
  TThemedComponent,
  TTitleComponent,
} from "types/component";

const Layout: TComponent<
  TParentComponent & TThemedComponent & TTitleComponent
> = ({ children, theme = defaultTheme, title }) => (
  <div className={`flex flex-col h-full w-full ${theme.bg} ${theme.text}`}>
    <div className={`sticky p-2 w-full border-b ${theme.border}`}>
      <nav className="container flex justify-between mx-auto">
        <h1 className="text-lg font-bold">
          <>{title}</>
        </h1>
        <Mode />
      </nav>
    </div>
    <div className="px-2 py-4 h-full w-full">
      <main className="container mx-auto h-full w-full">{children}</main>
    </div>
  </div>
);

export default Layout;
