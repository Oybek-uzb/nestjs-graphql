import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModel } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UsersModel
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
