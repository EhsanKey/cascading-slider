import { useState } from "react";
import "./App.css";
import MyConmponent from "./components/myConmponent/MyConmponent";
import { CardSlider, Slider } from "./slider";

const dataSlider = [
  {
    title: "Lorem ipsum 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 8",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 9",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum 10",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://picsum.photos/200/300",
  },
];

function App() {
  const [selectItem, setSelectItem] = useState(0);
  const handelClick = (id: number) => {
    setSelectItem(id);
  };
  return (
    <div className="w-full h-screen ">
      <Slider className="flex items-center justify-center w-full h-full">
        {dataSlider.map((item, index) => (
          <CardSlider
            className="flex items-center justify-center w-11/12 md:w-8/12 lg:w-6/12"
            key={`${item.title}-${index}`}
            onClick={() => handelClick(index)}
            index={index}
            selected={selectItem}
            length={dataSlider.length}
          >
            <MyConmponent
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </CardSlider>
        ))}
      </Slider>
    </div>
  );
}

export default App;
