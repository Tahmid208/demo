//USEUNIT Libary
let browser
let Page
function Verify_0825400_BouchardInsuranceInc_ClaimInquiryByClaimNumber(){
  //open Excel file
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  // Read data from the Excel file
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  var ClaimNum = excelSheet.CellByName("C2").Value;
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
  
  ClaimNumber =Page.FindElement("//table/tbody/tr[5]/td[1]/div[1]/b[2]")
  Sys.HighlightObject(ClaimNumber,2,255)
  var name=aqObject.GetPropertyValue(ClaimNumber,"innerText")
  Log.Checkpoint(name)
  
  claimStatus =Page.FindElement("//table/tbody[1]/tr[7]/td[2]/div[1]")
  Sys.HighlightObject(claimStatus,2,255)
  var name=aqObject.GetPropertyValue(claimStatus,"innerText")
  Log.Checkpoint("claimStatus: "+name)
  
  SICCode =Page.FindElement("//table/tbody/tr[7]/td[3]/div[1]")
  Sys.HighlightObject(SICCode,2,255)
  var name=aqObject.GetPropertyValue(SICCode,"innerText")
  Log.Checkpoint("SIC Code: "+name)
  
  SICName =Page.FindElement("//table/tbody/tr[7]/td[4]/div[1]")
  Sys.HighlightObject(SICName,2,255)
  var name=aqObject.GetPropertyValue(SICName,"innerText")
  Log.Checkpoint("SIC Name: "+name)
  
  SICName =Page.FindElement("//table/tbody/tr[7]/td[4]/div[1]")
  Sys.HighlightObject(SICName,2,255)
  var name=aqObject.GetPropertyValue(SICName,"innerText")
  Log.Checkpoint("SIC Name: "+name) 
  
  PolicyLine =Page.FindElement("//table/tbody/tr[7]/td[5]/div[1]")
  Sys.HighlightObject(PolicyLine,2,255)
  var name=aqObject.GetPropertyValue(PolicyLine,"innerText")
  Log.Checkpoint("Policy Line: "+name) 
  
  WCCategory=Page.FindElement("//table/tbody/tr[7]/td[6]/div[1]")
  Sys.HighlightObject(WCCategory,2,255)
  var name=aqObject.GetPropertyValue(WCCategory,"innerText")
  Log.Checkpoint("WC Category: "+name)
  
  ClaimantName=Page.FindElement("//table/tbody/tr[7]/td[7]/div[1]")
  Sys.HighlightObject(ClaimantName,2,255)
  var name=aqObject.GetPropertyValue(ClaimantName,"innerText")
  Log.Checkpoint("Claimant Name: "+name)
   
  LossDate=Page.FindElement("//table/tbody/tr[7]/td[8]/div[1]")
  Sys.HighlightObject(LossDate,2,255)
  var name=aqObject.GetPropertyValue(LossDate,"innerText")
  Log.Checkpoint("Loss Date: "+name)
  
  NotificationDate=Page.FindElement("//table/tbody/tr[7]/td[9]/div[1]")
  Sys.HighlightObject(NotificationDate,2,255)
  var name=aqObject.GetPropertyValue(NotificationDate,"innerText")
  Log.Checkpoint("Notification Date: "+name)
	  
  DatetoAmerisure=Page.FindElement("//table/tbody/tr[7]/td[10]/div[1]")
  Sys.HighlightObject(DatetoAmerisure,2,255)
  var name=aqObject.GetPropertyValue(DatetoAmerisure,"innerText")
  Log.Checkpoint("Date to Amerisure: "+name)
  	
  PaidLoss=Page.FindElement("//table/tbody/tr[7]/td[11]/div[1]")
  Sys.HighlightObject(PaidLoss,2,255)
  var name=aqObject.GetPropertyValue(PaidLoss,"innerText")
  Log.Checkpoint("Paid Loss: "+name)
  
  PaidExpense=Page.FindElement("//table/tbody/tr[7]/td[12]/div[1]")
  Sys.HighlightObject(PaidExpense,2,255)
  var name=aqObject.GetPropertyValue(PaidExpense,"innerText")
  Log.Checkpoint("Paid Expense: "+name)
    
  OSLossReserve=Page.FindElement("//table/tbody/tr[7]/td[13]/div[1]")
  Sys.HighlightObject(OSLossReserve,2,255)
  var name=aqObject.GetPropertyValue(OSLossReserve,"innerText")
  Log.Checkpoint("O/S Loss Reserve: "+name) 
  
  TotalIncurred=Page.FindElement("//table/tbody/tr[7]/td[14]/div[1]")
  Sys.HighlightObject(TotalIncurred,2,255)
  var name=aqObject.GetPropertyValue(TotalIncurred,"innerText")
  Log.Checkpoint("Total Incurred: "+name)  

  DeductibleRecovery=Page.FindElement("//table/tbody/tr[7]/td[15]/div[1]")
  Sys.HighlightObject(DeductibleRecovery,2,255)
  var name=aqObject.GetPropertyValue(DeductibleRecovery,"innerText")
  Log.Checkpoint("Deductible Recovery: "+name) 
  
  NetIncurred=Page.FindElement("//table/tbody/tr[7]/td[16]/div[1]")
  Sys.HighlightObject(NetIncurred,2,255)
  var name=aqObject.GetPropertyValue(NetIncurred,"innerText")
  Log.Checkpoint("Net Incurred: "+name) 
  
  ReOpenDate=Page.FindElement("//table/tbody/tr[7]/td[17]/div[1]")
  Sys.HighlightObject(ReOpenDate,2,255)
  var name=aqObject.GetPropertyValue(ReOpenDate,"innerText")
  Log.Checkpoint("Re-Open Date: "+name)
  
  BenefitState=Page.FindElement("//table/tbody/tr[7]/td[18]/div[1]")
  Sys.HighlightObject(BenefitState,2,255)
  var name=aqObject.GetPropertyValue(BenefitState,"innerText")
  Log.Checkpoint("Benefit State: "+name) 
  
  Driver=Page.FindElement("//table/tbody/tr[7]/td[19]/div[1]")
  Sys.HighlightObject(Driver,2,255)
  var name=aqObject.GetPropertyValue(Driver,"innerText")
  Log.Checkpoint("Driver: "+name)
  
  Close=Page.FindElement("//td[1]/div[1]/b[4]/span[1]")
  Sys.HighlightObject(Close,2,255)
  var name=aqObject.GetPropertyValue(Close,"innerText")
  Log.Checkpoint("Close: "+name)
  
  Total=Page.FindElement("//b[6]//span[1]")
  Sys.HighlightObject(Total,2,255)
  var name=aqObject.GetPropertyValue(Total,"innerText")
  Log.Checkpoint("Total: "+name)
  
  Libary.closebrowser(Browser)   
 /* var claimInquiryTab=Page.FindElements("//table/tbody/tr[7]/td/div")
  RowCount=claimInquiryTab.length
  if (RowCount > 0)
    {
      for (var i = 0; i <= RowCount; i++)
      {
        Sys.HighlightObject(claimInquiryTab[i],5,255)
        val=aqObject.GetPropertyValue(claimInquiryTab[i],"innerText")
        Log.Checkpoint(val)   
      }
    }
    else
    {
      Log.Error ("No data is found on the page.");
    }*/
}

/*function Test(){
  Page=Aliases.browser.page("*");
  Libary.HandleiFrameObjectClaimInquiry(Page,"2129692")
 /* let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let frame = browser.pageClaimSrch.formForm1.frameWfiframe;
  frame.linkAll.textnodeAll.Click();
  let textbox = frame.textbox;
  textbox.Click();
  textbox.SetText("GL");
  frame.textnode.textnodeGlStaffingServicesInc200.Click();

}*/
