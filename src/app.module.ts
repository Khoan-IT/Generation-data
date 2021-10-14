import { AuthModule } from './modules/auth/auth.module';
import { MainModule } from './modules/main/main.module';
import { ConfigModule } from '@nestjs/config';
import { UnauthorizedExceptionFilter } from './filters/unauthorized-exception.filter';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    MainModule,
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
  ],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: UnauthorizedExceptionFilter },
  ],
})
export class AppModule {}
