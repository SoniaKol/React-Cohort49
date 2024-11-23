import { small, medium, large } from "./avatarsData";
import { useWindowSize } from "./useWindowSize";
import { BeanHead } from "beanheads";

const Avatar = () => {
  const { width } = useWindowSize();

  if (width < 700) {
    return (
      <>
        <p>
          Your window size is <strong>small</strong>
        </p>
        <BeanHead {...small} />
      </>
    );
  }

  if (width < 1000) {
    return (
      <>
        <p>
          Your window size is <strong>medium</strong>
        </p>
        <BeanHead {...medium} />
      </>
    );
  }

  if (width >= 1000) {
    return (
      <>
        <p>
          Your window size is <strong>large</strong>
        </p>
        <BeanHead {...large} />
      </>
    );
  }
};

export default Avatar;
