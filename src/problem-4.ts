type circle = {
  shape: "circle";
  radius: number;
};
type rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};
const calculateShapeArea = (param: rectangle | circle): number => {
  if (param.shape === "circle") {
    return parseFloat((3.1416 * Math.pow(param.radius, 2)).toFixed(2));
  } else {
    return parseFloat((param.height * param.width).toFixed(2));
  }
};

//sample Input:-
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(parseFloat(circleArea.toFixed(2)));
console.log(parseFloat(rectangleArea.toFixed(2)));
