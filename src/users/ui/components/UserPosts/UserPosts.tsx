import { useState } from "react";
import { Pagination } from "../../../../shared";
import { UserPost } from "../../types";
import { UserPost as Post } from "../UserPost";

export const UserPosts = ({ posts }: UserPostsProps) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentPostIndex((prev) => prev + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPostIndex((prev) => prev - 1);
  };

  return (
    <>
      {posts.length ? (
        <Post
          postTitle={posts[currentPostIndex].title}
          postBody={posts[currentPostIndex].body}
        />
      ) : (
        "User has no posts"
      )}

      <Pagination
        currentPage={currentPostIndex + 1}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        totalPages={posts.length}
      />
    </>
  );
};

interface UserPostsProps {
  posts: UserPost[];
}
