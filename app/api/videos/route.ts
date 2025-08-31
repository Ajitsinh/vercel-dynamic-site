import { NextResponse } from 'next/server';
import { videos } from '@/data/videos';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(videos);
}
