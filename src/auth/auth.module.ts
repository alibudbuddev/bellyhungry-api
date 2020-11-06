import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@modules/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.register({
      secret: 'f00dTr@d3@pi',
      // signOptions: { expiresIn: '60s' },
    }),

	],
  providers: [
  	AuthService,
  	LocalStrategy,
  	SessionSerializer,
  	JwtStrategy,
  	FacebookStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
