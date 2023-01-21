import React, {useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([])
    const [querySearch, setQuerySearch] = useState("")

    // const allPhotoUrl = "https://api.unsplash.com/search/photos?client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE&query=plant on pot"
    // const allPhotoUrl = "https://api.unsplash.com/search/photos?page=5&per_page=30&query=plants on pot&client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE"
    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?page=5&per_page=30&query=${querySearch}&client_id=ci4Doh8HrzAal6IFAg4bDbRODKv9MNeb8rOQwLt66rE`)
        .then(res => res.json())
        .then(data => setAllPhotos(data.results))
    }, [querySearch])
  console.log(querySearch)

  function searchItem(name) {
    setQuerySearch(name)
  }
    return(
        <Context.Provider value={{allPhotos, querySearch, searchItem }}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}