Detect if Text is Sensitive (contains explicit words)

# Installation
```js
npm install is-text-sensitive --save
```

# Usage

```js
import { isTextSensitive } from 'is-text-sensitive';

// returns true or false
isTextSensitive('Sorry to include this here; what the fuck!'); // true
isTextSensitive('Text containing sensitive/explicit content.'); // false
```
