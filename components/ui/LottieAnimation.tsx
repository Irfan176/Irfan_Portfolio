"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  style = { width: 400, height: 200 },
}: LottieAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });
    return () => anim.destroy();
  }, [animationData, loop, autoplay]);

  return <div ref={container} style={style} />;
};

export default LottieAnimation;
