import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos) private repo: Repository<Todos>) { }
    create(body: any) {
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }

    find() {
        return this.repo.find();
    }

    findOne(id: number) {
        if (!id) return null;
        return this.repo.findOne({ where: { id: id } });
    }
    async update(id: number) {
        const todo = await this.repo.findOne({ where: { id: id } });
        if (!todo) {
            throw new NotFoundException('Todo not found');
        }
        // const update = this.repo.update()
        return this.repo.save({ ...todo, isCompleted: true })


    }

    // async updatebydata(id: number, body: any) {
    //     const todo = await this.repo.findOne({ where: { id: id } });
    //     if (!todo) {
    //         throw new NotFoundException('Todo not found');
    //     }
    //     // const data = {
    //     //     todo: todo.todo,
    //     //     description: todo.description
    //     // }
    //     // return this.repo.save({ ...todo, data });
    //     return this.repo
    //         .createQueryBuilder()
    //         .update()
    //         .set({
    //             todo: body.todo,
    //             description: body.todo,
    //             isCompleted: body.isCompleted
    //         })
    //         .where('id = :id', { id })
    //         .execute()

    // }

    async delete(id: number) {
        const todo = await this.repo.findOne({ where: { id: id } });
        if (!todo) {
            throw new NotFoundException('Todo not found')
        }
        return this.repo.delete(todo);
    }


}
