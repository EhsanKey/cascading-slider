interface ParentSliderPropsType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

type ParentSliderReturnType = JSX.Element;

type ParentSliderType = (
  props: ParentSliderPropsType
) => ParentSliderReturnType;

export type { ParentSliderType };
