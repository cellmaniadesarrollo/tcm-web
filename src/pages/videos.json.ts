//src\pages\videos.json.ts
import { db, Videos } from "astro:db";
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const videos = await db.select().from(Videos);

  if (!videos) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    })
  }

  return new Response(
    JSON.stringify(videos), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    }
  }
  )
}
