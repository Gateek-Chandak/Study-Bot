import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next()

    const cookie = req.cookies.get("sessionID")

    if (!cookie) {
        res.cookies.set("sessionID", crypto.randomUUID())
    }

    return res
}