### Angular - Day 04
2017/07/26
#### *Component*
  **1.  Briefly explain Event Binding in Angular?**
  In website always event for the interaction of user and browser. The information usually involves a click, double click, hover, ... 
  Event binding allows us to work in reverse from property binding. We can send information from view to component class.
  **2.  Briefly explain Data Binding in Angular?**
  Data Binding is a way for communication between view and component class.
  This allows us to bind values to properties of an element to modify their behavior or appearance.
  **3.  What are Event Emitters and how it works in Angular?**
  Data flows out of the component through event bindings.
  If you want your component to notify with parent about something you can use the `Output` decorator with `EventEmitter` to create a custom event.
  `EventEmitter` is an angular2 abstraction and its only purpose is to emit events in components.
  
```typescript
import {Component, Output, EventEmitter} from '@angular/core';
	@Component({
		selector: 'counter',
		template: `
		<div>
		<p>
		<ng-content></ng-content>
		Count: {{ count }} -
		<button (click)="increment()">Increment</button>
		</p>
		</div>
		`
	})
	export class Counter {
		count: number = 0;
		@Output() countChange: EventEmitter<number> = new EventEmitter<number>();
		increment() {
			this.count++;
			this.countChange.emit(this.count);
		}
}
```
And in the parent, we call it like this:
```htmlbars
<counter (event)="increment($event)"> </counter>
```
  
  **4.  Explain the life cycle hooks of Angular application?**
-	Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.
-	Directive and component instances have a lifecycle as Angular creates, updates, and destroys them.
-	Each interface has a single hook method whose name beginning with `ng`
	-	`ngOnChanges`: called when an input binding value changes
	-	`ngOnInit`: after the first `ngOnChanges`
	-	`ngDoCheck`: after every run of change detection
	-	`ngAfterContentInit`: after component content initialized
	-	`ngAfterContentCheck`: after every checks of component content
	-	`ngAfterViewInit`: after component's view(s) are initialized
	-	`ngAfterViewChecked`: after every check of a component's view(s)
	-	`ngOnDestroy`: just before the component is destroyed

  **5.  Explain the `ContentChild` `ContentChildren` and write an example?**
-	The `ContentChild` and `ContentChildren` decorators provide access to the classes of child component selector from projected *content* within the component
-	The @ContentChild is a decorator function that takes the name of a component class as its input and finds its selector from projected *content* within the component to bind to.
-	@ContentChild and @ContentChildren can also be passed a template reference variable.
-	Content children will not be set until `ngAfterContentInit` component lifecycle hook.

***example:***

*Child.ts*
```typescript
import {Component} from '@angular/core';

@Component({
	selector: 'child-field',
	template:`
		<h1>Hello</h1>
	`
})
export class ChildComponent{
	name: string = 'Duyen';
}
```
*Parent.ts*
```typescript
import {Component, ContentChild} from '@angular/core';
import {ChildComponent} from './Child';

@Component({
	selector: 'parent-field',
	template:`
		<ng-content></ng-content>
		<p>{{child.name}}</p>
	`
})
export class ParentComponent{
	@ContentChild(ChildComponent) child: ChildComponent;
}
```
*app.ts*
```typescript
import {Component} from '@angular/core';
import {ChildComponent} from './Child';
import {ParentComponent} from './Parent';

@Component({
	selector: 'app-root',
	template:`
		<parent-field>
			<child-field></child-field>
		</parent-field>
	`
})
export class AppComponent{
}
```

**Extra**
  **1. Briefly explain ElementRef in Angular? Write an example.**
 Provides access to the underlying native element (DOM element)
 
*app.component.ts*
```typescript
import { Component, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <code>{{ content_code }}</code>
  `
})
export class AppComponent implements AfterContentInit{
  content_code: string;
  constructor(private elementRef: ElementRef) { }
  
  ngAfterContentInit() {
    var elm = document.createElement('div');
    var content = this.elementRef.nativeElement.cloneNode(true);
    
    elm.appendChild(content);
    this.node = elm.innerHTML;
  }
}
```

