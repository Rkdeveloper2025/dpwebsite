import { CalendarData, DisplayPanchangData, SunTimer } from "../Models/panchang-types";
import { DayList, HindiMonths, HindiThithis, NakshatraList } from "./panchang-utility";

/**
 * Check whether Amavas fall on Monday.
 * Sunrise has been considered for deciding the tithi
 **/
export const CheckSomvatiAmavas = (date:Date,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
    let returnData = false;
    if (DayList[1] === DayList[date.getDay()] && panchangCal.tithi === HindiThithis[29] && sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
        returnData = true;
    return returnData;
}
/**
 * Check whether Ekadshi vrat.
 * Sunrise has been considered for deciding the tithi
 **/
export const CheckEkadshiVrat = (date:Date,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
    let returnData = false;
    if ((panchangCal.tithi === HindiThithis[10] || panchangCal.tithi === HindiThithis[25]) && sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
        returnData = true;
    return returnData;
}
/**
 * Check whether current date has Shravan krishna Panchami Tithi
 * Sunrise has been considered for deciding the tithi
 **/ 
export const CheckMaunaPanchMi = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean => {
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[19] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Check whether current date has Shravan shukla Panchami Tithi
 * Sunrise has been considered for deciding the tithi
 **/
export const CheckNagPanchMi = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean => {
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[4] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Check whether current date fall on Shravan Tritiya Tithi
 * Sunrise has been considered for deciding the tithi
 */
export const CheckMadhushrawani = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean => {
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[2] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}

/**
 * Check whether current date fall on Shravan purnima Tithi
 * Sunrise has been considered for deciding the tithi
 */
export const checkRakshaBandhan = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean => {
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[14] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Check whether the tithi is Astami at midnight
 * Check whether the month is भाद्रपद
 * Check whether the moon nakshtra is Rohini
 */
export const checkKrishnaastmi = (date:Date,calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean => {
  let returnData = false;
  let midnightDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);
  if (HindiMonths[4] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[22] && 
    midnightDate.getTime() >= panchangCal.tithiStartTime.getTime() && 
    midnightDate.getTime() < panchangCal.tithiEndTime.getTime() && 
    panchangCal.nakshatra === NakshatraList[3] && 
    panchangCal.nakshatraStartTime.getTime() <= midnightDate.getTime() &&
    panchangCal.nakshatraEndTime.getTime() >= midnightDate.getTime())
    returnData = true;
  return returnData;
}
/**
 * Haritalika Vrat determination
 * It is celebrated on shukla tritiya of भाद्रपद
 * Sunrise has been considered for deciding the tithi
 */
export const CheckHaritalikaVrat = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer): boolean => {
  let returnData = false;
  if (HindiMonths[4] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[2] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Chaturthi (fourth day) of the Shukla Paksha (bright fortnight) in the Bhadrapada month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckChauthChandraVrat = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[4] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[3] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
