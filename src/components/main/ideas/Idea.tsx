import * as React from "react";
import IdeaStatement from "./idea_statement";

enum Status {
  NotLoaded,
  Loading,
  Loaded,
}

export default function Idea(props) {
  const elementRef = React.useRef<HTMLImageElement>(null);
  const [status, setStatus] = React.useState(Status.NotLoaded);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }
    if (!window.IntersectionObserver) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ele = entry.target;
            const src = ele.getAttribute("data-background-src") as string;
            setStatus(Status.Loading);

            observer.unobserve(ele);

            // Create new image
            const image = new Image();
            image.src = src;
            image.addEventListener("load", () => {
              setStatus(Status.Loaded);
              ele.removeAttribute("data-background-src");
              // Update the `background-image` style
              ele["style"].backgroundImage = `url(${src})`;
            });
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(element);

    return (): void => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      className={
        props.big
          ? "w-[300px]  md:w-[492px] lg:w-[620px] h-[120px] md:h-[310px]"
          : "image w-[300px]  md:w-[236px] lg:w-[300px] h-[120px] md:h-[310px]"
      }
    >
      {status === Status.Loading && <div className="loading">Loading ...</div>}
      <div
        className={
          props.big
            ? "w-[300px]  md:w-[492px] lg:w-[620px] hover:drop-shadow-2xl h-[120px] md:h-[310px] grid content-center cursor-pointer"
            : "image w-[300px]  md:w-[236px] lg:w-[300px] h-[120px] md:h-[310px] grid content-center hover:drop-shadow-2xl cursor-pointer"
        }
        ref={elementRef}
        data-background-src={props.imgUrl}
      >
        <IdeaStatement> {props.idea} </IdeaStatement>
      </div>
    </div>
  );
}
