import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) { }
    @Post()
    createTodo(@Body() body: any) {
        console.log('create TODO', body)
        return this.todosService.create(body);
    }
    @Get()
    findTodos() {
        console.log('Get all todos');
        return this.todosService.find();
    }

    @Get('/:id')
    findTodoById(@Param('id') id: string) {
        console.log(`Get Todo by Id ${id}`);
        return this.todosService.findOne(parseInt(id));
    }
    @Patch('/:id')
    updateTodoStatus(@Param('id') id: string) {
        console.log(`Update Todo by Id ${id}`);
        return this.todosService.update(parseInt(id));
    }

    // @Patch('/:id')
    // updateTodoDatata(@Param('id') id: string,@Body() body: any) {
    //     console.log(`Update todo data`);
    //     return this.todosService.updatebydata(parseInt(id),body);

    // }
    @Delete('/:id')
    deleteTodoById(@Param('id') id: string) {
        console.log(`Delete user by id ${id}`);
        return this.todosService.delete(parseInt(id));
    }
}
