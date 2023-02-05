import Rive from "@rive-app/react-canvas";
import classes from "./Rive.module.css";
export const Spider = () => (
  <Rive src="/spider_comp.riv" style={{ width: 300, height: 300 }} />
);

import { useRive } from "@rive-app/react-canvas";

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "/spider_comp.riv",
    autoplay: true,
  });

  return (
    <RiveComponent
      className={classes.module.spider}

      //   onMouseEnter={() => rive && rive.play()}
      //   onMouseLeave={() => rive && rive.pause()}
    />
  );
}
