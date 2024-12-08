import React, { useEffect, useState } from "react";
import Feeds from "./feeds.json";
import Post from "../../../components/Post/Post";
import PostType from "../../../types/Post";

const FeedSection = () => {
  const [feeds, setFeeds]: [any, any] = useState([]);
  useEffect(() => {
    fetchFeed()
      .then((data) => {
        setFeeds(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [fetchFeed]);
  return (
    <div>
      <h2 className="text-slate-600 text-lg font-semibold mb-4">Feed</h2>
      <div className="flex flex-col gap-6">
        {feeds.map((feed: PostType) => (
          <Post key={feed.id} post={feed} />
        ))}
      </div>
    </div>
  );
};
const fetchFeed = async () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(api);
  const data = res.json();
  return data;
};
export default FeedSection;
