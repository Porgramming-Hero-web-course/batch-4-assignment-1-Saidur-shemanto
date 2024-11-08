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
    return 3.1416 * Math.pow(param.radius, 2);
  } else {
    return param.height * param.width;
  }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(parseFloat(rectangleArea.toFixed(2)));
