import { toast } from "react-toastify";

import { fetchDataType } from "@/types/api-respones.type";

export async function fetchWithToast<T>(
  input: RequestInfo | URL,
  init: RequestInit = {},
  successMessage?: string,
): Promise<fetchDataType<T>> {
  const response = await fetch(input, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  const result = await response.json();

  if (!response.ok) {
    let message: string = "An unexpected error occurred.";

    if ("error" in result) {
      message = result.error;
    }

    toast.error(message);

    return { error: message };
  }

  if (successMessage) {
    toast.success(successMessage);
  }

  return { data: result.data };
}
