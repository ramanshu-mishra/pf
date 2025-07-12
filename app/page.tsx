"use client"
import { useEffect } from "react"
import Loading from "./splash"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.push("/home")
    }, 1000)

    return () => clearTimeout(t)
  })

  return <Loading />
}
