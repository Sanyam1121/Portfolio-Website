import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent < 100) return;

    const completeTimer = window.setTimeout(() => setLoaded(true), 150);
    const welcomeTimer = window.setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.clearTimeout(completeTimer);
      window.clearTimeout(welcomeTimer);
    };
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;

    setClicked(true);
    let hideTimer: number | undefined;

    import("./utils/initialFX")
      .then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
      })
      .catch((error) => {
        console.error("Initial animation failed; continuing:", error);
      })
      .finally(() => {
        hideTimer = window.setTimeout(() => {
          setIsLoading(false);
        }, 450);
      });

    return () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
    };
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a
          href={`${import.meta.env.BASE_URL}#`}
          className="loader-title"
          data-cursor="disable"
        >
          SANYAM GANDHI
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Video Editor</span> <span>Graphic Designer</span>
            <span> Video Editor</span> <span>Graphic Designer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let completed = false;

  let interval = window.setInterval(() => {
    if (completed) return;

    const step = percent < 70 ? 4 : 2;
    percent = Math.min(percent + step, 94);
    setLoading(percent);
  }, 80);

  let hardTimeout = window.setTimeout(() => {
    finishImmediately();
  }, 3000);

  function finishImmediately() {
    if (completed) return;
    completed = true;
    window.clearInterval(interval);
    window.clearTimeout(hardTimeout);
    percent = 100;
    setLoading(100);
  }

  function clear() {
    finishImmediately();
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      if (completed) {
        resolve(100);
        return;
      }

      window.clearInterval(interval);
      window.clearTimeout(hardTimeout);

      const finishInterval = window.setInterval(() => {
        if (percent < 100) {
          percent = Math.min(percent + 2, 100);
          setLoading(percent);
          return;
        }

        completed = true;
        window.clearInterval(finishInterval);
        resolve(100);
      }, 25);
    });
  }

  return { loaded, percent, clear };
};
