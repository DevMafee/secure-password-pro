## Secure Password Generator
You Can Generate Password By using this Package

### Installation
npm i secure-password-pro

## Usage

```nodejs
const { generatePassword } = require('secure-password-pro')
const length = 10; // Optional
const number = true; // Optional
const symbol = true; // Optional
const data = generatePassword(length, number, symbol)
console.log(data)
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)