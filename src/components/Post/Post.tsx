import React from "react";
import PostType from "../../types/Post";
import { Eye, Heart, MessageCircle, MoreVertical, Share } from "react-feather";
import moment from "moment";
import formatNumber from "../../utils/format-number.util";

type IPost = {
  post: PostType;
};

const Post = ({ post }: IPost) => {
  return (
    <div className="shadow rounded-lg p-4">
      <div className="flex gap-2 items-center border-b pb-2">
        <div className="rounded-full overflow-hidden w-8 h-8">
          <img src={post.user.avatar_url} alt={post.user.username} />
        </div>
        <div className="flex-1">
          <h6 className="text-sm font-semibold text-slate-600">
            {post.user.username}
          </h6>
          <p className="text-xs text-slate-400">
            {moment(post.published_on).format("DD MMM YYYY, hh:mm A")}
          </p>
        </div>
        <div>
          <MoreVertical className="w-4 text-slate-600" />
        </div>
      </div>
      <div className="py-4 text-slate-600">{post.content}</div>
      <div className="pt-2 border-t flex items-center gap-4 justify-start text-slate-400">
        <button className="text-xs flex items-center gap-1">
          <Eye className="w-4 h-4" />{" "}
          <div>{formatNumber(post.views_count)}</div>
        </button>
        <button className="text-xs flex items-center gap-1">
          <Heart className="w-4 h-4" />
          {formatNumber(post.likes_count)}
        </button>
        <button className="text-xs flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          {formatNumber(post.comments_count)}
        </button>
        <div className="flex-1"></div>
        <button>
          <Share className="w-4 h-4 text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default Post;
