import "@/components/Button.module.css";

export default function Button(props, { className }) {
  return (
    <button className={className}>
      <p>{props.children}</p>
    </button>
  );
}
