import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  const sortedResults = results.slice().sort((a, b) => b.likes - a.likes);
  return (
    <div className="results-list">
      {sortedResults.map((result, id) => {
        return (
            <div className="results">
              <SearchResult result={result.title} className="title" />
              <div className="counts">
                <span className="count">
                  ️️<p style={{paddingTop: 5}}>❤️</p>
                  <SearchResult result={result.likes} className="like-count"/>
                </span>
                <span className="count">
                  <p style={{paddingTop: 5}}>👁</p>️
                  <SearchResult result={result.views} className="view-count" />
                </span>
                <span className="count">
                  <p style={{paddingTop: 5}}>💬</p>
                   <SearchResult style={{ padding: 0, fontsize: 500 }} result={result.comments} className="comment-count"/>
                  </span>
              </div>
            </div>
        )
      })}
    </div>
  );
};
