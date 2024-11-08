### The significance of union and intersection types in Typescript.

Using typescript, we can assign specific type to a specific element. Like, if we want to take input in a function as a string, we can define the parameter type as string. If we want an object to have specific properties, we can define its type while passing as an argument or returning as an output.
But what if we are not sure if the input would be string or number?
What if you want an object that combines two other objects?
This is where Union and intersection type come to your rescue.

Union Type:
Union Type is a type that combines two or more types and let the user have a freedom for an input or output of any of those types.

Example:
const getResult = (id:string):number|string =>{
if(isValid(id)){
return getCGPA(id);
}else{
return "Id is not valid";
}
}
Explanation: A student want to get his/her cgpa after passing the id into a function. Now, if his/her id is right, he will get the CGPA as a number. But, if the id is wrong, he/she will get a string as an output. This is one of the scenarios why Union type is significant.

Intersection Type: Intersection type is a type that combines two or more types and creates a new type that has the properties of those properties.

Example:
type BachelorStudentCSE={
name: string;
email: string;
bscCGPA: number;
EngineeringDepartment: "CSE";

}
type BachelorStudentPhysics={
name: string;
email: string;
bscCGPA: number;
PureScienceDepartment: "Physics";

}
type BachelorStudentQuantumComputing = BachelorStudentCSE & BachelorStudentPhysics

Explanation: In this scenario, two types can be seen completed. One type is for the student from engineering department that are pursuing their degree of CSE another one is for the students from physics department. Now, to pursue degree of quantum computing, a person have to do double bachelors, or major, on cse and physics. Here, Intersection type helps to combine both cse and physics types.
From that, the significance of Intersection type can be seen.
