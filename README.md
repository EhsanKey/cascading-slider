```markdown
# Cascading Slider

The Cascading Slider is an attractive and efficient type of slider that allows you to create an organized slider. This slider enables you to easily create and display your own cascading slider using the Slider and CardSlider components. Features of this slider include the ability to select the current slide, constraints on the number of slides, and settings for the spacing between slides.

## Installation

1. Clone the project:

   ```bash
   git clone https://github.com/EhsanKey/cascading-slider.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cascading-slider
   ```

3. Install project dependencies:

   ```bash
   npm i
   ```

## Project Structure

```
src
|-- components
|-- slider
    |-- cardSlide
    |-- parentSlider
|-- App.tsx
|-- index.tsx
```

Our slider is in the `slider` directory.

Inside this directory, there are two folders named `cardSlide` and `parentSlider`.

### ParentSlider.tsx

This component serves as the parent of the sliders. It follows all attributes of the `div` tag, and you can use it as follows:

```tsx
import { Slider } from "./path/to/slider";

function App() {
  return (
    <div className="w-full h-screen ">
      <Slider className="....">
        {/* children .... */}
      </Slider>
    </div>
  );
}

export default App;
```

### CardSlider.tsx

This component represents the sliders of our application. It accepts the following props as properties:

| Props      | Required | DefaultValue | Values/Type         | Description                                        |
|------------|----------|--------------|---------------------|----------------------------------------------------|
| index      | true     | -            | number              | The loop index for rendering the slider.           |
| selected   | true     | -            | number              | The index of the selected slider.                  |
| length     | true     | -            | number              | The length of the array of sliders.                |
| limit      | false    | 3            | 3 \| 5 \| 7         | The constraint on the number of displayed slides.  |
| space      | false    | 'MD'         | 'XS' \| 'MD' \| 'LG' \| 'XL' | Spacing between slides.                   |
```

Feel free to customize the above template to better fit your project's details.