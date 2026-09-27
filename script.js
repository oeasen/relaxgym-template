/* Relax Fit website scripts */

(function () {
  "use strict";

  /* ---------- Translations (Slovak is the default, Hungarian is the second language) ---------- */
  var I18N = {
    sk: {
      _title: "Relax Fit | Posilňovňa vo Veľkých Kapušanoch",
      _desc: "Relax Fit je rodinná posilňovňa vo Veľkých Kapušanoch. Pozrite si cenník, otváracie hodiny a cestu k nám.",
      skip: "Preskočiť na obsah",
      logo_aria: "Relax Fit, domov",
      nav_aria: "Hlavná ponuka",
      menu: "Menu",
      nav_home: "Domov", nav_about: "O nás", nav_location: "Poloha", nav_subs: "Permanentky", nav_contact: "Kontakt",
      status_default: "Otváracie hodiny nižšie",
      status_open: "Máme otvorené",
      status_closed: "Momentálne máme zatvorené",
      pill: "Pozrieť cenník",
      lang_aria: "Jazyk",
      hero_alt: "Relax Fit zvnútra: legpress, kladkové stroje a drevené trámy nad hlavou",
      hero_a: "Rodinná posilňovňa,",
      hero_b: "kde sa každý cíti ako doma",
      hero_sub: "U nás nájdete stroje, voľné váhy aj priestor na pohodlný tréning. Či prídete sami, s priateľmi alebo s rodinou, radi vás privítame.",
      check1: "Voľné váhy, stroje a kardio zóna",
      check2: "Otvorené 7 dní v týždni",
      check3: "Viac priestoru na poschodí",
      check4: "Jednorazový vstup od 5,50 €",
      btn_subs: "Pozrieť cenník",
      btn_find: "Ako sa k nám dostať",
      ticker_aria: "Naše plusy",
      t1: "Rodinná atmosféra", t2: "Otvorené 7 dní v týždni", t3: "Vstup od 5,50 €",
      t4: "Viac priestoru na poschodí", t5: "Radi vám poradíme na recepcii", t6: "Vítame aj začiatočníkov",
      inside_h: "V posilňovni",
      in1_h: "Voľné váhy", in1_p: "Jednoručné činky, lavičky a veľké činky na tréning podľa vašich cieľov.",
      in2_h: "Stroje", in2_p: "Legpress, Smithov stroj aj kladkové stanice. Ak potrebujete poradiť s nastavením, radi vám pomôžeme.",
      in3_h: "Kardio", in3_p: "Bežecké pásy a eliptické trenažéry na rozcvičku aj vytrvalostný tréning.",
      in4_h: "Obchod na recepcii", in4_p: "Opasky, trhačky či proteínové tyčinky nájdete na recepcii.",
      about_h: "Miesto, kde sa dobre trénuje",
      about_p1: "Veríme, že dobrá posilňovňa je viac než len vybavenie. V Relax Fit nájdete priestor, kde sa môžete sústrediť na svoj tréning a cítiť sa príjemne. Kvalitné stroje, drevené trámy, tehlové steny a priateľská atmosféra vytvárajú miesto, kam sa radi vrátite.",
      about_p2: "Nezáleží na tom, či začínate, alebo cvičíte už roky. Ak potrebujete pomôcť so strojom alebo sa chcete poradiť o tréningu, obráťte sa na náš tím na recepcii.",
      about_p3: "Ďalšie vybavenie nájdete aj na poschodí. Viac priestoru oceníte najmä počas rušnejších podvečerov.",
      about_q: "Príďte si zacvičiť sami alebo s priateľmi. U nás ste vítaní.",
      t7: "Viac než posilňovňa. Komunita.",
      t8: "Miesto aj pre vás",
      fam_h1: "Viac než posilňovňa.",
      fam_h2: "Komunita.",
      fam1_a: "Každý niekde začína.",
      fam1_b: "Začnite u nás.",
      fam2_a: "Trénujte vlastným tempom.",
      fam2_b: "Radi vás privítame.",
      fam3_a: "Každý tréning sa počíta.",
      fam3_b: "Priestor máme aj pre vás.",
      about_alt: "Hlavná hala Relax Fit s bežeckými pásmi, jednorúčkami a strojmi na kotúče v teplom večernom svetle",
      about_cap: "Priestor na váš tréning.",
      loc_h: "Nájdete nás tu",
      map_title: "Mapa s polohou Relax Fit",
      addr_h: "Adresa",
      maplink: "Otvoriť v Mapách Google",
      hours_h: "Otváracie hodiny",
      day1: "Pondelok", day2: "Utorok", day3: "Streda", day4: "Štvrtok", day5: "Piatok", day6: "Sobota", day0: "Nedeľa",
      hours_wd: "9:00 až 12:00 a 13:00 až 20:00",
      hours_sat: "13:00 až 20:00",
      hours_sun: "16:00 až 20:00",
      subs_h: "Permanentky",
      subs_lede: "Vyberte si vstup alebo permanentku, ktorá vám vyhovuje.",
      cat_fitness: "Fitness",
      cat_addons: "Doplnkové služby",
      tag_single: "Jednorazový",
      tag_monthly: "Mesačná",
      p1_h: "Jednorazový vstup FITNESS", p1_a: "Jedna návšteva kedykoľvek počas otváracích hodín", p1_b: "Flabélos zdarma",
      p2_h: "Mesačná permanentka FITNESS", p2_a: "Neobmedzený vstup + flabélos zdarma", p2_b: "Aktuálne benefity vám radi predstavíme na recepcii",
      p3_h: "Kombinovaná mesačná permanentka", p3_flag: "Kombinovaná", p3_a: "Neobmedzený vstup, flabélos a aktuálne benefity", p3_b: "60 minút v turbosoláriu (0,13 €/min)",
      p4_h: "Permanentka pre študentov a seniorov", p4_a: "Neobmedzený vstup a flabélos zdarma", p4_b: "Pre študentov a seniorov",
      p5_h: "5-vstupová mesačná permanentka", p5_a: "5 vstupov v danom mesiaci", p5_b: "Flabélos zdarma",
      p6_h: "Mesačná permanentka – solárium", p6_a: "60 minút za 30 € (0,50 €/min)", p6_b: "Jednorazový vstup: 0,95 €/min (žetóny po 3 minútach)",
      p7_h: "Mesačná permanentka – flabélos", p7_a: "Neobmedzené využívanie flabélosu", p7_b: "Jednorazový vstup: 3,50 € / 10 minút",
      subs_note: "Permanentky si môžete zakúpiť na recepcii v hotovosti alebo kartou. Cenník platí pre rok 2026.",
      contact_h: "Napíšte nám",
      call_h: "Zavolajte alebo napíšte",
      follow_h: "Sledujte nás",
      f_name: "Vaše meno", f_email: "Váš e-mail", f_msg: "Správa", f_send: "Pripraviť e-mail", f_hint: "Po kliknutí sa otvorí váš e-mailový program, v ktorom správu odošlete.",
      err_name: "Zadajte, prosím, svoje meno.",
      err_email: "Zadajte, prosím, platnú e-mailovú adresu.",
      err_msg: "Napíšte, prosím, aspoň krátku správu.",
      form_ok: "Otvorí sa váš e-mailový program s pripravenou správou. Správu ešte odošlite priamo v ňom.",
      mail_subject: "Správa od ",
      rights: "Všetky práva vyhradené.",
      rules_h: "Pravidlá posilňovne",
      rules_lede: "Niekoľko jednoduchých pravidiel pre príjemný a bezpečný tréning.",
      r1_h: "Telefón odložte počas cvičenia", r1_p: "Pri cvičení sa sústreďte na pohyb a bezpečnosť. Telefónne hovory vybavte mimo cvičebnej zóny.",
      r2_h: "Vracajte závažia na miesto", r2_p: "Po tréningu vráťte kotúče a jednoručné činky na ich miesto.",
      r3_h: "Utrite použité vybavenie", r3_p: "Po cvičení utrite lavičku alebo stroj. Utierky a sprej nájdete pri strojoch.",
      r4_h: "So závažím zaobchádzajte opatrne", r4_p: "Závažia odkladajte kontrolovane, aby ste chránili vybavenie aj ľudí okolo seba.",
      r5_h: "Dohodnite sa na striedaní", r5_p: "Ak je stroj obsadený, skúste sa s ostatnými dohodnúť na striedaní medzi sériami.",
      r6_h: "Neváhajte sa opýtať", r6_p: "Ak si nie ste istí, ako používať stroj, náš tím vám rád poradí.",
      rev_h: "Čo o nás hovoria ľudia",
      rev_sub: "Hodnotenie na Googli",
      rev_count: "recenzií na Googli",
      rev_all: "Všetky recenzie na Googli",
      rev_loading: "Načítavanie recenzií…",
      rev_error: "Recenzie sa nepodarilo načítať. Pozrite si ich priamo na Googli.",
      stars_label: "Hodnotenie {n} z 5",
      faq_h: "Časté otázky",
      q1: "Treba sa vopred objednať?", a1: "Nie. Stačí prísť počas otváracích hodín. Vstup aj permanentku vybavíte na recepcii.",
      q2: "Je posilňovňa vhodná aj pre začiatočníkov?", a2: "Áno. Ak si nie ste istí, ako používať stroj, radi vám pomôžeme na recepcii.",
      q3: "Máte sprchy a šatne?", a3: "Áno, k dispozícii sú šatne aj sprchy.",
      q4: "Môžem platiť kartou?", a4: "Áno. Na recepcii môžete platiť kartou aj v hotovosti.",
      pokyny_h: "Pokyny pre zákazníkov",
      po1: "Pri vstupe sa prezujte a obuv si odložte do uzamykateľnej skrinky vo vstupnom priestore.",
      po2: "Na recepcii dostanete vstupenku a kľúč od skrinky v šatni. Môžete si tu zakúpiť aj nápoje.",
      po3: "V šatni sa prezlečte do športového oblečenia a obujte si čistú športovú obuv.",
      po4: "Cvičíte individuálne a na vlastnú zodpovednosť. Ak potrebujete pomoc, obráťte sa na personál.",
      po5: "Pri cvičení používajte uterák na utieranie potu a podkladajte si ním použité stroje.",
      po_warning: "Cvičenie bez uteráka a športovej obuvi nie je povolené.",
      po_towel: "Uterák si môžete za poplatok zapožičať na recepcii podľa aktuálneho cenníka.",
      po_extra1: "Pri prvej návšteve vám personál rád ukáže, ako sa stroje používajú.",
      po_extra2: "Činky po použití vráťte na vyhradené miesto.",
      po_health: "Ak máte zdravotné ťažkosti alebo sa zotavujete po úraze, pred začiatkom cvičenia sa poraďte so svojím lekárom a informujte personál o prípadných obmedzeniach.",
      po_liability: "Pri nedodržaní pokynov na bezpečné cvičenie prevádzkovateľ nezodpovedá za prípadné zdravotné ťažkosti.",
      po_damage: "Ak zistíte poškodenie stroja, oznámte to personálu. Zabezpečíme jeho opravu.",
      po_belongings: "Prevádzkovateľ nezodpovedá za stratu osobných vecí. Odkladajte si ich do skriniek."
    },
    hu: {
      _title: "Relax Fit | Edzőterem Nagykaposon",
      _desc: "Családias edzőterem Nagykaposon. Tekintse meg árainkat, nyitvatartásunkat és elérhetőségeinket.",
      skip: "Ugrás a tartalomhoz",
      logo_aria: "Relax Fit, főoldal",
      nav_aria: "Főmenü",
      menu: "Menü",
      nav_home: "Főoldal", nav_about: "Rólunk", nav_location: "Helyszín", nav_subs: "Bérletek", nav_contact: "Kapcsolat",
      status_default: "Nyitvatartás lentebb",
      status_open: "Most nyitva vagyunk",
      status_closed: "Jelenleg zárva vagyunk",
      pill: "Árak és bérletek",
      lang_aria: "Nyelv",
      hero_alt: "A Relax Fit belső tere lábtolóval, csigás gépekkel és fa gerendákkal",
      hero_a: "Családias edzőterem,",
      hero_b: "ahol mindenki otthon érzi magát",
      hero_sub: "Gépek, szabadsúlyok és kényelmes tér várja az edzéshez. Akár egyedül, akár barátokkal vagy családdal érkezik, szeretettel fogadjuk.",
      check1: "Szabadsúlyok, gépek és kardiózóna",
      check2: "A hét minden napján nyitva",
      check3: "További edzőtér az emeleten",
      check4: "Egyszeri belépő 5,50 €-tól",
      btn_subs: "Árak és bérletek",
      btn_find: "Útvonal és nyitvatartás",
      ticker_aria: "Előnyeink",
      t1: "Családias hangulat", t2: "A hét minden napján nyitva", t3: "Belépő 5,50 €-tól",
      t4: "További edzőtér az emeleten", t5: "Szívesen segítünk a recepción", t6: "Kezdőket is várunk",
      inside_h: "Az edzőteremben",
      in1_h: "Szabadsúlyok", in1_p: "Kézisúlyzók, padok és súlyzórudak minden edzettségi szinthez.",
      in2_h: "Gépek", in2_p: "Lábtoló, Smith-gép és csigás gépek. Ha segítségre van szüksége a beállításhoz, szívesen segítünk.",
      in3_h: "Kardió", in3_p: "Futópadok és elliptikus trénerek bemelegítéshez és állóképességi edzéshez.",
      in4_h: "Üzlet a recepción", in4_p: "Edzőövek, húzópántok és fehérjeszeletek a recepción kaphatók.",
      about_h: "Egy hely, ahol jó edzeni",
      about_p1: "Hiszünk abban, hogy egy jó edzőterem többet jelent a felszerelésnél. A Relax Fitben nyugodtan összpontosíthat az edzésére, miközben kellemes környezet veszi körül. A minőségi gépek, a fa gerendák, a téglafalak és a barátságos légkör olyan helyet teremtenek, ahová szívesen tér vissza.",
      about_p2: "Akár most kezdi az edzést, akár évek óta sportol, nálunk megtalálja a helyét. Ha segítségre van szüksége egy gép használatához, vagy kérdése van az edzéssel kapcsolatban, forduljon bizalommal a recepción dolgozó kollégáinkhoz.",
      about_p3: "Az emeleten további felszerelés áll rendelkezésre, ami különösen a forgalmasabb délutánokon jelent előnyt.",
      about_q: "Jöjjön el egyedül vagy barátaival. Szeretettel várjuk.",
      t7: "Több mint edzőterem. Közösség.",
      t8: "Önnek is van helye",
      fam_h1: "Több mint edzőterem.",
      fam_h2: "Közösség.",
      fam1_a: "Mindenki elkezdi valahol.",
      fam1_b: "Kezdje nálunk.",
      fam2_a: "Edzzen a saját tempójában.",
      fam2_b: "Szeretettel várjuk.",
      fam3_a: "Minden edzés számít.",
      fam3_b: "Önnek is van helye.",
      about_alt: "A Relax Fit fő terme futópadokkal, kézisúlyzókkal és tárcsás gépekkel meleg esti fényben",
      about_cap: "Tér az Ön edzéséhez.",
      loc_h: "Itt talál ránk",
      map_title: "A Relax Fit helyét mutató térkép",
      addr_h: "Cím",
      maplink: "Megnyitás a Google Térképen",
      hours_h: "Nyitvatartás",
      day1: "Hétfő", day2: "Kedd", day3: "Szerda", day4: "Csütörtök", day5: "Péntek", day6: "Szombat", day0: "Vasárnap",
      hours_wd: "9:00 és 12:00 között, valamint 13:00 és 20:00 között",
      hours_sat: "13:00 és 20:00 között",
      hours_sun: "16:00 és 20:00 között",
      subs_h: "Bérletek",
      subs_lede: "Válassza ki az Önnek megfelelő belépőt vagy bérletet.",
      cat_fitness: "Fitness",
      cat_addons: "Kiegészítő szolgáltatások",
      tag_single: "Egyszeri",
      tag_monthly: "Havi",
      p1_h: "Egyszeri edzőtermi belépő", p1_a: "Egy alkalom a nyitvatartási időben", p1_b: "Flabélos ingyenes",
      p2_h: "Havi edzőtermi bérlet", p2_a: "Korlátlan belépés és ingyenes flabélos", p2_b: "Az aktuális kedvezményekről érdeklődjön a recepción",
      p3_h: "Kombinált havi bérlet", p3_flag: "Kombinált", p3_a: "Korlátlan belépés, flabélos és aktuális kedvezmények", p3_b: "60 perc turbószolárium (0,13 €/perc)",
      p4_h: "Diák- és nyugdíjas bérlet", p4_a: "Korlátlan belépés és ingyenes flabélos", p4_b: "Diákoknak és nyugdíjasoknak",
      p5_h: "Ötalkalmas havi bérlet", p5_a: "Öt belépés az adott hónapban", p5_b: "Ingyenes flabélos",
      p6_h: "Havi szoláriumbérlet", p6_a: "60 perc 30 €-ért (0,50 €/perc)", p6_b: "Alkalmanként: 0,95 €/perc (3 perces zsetonokkal)",
      p7_h: "Havi flabélosbérlet", p7_a: "Korlátlan flabéloshasználat", p7_b: "Alkalmanként: 3,50 € / 10 perc",
      subs_note: "A bérletek a recepción vásárolhatók meg készpénzzel vagy bankkártyával. Az árak 2026-ban érvényesek.",
      contact_h: "Írjon nekünk",
      call_h: "Hívjon vagy írjon",
      follow_h: "Kövessen minket",
      f_name: "Az Ön neve", f_email: "Az Ön e-mail-címe", f_msg: "Üzenet", f_send: "E-mail előkészítése", f_hint: "A gomb megnyitja levelezőprogramját, ahol elküldheti az üzenetet.",
      err_name: "Kérjük, adja meg a nevét.",
      err_email: "Kérjük, adjon meg érvényes e-mail-címet.",
      err_msg: "Kérjük, írjon legalább egy rövid üzenetet.",
      form_ok: "Megnyílik a levelezőprogramja az előkészített üzenettel. Az üzenetet ott még el kell küldenie.",
      mail_subject: "Üzenet – ",
      rights: "Minden jog fenntartva.",
      rules_h: "Az edzőterem szabályai",
      rules_lede: "Néhány egyszerű szabály a kellemes és biztonságos edzésért.",
      r1_h: "Edzés közben tegye félre a telefont", r1_p: "Edzés közben figyeljen a mozdulatokra és a biztonságra. A telefonhívásokat az edzőtéren kívül intézze.",
      r2_h: "Tegye vissza a súlyokat", r2_p: "Edzés után tegye vissza a tárcsákat és a kézisúlyzókat a helyükre.",
      r3_h: "Törölje le a használt eszközöket", r3_p: "Használat után törölje le a padot vagy a gépet. Törlőkendőt és tisztítófolyadékot a gépek mellett talál.",
      r4_h: "Óvatosan bánjon a súlyokkal", r4_p: "A súlyokat ellenőrzött mozdulattal tegye le, hogy megóvja az eszközöket és a környezetében lévőket.",
      r5_h: "Egyeztessen a többiekkel", r5_p: "Ha egy gép foglalt, egyeztessen a használójával a sorozatok közötti váltásról.",
      r6_h: "Kérdezzen bátran", r6_p: "Ha bizonytalan egy gép használatában, munkatársaink szívesen segítenek.",
      rev_h: "Amit rólunk mondanak",
      rev_sub: "Google-értékelés",
      rev_count: "értékelés a Google-on",
      rev_all: "Összes értékelés a Google-on",
      rev_loading: "Értékelések betöltése…",
      rev_error: "Az értékeléseket nem sikerült betölteni. Tekintse meg őket a Google-on.",
      stars_label: "Értékelés: {n} az 5-ből",
      faq_h: "Gyakori kérdések",
      q1: "Szükséges előre bejelentkezni?", a1: "Nem. Nyitvatartási időben bármikor érkezhet. A belépőt és a bérletet a recepción intézheti.",
      q2: "Kezdőként is jöhetek?", a2: "Természetesen. Ha bizonytalan egy gép használatában, munkatársaink szívesen segítenek.",
      q3: "Van zuhanyzó és öltöző?", a3: "Igen, öltözők és zuhanyzók is rendelkezésre állnak.",
      q4: "Fizethetek kártyával?", a4: "Igen. A recepción készpénzzel és bankkártyával is fizethet.",
      pokyny_h: "Tájékoztató a vendégek számára",
      po1: "Érkezéskor cseréljen cipőt, utcai lábbelijét pedig tegye a bejáratnál található zárható szekrénybe.",
      po2: "A recepción átveheti a belépőjét és az öltözőszekrény kulcsát. Italokat is itt vásárolhat.",
      po3: "Az öltözőben váltson át sportruházatra és tiszta sportcipőre.",
      po4: "Mindenki a saját felelősségére edz. Ha segítségre van szüksége, forduljon munkatársainkhoz.",
      po5: "Edzés közben használjon törölközőt, és terítse a használt gépre vagy padra.",
      po_warning: "Törölköző és sportcipő használata kötelező.",
      po_towel: "Törölköző a recepción, az aktuális árlista szerinti díj ellenében kölcsönözhető.",
      po_extra1: "Első látogatásakor munkatársaink szívesen megmutatják a gépek használatát.",
      po_extra2: "Használat után tegye vissza a súlyzókat a kijelölt helyükre.",
      po_health: "Ha egészségügyi problémája van, vagy sérülés után tér vissza az edzéshez, kezdés előtt kérje ki orvosa tanácsát, és tájékoztassa munkatársainkat az esetleges korlátozásokról.",
      po_liability: "A biztonságos edzésre vonatkozó útmutatás figyelmen kívül hagyásából eredő egészségügyi problémákért az üzemeltető nem vállal felelősséget.",
      po_damage: "Ha egy gépen sérülést vagy meghibásodást észlel, jelezze munkatársainknak. Gondoskodunk a javításról.",
      po_belongings: "A személyes tárgyak elvesztéséért az üzemeltető nem vállal felelősséget. Értékeit zárható szekrényben tárolja."
    }
  };

  var lang = "sk";

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.sk[key] || key;
  }

  function storedLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q && I18N[q]) return q;
      var s = window.localStorage.getItem("relaxfit-lang");
      if (s && I18N[s]) return s;
    } catch (e) { /* storage can be blocked */ }
    return "sk";
  }

  var statusEl = document.getElementById("open-status");
  var statusState = "default"; // default, open, closed

  function renderStatus() {
    if (!statusEl) return;
    statusEl.textContent = t("status_" + statusState);
    statusEl.classList.toggle("is-open", statusState === "open");
  }

  function applyLang(next) {
    lang = I18N[next] ? next : "sk";
    document.documentElement.lang = lang;
    document.title = t("_title");
    var meta = document.getElementById("metaDesc");
    if (meta) meta.setAttribute("content", t("_desc"));
    ["ogTitle", "twitterTitle"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("content", t("_title"));
    });
    ["ogDesc", "twitterDesc"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("content", t("_desc"));
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll(".stars").forEach(function (el) {
      var r = parseFloat(el.getAttribute("data-rating")) || 0;
      el.style.setProperty("--r", r);
      el.setAttribute("role", "img");
      el.setAttribute("aria-label", t("stars_label").replace("{n}", String(r).replace(".", lang === "sk" || lang === "hu" ? "," : ".")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    // clear form messages, they belong to the old language
    document.querySelectorAll(".error").forEach(function (e) { e.textContent = ""; });
    var fn = document.getElementById("formNote");
    if (fn) fn.textContent = "";

    renderStatus();
    try { window.localStorage.setItem("relaxfit-lang", lang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      var next = b.getAttribute("data-lang");
      applyLang(next);
      var url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", next);
        window.history.replaceState(null, "", url);
      }
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var list = document.getElementById("navList");

  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Highlight the current section in the nav ---------- */
  var links = document.querySelectorAll("#navList a");
  var sections = [];
  document.querySelectorAll("main > section[id]").forEach(function (el) {
    var href = el.getAttribute("data-nav") || "#" + el.id;
    var link = document.querySelector('#navList a[href="' + href + '"]');
    if (link) sections.push({ link: link, el: el });
  });

  function setActive() {
    var y = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= y) current = s;
    });
    // when the page is scrolled to the very bottom, select the last item
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      current = sections[sections.length - 1];
    }
    links.forEach(function (l) { l.classList.remove("active"); });
    if (current) current.link.classList.add("active");
  }

  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  setActive();

  /* ---------- Opening hours: highlight today and show open / closed ---------- */
  var rows = document.querySelectorAll("#hours tr");

  function toMinutes(s) {
    var p = s.split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }

  function updateHours() {
    // The gym's hours are always evaluated in Slovakia, regardless of the visitor's timezone.
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Bratislava", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var values = {};
    parts.forEach(function (part) { values[part.type] = part.value; });
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(values.weekday);
    var minutes = parseInt(values.hour, 10) * 60 + parseInt(values.minute, 10);
    var isOpen = false;
    var found = false;

    rows.forEach(function (row) {
      var isToday = parseInt(row.dataset.day, 10) === day;
      row.classList.toggle("today", isToday);
      if (isToday) {
        found = true;
        // a day can have more than one opening period, for example "09:00-12:00,13:00-20:00"
        row.dataset.hours.split(",").forEach(function (range) {
          var p = range.split("-");
          if (minutes >= toMinutes(p[0]) && minutes < toMinutes(p[1])) isOpen = true;
        });
      }
    });

    if (found) {
      statusState = isOpen ? "open" : "closed";
      renderStatus();
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  // TODO: Replace with the real gym email address
  var GYM_EMAIL = "info@relaxfit.sk";

  function showError(field, message) {
    var msg = form.querySelector('.error[data-for="' + field.id + '"]');
    if (msg) msg.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.elements.name;
      var email = form.elements.email;
      var message = form.elements.message;
      var ok = true;

      showError(name, "");
      showError(email, "");
      showError(message, "");

      if (!name.value.trim()) {
        showError(name, t("err_name"));
        ok = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, t("err_email"));
        ok = false;
      }
      if (message.value.trim().length < 5) {
        showError(message, t("err_msg"));
        ok = false;
      }

      if (!ok) {
        note.textContent = "";
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      var subject = t("mail_subject") + name.value.trim();
      var body = message.value.trim() + "\n\n" + name.value.trim() + "\n" + email.value.trim();
      window.location.href =
        "mailto:" + GYM_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      note.textContent = t("form_ok");
      // Keep the draft: opening an email client does not guarantee that a message was sent.
    });
  }

  /* ---------- Gentle scroll reveal, with no hidden content when motion is reduced ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var revealTargets = document.querySelectorAll(".inside, .about, .community .wrap, .rules-grid, .pokyny-grid, .location, .pricing-main, .pricing-addons, .faq-wrap, .contact");
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -36px 0px", threshold: 0.06 });
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  }

  /* ---------- Start ---------- */
  applyLang(storedLang());
  if (rows.length) {
    updateHours();
    setInterval(updateHours, 60000);
  }
})();
