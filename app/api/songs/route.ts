import { NextResponse } from 'next/server';
import { songs } from '@/data/songs';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(songs);
}
