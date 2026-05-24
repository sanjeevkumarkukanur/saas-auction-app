export class RoomManager {
  static auctionRoom(tenantId: string, auctionId: string) {
    return `tenant:${tenantId}:auction:${auctionId}`;
  }

  static userRoom(tenantId: string, userId: string) {
    return `tenant:${tenantId}:user:${userId}`;
  }

  static tenantRoom(tenantId: string) {
    return `tenant:${tenantId}`;
  }
}
