(window.webpackJsonp=window.webpackJsonp||[]).push([["index"],{"y/pk":function(n,e,a){!function(n){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(n){for(var e,a=1,r=arguments.length;a<r;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},a="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},r={weekdays:{shorthand:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],longhand:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},months:{shorthand:["1","2","3","4","5","6","7","8","9","10","11","12"],longhand:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},rangeSeparator:" - "};a.l10ns.ar=r,a.l10ns;var i="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},o={weekdays:{shorthand:["So","Mo","Di","Mi","Do","Fr","Sa"],longhand:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},months:{shorthand:["Jän","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],longhand:["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},firstDayOfWeek:1,weekAbbreviation:"KW",rangeSeparator:" bis ",scrollTitle:"Zum Ändern scrollen",toggleTitle:"Zum Umschalten klicken"};i.l10ns.at=o,i.l10ns;var t="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},d={weekdays:{shorthand:["B.","B.e.","Ç.a.","Ç.","C.a.","C.","Ş."],longhand:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},months:{shorthand:["Yan","Fev","Mar","Apr","May","İyn","İyl","Avq","Sen","Okt","Noy","Dek"],longhand:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},firstDayOfWeek:1,ordinal:function(){return"."},rangeSeparator:" - ",weekAbbreviation:"Hf",scrollTitle:"Artırmaq üçün sürüşdürün",toggleTitle:"Aç / Bağla",amPM:["GƏ","GS"],time_24hr:!0};t.l10ns.az=d,t.l10ns;var l="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},s={weekdays:{shorthand:["Нд","Пн","Аў","Ср","Чц","Пт","Сб"],longhand:["Нядзеля","Панядзелак","Аўторак","Серада","Чацвер","Пятніца","Субота"]},months:{shorthand:["Сту","Лют","Сак","Кра","Тра","Чэр","Ліп","Жні","Вер","Кас","Ліс","Сне"],longhand:["Студзень","Люты","Сакавік","Красавік","Травень","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Снежань"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Тыд.",scrollTitle:"Пракруціце для павелічэння",toggleTitle:"Націсніце для пераключэння",amPM:["ДП","ПП"],yearAriaLabel:"Год",time_24hr:!0};l.l10ns.be=s,l.l10ns;var h="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},u={firstDayOfWeek:1,weekdays:{shorthand:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],longhand:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],longhand:["Januar","Februar","Mart","April","Maj","Juni","Juli","Avgust","Septembar","Oktobar","Novembar","Decembar"]},time_24hr:!0};h.l10ns.bs=u,h.l10ns;var w="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},f={weekdays:{shorthand:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],longhand:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"]},months:{shorthand:["Яну","Фев","Март","Апр","Май","Юни","Юли","Авг","Сеп","Окт","Ное","Дек"],longhand:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"]},time_24hr:!0,firstDayOfWeek:1};w.l10ns.bg=f,w.l10ns;var k="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},g={weekdays:{shorthand:["রবি","সোম","মঙ্গল","বুধ","বৃহস্পতি","শুক্র","শনি"],longhand:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"]},months:{shorthand:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ","সেপ্টে","অক্টো","নভে","ডিসে"],longhand:["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]}};k.l10ns.bn=g,k.l10ns;var p="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},m={weekdays:{shorthand:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],longhand:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},months:{shorthand:["Gen","Febr","Març","Abr","Maig","Juny","Jul","Ag","Set","Oct","Nov","Des"],longhand:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"]},ordinal:function(n){var e=n%100;if(e>3&&e<21)return"è";switch(e%10){case 1:return"r";case 2:return"n";case 3:return"r";case 4:return"t";default:return"è"}},firstDayOfWeek:1,time_24hr:!0};p.l10ns.cat=p.l10ns.ca=m,p.l10ns;var b="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},c={weekdays:{shorthand:["Ne","Po","Út","St","Čt","Pá","So"],longhand:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"]},months:{shorthand:["Led","Ún","Bře","Dub","Kvě","Čer","Čvc","Srp","Zář","Říj","Lis","Pro"],longhand:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"]},firstDayOfWeek:1,ordinal:function(){return"."},rangeSeparator:" do ",weekAbbreviation:"Týd.",scrollTitle:"Rolujte pro změnu",toggleTitle:"Přepnout dopoledne/odpoledne",amPM:["dop.","odp."],yearAriaLabel:"Rok",time_24hr:!0};b.l10ns.cs=c,b.l10ns;var v="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},y={weekdays:{shorthand:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],longhand:["Dydd Sul","Dydd Llun","Dydd Mawrth","Dydd Mercher","Dydd Iau","Dydd Gwener","Dydd Sadwrn"]},months:{shorthand:["Ion","Chwef","Maw","Ebr","Mai","Meh","Gorff","Awst","Medi","Hyd","Tach","Rhag"],longhand:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},firstDayOfWeek:1,ordinal:function(n){return 1===n?"af":2===n?"ail":3===n||4===n?"ydd":5===n||6===n?"ed":n>=7&&n<=10||12==n||15==n||18==n||20==n?"fed":11==n||13==n||14==n||16==n||17==n||19==n?"eg":n>=21&&n<=39?"ain":""},time_24hr:!0};v.l10ns.cy=y,v.l10ns;var S="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},M={weekdays:{shorthand:["søn","man","tir","ons","tors","fre","lør"],longhand:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},months:{shorthand:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],longhand:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},ordinal:function(){return"."},firstDayOfWeek:1,rangeSeparator:" til ",weekAbbreviation:"uge",time_24hr:!0};S.l10ns.da=M,S.l10ns;var A="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},D={weekdays:{shorthand:["So","Mo","Di","Mi","Do","Fr","Sa"],longhand:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},months:{shorthand:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],longhand:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},firstDayOfWeek:1,weekAbbreviation:"KW",rangeSeparator:" bis ",scrollTitle:"Zum Ändern scrollen",toggleTitle:"Zum Umschalten klicken",time_24hr:!0};A.l10ns.de=D,A.l10ns;var T={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var e=n%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},J="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},O={firstDayOfWeek:1,rangeSeparator:" ĝis ",weekAbbreviation:"Sem",scrollTitle:"Rulumu por pligrandigi la valoron",toggleTitle:"Klaku por ŝalti",weekdays:{shorthand:["Dim","Lun","Mar","Mer","Ĵaŭ","Ven","Sab"],longhand:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aŭg","Sep","Okt","Nov","Dec"],longhand:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},ordinal:function(){return"-a"},time_24hr:!0};J.l10ns.eo=O,J.l10ns;var j="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},P={weekdays:{shorthand:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],longhand:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},months:{shorthand:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],longhand:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},ordinal:function(){return"º"},firstDayOfWeek:1,rangeSeparator:" a ",time_24hr:!0};j.l10ns.es=P,j.l10ns;var N="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},z={weekdays:{shorthand:["P","E","T","K","N","R","L"],longhand:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]},months:{shorthand:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],longhand:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"]},firstDayOfWeek:1,ordinal:function(){return"."},weekAbbreviation:"Näd",rangeSeparator:" kuni ",scrollTitle:"Keri, et suurendada",toggleTitle:"Klõpsa, et vahetada",time_24hr:!0};N.l10ns.et=z,N.l10ns;var F="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},W={weekdays:{shorthand:["یک","دو","سه","چهار","پنج","جمعه","شنبه"],longhand:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنچ‌شنبه","جمعه","شنبه"]},months:{shorthand:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],longhand:["ژانویه","فوریه","مارس","آوریل","مه","ژوئن","ژوئیه","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"]},firstDayOfWeek:6,ordinal:function(){return""}};F.l10ns.fa=W,F.l10ns;var L="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},_={firstDayOfWeek:1,weekdays:{shorthand:["Su","Ma","Ti","Ke","To","Pe","La"],longhand:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"]},months:{shorthand:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],longhand:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]},ordinal:function(){return"."},time_24hr:!0};L.l10ns.fi=_,L.l10ns;var K="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},C={weekdays:{shorthand:["Sun","Mán","Týs","Mik","Hós","Frí","Ley"],longhand:["Sunnudagur","Mánadagur","Týsdagur","Mikudagur","Hósdagur","Fríggjadagur","Leygardagur"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],longhand:["Januar","Februar","Mars","Apríl","Mai","Juni","Juli","August","Septembur","Oktobur","Novembur","Desembur"]},ordinal:function(){return"."},firstDayOfWeek:1,rangeSeparator:" til ",weekAbbreviation:"vika",scrollTitle:"Rulla fyri at broyta",toggleTitle:"Trýst fyri at skifta",yearAriaLabel:"Ár",time_24hr:!0};K.l10ns.fo=C,K.l10ns;var G="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},E={firstDayOfWeek:1,weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},ordinal:function(n){return n>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",time_24hr:!0};G.l10ns.fr=E,G.l10ns;var H="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},R={weekdays:{shorthand:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],longhand:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},months:{shorthand:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιού","Ιού","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],longhand:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},firstDayOfWeek:1,ordinal:function(){return""},weekAbbreviation:"Εβδ",rangeSeparator:" έως ",scrollTitle:"Μετακυλήστε για προσαύξηση",toggleTitle:"Κάντε κλικ για αλλαγή",amPM:["ΠΜ","ΜΜ"]};H.l10ns.gr=R,H.l10ns;var I="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},V={weekdays:{shorthand:["א","ב","ג","ד","ה","ו","ש"],longhand:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]},months:{shorthand:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],longhand:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},rangeSeparator:" אל ",time_24hr:!0};I.l10ns.he=V,I.l10ns;var B="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},U={weekdays:{shorthand:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],longhand:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},months:{shorthand:["जन","फर","मार्च","अप्रेल","मई","जून","जूलाई","अग","सित","अक्ट","नव","दि"],longhand:["जनवरी ","फरवरी","मार्च","अप्रेल","मई","जून","जूलाई","अगस्त ","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"]}};B.l10ns.hi=U,B.l10ns;var Y="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},q={firstDayOfWeek:1,weekdays:{shorthand:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],longhand:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},months:{shorthand:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],longhand:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"]},time_24hr:!0};Y.l10ns.hr=q,Y.l10ns;var Q="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Z={firstDayOfWeek:1,weekdays:{shorthand:["V","H","K","Sz","Cs","P","Szo"],longhand:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"]},months:{shorthand:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],longhand:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"]},ordinal:function(){return"."},weekAbbreviation:"Hét",scrollTitle:"Görgessen",toggleTitle:"Kattintson a váltáshoz",rangeSeparator:" - ",time_24hr:!0};Q.l10ns.hu=Z,Q.l10ns;var x="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},X={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};x.l10ns.id=X,x.l10ns;var $="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},nn={weekdays:{shorthand:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],longhand:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],longhand:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"]},ordinal:function(){return"."},firstDayOfWeek:1,rangeSeparator:" til ",weekAbbreviation:"vika",yearAriaLabel:"Ár",time_24hr:!0};$.l10ns.is=nn,$.l10ns;var en="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},an={weekdays:{shorthand:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],longhand:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]},months:{shorthand:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],longhand:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"]},firstDayOfWeek:1,ordinal:function(){return"°"},rangeSeparator:" al ",weekAbbreviation:"Se",scrollTitle:"Scrolla per aumentare",toggleTitle:"Clicca per cambiare",time_24hr:!0};en.l10ns.it=an,en.l10ns;var rn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},on={weekdays:{shorthand:["日","月","火","水","木","金","土"],longhand:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},months:{shorthand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],longhand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},time_24hr:!0,rangeSeparator:" から ",firstDayOfWeek:1};rn.l10ns.ja=on,rn.l10ns;var tn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},dn={weekdays:{shorthand:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],longhand:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},months:{shorthand:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],longhand:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"კვ.",scrollTitle:"დასქროლეთ გასადიდებლად",toggleTitle:"დააკლიკეთ გადართვისთვის",amPM:["AM","PM"],yearAriaLabel:"წელი",time_24hr:!0};tn.l10ns.ka=dn,tn.l10ns;var ln="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},sn={weekdays:{shorthand:["일","월","화","수","목","금","토"],longhand:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},months:{shorthand:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],longhand:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},ordinal:function(){return"일"},rangeSeparator:" ~ "};ln.l10ns.ko=sn,ln.l10ns;var hn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},un={weekdays:{shorthand:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស.","សុក្រ","សៅរ៍"],longhand:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"]},months:{shorthand:["មករា","កុម្ភះ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],longhand:["មករា","កុម្ភះ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"]},ordinal:function(){return""},firstDayOfWeek:1,rangeSeparator:" ដល់ ",weekAbbreviation:"សប្តាហ៍",scrollTitle:"រំកិលដើម្បីបង្កើន",toggleTitle:"ចុចដើម្បីផ្លាស់ប្ដូរ",yearAriaLabel:"ឆ្នាំ",time_24hr:!0};hn.l10ns.km=un,hn.l10ns;var wn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},fn={weekdays:{shorthand:["Жс","Дс","Сc","Ср","Бс","Жм","Сб"],longhand:["Жексенбi","Дүйсенбi","Сейсенбi","Сәрсенбi","Бейсенбi","Жұма","Сенбi"]},months:{shorthand:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шiл","Там","Қыр","Қаз","Қар","Жел"],longhand:["Қаңтар","Ақпан","Наурыз","Сәуiр","Мамыр","Маусым","Шiлде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Апта",scrollTitle:"Үлкейту үшін айналдырыңыз",toggleTitle:"Ауыстыру үшін басыңыз",amPM:["ТД","ТК"],yearAriaLabel:"Жыл"};wn.l10ns.kz=fn,wn.l10ns;var kn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},gn={weekdays:{shorthand:["S","Pr","A","T","K","Pn","Š"],longhand:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"]},months:{shorthand:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spl","Lap","Grd"],longhand:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"]},firstDayOfWeek:1,ordinal:function(){return"-a"},rangeSeparator:" iki ",weekAbbreviation:"Sav",scrollTitle:"Keisti laiką pelės rateliu",toggleTitle:"Perjungti laiko formatą",time_24hr:!0};kn.l10ns.lt=gn,kn.l10ns;var pn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},mn={firstDayOfWeek:1,weekdays:{shorthand:["Sv","Pr","Ot","Tr","Ce","Pk","Se"],longhand:["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],longhand:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"]},rangeSeparator:" līdz ",time_24hr:!0};pn.l10ns.lv=mn,pn.l10ns;var bn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},cn={weekdays:{shorthand:["Не","По","Вт","Ср","Че","Пе","Са"],longhand:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"]},months:{shorthand:["Јан","Фев","Мар","Апр","Мај","Јун","Јул","Авг","Сеп","Окт","Ное","Дек"],longhand:["Јануари","Февруари","Март","Април","Мај","Јуни","Јули","Август","Септември","Октомври","Ноември","Декември"]},firstDayOfWeek:1,weekAbbreviation:"Нед.",rangeSeparator:" до ",time_24hr:!0};bn.l10ns.mk=cn,bn.l10ns;var vn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},yn={firstDayOfWeek:1,weekdays:{shorthand:["Да","Мя","Лх","Пү","Ба","Бя","Ня"],longhand:["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"]},months:{shorthand:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],longhand:["Нэгдүгээр сар","Хоёрдугаар сар","Гуравдугаар сар","Дөрөвдүгээр сар","Тавдугаар сар","Зургаадугаар сар","Долдугаар сар","Наймдугаар сар","Есдүгээр сар","Аравдугаар сар","Арваннэгдүгээр сар","Арванхоёрдугаар сар"]},rangeSeparator:"-с ",time_24hr:!0};vn.l10ns.mn=yn,vn.l10ns;var Sn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}};Sn.l10ns;var Mn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},An={weekdays:{shorthand:["နွေ","လာ","ဂါ","ဟူး","ကြာ","သော","နေ"],longhand:["တနင်္ဂနွေ","တနင်္လာ","အင်္ဂါ","ဗုဒ္ဓဟူး","ကြာသပတေး","သောကြာ","စနေ"]},months:{shorthand:["ဇန်","ဖေ","မတ်","ပြီ","မေ","ဇွန်","လိုင်","သြ","စက်","အောက်","နို","ဒီ"],longhand:["ဇန်နဝါရီ","ဖေဖော်ဝါရီ","မတ်","ဧပြီ","မေ","ဇွန်","ဇူလိုင်","သြဂုတ်","စက်တင်ဘာ","အောက်တိုဘာ","နိုဝင်ဘာ","ဒီဇင်ဘာ"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0};Mn.l10ns.my=An,Mn.l10ns;var Dn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Tn={weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},firstDayOfWeek:1,weekAbbreviation:"wk",rangeSeparator:" t/m ",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",time_24hr:!0,ordinal:function(n){return 1===n||8===n||n>=20?"ste":"de"}};Dn.l10ns.nl=Tn,Dn.l10ns;var Jn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},On={weekdays:{shorthand:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],longhand:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],longhand:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"]},firstDayOfWeek:1,rangeSeparator:" til ",weekAbbreviation:"Uke",scrollTitle:"Scroll for å endre",toggleTitle:"Klikk for å veksle",time_24hr:!0,ordinal:function(){return"."}};Jn.l10ns.no=On,Jn.l10ns;var jn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Pn={weekdays:{shorthand:["ਐਤ","ਸੋਮ","ਮੰਗਲ","ਬੁੱਧ","ਵੀਰ","ਸ਼ੁੱਕਰ","ਸ਼ਨਿੱਚਰ"],longhand:["ਐਤਵਾਰ","ਸੋਮਵਾਰ","ਮੰਗਲਵਾਰ","ਬੁੱਧਵਾਰ","ਵੀਰਵਾਰ","ਸ਼ੁੱਕਰਵਾਰ","ਸ਼ਨਿੱਚਰਵਾਰ"]},months:{shorthand:["ਜਨ","ਫ਼ਰ","ਮਾਰ","ਅਪ੍ਰੈ","ਮਈ","ਜੂਨ","ਜੁਲਾ","ਅਗ","ਸਤੰ","ਅਕ","ਨਵੰ","ਦਸੰ"],longhand:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"]},time_24hr:!0};jn.l10ns.pa=Pn,jn.l10ns;var Nn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},zn={weekdays:{shorthand:["Nd","Pn","Wt","Śr","Cz","Pt","So"],longhand:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"]},months:{shorthand:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],longhand:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]},rangeSeparator:" do ",weekAbbreviation:"tydz.",scrollTitle:"Przewiń, aby zwiększyć",toggleTitle:"Kliknij, aby przełączyć",firstDayOfWeek:1,time_24hr:!0,ordinal:function(){return"."}};Nn.l10ns.pl=zn,Nn.l10ns;var Fn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Wn={weekdays:{shorthand:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],longhand:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]},months:{shorthand:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],longhand:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},rangeSeparator:" até ",time_24hr:!0};Fn.l10ns.pt=Wn,Fn.l10ns;var Ln="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},_n={weekdays:{shorthand:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],longhand:["Duminică","Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă"]},months:{shorthand:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],longhand:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"]},firstDayOfWeek:1,time_24hr:!0,ordinal:function(){return""}};Ln.l10ns.ro=_n,Ln.l10ns;var Kn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Cn={weekdays:{shorthand:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],longhand:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]},months:{shorthand:["Янв","Фев","Март","Апр","Май","Июнь","Июль","Авг","Сен","Окт","Ноя","Дек"],longhand:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Нед.",scrollTitle:"Прокрутите для увеличения",toggleTitle:"Нажмите для переключения",amPM:["ДП","ПП"],yearAriaLabel:"Год",time_24hr:!0};Kn.l10ns.ru=Cn,Kn.l10ns;var Gn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},En={weekdays:{shorthand:["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"],longhand:["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"]},months:{shorthand:["ජන","පෙබ","මාර්","අප්‍රේ","මැයි","ජුනි","ජූලි","අගෝ","සැප්","ඔක්","නොවැ","දෙසැ"],longhand:["ජනවාරි","පෙබරවාරි","මාර්තු","අප්‍රේල්","මැයි","ජුනි","ජූලි","අගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"]},time_24hr:!0};Gn.l10ns.si=En,Gn.l10ns;var Hn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Rn={weekdays:{shorthand:["Ned","Pon","Ut","Str","Štv","Pia","Sob"],longhand:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"]},months:{shorthand:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],longhand:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"]},firstDayOfWeek:1,rangeSeparator:" do ",time_24hr:!0,ordinal:function(){return"."}};Hn.l10ns.sk=Rn,Hn.l10ns;var In="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Vn={weekdays:{shorthand:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],longhand:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],longhand:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"]},firstDayOfWeek:1,rangeSeparator:" do ",time_24hr:!0,ordinal:function(){return"."}};In.l10ns.sl=Vn,In.l10ns;var Bn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Un={weekdays:{shorthand:["Di","Hë","Ma","Më","En","Pr","Sh"],longhand:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtunë"]},months:{shorthand:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],longhand:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},time_24hr:!0};Bn.l10ns.sq=Un,Bn.l10ns;var Yn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},qn={weekdays:{shorthand:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],longhand:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],longhand:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"]},firstDayOfWeek:1,weekAbbreviation:"Ned.",rangeSeparator:" do ",time_24hr:!0};Yn.l10ns.sr=qn,Yn.l10ns;var Qn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Zn={firstDayOfWeek:1,weekAbbreviation:"v",weekdays:{shorthand:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],longhand:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"]},months:{shorthand:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],longhand:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"]},time_24hr:!0,ordinal:function(){return"."}};Qn.l10ns.sv=Zn,Qn.l10ns;var xn="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},Xn={weekdays:{shorthand:["อา","จ","อ","พ","พฤ","ศ","ส"],longhand:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},months:{shorthand:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],longhand:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},firstDayOfWeek:1,rangeSeparator:" ถึง ",scrollTitle:"เลื่อนเพื่อเพิ่มหรือลด",toggleTitle:"คลิกเพื่อเปลี่ยน",time_24hr:!0,ordinal:function(){return""}};xn.l10ns.th=Xn,xn.l10ns;var $n="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},ne={weekdays:{shorthand:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],longhand:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},months:{shorthand:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],longhand:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},firstDayOfWeek:1,ordinal:function(){return"."},rangeSeparator:" - ",weekAbbreviation:"Hf",scrollTitle:"Artırmak için kaydırın",toggleTitle:"Aç/Kapa",amPM:["ÖÖ","ÖS"],time_24hr:!0};$n.l10ns.tr=ne,$n.l10ns;var ee="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},ae={firstDayOfWeek:1,weekdays:{shorthand:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],longhand:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"]},months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"]},time_24hr:!0};ee.l10ns.uk=ae,ee.l10ns;var re="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},ie={weekdays:{shorthand:["Якш","Душ","Сеш","Чор","Пай","Жум","Шан"],longhand:["Якшанба","Душанба","Сешанба","Чоршанба","Пайшанба","Жума","Шанба"]},months:{shorthand:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],longhand:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Ҳафта",scrollTitle:"Катталаштириш учун айлантиринг",toggleTitle:"Ўтиш учун босинг",amPM:["AM","PM"],yearAriaLabel:"Йил",time_24hr:!0};re.l10ns.uz=ie,re.l10ns;var oe="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},te={weekdays:{shorthand:["Ya","Du","Se","Cho","Pa","Ju","Sha"],longhand:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},months:{shorthand:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],longhand:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Hafta",scrollTitle:"Kattalashtirish uchun aylantiring",toggleTitle:"O‘tish uchun bosing",amPM:["AM","PM"],yearAriaLabel:"Yil",time_24hr:!0};oe.l10ns.uz_latn=te,oe.l10ns;var de="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},le={weekdays:{shorthand:["CN","T2","T3","T4","T5","T6","T7"],longhand:["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]},months:{shorthand:["Th1","Th2","Th3","Th4","Th5","Th6","Th7","Th8","Th9","Th10","Th11","Th12"],longhand:["Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng 11","Tháng 12"]},firstDayOfWeek:1,rangeSeparator:" đến "};de.l10ns.vn=le,de.l10ns;var se="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},he={weekdays:{shorthand:["周日","周一","周二","周三","周四","周五","周六"],longhand:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},months:{shorthand:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],longhand:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},rangeSeparator:" 至 ",weekAbbreviation:"周",scrollTitle:"滚动切换",toggleTitle:"点击切换 12/24 小时时制"};se.l10ns.zh=he,se.l10ns;var ue="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},we={weekdays:{shorthand:["週日","週一","週二","週三","週四","週五","週六"],longhand:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},months:{shorthand:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],longhand:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},rangeSeparator:" 至 ",weekAbbreviation:"週",scrollTitle:"滾動切換",toggleTitle:"點擊切換 12/24 小時時制"};ue.l10ns.zh_tw=we,ue.l10ns;var fe={ar:r,at:o,az:d,be:s,bg:f,bn:g,bs:u,ca:m,cat:m,cs:c,cy:y,da:M,de:D,default:e({},T),en:T,eo:O,es:P,et:z,fa:W,fi:_,fo:C,fr:E,gr:R,he:V,hi:U,hr:q,hu:Z,id:X,is:nn,it:an,ja:on,ka:dn,ko:sn,km:un,kz:fn,lt:gn,lv:mn,mk:cn,mn:yn,ms:{weekdays:{shorthand:["Min","Isn","Sel","Rab","Kha","Jum","Sab"],longhand:["Minggu","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"]},months:{shorthand:["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"],longhand:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},firstDayOfWeek:1,ordinal:function(){return""}},my:An,nl:Tn,no:On,pa:Pn,pl:zn,pt:Wn,ro:_n,ru:Cn,si:En,sk:Rn,sl:Vn,sq:Un,sr:qn,sv:Zn,th:Xn,tr:ne,uk:ae,vn:le,zh:he,zh_tw:we,uz:ie,uz_latn:te};n.default=fe,Object.defineProperty(n,"__esModule",{value:!0})}(e)}}]);