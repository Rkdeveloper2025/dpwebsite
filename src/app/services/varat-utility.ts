import { CalendarData, DisplayPanchangData, SunTimer, VratDetail } from "../Models/panchang-types";
import { DayList, GetPanchangCalcuculation, GetPanchangData, GetSunTimer, HindiMonths, HindiThithis, NakshatraList } from "./panchang-utility";

/**
 * Check whether Amavas fall on Monday.
 * Sunrise has been considered for deciding the tithi
 **/
export const CheckSomvatiAmavas = (date:Date,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
    let returnData = false;
    if (DayList[1] === DayList[date.getDay()] && panchangCal.tithi === HindiThithis[29] &&  sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
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
  if (HindiMonths[4] === calanderData.MoonMasa && 
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
  if (HindiMonths[4] === calanderData.MoonMasa && 
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
  if (HindiMonths[4] === calanderData.MoonMasa && 
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
  if (HindiMonths[4] === calanderData.MoonMasa && 
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
  if (HindiMonths[5] === calanderData.MoonMasa && 
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
  if (HindiMonths[5] === calanderData.MoonMasa && 
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
  if (HindiMonths[5] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[3] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Anant Chaturdashi festival determination
 * It is celebrated on the fourteenth day of the bright half of the Bhadrapada month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckAnantChaturdashi = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[5] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[13] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Pitripaksh determination
  * It is celebrated on the dark fortnight of the Ashwin month
  * Sunrise has been considered for deciding the tithi
 */
export const CheckPitripaksh = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[15] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Jimutvahana Vrat determination
 * It is celebrated on Ashtami of the Krishna Paksha of the Ashwin month
 * Sunset is considered for deciding the tithi
 */
export const CheckJimutvahanaVrat = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[22] &&
    sunTimer.sunSet.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunSet.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Vishwakarma puja determination
 */
export const CheckVishwakarmaPuja = (date:Date):boolean =>{
  let returnData = false;
  if (date.getDate() === 17 && date.getMonth() === 8)
    returnData = true;
  return returnData; 
}
/**
 * Pitripaksha end determination
 * It happens on the Amavasya of the Ashwin month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckPitripakshaEnd = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[29] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Kalashthapana determination
 * It is celebrated on the first day of the Shukla Paksha of the Ashwin month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckKalashthapana = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[0] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Belnauti determination
 * It is held on Ashwain shukla khasti tithi
 * Sunrise has been considered for deciding the tithi
 */
export const CheckBelnauti = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[5] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Vijyadashami determination
 * It is held on Ashwain shukla dashami tithi
 * Sunrise has been considered for deciding the tithi 
 */
export const CheckVijyadashami = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[9] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Gandhi Jayanti determination
 * It is held on 2nd October
 */
export const CheckGandhiJayanti = (date:Date):boolean =>{
  let returnData = false;
  if (date.getDate() === 2 && date.getMonth() === 9)
    returnData = true;
  return returnData;
}
/**
 * Kojagra determination
 * It is celebrated on the full moon night of the Ashwin month
 * Sunset has been considered for deciding the tithi
 */
export const CheckKojagra = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[6] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[14] &&
    sunTimer.sunSet.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunSet.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Diwali determination
 * It is celebrated on Amavasya of the Kartik month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckDiwali = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[29] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Bhai Dooj determination
 * It is celebrated on the second day of the Shukla Paksha of the Kartik month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckBhaiDooj = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[1] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Chhath Puja determination
 * It is celebrated on the sixth day of the Shukla Paksha of the Kartik month
 * Sunrise has been considered for deciding the tithi   
 */
export const CheckChhathPuja = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[5] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Samapuja start determination
 * It starts on saptami of the shukla paksha of the kartik month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckSamapujaStart = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[6] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
} 
/**
 * Devutthana Ekadashi determination
 * It is celebrated on the eleventh day of the Shukla Paksha of the Kartik month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckDevutthanaEkadashi = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[10] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Sama Visarjan and Kartik purnima determination
 * It is celebrated on the full moon of the Kartik month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckSamaVisarjanKartikPurnima = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[7] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[14] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Vivah Panchami determination
 * It is celebrated on the panchami of shukla paksha of margashirsha month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckVivahPanchami = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[8] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[4] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Gita Jayanti determination
 * It is celebrated on the shukla ekadashi of the margashirsha month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckGitaJayanti = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[8] === calanderData.MoonMasa && 
    panchangCal.tithi === HindiThithis[10] && 
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() && 
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Narak nivaran Chaturdashi (fourteenth day) of the Krishna Paksha (dark fortnight) in the Magh month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckNarakChaturdashi = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[10] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[28] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;  
  return returnData;
}
/**
 * Mauni Amavasya determination
 * It is celebrated on amavasya of the magh month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckMauniAmavasya = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[10] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[29] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Check Whether the current date is magh shukla panchami vasant panchami
 * Sunrise has been considered for deciding the tithi
 */
export const CheckMaghShuklaPanchami = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[10] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[4] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Republic Day determination
 * It is celebrated on 26th January
 */
export const CheckRepublicDay = (date:Date):boolean =>{
  let returnData = false;
  if (date.getDate() === 26 && date.getMonth() === 0)
    returnData = true;
  return returnData;
}
/**
 * Independence Day determination
 * It is celebrated on 15th August
 */
export const CheckIndependenceDay = (date:Date):boolean =>{
  let returnData = false;
  if (date.getDate() === 15 && date.getMonth() === 7)
    returnData = true;
  return returnData;
}
/**
 * Maha Shivratri determination
 * It is celebrated on the 14th day of the dark fortnight of the Phalgun month
 * Sunset has been considered for deciding the tithi
 */ 
export const CheckMahaShivratri = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[11] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[28] &&
    sunTimer.sunSet.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunSet.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
} 
/**
 * Check whether the current date is Holikadhan festival
 * It is celebrated on the full moon day of the Phalgun month
 * Sunset has been considered for deciding the tithi
 */ 
export const CheckHoli = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[11] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[14] &&
    sunTimer.sunSet.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunSet.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Holi determination
 * It is celebrated on pratipada tithi of the krishna paksha of the Chaitra month
 * Sunrise has been considered for deciding the tithi
 */
/* export const CheckChaitraPratipada = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{  
  let returnData = false;
  if (HindiMonths[0] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[15] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
} */
/**
 * Chaitra Navratri determination
 * It starts on chaitra shukla pratipada tithi
 * Sunrise has been considered for deciding the tithi
 */
export const CheckChaitraNavratriStart = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[0] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[0] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Rama Navami determination
 * It is celebrated on the ninth day of the Shukla Paksha of the Chaitra month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckRamaNavami = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[0] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[8] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Hanuman Jayanti determination
 * It is celebrated on the full moon day of the Chaitra month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckHanumanJayanti = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[0] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[14] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Janaki Navami determination
 * It is celebrated on the ninth day of the Shukla Paksha of the Vaishakha month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckJanakiNavami = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[1] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[8] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * VatSavitri Vrat determination
 * It is celebrated on the Amavasya Jyeshtha month
 * Sunrise has been considered for deciding the tithi
 * */
export const CheckVatSavitriVrat = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[2] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[29] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Ganga Dussehra determination
 * It is celebrated on the Dashami of the Shukla Paksha of the Jyeshtha month
 * Sunrise has been considered for deciding the tithi
 * */
export const CheckGangaDussehra = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[2] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[9] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Jagannath Rath Yatra determination
 * It is celebrated on the Dwitiya of the Shukla Paksha of the Ashadha month
 * Sunrise has been considered for deciding the tithi 
 * 
 */
export const CheckRathYatra = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[1] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Guru Purnima determination
 * It is celebrated on the full moon day of the Ashadha month
 * Sunrise has been considered for deciding the tithi
 */
export const CheckGuruPurnima = (calanderData:CalendarData,panchangCal:DisplayPanchangData,sunTimer:SunTimer):boolean =>{
  let returnData = false;
  if (HindiMonths[3] === calanderData.MoonMasa &&
    panchangCal.tithi === HindiThithis[14] &&
    sunTimer.sunRise.getTime() >= panchangCal.tithiStartTime.getTime() &&
    sunTimer.sunRise.getTime() < panchangCal.tithiEndTime.getTime())
    returnData = true;
  return returnData;
}
/**
 * Prepare vrat for a given date range
 */
export const PrepareVratForDateRange = (startDate:Date,endDate:Date,latitude:number,longitude:number):VratDetail[]=>{  
  let vratList:VratDetail[] = [];
  let currentDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate());
  while(currentDate.getMonth() === endDate.getMonth() && currentDate.getDate() <= endDate.getDate()){
    let calData = GetPanchangData(currentDate,latitude,longitude);
    let panchangCalculation = GetPanchangCalcuculation(currentDate)
    let sunTimer = GetSunTimer(currentDate,latitude,longitude);
    let vratDetail = getVratDetailByHinMonthAndTithi(calData.MoonMasa,calData,panchangCalculation,sunTimer);
    if(vratDetail.name !== ""){
      vratList.push(vratDetail);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return vratList;
}
/**
 * 
 * @param hindiMonth 
 * @param calanderData
 * @param panchangData 
 * @param sunTimer 
 */
export const getVratDetailByHinMonthAndTithi = (hindiMonth:string,calanderData:CalendarData,panchangData:DisplayPanchangData,sunTimer:SunTimer):VratDetail=>{
  let vratDetail:VratDetail = { name: "", date: 0};
  switch(hindiMonth){
    case HindiMonths[0]:
      if (CheckChaitraNavratriStart(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "चैत्र नवरात्रि आरंभ",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckRamaNavami(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "राम नवमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckHanumanJayanti(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "हनुमान जयंती",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[1]:
      if (CheckJanakiNavami(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "जानकी नवमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[2]:
      if (CheckVatSavitriVrat(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "वट सावित्री व्रत",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckGangaDussehra(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "गंगा दशहरा",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[3]:
      if (CheckRathYatra(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "रथ यात्रा",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckGuruPurnima(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "गुरु पूर्णिमा",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[4]:
      if (CheckMaunaPanchMi(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "मौन पंचमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckNagPanchMi(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "नाग पंचमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckMadhushrawani(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "मधुश्रावणी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (checkRakshaBandhan(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "रक्षाबंधन",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[5]:
      if (checkKrishnaastmi(sunTimer.sunRise,calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "कृष्णाष्टमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckHaritalikaVrat(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "हरितालिका व्रत",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckChauthChandraVrat(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "चौठ चंद्र व्रत",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckAnantChaturdashi(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "अनंत चतुर्दशी",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[6]:
      if (CheckPitripaksh(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "पितृपक्ष",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckJimutvahanaVrat(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "जिमुतवाहन व्रत",
          date: sunTimer.sunRise.getDate()
        };
      }
      
      if (CheckPitripakshaEnd(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "पितृपक्ष अंत",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckKalashthapana(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "कलश स्थापना",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckBelnauti(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "बेलनौती",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckVijyadashami(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "विजयादशमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckKojagra(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "कोजगरा",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[7]:
      if (CheckDiwali(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "दिवाली",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckBhaiDooj(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "भाई दूज",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckChhathPuja(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "छठ पूजा",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckSamapujaStart(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "समा पूजा प्रारंभ",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckDevutthanaEkadashi(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "देवउठनी एकादशी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckSamaVisarjanKartikPurnima(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "समा विसर्जन एवं कार्तिक पूर्णिमा",
          date: sunTimer.sunRise.getDate()
        };
      }
      break;
    case HindiMonths[8]:
      if (CheckVivahPanchami(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "विवाह पंचमी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckGitaJayanti(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "गीता जयंती",
          date: sunTimer.sunRise.getDate()
        };
      }

      break;
    case HindiMonths[9]:
      break;
    case HindiMonths[10]:
      if (CheckNarakChaturdashi(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "नरक निवारण चतुर्दशी",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckMauniAmavasya(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "मौनी अमावस्या",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckMaghShuklaPanchami(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "वसंत पंचमी (सरस्वती पूजा)",
          date: sunTimer.sunRise.getDate()
        };
      }

      break;
    case HindiMonths[11]:
      
      if (CheckMahaShivratri(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "महाशिवरात्रि",
          date: sunTimer.sunRise.getDate()
        };
      }
      if (CheckHoli(calanderData,panchangData,sunTimer)) {
        vratDetail = {
          name: "होली",
          date: sunTimer.sunRise.getDate()
        };
      }

      break;
    default:
      break;
  }
  if (CheckRepublicDay(sunTimer.sunRise)) {
      vratDetail = {
        name: "गणतंत्र दिवस",
        date: sunTimer.sunRise.getDate()
      };
    }
  if (CheckVishwakarmaPuja(sunTimer.sunRise)) {
      vratDetail = {
        name: "विश्वकर्मा पूजा",
        date: sunTimer.sunRise.getDate()
      };
    }
  if (CheckGandhiJayanti(sunTimer.sunRise)) {
      vratDetail = {
        name: "गांधी जयंती",
        date: sunTimer.sunRise.getDate()
      };
    }
    if (CheckIndependenceDay(sunTimer.sunRise)) {
      vratDetail = {
        name: "स्वतंत्रता दिवस",
        date: sunTimer.sunRise.getDate()
      };
    }
    if (CheckSomvatiAmavas(sunTimer.sunRise,panchangData,sunTimer)) {
      vratDetail = {
        name: "सोमवती अमावस्या",
        date: sunTimer.sunRise.getDate()
      };
    }
    if (CheckEkadshiVrat(sunTimer.sunRise,panchangData,sunTimer)) {
      let ekadashiName = EkadashiList.find(ekadashi=>ekadashi.hindiMonth === calanderData.MoonMasa && ekadashi.paksha === calanderData.Paksha)?.name ?? "एकादशी व्रत";
      vratDetail = {
        name: ekadashiName,
        date: sunTimer.sunRise.getDate()
      };
    }
  return vratDetail;
}
export const EkadashiList = [
  {
    name:'कामदा एकादशी',
    hindiMonth: HindiMonths[0],
    paksha: 'शुक्ल',
  },
  {
    name:'पापमोचनी एकादशी',
    hindiMonth: HindiMonths[0],
    paksha: 'कृष्ण',
  },
  {
    name:'मोहिनी एकादशी',
    hindiMonth: HindiMonths[1],
    paksha: 'शुक्ल',
  },
  {
    name:'वरूथिनी एकादशी',
    hindiMonth: HindiMonths[1],
    paksha: 'कृष्ण',
  },
  {
    name:'निर्जला एकादशी',
    hindiMonth: HindiMonths[2],
    paksha: 'शुक्ल',
  },
  {
    name:'अपरा एकादशी',
    hindiMonth: HindiMonths[2],
    paksha: 'कृष्ण',
  },
  {
    name:'देवशयनी एकादशी',
    hindiMonth: HindiMonths[3],
    paksha: 'शुक्ल',
  },
  {
    name:'योगिनी एकादशी',
    hindiMonth: HindiMonths[3],
    paksha: 'कृष्ण',
  },
  {
    name:'पुत्रदा एकादशी',
    hindiMonth: HindiMonths[4],
    paksha: 'शुक्ल',
  },
  {
    name:'कामिका एकादशी',
    hindiMonth: HindiMonths[4],
    paksha: 'कृष्ण',
  },
  {
    name:'परिवर्तिनी एकादशी',
    hindiMonth: HindiMonths[5],
    paksha: 'शुक्ल',
  },
  {
    name:'अजा एकादशी',
    hindiMonth: HindiMonths[5],
    paksha: 'कृष्ण',
  },
  {
    name:'पापांकुशा एकादशी',
    hindiMonth: HindiMonths[6],
    paksha: 'शुक्ल',
  },
  {
    name:'इंदिरा एकादशी',
    hindiMonth: HindiMonths[6],
    paksha: 'कृष्ण',
  },
  {
    name:'देवप्रबोधिनी/देवउठनी एकादशी',
    hindiMonth: HindiMonths[7],
    paksha: 'शुक्ल',
  },
  {
    name:'रमा एकादशी',
    hindiMonth: HindiMonths[7],
    paksha: 'कृष्ण',
  },
  {
    name:'मोक्षदा एकादशी',
    hindiMonth: HindiMonths[8],
    paksha: 'शुक्ल',
  },
  {
    name:'उत्पन्ना एकादशी',
    hindiMonth: HindiMonths[8],
    paksha: 'कृष्ण',
  },
  {
    name:'पुत्रदा एकादशी',
    hindiMonth: HindiMonths[9],
    paksha: 'शुक्ल',
  },
  {
    name:'सफला एकादशी',
    hindiMonth: HindiMonths[9],
    paksha: 'कृष्ण',
  },
  {
    name:'जया एकादशी',
    hindiMonth: HindiMonths[10],
    paksha: 'शुक्ल',
  },
  {
    name:'षटतिला एकादशी',
    hindiMonth: HindiMonths[10],
    paksha: 'कृष्ण',
  },
  {
    name:'आमलकी एकादशी',
    hindiMonth: HindiMonths[11],
    paksha: 'शुक्ल',
  },
  {
    name:'विजया एकादशी',
    hindiMonth: HindiMonths[11],
    paksha: 'कृष्ण',
  },
];