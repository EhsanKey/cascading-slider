import { CardSlideType, LimitSize, SpaceSize } from "./CardSlide.types";

const CardSlider: CardSlideType = (props) => {
  let { index, selected, length, limit, space } = props;

  const spaceValue = space ? SpaceSize[space] : 50;
  const numberItem = limit ? LimitSize[limit] : 2;

  return (
    <div
      {...props}
      className={`flex items-center justify-center absolute cursor-pointer
       ${props.className}`}
      style={{
        transition: "all 0.5s ease-in-out",
        transform: `
        scale(${
          index === selected
            ? 1
            : index > selected
            ? 1 - (index - selected) * 0.1
            : 1 - (selected - index) * 0.1
        })
        translateY(${
          index === selected
            ? 0
            : index > selected
            ? (index - selected) * spaceValue
            : -(selected - index) * spaceValue
        }%)
        `,
        opacity:
          index === selected
            ? 1
            : index > selected + numberItem || index < selected - numberItem
            ? 0
            : 1,

        zIndex:
          index === selected
            ? length
            : selected > index
            ? length - selected + index
            : length - index + selected,
      }}
    >
      {props.children}
    </div>
  );
};

export { CardSlider };
