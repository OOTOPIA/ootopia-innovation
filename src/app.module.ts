import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { VideoModule } from './video/video.module';
import { AuthModule } from './auth/auth.module';
import { FilesUploadModule } from './files-upload/files-upload.module';
import { InterestsTagsModule } from './interests-tags/interests-tags.module';
import { CitiesModule } from './cities/cities.module';
import { WalletsModule } from './wallets/wallets.module';
import { WalletTransfersModule } from './wallet-transfers/wallet-transfers.module';
import { GeneralConfigModule } from './general-config/general-config.module';
import { EmailsModule } from './emails/emails.module';
import { MinioClientModule } from './minio-client/minio-client.module';
import { ConfigModule } from '@nestjs/config';
import { ImageUploadModule } from './image-upload/image-upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PostsModule,
    UsersModule,
    VideoModule,
    AuthModule,
    FilesUploadModule,
    InterestsTagsModule,
    CitiesModule,
    WalletsModule,
    WalletTransfersModule,
    GeneralConfigModule,
    EmailsModule,
    MinioClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ImageUploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
