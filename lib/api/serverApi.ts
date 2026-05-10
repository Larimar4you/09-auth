import { cookies } from "next/headers";

import { api } from "./api";
import type { Note } from "@/types/note";
import type { User } from "@/types/user";

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page = 1,
  search = "",
  tag?: string,
): Promise<NotesResponse> => {
  const cookieStore = await cookies();

  const response = await api.get<NotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      search: search || undefined,
      tag: tag || undefined,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies();

  const response = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();

  const response = await api.get<User>("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
};

export const checkServerSession = async () => {
  const cookieStore = await cookies();

  const response = await api.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response;
};
