// libs/common/src/utils/response.util.ts
export function formatResponse<T>(data: T, message = 'Success') {
  return { success: true, message, data, timestamp: new Date().toISOString() };
}
