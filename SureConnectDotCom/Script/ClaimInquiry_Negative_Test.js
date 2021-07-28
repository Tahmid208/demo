//USEUNIT Libary
let browser
let Page
function Verify_0825400_BouchardInsuranceInc_ClaimInquiryByClaimNumber_NoClaimsFound(){
    //open Excel file
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  // Read data from the Excel file
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  var ClaimNum = excelSheet.CellByName("D2").Value;
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
  Libary.HandleiFrameObjectClaimInquiry(Page,ClaimNum)
  browser.Page("https://qassureconnect.amerisure.com/*").Close()
  
  Page=browser.page("*");
  Libary.wait(4000)
  NoInformation=Page.FindElement("//tbody/tr[1]/td[1]")
  Sys.HighlightObject(NoInformation,2,255)
  var ActualValue=aqObject.GetPropertyValue(NoInformation,"innerText")
  Log.Checkpoint(ActualValue)
  
  Verify=Page.FindElement("//tbody/tr[2]/td")
  Sys.HighlightObject(Verify,2,255)
  var ActualValue=aqObject.GetPropertyValue(Verify,"innerText")
  Log.Checkpoint(ActualValue)

  Page.FindElement("//input[@name='btnClose']").Click();
  Libary.wait(2000)
}