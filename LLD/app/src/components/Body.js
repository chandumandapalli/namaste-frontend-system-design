import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Here creating a inritial state as empty .. [] .. taking this as NULL
  // will create an issue when fetch for the first time in the append way 
  // ...NULL -- gives error .. so using better .. empty array .. as shown .. 
  const [memes, setMemes] = useState([]);
  // taking seperate state.. as whenever fetching data .. will show shimmer UI .. 
  // and as the res is obtained.. then make it false.. 
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      // as we come to the end of the page.. 
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();

    setShowShimmer(false);
    // making shimmer ui as false.. before setting data.. 
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
// showing shimmer UI when the var set to shimmer UI set to TRUE... 
      {showShimmer && <Shimmer />}
    </div>
  );
};
export default Body;
