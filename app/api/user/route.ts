import { NextResponse } from "next/server"

import { UserModel } from "@/app/_validationModels/models"

export async function GET(req: Request) {
  console.log(req)

  return NextResponse.json({ msg: "ok" })
}

export async function POST(req: Request) {
  const body = await req.json()
  try {
    const { age, name } = UserModel.parse(body)
    return NextResponse.json({ msg: "ok POST", data: { name, age } })
  } catch (error) {
    // @ts-expect-error
    const errorMsg = error?.issues[0].message
    return NextResponse.json({ msg: errorMsg, data: null })
  }
}
