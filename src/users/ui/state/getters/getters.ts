import { useQuery } from "@tanstack/react-query";
import { usersHttpClient } from "../../../data/usersHttpClient";

export function useUsers(page: number) {
  return useQuery(["users", page], () => usersHttpClient.getUsers(page), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
}

export function useUserPosts(userId?: number) {
  return useQuery(
    ["posts", userId],
    userId ? () => usersHttpClient.getUserPosts(userId) : () => [],
    {
      enabled: !!userId,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );
}
