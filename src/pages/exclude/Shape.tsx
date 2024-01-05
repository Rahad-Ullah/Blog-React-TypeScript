type ShapeType = 'cube' | 'square' | 'rectangle' | 'triangle'
type TwoDShapeType = Exclude<ShapeType, 'cube'>

type ThemeType = 'dark' | 'light'
type ColorType = 'red' | 'blue' | 'yellow'

type ItemProps = {
    color: Exclude<`${ThemeType}-${ColorType}`, 'dark-yellow'>
}

const Shape = (props: ItemProps) => {
    const shape: ShapeType = 'cube'
    const twoDShape: TwoDShapeType = 'square' 
    
    return (
        <div>
            <h2>Theme: {props.color}</h2>
            <h1>Shape: {shape}</h1>
            <h1>Two D Shape: {twoDShape}</h1>
        </div>
    );
};

export default Shape;