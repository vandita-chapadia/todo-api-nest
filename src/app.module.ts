import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todos } from './todos/todos.entity';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'todo_api',
      entities: [Todos],
      synchronize: true,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Van4ha6093@',

    }),
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
