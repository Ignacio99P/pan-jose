import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getEmployee() {
        return [{
        id: 1,
        name: 'Carlos'
    },
    {
        id: 2,
        name: 'Raul'
    },
    {
        id: 3,
        name: 'Joaquin'
    }]
    }
}
