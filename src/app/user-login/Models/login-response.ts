import { TokenResponse } from 'src/app/user-login/Models/token-response';
import { LoginFault } from 'src/app/user-login/Models/login-fault';

export interface AuthenticationResponse {
    TokenComplex : TokenResponse;
    Fault : LoginFault;
    SuccessIndicator : boolean;
}