type KeyboardEvent = {
  key: string;
  shiftKey: boolean;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
};

const ARROW_TOP = "ArrowTop";
const ARROW_RIGHT = "ArrowRight";
const ARROW_BOTTOM = "ArrowBottom";
const ARROW_LEFT = "ArrowLeft";

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" as const;
const NUMERIC = "0123456789" as const;

const TAB = "Tab";
const ENTER = "Enter";
const BACKSPACE = "Backspace";
const ESCAPE = "Escape";
const CAPS_LOCK = "CapsLock";

type FunctionKey = "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12";

type CharacterKey =
  | "KeyA"
  | "KeyB"
  | "KeyC"
  | "KeyD"
  | "KeyE"
  | "KeyF"
  | "KeyG"
  | "KeyH"
  | "KeyI"
  | "KeyJ"
  | "KeyK"
  | "KeyL"
  | "KeyM"
  | "KeyN"
  | "KeyO"
  | "KeyP"
  | "KeyQ"
  | "KeyR"
  | "KeyS"
  | "KeyT"
  | "KeyU"
  | "KeyV"
  | "KeyW"
  | "KeyX"
  | "KeyY"
  | "KeyZ";

type NumberKey = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

export class KeyInfo {
  public static from(event: KeyboardEvent): KeyInfo {
    return new KeyInfo(event);
  }

  public readonly isShift: boolean;
  public readonly isAlt: boolean;
  public readonly isControl: boolean;
  public readonly isMeta: boolean;

  private readonly currentKey: string;

  private constructor(event: KeyboardEvent) {
    this.currentKey = event.key;
    this.isShift = event.shiftKey;
    this.isAlt = event.altKey;
    this.isControl = event.ctrlKey;
    this.isMeta = event.metaKey;
  }

  private isCurrentKey(key: string): boolean {
    return this.currentKey === key;
  }

  public get isArrow(): boolean {
    return this.isTop || this.isRight || this.isBottom || this.isLeft;
  }

  public get isTop(): boolean {
    return this.isCurrentKey(ARROW_TOP);
  }

  public get isRight(): boolean {
    return this.isCurrentKey(ARROW_RIGHT);
  }

  public get isBottom(): boolean {
    return this.isCurrentKey(ARROW_BOTTOM);
  }

  public get isLeft(): boolean {
    return this.isCurrentKey(ARROW_LEFT);
  }

  public get isAlphabet(): boolean {
    return ALPHABET.includes(this.currentKey);
  }

  public get isNumeric(): boolean {
    return NUMERIC.includes(this.currentKey);
  }

  public get isTab(): boolean {
    return this.isCurrentKey(TAB);
  }

  public get isEnter(): boolean {
    return this.isCurrentKey(ENTER);
  }

  public get isBackspace(): boolean {
    return this.isCurrentKey(BACKSPACE);
  }

  public get isEscape(): boolean {
    return this.isCurrentKey(ESCAPE);
  }

  public get isCapsLock(): boolean {
    return this.isCurrentKey(CAPS_LOCK);
  }

  public isFunction(key: FunctionKey): boolean {
    return this.isCurrentKey(key);
  }

  public isCharacter(key: CharacterKey): boolean {
    return this.isCurrentKey(key);
  }

  public isNumber(key: NumberKey): boolean {
    return this.isCurrentKey(key);
  }
}
