# elmt
A simple and usable toolkit for writing dynamic HTML elements functionally in client-side JavaScript. Developed in TypeScript and compiled for 

## Example usage
The `elmt` function takes a valid HTML element tag name as its first argument. It returns a new HTML element with the specified tag name.
```javascript
document.querySelector('#app').append(
    elmt('h1', 'Hello, world!'),
    elmt('h3', 'You are experiencing the magic of elmt!'),
    elmt('p', 'It isn\'t really magic. In fact, it\'s incredibly simple.')
)
```

## Quickstart
1. Install the package
    ```
    npm install elmt
    ```
    or
    ```
    yarn add elmt
    ```
2. Add the bundle (browser) or import the module (Node.js) 
    ```html
    <!-- index.html (browser) -->
    <!DOCTYPE html>  
        <html lang="en">  
        <head>  
            <meta charset="UTF-8">  
            <meta http-equiv="X-UA-Compatible" content="IE=edge">  
            <meta name="viewport" content="width=device-width, initial-scale=1.0">  
            <title>elmt test</title>  
        </head>  
        <body>  
            <div id="app"></div>  
            <script src="path/to/elmt/dist/bundle.js"></script>  
            <script>  
                document.querySelector('#app').append(
                    elmt('h2', 'Hello world!')
                )
            </script>  
        </body>  
    </html>  
    ```
    ```javascript
    // some JavaScript or TypeScript module (Node.js)
    import elmt from 'elmt'

    const myElmt = elmt('h1', 'Hello, world!')
    ```