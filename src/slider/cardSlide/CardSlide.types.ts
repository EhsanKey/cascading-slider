enum SpaceSize {
  XS = 25,
  MD = 50,
  LG = 75,
  XL = 100,
}

enum LimitSize {
  n3 = 2,
  n5 = 4,
  n7 = 6,
}

interface CardSlidePropsType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  index: number;
  selected: number;
  length: number;
  limit?: keyof typeof LimitSize;
  space?: keyof typeof SpaceSize;
}

type CardSlideReturnType = JSX.Element;

type CardSlideType = (props: CardSlidePropsType) => CardSlideReturnType;

export type { CardSlideType };
export { SpaceSize, LimitSize };
