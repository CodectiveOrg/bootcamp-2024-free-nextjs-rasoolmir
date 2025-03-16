import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-respones.type";

import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";
import { SignUpDto } from "@/dto/auth.dto";


export async function Post(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignUpDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    let foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (foundUser) {
      return NextResponse.json(
        { error: "The username is already taken." },
        { status: 400 },
      );
    }

    foundUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (foundUser) {
      return NextResponse.json({ error: "The email is already in use." }, { status: 400 });
    }


    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
