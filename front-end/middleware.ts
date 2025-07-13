import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");
interface Cookie {
  username: string;
  session: string;
}
export async function middleware(req: NextRequest) {
  const cookiesStore = await cookies();
  const creds = cookiesStore.get("creds");
  if (creds) {
    const value: Cookie = JSON.parse(creds?.value || "");
    const KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
    const token = jwt.decode(value.session, KEY);
    if (token?.login != "True") {
      return NextResponse.redirect(new URL("/authentication", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/authentication", req.url));
  }
}

export const config = {
  matcher: ["/postTask"],
};
