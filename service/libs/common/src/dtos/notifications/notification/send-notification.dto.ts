import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export type NotificationChannel =
  | 'email'
  | 'push'
  | 'inapp'
  | 'sms'
  | 'whatsapp';

export const NOTIFICATION_CHANNELS: NotificationChannel[] = [
  'email',
  'push',
  'inapp',
  'sms',
  'whatsapp',
];

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  message!: string;

  @IsArray()
  @IsIn(NOTIFICATION_CHANNELS, { each: true })
  channels!: NotificationChannel[];

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}