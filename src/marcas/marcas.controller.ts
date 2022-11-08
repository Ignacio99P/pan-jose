import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { MarcasService } from './marcas.service';

@Controller('api/edi')
export class MarcasController {
    constructor(private readonly marcasService: MarcasService) {}

    @Get()
    getMarcas() {
        return this.marcasService.getMarcas();
    }
    @Post()
    postMarcas(){
        return this.marcasService.postMarcas();
    }
}
