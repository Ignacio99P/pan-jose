import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { MarcasService } from './marcas.service';

@Controller('marcas')
export class MarcasController {
    constructor(private readonly marcasService: MarcasService) {}

    @Get()
    getProducts() {
        return this.marcasService.getMarcas();
    }
}
