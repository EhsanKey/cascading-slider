import { ParentSliderType } from "./ParentSlider.types";

const ParentSlider: ParentSliderType = (props) => {
  return <div className={`relative ${props.className}`}>{props.children}</div>;
};

export { ParentSlider };
