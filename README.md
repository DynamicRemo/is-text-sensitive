Detect if Text is Sensitive (containing words that are explicit, adult, offensive or mature in certain situations) and returns a boolean value (true or false).

# Installation
```js
npm install is-text-sensitive --save
```

# Usage

```js
import { isTextSensitive } from 'is-text-sensitive';

// returns true or false
isTextSensitive('Sorry to include this here; what the fuck!'); // true ✅
isTextSensitive('Text containing sensitive/explicit content.'); // false ❌
```
