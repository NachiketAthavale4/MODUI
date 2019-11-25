import { Technology } from './Technology';

export interface Training {
    rating : number;
    progress : number;
    timings : string;
    endDate : Date;
    startDate : Date;
    trainerName : string;
    technologyName : string;
    technology : Technology;
    status : string;
    commission : number
}