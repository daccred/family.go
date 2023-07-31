import { Fragment } from "react";
import dynamic from "next/dynamic";
import { useRootRef } from "../component/use-root-ref";

const Animation = dynamic(() => import("../component/animation/Animation"), {
  ssr: false,
});
import { Overlay } from "../component/Overlay";

export default function Home() {
  const rootRef = useRootRef<HTMLDivElement>();

  return (
    <Fragment>
      <div ref={rootRef as any} style={rootStyles}>
        <Animation />
        <Overlay />
      </div>
    </Fragment>
  );
}

const rootStyles = {
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
};
