import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user";

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            email: "programmingiswonderful@gmail.com",
            password: "1102123112",
            age: 21,
            userId: "2163783jhgj893123213"
        }
    ]

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData
        }

        this.users.push(user)

        return user
    }

    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData.userId)

        Object.assign(user, updateUserData)

        return user
    }

    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.userId === getUserArgs.userId)
    }

    public getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email)
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        let foundUsers = []
        let foundUser = {}

        getUsersArgs.userIds.forEach(userId => {
            foundUser = this.users.find(user => user.userId === userId)

            if (foundUser) {
                foundUsers.push(foundUser)
            }
        })

        return foundUsers
    }

    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId)

        return this.users.splice(userIndex)[0]
    }
}