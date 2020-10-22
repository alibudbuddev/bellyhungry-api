import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@modules/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
	imports: [
		UserModule,
		PassportModule
	],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService]
})
export class AuthModule {}
