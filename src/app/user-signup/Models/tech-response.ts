import { Fault } from './tech-fault';
import { Technology } from './technology';

export interface TechnologyResponse {
    TechnologyList : Technology[];
    Fault : Fault;
    SuccessIndicator: boolean;
}