import { RotatingLines } from "react-loader-spinner";
const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="#3A1078"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default Spinner;
