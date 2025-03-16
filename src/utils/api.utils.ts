import { NextResponse } from "next/server";
import { ApiResponseType } from "@/types/api-respones.type";

type ParseBodyResult<T> = [error: null, data: T] | [error: string, data: null];

export async function parseBody<T>(
  request: Request,
): Promise<ParseBodyResult<T>> {
  try {
    const body = await request.json();
    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "SyntaxError") {
        return ["The body format is incorrect.", null];
      }

      return [error.message, null];
    }

    if (typeof error === "string") {
      return [error, null];
    }

    return ["An unexpected error occurred.", null];
  }
}

export async function wrapWithTryCatch<T>(
  callback: () => Promise<ApiResponseType<T>>,
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "خطای غیرمنتظره رخ داد." },
      { status: 500 },
    );
  }
}
