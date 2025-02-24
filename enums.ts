// enums is a way to define a set of named constants.
// Enums allows you to define a collection of related values
// that can be used interchangeably in your code.

// for example, let's say you building a weather app and you want to define
// a set of possible weather condition like "sunny", "cloudy","rainy","snowy".
// you could define an enum like this:

enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(WeatherConditions);

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// output: The current weather is Sunny
