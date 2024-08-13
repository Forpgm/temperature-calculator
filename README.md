# Temperature Converter

## Overview

This application allows users to convert between Celsius and Fahrenheit temperatures. It includes components for temperature input and boiling verdict, utilizing React for state management and temperature conversion functionality.

## Components

- **Calculator**: The main component that manages the state of the temperature and scale (Celsius or Fahrenheit). It passes data to child components and performs conversions between temperature units.
- **TemperatureInput**: A child component that allows users to input the temperature and select the temperature unit. It receives the temperature value and change handler from `Calculator`.
- **BoilingVerdict**: A child component that displays a message indicating whether water boils or not based on the Celsius temperature.
