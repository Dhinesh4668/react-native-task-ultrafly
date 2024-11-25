# UltraFly Todo List

A feature-rich mobile todo list application built with React Native and TypeScript.

## Features

- ✨ Create and manage todos
- 🎨 Colorful todo items
- 📱 Modern mobile-first UI
- 🔄 Navigation between screens
- 💾 Todo persistence
- 🔐 User authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment setup
  - For iOS: Xcode (Mac only)
  - For Android: Android Studio

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ultraflytodolist.git
cd ultraflytodolist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (Mac only):
```bash
cd ios
pod install
cd ..
```

### Running the App

#### iOS
```bash
npm run ios
# or
yarn ios
```

#### Android
```bash
npm run android
# or
yarn android
```

## Project Structure

```
ultraflytodolist/
├── app/
│   ├── CreateScreen/     # Todo creation screen
│   ├── LoginScreen/      # User authentication
│   ├── ProfileScreen/    # User profile
│   ├── screens/          # Main screens
│   ├── SplashScreen/    # App launch screen
│   └── navigation/      # Navigation configuration
├── ios/                 # iOS native code
└── android/            # Android native code
```

## Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run the Android app
- `npm run ios` - Run the iOS app
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Tech Stack

- React Native
- TypeScript
- React Navigation
- ESLint
- Jest for testing

## Development

The app follows a screen-based architecture with the following main components:

- `HomeScreen`: Displays the list of todos
- `CreateScreen`: Handles todo creation with title, description, and color
- `LoginScreen`: Manages user authentication
- `ProfileScreen`: Shows user profile information
- `SplashScreen`: Initial loading screen

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
