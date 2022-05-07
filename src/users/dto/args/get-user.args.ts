import { ArgsType } from "@nestjs/graphql";

@ArgsType()
export class GetUserArgs {
    userId: string;
}