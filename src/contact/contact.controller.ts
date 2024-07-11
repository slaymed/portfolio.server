import { MailFrom } from './../mailer/enums/mail-from.enum';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { ContactDto } from './dto/contact.dto';
import { MailTo } from 'src/mailer/enums/mail-to.enum';
import { Templates } from 'src/mailer/enums/templates.enum';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ThrottlerBehindProxyGuard } from 'src/common/guards/throttler-behind-proxy.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly mailerService: MailerService) {}

  @UseGuards(ThrottlerBehindProxyGuard)
  @Post()
  async sendMail(@Body() dto: ContactDto) {
    try {
      // await this.mailerService.send({
      //   from: MailFrom.CONTACT,
      //   to: MailTo.HELLO,
      //   replyTo: dto.email,
      //   templateId: Templates.INQUIRY,
      //   dynamicTemplateData: {
      //     client_name: dto.name,
      //     client_email: dto.email,
      //     client_message: dto.message,
      //   },
      // });
      // await this.mailerService.send({
      //   from: MailFrom.NO_REPLY,
      //   to: dto.email,
      //   replyTo: MailTo.INQUIRY,
      //   templateId: Templates.MESSAGE_RECEIVED,
      //   dynamicTemplateData: {
      //     name: 'Mohamed Bedr',
      //     email: MailTo.INQUIRY,
      //     client_name: dto.name,
      //   },
      // });
      return {
        success: true,
        message: 'Your message has been sent successfully.',
      };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
