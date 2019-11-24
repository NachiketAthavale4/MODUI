import { Training } from './training';

export interface MentorPayment {
    training : Training;
    fees : number;
    commission : number;
}