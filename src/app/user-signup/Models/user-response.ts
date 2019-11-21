import { UserEntity } from './user-entity';
import { UserFault } from './login-fault';

export interface UserResponse {
    UserList: UserEntity;
    Fault : UserFault;
    SuccessIndicator : boolean;
}