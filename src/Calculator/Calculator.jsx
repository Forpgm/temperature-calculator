import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

const converter = (temperature, convertFunction) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertFunction(input);
  return Math.round(output * 1000) / 1000;
};

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "c",
    };
  }
  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? converter(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? converter(temperature, toFahrenheit) : temperature;
    return (
      <div>
        Calculator
        <TemperatureInput
          title={scaleNames.c}
          temperature={celsius}
          onTemperatureChange={this.handleChange("c")}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange("f")}
        />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    );
  }
}

export default Calculator;
