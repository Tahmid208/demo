//USEUNIT Libary
let browser
let Page
function Verify_Footer_Links(){
  //open Excel file
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  // Read data from the Excel file
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  var Email=excelSheet.CellByName("E2").Value;
  //Call function from Libary
  Libary.LoginToSureConnect(Browser,Url,Email)
  browser=Sys.Browser(Browser);
  Page=browser.Page("*")
  //====Call function from Libary==== 
  Libary.SureConnectWelcomePage(Page)
  //======Footer_Links===============
  AmerisureCom =Page.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[1]")
  Sys.HighlightObject(AmerisureCom,2,255)
  var AmerisureComPage=AmerisureCom.href
  Log.Message(AmerisureComPage)
  AmerisureCom.Click()
  AmerisurePage=browser.Page("*")
  Libary.wait(5000)
  AmerisureComPage=AmerisurePage.NativeWebObject.Find("alt","Amerisure Insurance Logo","img")
  if (AmerisureComPage.Exists){
  Sys.HighlightObject(AmerisureComPage,2,255)
  var val=aqObject.GetPropertyValue(AmerisureComPage,"alt")
  Log.Checkpoint("Amerisure.Com Page Existed")
  }
  else{
   Log.Error("Amerisure.Com Page isn't Existed")
  }  
  AmerisurePage.Close()
  Libary.wait(3000)
  
  Page=browser.Page("*")
  SubmitAClaim =Page.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[2]")
  Sys.HighlightObject(SubmitAClaim,2,255)
  var SubmitAClaimPage=SubmitAClaim.href
  Log.Message(SubmitAClaimPage)
  SubmitAClaim.Click()
  ClaimPage=browser.Page("*")
  Libary.wait(3000)
  Libary.checkpointforPage(ClaimPage,"*Online Claims Reporting*","h3")
  Libary.wait(1000)
  
  paymentLink =ClaimPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[3]")
  Sys.HighlightObject(paymentLink,2,255)
  var payment=paymentLink.href
  Log.Message(payment)
  paymentLink.Click()
  paymentPage=browser.Page("*")
  Libary.wait(3000)
  Libary.checkpointforPage(paymentPage,"*Amerisure now offers a robust*","h2")
  paymentPage.Close()
  Libary.wait(2000)
  
  ReportPayroll =ClaimPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[4]")
  Sys.HighlightObject(ReportPayroll,2,255)
  var Payroll=ReportPayroll.href
  Log.Message(Payroll)
  ReportPayroll.Click()
  PayrollPage=browser.Page("*")
  Libary.wait(3000)
  Libary.checkpointforPage(PayrollPage,"*Amerisure Online Payroll Reporting*","div")
  PayrollPage.Close()
  Libary.wait(2000)
  
  Contactus =ClaimPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[5]")
  Sys.HighlightObject(Contactus,2,255)
  var ContactusLink=Contactus.href
  Log.Message(ContactusLink)
  Contactus.Click()
  ContactusPage=browser.Page("*")
  Libary.wait(3000)
  Libary.checkpointforPage(ContactusPage,"*Thank you for using SureConnect*","b")
  Libary.wait(3000)
  
  PrivacyPolicy=ContactusPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[6]")
  Sys.HighlightObject(PrivacyPolicy,2,255)
  var PrivacyPolicyLink=PrivacyPolicy.href
  Log.Message(PrivacyPolicyLink)
  PrivacyPolicy.Click()
  PrivacyPolicyPage=browser.Page("*")
  Libary.wait(3000)
  PrivacyPolicyPage.Close()
  
  CaliforniaPrivacy =ContactusPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[7]")
  Sys.HighlightObject(CaliforniaPrivacy,2,255)
  var CaliforniaPrivacyLink=CaliforniaPrivacy.href
  Log.Message(CaliforniaPrivacyLink)
  CaliforniaPrivacy.Click()
  CaliforniaPrivacyPage=browser.Page("*")
  Libary.wait(3000)
  CaliforniaPrivacyPage.Close()
  
  TermsandConditions =ContactusPage.FindElement("//div[@id='StickyFooter']/div[2]/div[1]/a[8]")
  Sys.HighlightObject(TermsandConditions,2,255)
  var TermsandConditionsLink=TermsandConditions.href
  Log.Message(TermsandConditionsLink)
  TermsandConditions.Click()
  TermsandConditionsPage=browser.Page("*")
  Libary.wait(6000)
  TermsandConditionsPage.Close()
  
  Libary.closebrowser(Browser)
  }