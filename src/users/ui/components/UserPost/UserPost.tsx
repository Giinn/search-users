import "./userPost.scss";

export const UserPost = ({ postTitle, postBody }: UserPostProps) => {
  return (
    <div className="post-wrapper">
      <span className="title">{postTitle}</span>
      <span>{postBody}</span>
    </div>
  );
};

interface UserPostProps {
  postTitle: string;
  postBody: string;
}
