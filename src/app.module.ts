import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { ContactModule } from './contact/contact.module';
import { ThrottlerModule, hours } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: hours(1),
        limit: 3,
      },
    ]),
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
