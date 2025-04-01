export function Button({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: {
  [x: string]: any;
  primary?: boolean | undefined;
  backgroundColor?: null | undefined;
  size?: string | undefined;
  label: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace Button {
  namespace propTypes {
    let primary: any;
    let backgroundColor: any;
    let size: any;
    let label: any;
    let onClick: any;
  }
}
