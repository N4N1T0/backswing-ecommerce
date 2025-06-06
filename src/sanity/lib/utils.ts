import { Check, Clock, HandCoins, Send, X } from 'lucide-react'

// * HELPER FUNCTION TO READ THE BODY IN ORDER TO GET THE CORRECT DATA FROM THE WEBHOOK
export async function readBody(
  readable: ReadableStream<Uint8Array> | null
): Promise<string> {
  if (!readable) {
    throw new Error('Readable stream is null')
  }

  const reader = readable.getReader()
  const chunks: Uint8Array[] = []

  try {
    let done = false
    while (!done) {
      const { value, done: streamDone } = await reader.read()
      done = streamDone
      if (value) {
        chunks.push(value)
      }
    }
  } finally {
    reader.releaseLock()
  }

  const combined = new Uint8Array(
    chunks.reduce((acc, chunk) => acc + chunk.length, 0)
  )
  let position = 0
  for (const chunk of chunks) {
    combined.set(chunk, position)
    position += chunk.length
  }

  return new TextDecoder().decode(combined)
}

export const getIconForOrder = (status: string) => {
  switch (status) {
    case 'completado':
      return Check
    case 'cancelado':
      return X
    case 'procesando':
      return HandCoins
    default:
      return Clock
  }
}

export const getIconForCart = (status: string) => {
  switch (status) {
    case 'completado':
      return Check
    case 'enviado':
      return Send
    default:
      return Clock
  }
}
