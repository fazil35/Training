# TodoListWidget and WeatherWidget

A project containing a Todo List application and a Weather Widget, both built with React and styled-components.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Todo List Widget](#todo-list-widget)
  - [Weather Widget](#weather-widget)
- [Features](#features)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher) or yarn

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/todolist-weather-widget.git
    cd todolist-weather-widget
    ```

2. **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

3. **Start the development server:**
    Using npm:
    ```bash
    npm start
    ```

    Using yarn:
    ```bash
    yarn start
    ```

4. **Open your browser and navigate to:**
    ```text
    http://localhost:3000
    ```

## Usage

### Todo List Widget

1. **Add a Todo:**
   - Enter the text in the input field and click the "Add" button.

2. **Toggle a Todo:**
   - Click the "Toggle" button next to the todo item to mark it as completed or not completed.

3. **Edit a Todo:**
   - Click the "Edit" button next to the todo item, update the text in the input field, and click "Save".

4. **Delete a Todo:**
   - Click the "Delete" button next to the todo item to remove it.

### Weather Widget

1. **Get a Weatherbit API Key:**
   - Sign up at [Weatherbit](https://www.weatherbit.io/) and get your API key.

2. **Configure the API Key:**
   - Open `src/components/WeatherWidget.js` and replace the `apiKey` value with your actual Weatherbit API key.

3. **Check the Weather:**
   - Enter a location in the input field to fetch the current weather data for that location.

## Features

- **Todo List Widget:**
  - Add new todos
  - Toggle todos as completed or not completed
  - Edit existing todos
  - Delete todos
  - Responsive design
  - Persistent storage using local storage

- **Weather Widget:**
  - Fetches and displays current weather data for a specified location
  - Displays temperature, humidity, and weather conditions
  - Handles errors and displays appropriate messages
  - Responsive design

## Screenshots

![TodoListWidget Screenshot](screenshot_todo.png)
![WeatherWidget Screenshot](screenshot_weather.png)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
