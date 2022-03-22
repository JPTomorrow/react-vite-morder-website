import "@/components/Button.module.css";
import { Button as MantineButton } from "@mantine/core";

export default function Button({ uppercase, children, className }) {
  return (
    <MantineButton
      className={className}
      variant="outline"
      compact
      color="violet"
      uppercase={uppercase}
    >
      {children}
    </MantineButton>
  );
}
