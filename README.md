# jquery-typewriter-plugin

A customizable typing animation with jquery.

# Usage

Install the jquery-typewriter plugin with npm with the following command.

```
npm i jquery-typewriter
```

Add the path to the js plugin file and the jquery cdn in your html file.

```json
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="node_modules/jquery-typewriter/dist/js/jquery.typewriter.min.js"></script>
```

In your main js file, you can use the typewrtie function on any element.

The function requires 2 parameters:
The first is the speed and the second is looping.

```js
$("h1").typeWrite(20, true);
```
