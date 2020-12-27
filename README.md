# Detects if Text is Sensitive

# Installation
```js
npm install is-text-sensitive --save
```

# Usage

```js
import { isTextSensitive } from 'is-text-sensitive';

// returns true or false
isTextSensitive('Sorry to include this here; what the fuck!'); // true
isTextSensitive('Some text, that might contain sensitive/explicit content.'); // false
```
