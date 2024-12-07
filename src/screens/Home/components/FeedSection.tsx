import React from "react";
import Feeds from "./feeds.json";
import Post from "../../../components/Post/Post";

const FeedSection = () => {
  return (
    <div>
      <h2 className="text-slate-600 text-lg font-semibold mb-4">Feed</h2>
      <div className="flex flex-col gap-6">
        {Feeds.map((feed) => (
          <Post key={feed.id} post={feed} />
        ))}
      </div>
    </div>
  );
};

export default FeedSection;
