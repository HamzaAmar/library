export type Size = 'small' | 'medium' | 'large';

export interface ThumbnailProps {
  label: string;
  /**
   * Size of avatar
   * @default 'medium'
   */
  size?: Size;
  name?: string;
  /** Initials of person to display */
  initials?: string;
  /** Whether the avatar is for a customer */
  customer?: boolean;
  /** URL of the avatar image which falls back to initials if the image fails to load */
  source?: string;
  /** Callback fired when the image fails to load  */
  onError?(): void;
  /** Accessible label for the avatar image */
  accessibilityLabel?: string;
}
