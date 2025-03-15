import { ApiResponseType } from "@/types/api-respones.type";
import { NextResponse } from "next/server";

export async function wrapWithTryCatch<T>(
  callback: () => Promise< ApiResponseType<T>>,
): Promise<ApiResponseType <T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
