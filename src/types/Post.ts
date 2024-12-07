type PostType = {
  id: number; // Unique identifier for each post
  user: {
    id: number; // Unique identifier for the user
    username: string; // User's username
    avatar_url: string; // URL to the user's avatar
  };
  published_on: string; // ISO 8601 timestamp
  content: string; // Content of the post
  images: string[]; // Array of image URLs
  post_type: string; // "quote" | "photo" | "update"; // Type of the post
  likes_count: number; // Total number of likes
  comments_count: number; // Total number of comments
  views_count: number; // Total number of views
  likes: {
    id: number; // Unique identifier for the user who liked
    username: string; // Username of the user who liked
  }[]; // Array of users who liked the post
  comments: {
    user_id: number; // Unique identifier for the user who commented
    username: string; // Username of the user who commented
    comment: string; // Text of the comment
  }[]; // Array of comments
  views: {
    id: number; // Unique identifier for the user who viewed
    username: string; // Username of the user who viewed
  }[]; // Array of users who viewed the post
};

export default PostType;
