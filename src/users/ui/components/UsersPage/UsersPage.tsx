import { useUserPosts, useUsers } from "../../state";
import "./usersPage.scss";
import { UsersTable } from "./UsersTable";
import { useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { SearchInput, Loader, Pagination } from "../../../../shared";
import { UserPosts } from "../UserPosts/UserPosts";
import { useQueryClient } from "@tanstack/react-query";

export const UsersPage = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState<number | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedName = useDebounce(username, 200);

  const { data: users = [], isLoading: isUsersLoading } = useUsers(currentPage);
  const {
    data: userPosts = [],
    isLoading: isUserPostsLoading,
    isFetching,
  } = useUserPosts(userId);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => user.name.toLowerCase().includes(debouncedName)),
    [debouncedName, users]
  );

  const handlePreviousClick = () => {
    setUserId(undefined);
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setUserId(undefined);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="page-wrapper">
      <SearchInput onChange={setUsername} value={username} />
      {isUsersLoading ? (
        <Loader />
      ) : (
        <UsersTable
          users={debouncedName?.length > 2 ? filteredUsers : users}
          onUserClick={setUserId}
        />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
      />
      {isUserPostsLoading && isFetching && <Loader />}
      {Boolean(userPosts.length) && !isUserPostsLoading && (
        <UserPosts posts={userPosts} />
      )}
    </div>
  );
};
