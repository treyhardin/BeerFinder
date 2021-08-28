import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const convertToSlug = (Text) => {
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export { convertToSlug, ScrollToTop };