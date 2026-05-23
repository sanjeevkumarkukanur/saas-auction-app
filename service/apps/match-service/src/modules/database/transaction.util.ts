import { PrismaService } from '../prisma/prisma.service';

export async function runTransactionWithRetry<T>(
  prisma: PrismaService,
  callback: (tx: PrismaService) => Promise<T>,
  retries = 3,
): Promise<T> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await prisma.$transaction(
        async (tx) => callback(tx as PrismaService),
        { isolationLevel: 'Serializable' },
      );
    } catch (error: any) {
      if (attempt === retries - 1) throw error;

      console.warn('Retrying transaction...');
    }
  }

  throw new Error('Transaction failed after retries');
}
