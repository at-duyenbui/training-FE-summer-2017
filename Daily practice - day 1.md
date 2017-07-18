#### Daily practice - day 1
2017/07/18
### TypeScript
**1. What is TypeScript and Why do we need it? **
-	TypeScript is developed by Microsoft. It is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. 
TypeScript used all the features of ES6
-	The enable IDEs to provide a richer environment for spotting common errors such as mistake about type the code. Many kind of IDEs offer TypeScript.
-	It is open source. We can get many support from social.
-	For a large JavaScript project, TypeScript might result in more performance.
-	Many Framework encourage to use TypeScript.

**2. How can you get TypeScript and install it? **
-	There are to main ways to get the TypeScript tools:
	-	Via npm
	-	By installing TypeScript's Visual Studio plugins
-	For `npm` user:

	> npm install -g typescript



**3. How do you compile TypeScript files?  **
Compile TypeScript file. For example, we want to compile file `demoTS.ts`
Run statement:
		> tsc demoTS.ts

For auto render from file .ts to file .js after have changed
		> tsc -w demoTS.ts


**4. Which Object Oriented terms are supported by TypeScript? Write an example.  **
-	TypeScript have all of main features of OOP:
	-	Inheritance
	-	Polymorphism
	-	Data Hiding
	-	Encapsulation
	-	Overloading
	-	Reusability

*Example:*
```typescript
class Person {
	private age: number;
	constructor(private name: string){
		this.age = 20;
	}
	public get name(): string{
		return this.name;
	}
}
```

**5. How do you implement inheritance in TypeScript? Write an example **
-	First step, we need a father class.
-	At the sub class, use keyword `extends` to implement inheritance.
-	We can use keyword `super` to inheritance any attributes or methods of farther class you want.
-	We also can use overriding.
```typescript
class Person {
	private age: number;
	constructor(private name: string){
		this.age = 20;
	}
	public get name(): string{
		return this.name;
	}
}
class Student extends Person{
	constructor(name: string){
		super(name);
		this.age = 18;
	}
} 
```

### ES6
**Write an example for each of the following new features in ES6: **
-	Block scope variable
```typescript
for(let i = 0; i < 5; i++){
	console.log(i);
}
function multiple(i, k){
	return i * k;
}

```

-	Template Literals 
```typescript
function getName(name){
		document.write(`I am ${name} `);
}
```

-	Multi-line strings
```typescript
	document.write('This is line 1\n' +
					'This is line 2');
```
-	Arrow functions
```typescript
// in normal
var addition = function(x, y){
	return x + y;
}
// with arrow functions
var addition = (x, y) => {return x + y};
```
-	For...of
```typescript
var arr = [1, 2, 3];
for(let i of arr){
	i *= 3;
	console.log(i);
}
```
-	Default parameters
```typescript
function math(x, y = 10, z = 9){
	return x + y - z;
}
Console.log(math(1, 2, 3)) // => 0
Console.log(math(9,1))    //  => 1
Console.log(math(9))      //  => 10

```


