import { useContext } from "react";
import { LogedInUser } from "../providers/loged-in-user";
import type { User } from "../entities/user";
import { Client } from "../entities/client";
import {navigate} from "@reach/router";

export default function useCurrentUser(): User {
  const { state: { user } = { user: null } } = useContext(LogedInUser);
  if (user === null || user instanceof Client) {
    navigate("/login");
  }
  return user as User;
}

