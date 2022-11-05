import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasService } from './marcas/marcas.service';
import { MarcasController } from './marcas/marcas.controller';

@Module({
  imports: [],
  controllers: [AppController, MarcasController],
  providers: [AppService, MarcasService],
})
export class AppModule {}
