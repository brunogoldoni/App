export interface IButtonProps {
  title?: string;
  onPress(): void;
  type?: "PRIMARY" | "SECONDARY";
}
