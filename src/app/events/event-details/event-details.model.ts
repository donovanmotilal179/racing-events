import { Time } from "@angular/common";

export interface IEventDetail {    
    id: number;
    race_name: string;
    time_of_race: string;
    distance_of_race: string;
    num_of_particpating_horses: number;
    num_of_particpating_jockeys: number;
    eventId: number;
    
};