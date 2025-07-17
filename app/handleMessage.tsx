import { useState } from "react";
import { IMessage } from "./api/model/model";

type MessageInput = {
  name: string;
  contact: string;
  message: string;
};

export function useHandleMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IMessage | null>(null);

  async function handleMessage(input: MessageInput) {
    if (loading) return;
    console.log(input)
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(input),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Something went wrong");
      }
      
      setData(json.message);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unexpected error occurred";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, data, handleMessage };
}
