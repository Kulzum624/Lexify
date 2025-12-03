import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const Mentorship = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [topicFilter, setTopicFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    fetchVideos();
  }, [page, sortBy]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: "law of pakistan lectures series",
            type: "video",
            key: "",
            maxResults: 12,
            order: sortBy,
            pageToken: page > 1 ? nextPageToken : undefined,
          },
        }
      );
      setVideos((prevVideos) =>
        page > 1 ? [...prevVideos, ...response.data.items] : response.data.items
      );
      setFilteredVideos((prevFilteredVideos) =>
        page > 1
          ? [...prevFilteredVideos, ...response.data.items]
          : response.data.items
      );
      setNextPageToken(response.data.nextPageToken || "");
      setTotalPages(Math.ceil(response.data.pageInfo.totalResults / 12));
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterVideos = () => {
    const filtered = videos.filter((video) =>
      video.snippet.title.toLowerCase().includes(topicFilter.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  const handleFilterChange = (event) => {
    setTopicFilter(event.target.value);
    filterVideos();
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Filter by topic"
            value={topicFilter}
            onChange={handleFilterChange}
            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="relevance">Relevant</option>
            <option value="date">Upload Date</option>
            <option value="viewCount">Views</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <p className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <YouTube videoId={video.id.videoId} className="w-full h-full" />
            </div>
            <p className="text-lg font-semibold mt-2 px-4 py-2">
              {video.snippet.title}
            </p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && page < totalPages && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Mentorship;
