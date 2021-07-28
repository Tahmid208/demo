//USEUNIT Libary
let browser
let Page
function Verify_0825400_BouchardInsuranceInc_ClaimInquiryBySearchParameters(){
  //open Excel file
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  // Read data from the Excel file
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  //var ClaimNum = excelSheet.CellByName("C2").Value;
  var Email=excelSheet.CellByName("E2").Value;
  //Call function from Libary
  Libary.LoginToSureConnect(Browser,Url,Email)
  browser=Sys.Browser(Browser);
  Page=browser.Page("*")
  //Page=Aliases.browser.page("*");
  //====Call function from Libary==== 
  Libary.SureConnectWelcomePage(Page)
  //=====Call function from Libary====
  Libary.wait(2000)
  Libary.SelectClaimsLinkFromMenu(Page,"Claim Inquiry")
  //===== handle iFrame object ======
  Libary.wait(5000)
  let frame=Page.FindElement("//iframe[@id='WFiFrame']")
  Sys.HighlightObject(frame,2,255)
  frame.FindElement("//div[@id='comboAcctHolder_chosen']//span").Click();
  frame.FindElement("//div[@id='comboAcctHolder_chosen']/div/div/input").SetText("GL STAFFING SERVICES") 
  var AccountHolder=frame.FindElement("//li[contains(., 'GL STAFFING SERVICES, INC. - 20035141')]") 
  AccountHolder.Click();
  var lossDate=frame.FindElement("//input[@id='calLossDateFrom']")
  lossDate.Click()
  Libary.wait(1000)
  lossDate.Keys("^a");
  Libary.wait(1000)
  lossDate.SetText("01/01/2017")
  var lossDateTo=frame.FindElement("//input[@id='calLossDateTo']")
  lossDateTo.Click()
  Libary.wait(1000)
  lossDateTo.Keys("^a");
  Libary.wait(1000)
  lossDateTo.SetText("12/31/2018")
  frame.FindElement("//div[@id='comboLossAmount_chosen']/a/span").Click()
  Libary.wait(1000)
  frame.FindElement("//li[contains(text(),'Paid Loss')]").Click()
  frame.FindElement("//input[@id='editLossAmount']").SetText("5000")
  frame.FindElement("//div[@id='comboClaimStatus_chosen']/a/span").Click()
  Libary.wait(1000)
  frame.FindElement("//li[contains(text(),'Closed')]").Click()
  Libary.wait(1000)
  frame.FindElement("#valSubmit").Click()
  Libary.wait(5000)
  browser.Page("https://qassureconnect.amerisure.com/*").Close() 
  //=====Claim Inquiry page=========
  Libary.wait(2000) 
  Page=browser.Page("*") 
  var ClaimInquiry=Page.FindElement("//span[contains(text(),'Claim Inquiry')]")
  if (ClaimInquiry.Exists){
    Sys.HighlightObject(ClaimInquiry,2,255)
    name=aqObject.GetPropertyValue(ClaimInquiry,"contentText")
    Log.Checkpoint(name+" page loaded successfully")
    }
    else{
    Log.Error("Claim Inquiry page isn't loaded successfully") 
    }
  //===== BouchardLogo checkpoint =====
  BouchardLogo = Page.FindElement("//div/b[1]/i[1]/span[1]/img")
  if (BouchardLogo.Exists)  {
  Sys.HighlightObject(BouchardLogo,2,255)
  Log.Checkpoint("Bouchard Logo Existed")
  }
  else{
  Log.Error("Bouchard Logo isn't Existed")
  }
  
  //===== AmerisureLogo checkpoint =====
  AmerisureLogo = Page.FindElement("//img[@src='AmerisureLogo.jpg']")
  if (AmerisureLogo.Exists)  {
  Sys.HighlightObject(AmerisureLogo,2,255)
  Log.Checkpoint("Amerisure Logo Existed")
  }
  else{
  Log.Error("Amerisure Logo isn't Existed")
  } 
 
  AccountName =Page.FindElement("//table/tbody/tr[3]/td[1]/div[1]/b[2]")
  Sys.HighlightObject(AccountName,2,255)
  var name=aqObject.GetPropertyValue(AccountName,"innerText")
  Log.Checkpoint(name)
  
  PolicyYears=Page.FindElement("//span[contains(text(),'For all Policy Years')]")
  Sys.HighlightObject(PolicyYears,2,255)
  var name=aqObject.GetPropertyValue(PolicyYears,"innerText")
  Log.Checkpoint(name)
  
  LossDate=Page.FindElement("//span[contains(text(),'From 01')]")
  Sys.HighlightObject(LossDate,2,255)
  var name=aqObject.GetPropertyValue(LossDate,"innerText")
  Log.Checkpoint("Loss Date: "+name)
  
  LossAmount=Page.FindElement("//table[1]/tbody[1]/tr[6]/td[1]/div[1]/b[2]/span")
  Sys.HighlightObject(LossAmount,2,255)
  var name=aqObject.GetPropertyValue(LossAmount,"innerText")
  Log.Checkpoint("Loss Amount: "+name)
  
  ClaimStatus=Page.FindElement("//table[1]/tbody[1]/tr[7]/td[1]/div[1]/b[2]/span")
  Sys.HighlightObject(ClaimStatus,2,255)
  var name=aqObject.GetPropertyValue(ClaimStatus,"innerText")
  Log.Checkpoint("Claim Status: "+name)

  Libary.closebrowser(Browser)
}

