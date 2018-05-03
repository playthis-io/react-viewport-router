# React Viewport Router

![alttext](https://github.com/playthis-io/react-viewport-router/blob/master/exmaple/example.gif?raw=true)

# About the project
After much research we discovered that media queries in styled components were only half the solution when it comes to design elements breaking on a page. The real issue has to deal with the fact that there are certain breakpoints in the transition phase between devices that are more dramatic than others and those areas need a finer control in terms of theier component rendering. 

The solution that react-viewport-router provides is that you can now change the layout of smaller fragments of components and render them conditionally based on the width of the viewport. This allows you to re-focus your media queries in those fragment domains and have more finer control within the range of desktop, tablet or mobile. 

### This is still a work in progress and is subject to change!
This is currently being used on http://www.playthis.io to handle the compositional layouts of our component view fragments and compositional components. If you like some of the code so far, please feel free to fork the repo and extend, we will be adding more code and fixing bugs as we continue to use this in the project and through iterations it will have different internals and also be more performant. Expect things to change! 

### Not on NPM, yet 
This is not on NPM yet, but will be once it has been developed a bit further. 

## The <View>  Component
This component wraps child ```<port>  ``` components and looks for a specific tag that matches an internal breakpoint to determine when to render one of the port components.View listens to a debounced stream of window events for onresize and also listens for the first emitted window width on load.


## The <Port [device] component={<Component/>} />
this is a child of the ```<View>``` Component. Provide one of the set configured device tags and pass the component to render at the device view to the ```component``` prop. 

| Device Tag    | Equality      |
| ------------- | ------------- |
| desktop       | width >= 900  |
| tablet        | 900 > width <= 700 |
| mobile        | width < 700   |



## Example
```js
import {Desktop, Tablet, Mobile} from "./_views"

export const SomeComponent = (props) => {

    return  ( 
        <View>
            <Port desktop component={<Desktop/>} />
            <Port tablet component={<Tablet/>} />
            <Port mobile component={<Mobile/>} />
        </View>)
}   
```
