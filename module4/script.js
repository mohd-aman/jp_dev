const puppeteer = require('puppeteer');
const fs = require("fs");
const xlsx = require("json-as-xlsx")

let pin = process.argv[2];
let age = Number(process.argv[3]);
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.cowin.gov.in/');
  await page.waitForSelector(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");
  await page.evaluate(function(){
      let selAll = document.querySelectorAll(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");
      selAll[1].click();
      return;
  });
  await page.waitForSelector(".pin-search input");
  await page.type(".pin-search input",pin);
  await page.waitForSelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
  await page.evaluate(function(){
      let searchButton = document.querySelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
      searchButton.click();
      return;
  })
  await page.waitForSelector("ul label.accessibility-plugin-ac");
  await page.waitForTimeout(5000);
  await page.evaluate(function(age){
    let allAge = document.querySelectorAll("ul label.accessibility-plugin-ac");
    if(age>=12 && age<=14){
      allAge[0].click();
    }else if(age>=15 && age<=18){
      allAge[1].click();
    }else if(age>18){
      allAge[2].click();
    }
    return;
  },age)
  await page.waitForSelector(".item.active li");
  await page.waitForSelector(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted");
  let arr = await page.evaluate(function(){
      let a = [];
      let allDays = document.querySelectorAll(".item.active li");
      let allRows = document.querySelectorAll(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted");
      for(let i=0;i<allDays.length;i++){
          let date = allDays[i].textContent.trim();
          for(let j=0;j<allRows.length;j++){
            let name = allRows[j].querySelector(".row-disp h5").textContent.trim();
            let address = allRows[j].querySelector(".row-disp>p").textContent.trim();
            let vaccine = allRows[j].querySelector(".row-disp div p").textContent.trim();
            let age = allRows[j].querySelector(".row-disp div .session-details span").textContent.split(":")[1].trim();
            let dose = allRows[j].querySelectorAll(".row-disp div .session-details span")[1].textContent.split(":")[1].trim();
            let slot = allRows[j].querySelectorAll(".slots-box.ng-star-inserted")[i].textContent.trim();
            if(slot != "N/A" && slot != "Booked"){
                let obj = {
                    Name:name,
                    Address:address,
                    Vaccine:vaccine,
                    AgeGroup:age,
                    Dose:dose,
                    Slot:slot,
                    Date:date
                }
                a.push(obj);}
          }
      }
      return a;
  })
  let vaccineSchedule = JSON.stringify(arr);
  let data = [
    {
      sheet: "ScheduleOfVaccine",
    //   "Name": "EDMC P S Vasundhra Enclave S-1",
    //     "Address": "EDMC PRIMERY School Vasundhra Enclave, East Delhi, Delhi, 110096",
    //     "Vaccine": "COVISHIELDFree",
    //     "AgeGroup": "18 & Above",
    //     "Dose": "#2",
    //     "Slot": "60 Slots",
    //     "Date": "Tue, 22 Mar"
      columns: [
        { label: "Name", value: "Name" }, // Top level data
        {label: "Address", value: "Address"},
        {label: "Vaccine", value: "Vaccine"},
        {label: "AgeGroup", value:"AgeGroup"},
        {label: "Dose", value:"Dose"},
        {label: "Slot", value:"Slot"},
        {label: "Date", value:"Date"}
      ],
      content: arr
    },
  ]
  
  let settings = {
    fileName: "Schedule", // Name of the resulting spreadsheet
    extraLength: 7, // A bigger number means that columns will be wider
    writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
  }
  xlsx(data, settings)
  fs.writeFileSync("ScheduleOfVaccination.json",vaccineSchedule);
  console.log(vaccineSchedule);
  browser.close();
})();