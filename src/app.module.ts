import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcasService } from './marcas/marcas.service';
import { MarcasController } from './marcas/marcas.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [],
  controllers: [AppController, MarcasController, EmployeeController],
  providers: [AppService, MarcasService, EmployeeService],
})
export class AppModule {}
