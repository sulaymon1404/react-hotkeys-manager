import React from 'react';
import type { HotkeysProps } from '../types';
import { useHotkeys } from '../hooks/useHotkeys';

export const Hotkeys: React.FC<HotkeysProps> = ({ hotkeys }) => {
   useHotkeys(hotkeys)
   return null
};
