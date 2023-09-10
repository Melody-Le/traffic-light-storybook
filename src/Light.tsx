export type Props = {
  // variant: string;
  /** some description */
  variant?: "green" | "yellow" | "red";
};

/** comment about my Light component */

const Light = ({ variant = "green" }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};
export default Light;
