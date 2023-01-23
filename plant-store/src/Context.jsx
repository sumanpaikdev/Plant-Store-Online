import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [querySearch, setQuerySearch] = useState("Philodendron");

  // const allPhotoUrl = "https://api.unsplash.com/search/photos?page=5&per_page=30&query=plants on pot&client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE"
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=28&query=${querySearch}&client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE`
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data.results));
  }, [querySearch]);
  // console.log(querySearch)

  // this is search item
  function searchItem(name) {
    setQuerySearch(name);
  }

  // this is explore shop
  const [exploreStatus, setExploreStatus] = useState(true);
  function exploreStatusToggle() {
    if (exploreStatus) {
      setExploreStatus(false);
    } else {
      setExploreStatus(true);
    }
  }


  return (
    <Context.Provider value={{ allPhotos, querySearch, searchItem, exploreStatus, exploreStatusToggle }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
