import { Module } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';
import { MailerService } from './mailer.service';

@Module({
  providers: [MailerService, MailService],
  exports: [MailerService],
})
export class MailerModule {}
