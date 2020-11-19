import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@modules/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.register({
      secret: 'f00dTr@d3@pi'
    }),

	],
  controllers: [AuthController],
  providers: [
  	AuthService,
  	LocalStrategy,
  	SessionSerializer,
  	JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
