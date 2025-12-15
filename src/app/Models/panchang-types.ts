export interface CalendarData {
    Tithi: any;
    Paksha: any;
    Nakshatra: any;
    Yoga: any;
    Karna: any;
    Masa: any;
    MoonMasa: any;
   // Raasi: any;
   // Ritu: any;
    Gana: any;
    Guna: any;
    Trinity: any;
    vikramaYear?: number;
    //hinDateCount?: number;
}
export interface PanchangData {
    Ayanamsa:any;
    Day:any;
    Gana:any;
    Guna:any;
    Karna:any;
    Julian:any;
    Nakshatra:any;
    Paksha:any;
    Ritu?:any;
    Raasi:any;
    Tithi:any;
    Trinity:any;
    Yoga:any;
}
export interface SunTimer {
    dawn:any;
    dusk:any;
    nauticalDawn:any;
    nauticalDusk:any;
    solarNoon:any;
    night:any;
    nadir:any; //darkest moment of night
    sunRise: Date;
    sunRiseEnd:Date;
    sunSetStart:Date;
    sunSet: Date;
}
export interface  DisplayPanchangData{
    tithi: string;
    tithiEndTime: Date;
    tithiStartTime: Date; 
    nakshatra: string;
    nakshatraEndTime: Date;
    nakshatraStartTime: Date;
    yoga: string;
    yogaEndTime: Date;
    yogaStartTime: Date;
    karna: string;
    karnaEndTime: Date;
    karnaStartTime: Date;
    guna: string;
    gana: string;
    rassi: string;
    trinity: string;
    panchak?:string;
}