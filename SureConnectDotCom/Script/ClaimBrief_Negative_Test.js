//USEUNIT Libary
let browser
let Page
function Verify_0825400_BouchardInsuranceInc_ClaimBrief_2129692(){
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  // Read data from the Excel file
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  var ClaimNumber = excelSheet.CellByName("D2").Value;
  var Email=excelSheet.CellByName("E2").Value;
  //Call function from Libary
  Libary.LoginToSureConnect(Browser,Url,Email)
  //dynamic page declare
  browser=Sys.Browser(Browser)
  Page=browser.Page("*")
  //====Call function from Libary==== 
  Libary.SureConnectWelcomePage()
  //=====Call function from Libary====
  Libary.wait(2000)
  Libary.SelectClaimsLinkFromMenu(Page,"Claim Brief")
   //===== handle iFrame object ======
  Libary.HandleiFrameObject(Page,ClaimNumber)
  browser.page("https://qassureconnect.amerisure.com/*").Close()
  Page=browser.page("*");
  
  Libary.wait(4000)
  NoInformation=Page.FindElement("//tbody/tr[1]/td")
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


