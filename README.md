# @sk39/lottie-files

lottie-files

## Install

```bash
npm install @sk39/lottie-files
```

## Usage

```jsx
import React, {Component} from 'react'
import Lottie from "react-lottie";
import animationData from '@sk39/lottie-files/dist/success-icon.json'


const options = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}


export default class App extends Component {
  render() {
    return (
      <Lottie options={options} height={260} width={260}/>
    )
  }
}
```

## License

MIT © [sk39](https://github.com/sk39)
