import { headers } from "next/headers"

type Method = "GET" | "POST" | "PUT" | "DELETE"
//discriminator
type FetchServerForGetAndDelete = {
  method: "GET" | "DELETE"
}

//discriminator
type FetchServerForPostAndPut = {
  method: "POST" | "PUT" | "PATCH"
  data: unknown
}

// discriminated union
type FetchServer = {
  url: string
} & (FetchServerForGetAndDelete | FetchServerForPostAndPut)

export const fetchServer = async (payload: FetchServer): Promise<unknown> => {
  let dataResponse: any
  const host = headers().get("host")
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https"
  const { url, method } = payload
  switch (method) {
    case "POST":
      const { data } = payload
      const postRes = await fetch(`${protocol}://${host}/api/${url}`, {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      dataResponse = postRes.json()
      return dataResponse

    default:
      const getRes = await fetch(`${protocol}://${host}/api/${url}`, {
        cache: "no-store",
      })
      dataResponse = getRes.json()
      return dataResponse
  }
}
