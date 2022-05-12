import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtSecret } from './constants';
import { JwtStrategy } from './strategies/jwt.strategies';
import { LocalStrategy } from './strategies/local.strategies';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: "3600s" }
    })
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {
}
