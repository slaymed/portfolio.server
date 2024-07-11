import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientResponse, MailDataRequired, MailService } from '@sendgrid/mail';

@Injectable()
export class MailerService {
  constructor(
    configService: ConfigService,
    private readonly mailService: MailService,
  ) {
    this.mailService.setApiKey(configService.get('mailer').pass);
  }

  send(mail: MailDataRequired): Promise<[ClientResponse, {}]> {
    return this.mailService.send(mail);
  }
}
