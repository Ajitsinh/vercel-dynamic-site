import { NextResponse } from 'next/server';
import { photos } from '@/data/photos';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(photos);
}
