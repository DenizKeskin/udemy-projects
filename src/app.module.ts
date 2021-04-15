import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './tools/environment/environment';
import { UserModule } from './tools/user/user.module';
import { UserService } from './tools/user/user.service';


@Module({
  imports: [UserModule,MongooseModule.forRoot(environment.mongoUrl)], //Mongoose paketine tüm proje içerisinden erişebilir durumdayız.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
