export type Hotkey = {
    keys: string[];
    action: () => void;
  };
  
  export type HotkeysProps = {
    hotkeys: Hotkey[];
  };