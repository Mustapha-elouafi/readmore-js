# READMORE VANILLA JS

The Readmore.js class is a JavaScript class that is used to create a "read more" functionality on a webpage. 
It allows users to view a shortened version of a piece of text and then expand it to view the full text by clicking a "read more" button. 
The class uses the data-readmore attribute to target elements on the page that should have the "read more" functionality applied to them. 
It also allows for customization of the "read more" and "read less" button text by passing in options through the data-readmore attribute. 
The class uses methods such as render(), createButtons(), createInput(), createShortDesc() and isEllipsisActive() to implement the functionality.


## Installation

Install npm

```bash
  npm install 
```

## Demo

```bash
  npm run serve
```

Click the [link](http://localhost:3333/)

## Usage/Examples

Once the library is installed, you can initialize it on your webpage by calling the readmore.render() method on the elements you want to have the "read more" functionality applied to. For example:

- Js
```javascript
  import Readmore from '.src/js/readmore.js'
  
  window.addEventListener("DOMContentLoaded", (event) => {
    // With default options ex:
    let readmore = new Readmore();
    readmore.render();
  });
```
- Css
```html
  <link rel="stylesheet" href="dist/css/readmore.css">
```
- Html
```html
   <div class="content" data-readmore=''>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a euismod congue, quam ante molestie nibh, non auctor nibh leo eget nisi. Sed eget neque euismod, viverra augue id, feugiat nibh.
        </span>
    </div>
```

In this example, the .content class is used as the target for the "read more" functionality. The data-readmore attribute is used to pass in options such as the speed of the animation, the collapsed height of the text, and the text for the "read more" and "read less" buttons. When the page loads, the text inside the div with a class of .content will be shortened and a "Read More" button will be appended to the end of the text. When the user clicks the "Read More" button, the full text will be revealed.

You can change values of options with 
- Data attribute :
```html
   <div class="content" data-readmore='{
        "buttonClasses": "btn",
        "maxcChar":100, 
        "moreLink":"Lire Plus",
        lessLink:"Read less",
        "disabledLessLink": true
      }'>
        <span>.....</span>
    </div>
```
- js :

```javascript
    // Change default options ex:
      let newOptions = {
        buttonClasses:'btn',
        maxcChar:100, 
        moreLink:"Lire Plus",
        disabledLessLink: true
      };
     let readmore = new Readmore(newOptions);
     readmore.render();
```

## The options:

- buttonClasses:'',
- maxcChar:100, 
- moreLink:"Read more",
- lessLink:"Read less",
- disabledLessLink: false

## Contributing

Contributions are always welcome!


