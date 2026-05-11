import { Injectable } from '@nestjs/common';

type OtpRecord = { otp: string; expiresAt: number };

@Injectable()
export class OtpRepository {
  private store = new Map<string, OtpRecord>();

  async save(key: string, otp: string, ttlMs: number) {
    this.store.set(key, { otp, expiresAt: Date.now() + ttlMs });
  }

  async isValid(key: string, otp: string): Promise<boolean> {
    const rec = this.store.get(key);
    if (!rec) return false;
    if (rec.expiresAt < Date.now()) return false;
    return rec.otp === otp;
  }

  async delete(key: string) {
    this.store.delete(key);
  }
}
