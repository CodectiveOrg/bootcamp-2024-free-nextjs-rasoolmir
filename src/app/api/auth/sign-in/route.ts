import { NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-respones.type";

import { parseBody, setAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";
import { comparePassword } from "@/utils/bcrypt.utils";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignInDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "No user found with these credentials." },
        { status: 404 },
      );
    }

    if (!(await comparePassword(body.password, foundUser.password))) {
      return NextResponse.json(
        { error: "The password is incorrect." },
        { status: 401 },
      );
    }

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
