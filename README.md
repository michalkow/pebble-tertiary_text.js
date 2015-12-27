# pebble-tertiary_text.js

Inspired by [vgmoose/tertiary_text](https://github.com/vgmoose/tertiary_text) version for Pebble.js

## Install

Copy `src/app.js` file from this git repo to your Pebble.js project and rename it. 
For example: 
```bash
curl -o tertiaryText.js https://raw.githubusercontent.com/michalkow/pebble-tertiary_text.js/master/src/app.js
```

Require it in your project 
```javascript
var tertiaryText = require('./tertiaryText.js');
```

## Usage 

`tertiaryText( title, callback )`

`callback` returns string

```javascript
tertiaryText('Input Text', function(inputedText) {
  console.log(inputedText);
});
```
