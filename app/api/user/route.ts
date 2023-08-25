import { NextResponse } from "next/server"

export async function GET(req: Request) {
  console.log(req)

  return NextResponse.json({ msg: "ok" })
}

export async function POST(req: Request) {
  const body = await req.json()
  try {
    return NextResponse.json({ msg: "ok POST", data: "" })
  } catch (error) {
    // @ts-expect-error
    const errorMsg = error?.issues[0].message
    return NextResponse.json({ msg: errorMsg, data: null })
  }
}
