# 🚀 react-hotkeys-manager

[![npm version](https://img.shields.io/npm/v/react-hotkeys-manager.svg)](https://www.npmjs.com/package/react-hotkeys-manager)
[![npm downloads](https://img.shields.io/npm/dm/react-hotkeys-manager.svg)](https://www.npmjs.com/package/react-hotkeys-manager)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight React component to manage keyboard shortcuts effortlessly. Perfect for apps that need customizable hotkeys.

## 🔥 Features
- Declarative hotkey configuration
- Supports `Ctrl`, `Shift`, `Alt`, and `Meta` modifiers
- Zero dependencies
- TypeScript support

## 📦 Installation
```bash
npm install react-hotkeys-manager
```

## 🛠️ Usage

### Using the Component
```jsx
import { HotkeyManager } from 'react-hotkeys-manager';

const App = () => {
  const hotkeys = [
    {
      keys: ['ctrl','s'],
      action: () => alert('Saved!'),
    },
  ];

  return <HotkeyManager hotkeys={hotkeys} />;
};
```

### Using the Hook
```jsx
import { useHotkeys } from 'react-hotkeys-manager';

const App = () => {
  const hotkeys = [
    {
      keys: ['ctrl', 's'],
      action: () => alert('Saved!'),
    },
  ];

  useHotkeys(hotkeys);

  return (
    <div>
      <h1>Press Ctrl+S to see the alert</h1>
    </div>
  );
};

```

## 📖 API Reference
| Prop     | Type               | Description                          |
|----------|--------------------|--------------------------------------|
| `hotkeys`| `Hotkey[]`         | Array of hotkey configurations.      |


## 🤝 Contributing
Pull requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📜 Code of Conduct
This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md).

## 📜 License
MIT © [Sulaymon Makhsumov](https://github.com/sulaymon1404/react-hotkeys-manager?tab=MIT-1-ov-file)