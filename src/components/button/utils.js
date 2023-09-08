import { ButtonType } from './Button';

export function getColor(type, colored) {
  switch (type) {
    case ButtonType.PRIMARY:
      if (colored === 'disabled') {
        return '#B0B5C4';
      }
      return '#FFF';
    case ButtonType.SECONDARY:
    case ButtonType.LINK:
    case ButtonType.TEXT:
      if (colored === 'disabled') {
        return '#B0B5C4';
      }

      return '#1540C1';
    default:
      return '#FFF';
  }
}
