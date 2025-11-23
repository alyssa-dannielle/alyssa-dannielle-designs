import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { purchaseId: string } },
) {
  try {
    const { purchaseId } = params;

    // Get purchase record
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { pattern: true },
    });

    if (!purchase) {
      return NextResponse.json(
        { error: 'Purchase not found' },
        { status: 404 },
      );
    }

    // Check if expired
    if (new Date() > purchase.expiresAt) {
      return NextResponse.json(
        { error: 'Download link has expired' },
        { status: 410 },
      );
    }

    // Check download limit
    if (purchase.downloadCount >= purchase.maxDownloads) {
      return NextResponse.json(
        { error: 'Download limit reached' },
        { status: 403 },
      );
    }

    // Increment download count
    await prisma.purchase.update({
      where: { id: purchaseId },
      data: { downloadCount: purchase.downloadCount + 1 },
    });

    // Read and serve PDF
    const pdfPath = join(process.cwd(), 'public', purchase.pattern.pdfUrl);
    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${purchase.pattern.slug}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 },
    );
  }
}
