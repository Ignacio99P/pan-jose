import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class MarcasService {
    getMarcas() {
        return [{
        id: 1,
        name: 'Toyota'
    },
    {
        id: 2,
        name: 'Ford'
    },
    {
        id: 3,
        name: 'Chevrolet'
    }]
    }}