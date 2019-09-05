import React, {Component} from 'react'
import Lottie from "react-lottie";
// import animationData from '@sk39/lottie-files/dist/success-icon.json'
//
//
// const options = {
//   loop: true,
//   autoplay: true,
//   animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// }
//
//
// export default class App extends Component {
//   render() {
//     return (
//       <Lottie options={options} height={260} width={260}/>
//     )
//   }
// }


export default class App extends Component {
  render() {
    return (
      <div>
        <LottieExample fileName="success-icon.json"/>
        <LottieExample fileName="success-icon-bounce.json"/>
        <LottieExample fileName="error-icon.json"/>
        <LottieExample fileName="error-icon2.json"/>
        <LottieExample fileName="error-icon-bounce.json"/>
      </div>
    )
  }
}

const LottieExample = props => {
  const {fileName} = props;
  const options = {
    loop: true,
    autoplay: true,
    animationData:require(`@sk39/lottie-files/dist/${fileName}`),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <h1>{fileName}</h1>
      <Lottie options={options} height={260} width={260} />
    </div>
  );
};
