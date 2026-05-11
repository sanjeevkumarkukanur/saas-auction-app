import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiSecurity,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

/**
 * Swagger helper for:
 * - JWT Authentication
 * - Tenant Header Authentication
 *
 * Usage:
 * @ApiAuthAndTenant()
 */
export function ApiAuthAndTenant() {
  return applyDecorators(
    // JWT Auth
    ApiBearerAuth('JWT'),

    // Tenant Header
    ApiSecurity('TenantId'),

    // 401
    ApiUnauthorizedResponse({
      description: 'Missing or invalid JWT token',
    }),

    // 403
    ApiForbiddenResponse({
      description: 'Insufficient permissions or missing tenant',
    }),
  );
}
