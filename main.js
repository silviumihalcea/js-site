let searchInputHeader = document.querySelector("#searchInputHeader");
let searchButton = document.querySelector(".search-button");
let searchInputSecondLevelCards = document.querySelector(
  "#searchInputSecondLevelCards"
);
let searchBox = document.querySelector(".searchbox");

searchInputHeader.addEventListener("focus", function () {
  searchButton.style.borderColor = "#52ae30";
});

searchInputHeader.addEventListener("blur", function () {
  searchButton.style.borderColor = "#c5c5c5";
});
searchInputSecondLevelCards.addEventListener("focus", function () {
  searchBox.style.borderColor = "#52ae30";
});
searchInputSecondLevelCards.addEventListener("blur", function () {
  searchBox.style.borderColor = "#c5c5c5";
});

//-------------------------------------------start campanii

const campaignsDatabase = [
  {
    picture: "img/campanie1.png",
    title:
      "Cardul tau de debit de la OTP Bank te poate rasplati cu pana la 40 de lei, bani inapoi pe card",
    description:
      "Descoperă plăcerea cumpărăturilor și ai doar de câstigat! Perioada de desfășurare a campaniei promoționale: 01.11.2022 – 30.06.2023.",
    link: "https://www.otpbank.ro/ro/despre-otp-bank/campanii/cardul-tau-de-debit-de-la-otp-bank-te-poate-rasplati-cu-pana-la-40-de-lei-bani-inapoi-pe-card",
  },
  {
    picture: "img/campanie2.jpg",
    title: "Vrei să primești până la 45 lei de la banca ta?",
    description:
      "Deschide-ți cont la OTP Bank ți ai cashback la activarea cardului, a unui produs nou și când efectuezi minim 5 tranzacții.",
    link: "https://www.otpbank.ro/ro/despre-otp-bank/campanii/deschide-un-cont-la-otp-poti-castiga-pana-la-45lei-cashback",
  },
  {
    picture: "img/campanie3.jpg",
    title:
      "Cu cardul de cumpărături Mastercard Dual sau MOL Compas plătești relaxat.",
    description:
      "Ai 12 rate fără dobândă, oriunde în lume, cu cardul de credit Mastercard Dual sau Mastercard MOL Compas.",
    link: "https://www.otpbank.ro/ro/despre-otp-bank/campanii/cumpara-relaxat-in-12-rate-fara-dobanda-oriunde-in-lume",
  },
];

let campaigns = document.querySelector("#campaigns");

function createCampaigns(database, parent, clasa, tag) {
  for (let i = 0; i < database.length; i++) {
    let elementCustom = document.createElement(tag);
    elementCustom.setAttribute("class", `${clasa}`);

    parent.appendChild(elementCustom);

    let poza = document.createElement("img");
    poza.setAttribute("class", "img-fluid");
    poza.setAttribute("src", database[i].picture);

    elementCustom.appendChild(poza);

    let ancora = document.createElement("a");
    ancora.setAttribute("href", database[i].link);
    ancora.setAttribute("class", "title");
    ancora.innerHTML = database[i].title;

    elementCustom.appendChild(ancora);

    let descriereCampanie = document.createElement("p");
    descriereCampanie.innerHTML = database[i].description;

    elementCustom.appendChild(descriereCampanie);

    let buton = document.createElement("a");
    buton.setAttribute("href", `${database[i].link}`);
    buton.innerHTML = "Vreau detalii";
    buton.setAttribute("class", "btn");
    buton.setAttribute("target", "_blank");

    elementCustom.appendChild(buton);
  }
}
let bannerCampanii = document.createElement("h2");
bannerCampanii.innerHTML = "Campanii";
bannerCampanii.setAttribute("class", "mainTitle");
campaigns.appendChild(bannerCampanii);

createCampaigns(campaignsDatabase, campaigns, "card col-sm-12 col-md-4", "div");

let allCampaigns = document.createElement("a");
allCampaigns.innerHTML = "Vezi toate campaniile";
allCampaigns.setAttribute("class", "allCampaigns");
campaigns.appendChild(allCampaigns);

//--------------------------------------------end campanii

//-------------------------------------------------start credite---------------------------------

const crediteConsum = {
  textAncora: [
    "Credit de nevoi personale ONLINE",
    "Credit de nevoi personale",
    "Overdraft - descoperit de cont",
    "Credit de nevoi personale cu ipoteca",
  ],
  linkAncora: [
    "https://www.otpbank.ro/ro/persoane-fizice/credite/credit-de-nevoi-personale-online",
    "https://www.otpbank.ro/ro/persoane-fizice/credite/credit-de-nevoi-personale",
    "https://www.otpbank.ro/ro/persoane-fizice/credite/overdraft",
    "https://www.otpbank.ro/ro/persoane-fizice/credite/credit-de-nevoi-personale-ipoteca",
  ],
  contentAncora: [
    "Fericirea se află după colț. Aplică online și visul pe care îl tot amâni poate deveni acum realitate.",
    "Aici afli cât de ușor poți să îți împlinești visul. După multe calcule și chibzuință, în sfârșit, acum ai găsit creditul care te va ajuta să îți împlinești visul într-un mod relaxat.",
    "Dacă ai maxim 65 de ani și un venit minim egal cu venitul minim net pe economie, poți solicita un descoperit de cont curent.",
    "Când planurile tale nu mai pot fi amânate, găsești întotdeauna un sprijin la OTP Bank. Îți recomandăm un produs care să te ajute să treci la treabă, <span>Creditul pentru nevoi personale cu ipotecă</span>.",
  ],
};

const crediteIpoteca = {
  textAncora: ["Credit ipotecar", "Credit Noua Casa"],
  linkAncora: [
    "https://www.otpbank.ro/ro/persoane-fizice/credite/credit-ipotecar",
    "https://www.otpbank.ro/ro/persoane-fizice/credite/credit-noua-casa",
  ],
  contentAncora: [
    "Oriunde ai fi, te simți în largul tău atunci când știi că te întorci acasă, acolo unde sunt cei dragi, acolo unde ai confortul dorit.",
    "Casa visurilor tale poate fi în sfârșit a ta. Urmează doar câțiva pași mici și apoi bucură-te de confortul căminului tău.",
  ],
};

const featuresPlAncora = [
  {
    list: [
      "<li><span>Dobândă fixă de 11,99%*</span></li>",
      "<li><span>Sumă creditabilă<span> de la 1.000 până la <span>100.000 lei</span></li>",
      "<li>Ai inclus <span>Pachetul OTP Lejer</span< (<span>Cont curent</span> și <span>Card de debit</span> Mastercard în lei, <span>Internet & Mobile Banking</span>)</li>",
      "*dacă încasezi venitul în contul tău la OTP Bank sau 12,99% fără virare venit",
    ],
  },
  {
    list: [
      "<li><span>Sumă creditabilă<span> de la 1.000 până la <span>120.000 lei</li>",
      "<li>Perioada de rambursare a creditului de nevoi personale este între 6 și 60 de luni;</li>",
      "<li><span>Reducere la dobândă de 0.5 puncte procentuale</span> pentru refinanțarea creditelor de la alte bănci;</li>",
      "<li>Consultă oferta pentru refinanțare</li>",
    ],
  },
  {
    list: [
      "<li>Fără adeverință de venit</li>",
      "<li>Nu trebuie să justifici scopul utilizării</li>",
      "<li>Fără garanții suplimentare</li>",
      "<li>Rambursezi lunar numai dobânda aferentă sumei utilizate</li>",
    ],
  },
  {
    list: [
      "<li>Sumă creditabilă: 1.000 – 150.000 euro (echivalent in lei)</li>",
      "<li>Perioadă de rambursare: 6 – 60 de luni</li>",
      "<li>0 comision de analiză</li>",
    ],
  },
];

const featuresMlAncora = [
  {
    list: [
      "<li>Avans minim începând de la 15%</li>",
      "<li>Perioada maximă de rambursare: 30 de ani</li>",
      "<li>Valoarea creditului ipotecar poate fi de minim 1.000 EUR echivalent în LEI sau maxim 300.000 EUR echivalent în LEI</li>",
      "<li>0% comision lunar de administrare a creditului</li>",
    ],
  },
  {
    list: [
      "<li>Pentru creditul ipotecar Prima Casa te așteptăm în orice sucursală OTP Bank pentru a fi consiliat cu privire la caracteristicile produsului si modalitatea de accesare</li>",
      "<li>Fără Adeverinţă de venit – informaţiile referitoare la venituri sunt obţinute prin interogarea bazei de date ANAF</li>",
      "<li>Avans minim începând de la 5%</li>",
      "<li>Perioada maximă de rambursare: 30 de ani</li>",
    ],
  },
];

function createCustomElement(
  parent,
  tag,
  clasa,
  no,
  textA,
  hrefA,
  content,
  features
) {
  for (let i = 1; i <= no; i++) {
    let elementCustom = document.createElement(tag);
    elementCustom.setAttribute("class", clasa);

    parent.appendChild(elementCustom);

    let ancora = document.createElement("a");
    ancora.setAttribute("href", `${hrefA[i - 1]}`);
    ancora.setAttribute("class", "creditTitle");
    ancora.innerHTML = `${textA[i - 1]}`;

    elementCustom.appendChild(ancora);

    let contentCredit = document.createElement("p");
    contentCredit.innerHTML = `${content[i - 1]}`;
    contentCredit.setAttribute("class", "content");

    elementCustom.appendChild(contentCredit);

    let elementListCredit = document.createElement("ul");
    elementListCredit.innerHTML = `${features[i - 1].list.join("")}`;

    elementCustom.appendChild(elementListCredit);

    let buton = document.createElement("a");
    buton.setAttribute("href", `${hrefA[i - 1]}`);
    buton.innerHTML = "Vreau detalii";
    buton.setAttribute("class", "btn");
    buton.setAttribute("target", "_blank");

    elementCustom.appendChild(buton);
  }
}

let butonCredite = document.querySelector("#crediteBtn");

butonCredite.addEventListener("click", function () {
  let main = document.querySelector("#main");
  main.innerHTML = " ";

  let creditPage = document.createElement("div");
  creditPage.setAttribute("id", "credite");
  main.appendChild(creditPage);

  let bannerCredite = document.createElement("div");
  bannerCredite.setAttribute("class", "container-fluid");
  creditPage.appendChild(bannerCredite);

  let titleCredite = document.createElement("h1");
  titleCredite.innerHTML = "Credite";
  bannerCredite.appendChild(titleCredite);

  let bufferTitle = document.createElement("h2");
  bannerCredite.appendChild(bufferTitle);

  let containerCredite = document.createElement("div");
  containerCredite.setAttribute("class", "containerCredite container row");
  creditPage.appendChild(containerCredite);

  let titluCrediteConsum = document.createElement("h2");
  titluCrediteConsum.innerHTML = "Credite de consum";
  containerCredite.appendChild(titluCrediteConsum);

  createCustomElement(
    containerCredite,
    "div",
    "creditConsum col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6",
    crediteConsum.textAncora.length,
    crediteConsum.textAncora,
    crediteConsum.linkAncora,
    crediteConsum.contentAncora,
    featuresPlAncora
  );

  let titluCrediteIpoteca = document.createElement("h2");
  titluCrediteIpoteca.innerHTML = "Credite ipotecare";
  containerCredite.appendChild(titluCrediteIpoteca);

  createCustomElement(
    containerCredite,
    "div",
    "creditIpotecar col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6",
    crediteIpoteca.textAncora.length,
    crediteIpoteca.textAncora,
    crediteIpoteca.linkAncora,
    crediteIpoteca.contentAncora,
    featuresMlAncora
  );
});

// ------------------------------------------end credite de consum

//------------------------------------------start signup/login page

const newUser = [
  {
    nume: "Silviu",
    email: "otpbank",
    parola: "otpbank123",
  },
];
let nav = document.querySelector("#nav");

function createIb() {
  let main = document.querySelector("#main");
  main.innerHTML = " ";

  let registerLoginPage = document.createElement("div");
  registerLoginPage.setAttribute("id", "registerLogin");
  main.appendChild(registerLoginPage);

  let bannerRegisterLogin = document.createElement("div");
  bannerRegisterLogin.setAttribute(
    "class",
    "container row bannerRegisterLogin"
  );
  registerLoginPage.appendChild(bannerRegisterLogin);

  let contentBannerRegisterLogin = document.createElement("div");
  contentBannerRegisterLogin.setAttribute("class", "col-sm-12 col-md-9");
  bannerRegisterLogin.appendChild(contentBannerRegisterLogin);

  let titleBannerRegisterLogin = document.createElement("h1");
  titleBannerRegisterLogin.innerHTML = "Autentifică-te și #MaiRelaxat";
  contentBannerRegisterLogin.appendChild(titleBannerRegisterLogin);

  let textBannerRegisterLogin = document.createElement("p");
  textBannerRegisterLogin.innerHTML =
    "Să faci #BankingMaiRelaxat înseamnă să ai acces ușor, rapid și în siguranță, oricând şi de oriunde, la servicii bancare de calitate. Îți propunem o modalitate mai simplă de autentificare în OTPdirekt şi în SmartBank doar cu Utilizator și parolă. Utilizatorul poate fi setat sau modificat din aplicație, meniul Profilul tău, secţiunea Setări.";
  contentBannerRegisterLogin.appendChild(textBannerRegisterLogin);

  let contentBannerRegisterLoginPicture = document.createElement("div");
  contentBannerRegisterLoginPicture.setAttribute("class", "col-sm-12 col-md-3");
  bannerRegisterLogin.appendChild(contentBannerRegisterLoginPicture);

  let pictureBannerRegisterLogin = document.createElement("img");
  pictureBannerRegisterLogin.setAttribute("src", "img/registerLogin.jpg");
  pictureBannerRegisterLogin.setAttribute("class", "img-fluid");
  contentBannerRegisterLoginPicture.appendChild(pictureBannerRegisterLogin);

  let formRegisterLogin = document.createElement("div");
  formRegisterLogin.setAttribute("class", "container row containerForms");
  registerLoginPage.appendChild(formRegisterLogin);

  let formLogin = document.createElement("div");
  formLogin.setAttribute("class", "col formLogin");
  formRegisterLogin.appendChild(formLogin);

  let logoLogin = document.createElement("img");
  logoLogin.setAttribute("src", "img/logo.svg");
  logoLogin.setAttribute("class", "img-fluid");
  formLogin.appendChild(logoLogin);

  let inputNameRegister = document.createElement("input");
  inputNameRegister.setAttribute("type", "text");

  inputNameRegister.setAttribute("placeholder", "Nume si Prenume");
  inputNameRegister.setAttribute("class", "form-control");
  inputNameRegister.setAttribute("style", "display:none");
  formLogin.appendChild(inputNameRegister);

  let inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "checkEmail");
  inputEmail.setAttribute("placeholder", "Adresa de e-mail");
  inputEmail.setAttribute("class", "form-control");
  inputEmail.setAttribute("aria-describedby", "emailHelp");
  formLogin.appendChild(inputEmail);

  let inputPass = document.createElement("input");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("id", "checkPass");
  inputPass.setAttribute("placeholder", "Parola");
  inputPass.setAttribute("class", "form-control");
  formLogin.appendChild(inputPass);

  let terms = document.createElement("div");
  terms.setAttribute("class", "terms");
  formLogin.appendChild(terms);

  let termsCheck = document.createElement("input");
  termsCheck.setAttribute("type", "checkbox");
  termsCheck.setAttribute("id", "termsAgreed");
  terms.appendChild(termsCheck);

  let termsName = document.createElement("p");
  termsName.innerHTML =
    "Sunt de acord cu termenii și condițiile de utilizare a serviciului OTPdirekt";
  terms.appendChild(termsName);

  let submitLogin = document.createElement("button");
  submitLogin.setAttribute("type", "submit");
  submitLogin.setAttribute("id", "checkLogin");
  submitLogin.setAttribute("class", "btn");
  submitLogin.innerHTML = "Autentificare";
  formLogin.appendChild(submitLogin);

  let noAccount = document.createElement("div");
  noAccount.setAttribute("class", "noAccount");
  formLogin.appendChild(noAccount);

  let noAccountText = document.createElement("p");
  noAccountText.innerHTML = "Nu ai cont?";
  noAccount.appendChild(noAccountText);

  let noAccountRegister = document.createElement("a");
  noAccountRegister.innerHTML = "Inregisteaza-te!";
  noAccountRegister.setAttribute("href", "#registerLoginAccount");
  noAccount.appendChild(noAccountRegister);

  noAccountRegister.addEventListener("click", function () {
    inputNameRegister.setAttribute("style", "display:content");
    inputNameRegister.setAttribute("id", "createName");
    noAccount.setAttribute("style", "display:none");
    inputEmail.id = "createEmail";
    inputPass.id = "createPass";
    submitLogin.setAttribute("style", "display:none");
    inputEmail.value = "";
    inputPass.value = "";

    let createAccount = document.createElement("button");

    createAccount.setAttribute("type", "button");
    createAccount.setAttribute("id", "createLogin");
    createAccount.setAttribute("class", "btn");
    createAccount.innerHTML = "Inregistreaza cont";
    formLogin.appendChild(createAccount);

    createAccount.addEventListener("click", function () {
      if (
        inputPass.value.length > 7 &&
        inputEmail.value != "" &&
        termsCheck.checked == true
      ) {
        newUser[0].nume = inputNameRegister.value;
        newUser[0].email = inputEmail.value;
        newUser[0].parola = inputPass.value;
        inputEmail.value = "";
        inputPass.value = "";
        inputNameRegister.setAttribute("style", "display:none");
        noAccount.setAttribute("style", "display:content");
        inputEmail.id = "checkEmail";
        inputPass.id = "checkPass";
        createAccount.setAttribute("style", "display:none");
        submitLogin.setAttribute("style", "display:content");

        alert("Contul a fost creat. Vei fi redirectionat catre Autentificare.");
      } else {
        alert(
          `Completati o adresa de email valida.
          Parola trebuie sa contina minim 8 caractere.
          Agreati termenii si conditiile.`
        );
        inputEmail.value = "";
        inputPass.value = "";
      }
    });
  });
  submitLogin.addEventListener("click", function () {
    if (
      inputEmail.value == newUser[0].email &&
      inputEmail.value != "" &&
      inputPass.value == newUser[0].parola &&
      inputPass.value != "" &&
      termsCheck.checked == true
    ) {
      main.innerHTML = " ";
      nav.style.display = "none";
      window.scrollTo(0, 0);

      let logout = document.querySelector("#logout");
      logout.innerHTML = "Log Out";
      logout.setAttribute("href", "");

      let welcomePage = document.createElement("div");
      welcomePage.setAttribute("class", "container welcomePage");
      main.appendChild(welcomePage);

      let headerWelcomePage = document.createElement("div");
      headerWelcomePage.setAttribute("class", "headerWelcomePage container");
      welcomePage.appendChild(headerWelcomePage);

      let welcomeGreeting = document.createElement("h2");
      welcomeGreeting.innerHTML = "Bine ai venit, " + newUser[0].nume + "!";
      headerWelcomePage.appendChild(welcomeGreeting);

      let welcomeContent = document.createElement("div");
      welcomeContent.setAttribute("class", "row welcomeContent");
      welcomePage.appendChild(welcomeContent);

      let accounts = document.createElement("div");
      accounts.setAttribute("class", "col-md-5 col-sm-12 col-xs-12 accounts");
      welcomeContent.appendChild(accounts);

      let titleAccounts = document.createElement("h4");
      titleAccounts.innerHTML = "Conturi curente";
      accounts.appendChild(titleAccounts);

      let account = document.createElement("div");
      account.setAttribute("class", "account row");
      accounts.appendChild(account);

      let iban = document.createElement("p");
      iban.setAttribute("class", "iban col");
      iban.innerHTML = "RO37OTPV1120000954700RO01";
      account.appendChild(iban);

      let amount = document.createElement("p");
      amount.setAttribute("class", "amount col");
      amount.innerHTML = "428.22 RON";
      account.appendChild(amount);

      let transactions = document.createElement("div");
      transactions.setAttribute(
        "class",
        "col-md-7 col-sm-12 col-xs-12 transactions"
      );
      welcomeContent.appendChild(transactions);

      let titleTransactions = document.createElement("h4");
      titleTransactions.innerHTML = "Tranzactii";
      transactions.appendChild(titleTransactions);

      let transaction = document.createElement("div");
      transaction.setAttribute("class", "transaction row");
      transactions.appendChild(transaction);

      let transactionDate = document.createElement("p");
      transactionDate.setAttribute("class", "date col");
      transactionDate.innerHTML = "24.04.2023";
      transaction.appendChild(transactionDate);

      let transactionDescription = document.createElement("p");
      transactionDescription.setAttribute("class", "description col col-md-7");
      transactionDescription.innerHTML =
        "Retragere numerar ATM OTP Bank Piata Victoriei";
      transaction.appendChild(transactionDescription);

      let transactionAmount = document.createElement("p");
      transactionAmount.setAttribute("class", "amount col");
      transactionAmount.innerHTML = "-200.00 RON";
      transaction.appendChild(transactionAmount);
    } else {
      alert(`Adresa de email sau parola gresite!
      Agreati termenii si conditiile.`);
      inputEmail.value = "";
      inputPass.value = "";
    }
  });
}

let butonIb = document.querySelectorAll(".ib-login");

butonIb.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createIb();
  });
});

//------------------------------------------end signup/login page

//------------------------------------------start credit simulator

let loanRates = [
  {
    plName: "lower than 50000",
    procentRate: "14.99",
  },
  {
    plName: "lower than 100000",
    procentRate: "13.99",
  },
  {
    plName: "higher than 120000",
    procentRate: "12.99",
  },
];

let loanRatesDiscounts = [
  {
    discount: "1",
  },
];

function createSimulator() {
  main.innerHTML = " ";

  let containerSimulator = document.createElement("div");
  containerSimulator.setAttribute("class", "container containerSimulator");
  containerSimulator.setAttribute("id", "simulator");
  main.appendChild(containerSimulator);

  let headerSimulator = document.createElement("div");
  headerSimulator.setAttribute("class", "headerSimulator");
  containerSimulator.appendChild(headerSimulator);

  let titleHeaderSimulator = document.createElement("h2");
  titleHeaderSimulator.innerHTML = "Calculeaza-ti rata lunara";
  headerSimulator.appendChild(titleHeaderSimulator);

  let contentSimulator = document.createElement("div");
  contentSimulator.setAttribute(
    "class",
    "container-fluid row contentSimulator"
  );
  containerSimulator.appendChild(contentSimulator);

  let valuesSimulator = document.createElement("div");
  valuesSimulator.setAttribute("class", "col-md-6 col-sm-12 valuesSimulator");
  contentSimulator.appendChild(valuesSimulator);

  let valueWrapper = document.createElement("div");
  valueWrapper.setAttribute("class", "valueWrapper");
  valuesSimulator.appendChild(valueWrapper);

  let textVreauSimulator = document.createElement("p");
  textVreauSimulator.innerHTML = "Vreau";
  valueWrapper.appendChild(textVreauSimulator);

  let inputValueWrapper = document.createElement("div");
  inputValueWrapper.setAttribute("class", "inputValueWrapper");
  valueWrapper.appendChild(inputValueWrapper);

  let creditValue = document.createElement("input");
  creditValue.setAttribute("id", "creditValue");
  creditValue.setAttribute("placeholder", "1000");
  creditValue.setAttribute("value", "1000");
  inputValueWrapper.appendChild(creditValue);

  let creditCurrency = document.createElement("span");
  creditCurrency.innerHTML = "lei";
  inputValueWrapper.appendChild(creditCurrency);

  let minMaxCreditValue = document.createElement("p");
  minMaxCreditValue.innerHTML = "de la 1000 până la 120000 lei";
  minMaxCreditValue.setAttribute("class", "minMaxCreditValue");
  valueWrapper.appendChild(minMaxCreditValue);

  let periodWrapper = document.createElement("div");
  periodWrapper.setAttribute("class", "periodWrapper");
  valuesSimulator.appendChild(periodWrapper);

  let textVreauSimulator2 = document.createElement("p");
  textVreauSimulator2.innerHTML = "Vreau creditul pe o perioadă de";
  periodWrapper.appendChild(textVreauSimulator2);

  let inputPeriodWrapper = document.createElement("div");
  inputPeriodWrapper.setAttribute("class", "inputPeriodWrapper");
  periodWrapper.appendChild(inputPeriodWrapper);

  let creditPeriod = document.createElement("input");
  creditPeriod.setAttribute("id", "creditPeriod");
  creditPeriod.setAttribute("placeholder", "6");
  creditPeriod.setAttribute("value", "6");
  inputPeriodWrapper.appendChild(creditPeriod);

  let creditPeriodType = document.createElement("span");
  creditPeriodType.innerHTML = "luni";
  inputPeriodWrapper.appendChild(creditPeriodType);

  let minMaxCreditPeriod = document.createElement("p");
  minMaxCreditPeriod.innerHTML = " de la 6 până la 60 luni";
  minMaxCreditPeriod.setAttribute("class", "minMaxCreditPeriod");
  periodWrapper.appendChild(minMaxCreditPeriod);

  let clientOption = document.createElement("div");
  clientOption.setAttribute("class", "clientOption");
  valuesSimulator.appendChild(clientOption);

  let clientOTP = document.createElement("input");
  clientOTP.setAttribute("type", "checkbox");
  clientOTP.setAttribute("id", "clientOTP");
  clientOption.appendChild(clientOTP);

  let textClientOTP = document.createElement("label");
  textClientOTP.setAttribute("for", "clientOTP");
  textClientOTP.innerHTML = "Sunt client OTP Bank";
  clientOption.appendChild(textClientOTP);

  let refinanceOption = document.createElement("div");
  refinanceOption.setAttribute("class", "refinanceOption");
  valuesSimulator.appendChild(refinanceOption);

  let refinance = document.createElement("input");
  refinance.setAttribute("type", "checkbox");
  refinance.setAttribute("id", "refinance");
  refinanceOption.appendChild(refinance);

  let textRefinance = document.createElement("label");
  textRefinance.setAttribute("for", "refinance");
  textRefinance.innerHTML =
    "Vreau să refinanțez la OTP credite de la alte bănci";
  refinanceOption.appendChild(textRefinance);

  let incomeOption = document.createElement("div");
  incomeOption.setAttribute("class", "incomeOption");
  valuesSimulator.appendChild(incomeOption);

  let income = document.createElement("input");
  income.setAttribute("type", "checkbox");
  income.setAttribute("id", "income");
  incomeOption.appendChild(income);

  let textIncome = document.createElement("label");
  textIncome.setAttribute("for", "income");
  textIncome.innerHTML =
    "Vreau să beneficiez de o dobândă mai mică prin încasarea salariului/pensiei în contul de la OTP Bank";
  incomeOption.appendChild(textIncome);

  let resultsSimulator = document.createElement("div");
  resultsSimulator.setAttribute("class", "col-md-6 col-sm-12 resultsSimulator");
  contentSimulator.appendChild(resultsSimulator);

  let results = document.createElement("div");
  results.setAttribute("class", "results");
  resultsSimulator.appendChild(results);

  let loanRate = document.createElement("p");
  loanRate.setAttribute("class", "loanRate");
  loanRate.innerHTML = "<span>Rata lunara</span>" + "&nbsp" + 0 + "&nbsplei";
  results.appendChild(loanRate);

  let loanValue = document.createElement("p");
  loanValue.setAttribute("class", "loanValue");
  loanValue.innerHTML =
    "<span>Valoare imprumut</span>" + "&nbsp" + 0 + "&nbsplei";
  results.appendChild(loanValue);

  let loanTotalCost = document.createElement("p");
  loanTotalCost.setAttribute("class", "loanTotalCost");
  loanTotalCost.innerHTML =
    "<span>Suma totala rambursata</span>" + "&nbsp" + 0 + "&nbsplei";
  results.appendChild(loanTotalCost);

  let interest = document.createElement("p");
  interest.setAttribute("class", "interest");
  interest.innerHTML = "<span>Dobanda</span>" + "&nbsp" + 0 + "&nbsp%";
  results.appendChild(interest);

  let period = document.createElement("p");
  period.setAttribute("class", "period");
  period.innerHTML =
    "<span>Perioada rambursare</span>" + "&nbsp" + 0 + "&nbspluni";
  results.appendChild(period);

  let loanRateValue;
  let standardInterest;
  let finalInterest;
  let interestValue;
  let principalValue;

  function calculateLoanRateValue() {
    function calulateStandardInterest() {
      if (creditValue.value < 50001) {
        standardInterest = loanRates[0].procentRate;
      } else if (creditValue.value < 100001) {
        standardInterest = loanRates[1].procentRate;
      } else if (creditValue.value > 100000) {
        standardInterest = loanRates[2].procentRate;
      }
    }
    calulateStandardInterest();
    function calculateFinalInterest() {
      if (
        clientOTP.checked == true &&
        refinance.checked == true &&
        income.checked == true
      ) {
        finalInterest = standardInterest - 3;
      } else if (clientOTP.checked == true && refinance.checked == true) {
        finalInterest = standardInterest - 2;
      } else if (clientOTP.checked == true && income.checked == true) {
        finalInterest = standardInterest - 2;
      } else if (refinance.checked == true && income.checked == true) {
        finalInterest = standardInterest - 2;
      } else if (clientOTP.checked == true) {
        finalInterest = standardInterest - 1;
      } else if (refinance.checked == true) {
        finalInterest = standardInterest - 1;
      } else if (income.checked == true) {
        finalInterest = standardInterest - 1;
      } else {
        finalInterest = standardInterest;
      }
    }

    calculateFinalInterest();

    interestValue = (creditValue.value * (finalInterest / 100) * 30) / 360;
    principalValue = creditValue.value / creditPeriod.value;
    loanRateValue = interestValue + principalValue;

    loanRate.innerHTML =
      "<span>Rata lunara</span>" +
      "&nbsp" +
      Math.round(loanRateValue) +
      "&nbsplei";
    loanValue.innerHTML =
      "<span>Valoare imprumut</span>" +
      "&nbsp" +
      creditValue.value +
      "&nbsplei";
    loanTotalCost.innerHTML =
      "<span>Suma totala rambursata</span>" +
      "&nbsp" +
      Math.round(loanRateValue * creditPeriod.value) +
      "&nbsplei";
    interest.innerHTML =
      "<span>Dobanda</span>" + "&nbsp" + finalInterest + "&nbsp%";
    period.innerHTML =
      "<span>Perioada rambursare</span>" +
      "&nbsp" +
      creditPeriod.value +
      "&nbspluni";
  }

  let buttonWrapperSimulator = document.createElement("div");
  buttonWrapperSimulator.setAttribute("class", "buttonWrapperSimulator");
  resultsSimulator.appendChild(buttonWrapperSimulator);

  let calculate = document.createElement("button");
  calculate.setAttribute("class", "calculate");
  calculate.innerHTML = "Vreau credit";
  buttonWrapperSimulator.appendChild(calculate);

  calculate.addEventListener("click", function () {
    calculateLoanRateValue();
  });
}

jQuery(document).on("click", ".creditSimulator", createSimulator);
let creditSimulator = document.querySelectorAll(".creditSimulator");
creditSimulator.forEach(function (btn) {
  btn.addEventListener("click", createSimulator);
});

//------------------------------------------end credit simulator

//------------------------------------------start underconstruction page

function createUnderConstructionPage() {
  main.innerHTML = " ";

  let underConstructionPageWrapper = document.createElement("div");
  underConstructionPageWrapper.setAttribute(
    "class",
    "container underConstructionPageWrapper"
  );
  underConstructionPageWrapper.setAttribute("id", "goUnderConstruction");
  main.appendChild(underConstructionPageWrapper);

  let underConstructionImage = document.createElement("img");
  underConstructionImage.setAttribute(
    "class",
    "underConstructionImage img-fluid"
  );
  underConstructionImage.setAttribute(
    "src",
    "img/websiteunderconstruction.jpg"
  );
  underConstructionPageWrapper.appendChild(underConstructionImage);
}

let underConstruction = document.querySelectorAll(".underConstruction");
underConstruction.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createUnderConstructionPage();
  });
});

//------------------------------------------end underconstruction page

//------------------------------------------start contact page

function createContactPage() {
  main.innerHTML = " ";

  let contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact");
  main.appendChild(contactContainer);

  let contactHeader = document.createElement("div");
  contactHeader.setAttribute("class", "container-fluid");
  contactContainer.appendChild(contactHeader);

  let titleContact = document.createElement("h1");
  titleContact.setAttribute("class", "titleContact");
  titleContact.innerHTML = "Contact";
  contactHeader.appendChild(titleContact);

  let contentContactContainer = document.createElement("div");
  contentContactContainer.setAttribute(
    "class",
    "container row contentContactContainer"
  );
  contactContainer.appendChild(contentContactContainer);

  let contactForm = document.createElement("div");
  contactForm.setAttribute("class", "col col-md-6 com-sm-12 contactForm");
  contentContactContainer.appendChild(contactForm);

  let contactFormWrapper = document.createElement("div");
  contactFormWrapper.setAttribute("class", "row contactFormWrapper");
  contactForm.appendChild(contactFormWrapper);

  let contactFormTitle = document.createElement("div");
  contactFormTitle.setAttribute("class", "col col-md-9 col-sm-12");
  contactFormWrapper.appendChild(contactFormTitle);

  let contactFormTitleH2 = document.createElement("h2");
  contactFormTitleH2.innerHTML = "Scrieti-ne";
  contactFormTitle.appendChild(contactFormTitleH2);

  let contactFormTitleP = document.createElement("p");
  contactFormTitleP.innerHTML =
    "Aveți nevoie de informații suplimentare despre produsele și serviciile noastre?";
  contactFormTitle.appendChild(contactFormTitleP);

  let contactFormImgWrapper = document.createElement("div");
  contactFormImgWrapper.setAttribute("class", "col col-md-3 col-sm-12");
  contactFormWrapper.appendChild(contactFormImgWrapper);

  let contactFormImg = document.createElement("img");
  contactFormImg.setAttribute("class", "img-fluid");
  contactFormImg.setAttribute("src", "img/contactletter.svg");
  contactFormImgWrapper.appendChild(contactFormImg);

  let contactFormFormWrapper = document.createElement("div");
  contactFormFormWrapper.setAttribute("class", "col-12 contactFormFormWrapper");

  contactFormWrapper.appendChild(contactFormFormWrapper);

  let form = document.createElement("form");
  contactFormFormWrapper.appendChild(form);

  let nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Nume Prenume (ex: Popescu Ion)");
  form.appendChild(nameInput);

  let mailInput = document.createElement("input");
  mailInput.setAttribute("placeholder", "E-mail (ex: popescu@email.com)");
  form.appendChild(mailInput);

  let telInput = document.createElement("input");
  telInput.setAttribute("placeholder", "Numar telefon (ex: 0740 123 456)");
  form.appendChild(telInput);

  let subjectInput = document.createElement("input");
  subjectInput.setAttribute("placeholder", "Subiectul mesajului");
  form.appendChild(subjectInput);

  let textForm = document.createElement("textarea");
  textForm.setAttribute("placeholder", "Mesajul");
  form.appendChild(textForm);

  let gdprWrapper = document.createElement("div");
  gdprWrapper.setAttribute("class", "gdpr col col-md-12");
  form.appendChild(gdprWrapper);

  let gdpr = document.createElement("input");
  gdpr.setAttribute("type", "checkbox");
  gdpr.setAttribute("id", "gdpr");
  gdprWrapper.appendChild(gdpr);

  let textGdpr = document.createElement("label");
  textGdpr.setAttribute("for", "gdpr");
  textGdpr.innerHTML =
    "Am luat la cunoștință prevederile notificării privind protecția datelor cu caracter personal, de mai sus.*";
  gdprWrapper.appendChild(textGdpr);

  let marketingWrapper = document.createElement("div");
  marketingWrapper.setAttribute("class", "marketing col col-md-12");
  form.appendChild(marketingWrapper);

  let marketing = document.createElement("input");
  marketing.setAttribute("type", "checkbox");
  marketing.setAttribute("id", "marketing");
  marketingWrapper.appendChild(marketing);

  let textMarketing = document.createElement("label");
  textMarketing.setAttribute("for", "marketing");
  textMarketing.innerHTML =
    "Sunt de acord cu prelucrarea datelor personale în scop de marketing și profilare în acest scop de către Bancă";
  marketingWrapper.appendChild(textMarketing);

  let personalDataWrapper = document.createElement("div");
  personalDataWrapper.setAttribute("class", "personalData col col-md-12");
  form.appendChild(personalDataWrapper);
  let personalData = document.createElement("input");
  personalData.setAttribute("type", "checkbox");
  personalData.setAttribute("id", "personalData");
  personalDataWrapper.appendChild(personalData);

  let textPersonalData = document.createElement("label");
  textPersonalData.setAttribute("for", "personalData");
  textPersonalData.innerHTML =
    "Sunt de acord cu prelucrarea datelor personale în scop de marketing și profilare în acest scop de către terți parteneri ai Băncii";
  personalDataWrapper.appendChild(textPersonalData);

  let contactButtonWrapper = document.createElement("div");
  contactButtonWrapper.setAttribute("class", "contactButton col col-md-12");
  form.appendChild(contactButtonWrapper);

  let contactButton = document.createElement("button");
  contactButton.setAttribute("class", "contactButton");
  contactButton.setAttribute("href", "#");
  contactButton.innerHTML = "Trimite mesajul";
  contactButtonWrapper.appendChild(contactButton);

  let contactMap = document.createElement("div");
  contactMap.setAttribute("class", "col col-md-5 col-sm-12 contactMap");
  contentContactContainer.appendChild(contactMap);

  let map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91142.08716181257!2d25.931224797265614!3d44.44977050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201ffae6b762b%3A0x8a054bd19c84fa7c!2sOTP%20Bank%20-%20Sucursala%20Buze%C8%99ti!5e0!3m2!1sro!2sro!4v1683219115985!5m2!1sro!2sro"
  );
  contactMap.appendChild(map);
}

let contactPage = document.querySelectorAll(".contactPage");
contactPage.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createContactPage();
  });
});

//----------------------------------------------------- end contact page

//--------------------------------------------- start button to the top
window.onscroll = scrollFunction();

const scrollBtn = document.getElementById("scroll-to-top-btn");
function scrollFunction() {
  scrollBtn.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
}

scrollBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//-------------------------------------------------- end button to the top
