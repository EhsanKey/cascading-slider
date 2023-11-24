// TypeScript file for CardSlide

interface MyComponentPropsType {
  image: string;
  title: string;
  description: string;
}

type MyComponentReturnType = JSX.Element;

type MyComponentType = (props: MyComponentPropsType) => MyComponentReturnType;

export default MyComponentType;
