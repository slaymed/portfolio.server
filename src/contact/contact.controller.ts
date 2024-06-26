import { MailFrom } from './../mailer/enums/mail-from.enum';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { ContactDto } from './dto/contact.dto';
import { MailTo } from 'src/mailer/enums/mail-to.enum';
import { Templates } from 'src/mailer/enums/templates.enum';

@Controller('contact')
export class ContactController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async sendMail(@Body() dto: ContactDto) {
    try {
      await this.mailerService.send({
        from: MailFrom.HELLO,
        to: MailTo.INQUIRY,
        replyTo: dto.email,
        templateId: Templates.INQUIRY,
        dynamicTemplateData: {
          client_name: dto.name,
          client_email: dto.email,
          client_message: dto.message,
        },
      });
      return { message: 'Email sent successfully' };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
