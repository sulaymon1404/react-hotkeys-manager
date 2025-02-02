import React, { useEffect } from 'react';

interface Hotkey {
  keys: string[]; // Сочетания клавиш, например, ['ctrl+s']
  action: () => void; // Действие при нажатии
}

interface HotkeyManagerProps {
  hotkeys: Hotkey[]; // Список горячих клавиш
}

export const HotkeyManager: React.FC<HotkeyManagerProps> = ({ hotkeys }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      hotkeys.forEach(({ keys, action }) => {
        const keyCombination = keys.join('+').toLowerCase();
        const pressedKeys = [];

        if (event.ctrlKey) pressedKeys.push('ctrl');
        if (event.shiftKey) pressedKeys.push('shift');
        if (event.altKey) pressedKeys.push('alt');
        if (event.metaKey) pressedKeys.push('meta');
        if (event.key && !['Control', 'Shift', 'Alt', 'Meta'].includes(event.key)) {
          pressedKeys.push(event.key.toLowerCase());
        }

        if (keyCombination === pressedKeys.join('+')) {
          event.preventDefault();
          action();
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeys]);

  return null; // Компонент не рендерит ничего
};
