import { useEffect } from 'react';
import type { Hotkey } from '../types';


export const useHotkeys = (hotkeys:Hotkey[]) => {
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

  return null;
};
