import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    const handleClick = () => {
        alert("Album page is in development");
    };
    return (
        <div
            className="search-result"
            onClick={handleClick}
        >
            <div>  
                <img src={result.image} alt="img" className="searchresultimg" />
                </div>

            <div className="searchresultnamediv">
                <h5>Album Name:</h5>
                <p>{result.title}</p>
            </div>

            <div className="searchresultfolowdiv">
                <h5>{result.follows} Follows</h5>
            </div>
        </div>

    );
};