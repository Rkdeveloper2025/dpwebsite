import { MhahPanchang } from 'mhah-panchang';
import { CalendarData, DisplayPanchangData, PanchangData, SunTimer } from '../Models/panchang-types';
import Sanscript  from '@indic-transliteration/sanscript';


   export const DayList = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
   export const MonthList = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];

  export const HindiMonths = [
    'वैशाख',
    'ज्येष्ठ',
    'आषाढ़',
    'श्रावण', 
    'भाद्रपद',
    'आश्विन',
    'कार्तिक',
    'मार्गशीर्ष(अगहन)',
    'पौष',
    'माघ',
    'फाल्गुन',
    'चैत्र',
  ];
  export const HindiThithis = [
    'शुक्ल प्रतिपदा',
    'शुक्ल द्वितीया',
    'शुक्ल तृतीया',
    'शुक्ल चतुर्थी',
    'शुक्ल पंचमी',
    'शुक्ल षष्ठी',
    'शुक्ल सप्तमी',
    'शुक्ल अष्टमी',
    'शुक्ल नवमी',
    'शुक्ल दशमी',
    'शुक्ल एकादशी',
    'शुक्ल द्वादशी',
    'शुक्ल त्रयोदशी',
    'शुक्ल चतुर्दशी',
    'पूर्णिमा',
    'कृष्ण प्रतिपदा',
    'कृष्ण द्वितीया',
    'कृष्ण तृतीया',
    'कृष्ण चतुर्थी',
    'कृष्ण पंचमी',
    'कृष्ण षष्ठी',
    'कृष्ण सप्तमी',
    'कृष्ण अष्टमी',
    'कृष्ण नवमी',
    'कृष्ण दशमी',
    'कृष्ण एकादशी',
    'कृष्ण द्वादशी',
    'कृष्ण त्रयोदशी',
    'कृष्ण चतुर्दशी',
    'अमावस्या',
  ];
  export const NakshatraList = [
    'अश्विनी',
    'भरणी',
    'कृत्तिका',
    'रोहिणी',
    'मृगशिरा',
    'आर्द्रा',
    'पुनर्वसु',
    'पुष्य',
    'आश्रेषा',
    'मघा',
    'पूर्व फाल्गुनी',
    'उत्तर फाल्गुनी',
    'हस्त',
    'चित्रा',
    'स्वाति',
    'विशाखा',
    'अनूराधा',
    'ज्येष्ठा',
    'मूल',
    'पूर्वाषाढा',
    'उत्तराषाढा',
    'श्रवण',
    'धनिष्ठा',
    'शतभिषा',
    'पूर्व भाद्रपद',
    'उत्तर भाद्रपद',
    'रेवती'
  ];
  export const GunaList = ['सत्त्व', 'राजस', 'तमस'];
  export const GanaList = ['दैविक', 'मानविक', 'भौतिक'];
  export const KaranaList = [
    'बव',
    'बालव',
    'कौलव',
    'तैतिल',
    'गरज',
    'वणिज',
    'विष्टि',
    'शकुनि',
    'चतुष्पाद',
    'नागव',
    'किंस्तुघ्न',
   ];
   export const YogaList = [
    'विष्कम्भ',
    'प्रीति',
    'आयुष्मान',
    'सौभाग्य',
    'शोभन',
    'अतिगण्ड',
    'सुकर्म',
    'धृति',
    'शूल',
    'गण्ड',
    'वृद्धि',
    'ध्रुव',
    'व्याघात',
    'हर्षण',
    'वज्र',
    'सिद्धि',
    'व्यतीपात',
    'वरीयान',
    'परिघ',
    'शिव',
    'सिद्ध',
    'साध्य',
    'शुभ',
    'शुक्ल',
    'ब्रह्म',
    'इन्द्र',
    'वैधृति',
   ];
  export const TrinityList = ['ब्रह्मा', 'विष्णु', 'महेश'];  
  export const RassiList = [
    'मेष',
    'वृषभ',
    'मिथुन',
    'कर्क',
    'सिंह',
    'कन्या',
    'तुला',
    'वृश्चिक',
    'धनु',
    'मकर',
    'कुंभ',
    'मीन',
  ];
  export const PakshaList = ['शुक्ल', 'कृष्ण'];
  export const GetPanchangData = (date: Date, latitude: number, longitude: number):CalendarData => {
    const mhahPanchang = new MhahPanchang();
    let calData: CalendarData = mhahPanchang.calendar(
      date,
      latitude,
      longitude
    );
    //console.log('CALENDAR',calData);
    return {
      Tithi: HindiThithis[calData.Tithi.ino],//Sanscript.t(calData.Tithi.name_en_IN, 'iso','devanagari'),
      Paksha: PakshaList[calData.Paksha.ino],//Sanscript.t(calData.Paksha.name_en_IN, 'iso','devanagari'),
      Nakshatra: NakshatraList[calData.Nakshatra.ino],//Sanscript.t(calData.Nakshatra.name_en_IN, 'iso','devanagari'),
      Yoga: Sanscript.t(calData.Yoga.name_en_IN, 'iso','devanagari'),
      Karna: Sanscript.t(calData.Karna.name_en_IN, 'iso','devanagari'),
      Masa: HindiMonths[calData.Masa.ino],//Sanscript.t(calData.Masa.name_en_IN, 'iso','devanagari'),
      MoonMasa: HindiMonths[calData.MoonMasa.ino],//Sanscript.t(calData.MoonMasa.name_en_IN, 'iso','devanagari'),
      //Raasi: Sanscript.t(calData.Raasi.name_en_IN, 'iso ','devanagari'),
     // Ritu: Sanscript.t(calData.Ritu.name_en_IN, 'iso ','devanagari'),
      Gana: Sanscript.t(calData.Gana.name_en_IN, 'iso','devanagari'),
      Guna: Sanscript.t(calData.Guna.name_en_IN, 'iso','devanagari'),
      Trinity: Sanscript.t(calData.Trinity.name_en_IN, 'iso','devanagari'),
      vikramaYear: GetVikramaYear(date, calData.MoonMasa.ino),
    }
  }
  /**
   * This function takes following thing as inputParameter
   * 1. date object
   * 2. hindimonth index as number
   * It returns a number which is Vikram samvat
   **/
  export const GetVikramaYear =(date: Date,masaCount: number): number | undefined => {
    if (date.getMonth() < 5 && [7,8,9,10].includes(masaCount)) {
      return date.getFullYear() + 56;
    } else {
      return date.getFullYear() + 57;
    }
  }
  export const GetPanchangCalcuculation =(date:Date): DisplayPanchangData => {
    const mhahPanchang = new MhahPanchang();
    const panchangData:PanchangData = mhahPanchang.calculate(date);
    const returnData:DisplayPanchangData = {
      tithi: HindiThithis[panchangData.Tithi.ino],
      tithiEndTime: panchangData.Tithi.end,
      tithiStartTime: panchangData.Tithi.start,
      nakshatra: NakshatraList[panchangData.Nakshatra.ino],
      nakshatraEndTime: panchangData.Nakshatra.end,
      nakshatraStartTime: panchangData.Nakshatra.start,
      yoga: YogaList[panchangData.Yoga.ino],
      yogaEndTime: panchangData.Yoga.end,
      yogaStartTime: panchangData.Yoga.start,
      gana: GanaList[panchangData.Gana.ino],
      guna: GunaList[panchangData.Guna.ino],
      karna: KaranaList[panchangData.Karna.ino],
      rassi: RassiList[panchangData.Raasi.ino],
      karnaEndTime: panchangData.Karna.end,
      karnaStartTime: panchangData.Karna.start,
      trinity: TrinityList[panchangData.Trinity.ino],
      panchak: CalculatePanchak(NakshatraList[panchangData.Nakshatra.ino]),
    };
    //console.log('CALCULATION::',this.mhahPanchang.calculate(date));
    return returnData;
  }
  export const GetSunTimer =(date:Date, latitude:number, longitude:number):SunTimer => {
    const mhahPanchang = new MhahPanchang();
    const sunTimer:SunTimer = mhahPanchang.sunTimer(date, latitude, longitude);
    return sunTimer;
  }
  /**
   * This method decide whether the panchak falles on a given date
   * It takes nakshatra name as a string in input and return a string
   **/
  export const CalculatePanchak = (nakshtraName:string):string => {
    const panchakNakshtra = [
      'धनिष्ठा',
      'शतभिषा',
      'पूर्व भाद्रपद',
      'उत्तर भाद्रपद',
      'रेवती',
    ];
    if (nakshtraName === 'धनिष्ठा')
      return 'आय स भादवा (पंचक) प्रारम्भ अय।';
    else if (nakshtraName === 'रेवती')
      return 'आय भादवा (पंचक) अंत ।';
    else if (panchakNakshtra.includes(nakshtraName))
      return 'भादवा(पंचक) चैल रहल अय।';
    else
      return '';
  }

