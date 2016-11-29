# Actions debouncer

This package attempts to debounce actions to ensure that only one will be excecuted in a defined timeout


## Intallation

```
npm i actions-debouncer
```

## Usage

```js
const Debouncer = require('actions-debouncer')

const debouncer = new Debouncer( (value) => console.log(value) )

debouncer.do(1)
debouncer.do(2)
debouncer.do(3)

// Output: 3
```

Counstructor:
- **action**: Closure. Receives the parameter sent to the do method
- **options**: Object:
    + **timeout**: time in milisencods which it will debounce actions. Default `300ms`.


