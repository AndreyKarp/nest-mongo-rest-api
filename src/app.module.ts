import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { configModule } from './configure.root';

@Module({
  imports: [
    ProductsModule,
    configModule,
    MongooseModule.forRoot(process.env.DB_MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
