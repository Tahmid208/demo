//USEUNIT Libary
let browser
let Page
function Verify_0825400_BouchardInsuranceInc_ClaimBrief_2129692(){
  //====== open Excel file =====================
  var excelFile = Excel.Open("J:\\CSCCommon\\TestCompleteScripts\\AmerisureWebpage\\SureConnectDotCom\\TestData.xlsx");
  var excelSheet = excelFile.SheetByTitle("GetData");
  
  //====== Read data from the Excel file ========
  rows=excelSheet.RowCount
  var Browser = excelSheet.Cell("A", 2).Value;
  var Url = excelSheet.Cell(2, 2).Value;
  var ClaimNum = excelSheet.CellByName("C2").Value;
  var Email=excelSheet.CellByName("E2").Value;
  //Call SureConnect Login function from Libary
  Libary.LoginToSureConnect(Browser,Url,Email)
  browser=Sys.Browser(Browser)
  Page=browser.Page("*")
  //====Call SureConnec tWelcome Page function from Libary======== 
  Libary.SureConnectWelcomePage(Page)
  //=====Call Select Claims Link From Menu function from Libary====
  Libary.wait(2000)
  Libary.SelectClaimsLinkFromMenu(Page,"Claim Brief")
  //===== Call handle iFrame object function from Libary ==========
  Libary.HandleiFrameObject(Page,ClaimNum)
  browser.Page("https://qassureconnect.amerisure.com/*").Close()
  
  //=====ClaimBrief page=========
  Libary.wait(5000) 
  Page=browser.Page("*")
  var ClaimBrief=Page.NativeWebObject.Find("class","rpt_title","div")
  if (ClaimBrief.Exists){
    Sys.HighlightObject(ClaimBrief,2,255)
    Log.Checkpoint("Claim Brief page loaded successfully")
    }
    else{
    Log.Error("Claim Brief page isn't loaded successfully") 
    }    
  //===== BouchardLogo checkpoint =====
  BouchardLogo = Page.FindElement("//div[1]/div[1]/img")
  if (BouchardLogo.Exists)  {
  Sys.HighlightObject(BouchardLogo,2,255)
  Log.Checkpoint("Bouchard Logo Existed")
  }
  else{
  Log.Error("Bouchard Logo isn't Existed")
  }
  //===== AmerisureLogo checkpoint =====
  AmerisureLogo = Page.FindElement("//div[1]/div[2]/img[1]")
  if (AmerisureLogo.Exists)  {
  Sys.HighlightObject(AmerisureLogo,2,255)
  Log.Checkpoint("Amerisure Logo Existed")
  }
  else{
  Log.Error("Amerisure Logo isn't Existed")
  }
  //===== ClaimSummary Table checkpoint =====
  var ClaimSummary=Page.NativeWebObject.Find("contentText","Claim Summary","div")
  if (ClaimSummary.Exists){
    Sys.HighlightObject(ClaimSummary,2,255)
    Log.Checkpoint("Claim Summary Table existed")
    }
    else{
    Log.Error("Claim Summary Table isn't existed") 
    }     
     
  AccountNumber = Page.FindElement("//div[2]/div/table/tbody/tr[2]/td[1]")
  Sys.HighlightObject(AccountNumber,2,255)
  var ActualValue=aqObject.GetPropertyValue(AccountNumber,"innerText")
  Log.Checkpoint(ActualValue)
 
  AccountName = Page.FindElement("//div[2]/div/table/tbody/tr[2]/td[2]")
  Sys.HighlightObject(AccountName,2,255)
  var AccountNametext=aqObject.GetPropertyValue(AccountName,"innerText")
  Log.Checkpoint(AccountNametext)
  
  PolicyNumber = Page.FindElement("//div[2]/div/table/tbody/tr[3]/td[1]")
  Sys.HighlightObject(PolicyNumber,2,255)
  var PolicyNumbertext=aqObject.GetPropertyValue(PolicyNumber,"innerText")
  Log.Checkpoint(PolicyNumbertext)
  
  ClaimNumber = Page.FindElement("//div[2]/div[2]/table[1]/tbody[1]/tr[4]/td[1]")
  Sys.HighlightObject(ClaimNumber,2,255)
  var ClaimNumberval=aqObject.GetPropertyValue(ClaimNumber,"innerText")
  Log.Checkpoint(ClaimNumberval)
  
  var FinancialSummary=Page.NativeWebObject.Find("contentText","Financial Summary","div")
  if (FinancialSummary.Exists){
    Sys.HighlightObject(FinancialSummary,2,255)
    Log.Checkpoint("Financial Summary Table existed")
    }
    else{
    Log.Error("Financial Summary Table isn't existed") 
    }  
    
  ClaimantName= Page.FindElement("//body[1]/div[3]/div[2]/table/tbody/tr[2]/td[1]")
  Sys.HighlightObject(ClaimantName,2,255)
  var ClaimNumberval=aqObject.GetPropertyValue(ClaimantName,"innerText")
  Log.Checkpoint("Claimant Name: "+ClaimNumberval)
  
  ActionPlans=Page.NativeWebObject.Find("contentText","*There are no action*","span")
  if (ActionPlans.Exists){
  Sys.HighlightObject(ActionPlans,2,255)
  ActionPlans= aqObject.GetPropertyValue(ActionPlans,"innerText")
  Log.Checkpoint(ActionPlans)
  }
  
  var ClaimNotes=Page.NativeWebObject.Find("contentText","Claim Notes","div")
  if (ClaimNotes.Exists){
    Sys.HighlightObject(ClaimNotes,2,255)
    Log.Checkpoint("ClaimNotes Table existed")
    }
    else{
    Log.Error("ClaimNotes Table isn't existed") 
    } 
  
  Page.FindElement("//input[@id='NotesAll']").Click()
  var ViewAllNotesText=Page.FindElement("//div[@id='notesdiv']/div[2]/span[1]/label[2]").contentText
  Log.Checkpoint(ViewAllNotesText+" Selected")
  Libary.wait(2000)
  Libary.HighlightWebElement(Page,"//div[@id='notesdiv']/div[2]/span[3]/table[1]")
  Page.FindElement("//input[@id='Notes3']").Click()
  var ViewNotesText=Page.FindElement("//div[@id='notesdiv']/div[2]/span[1]/label[1]").contentText
  Log.Checkpoint(ViewNotesText+" Selected")
  Libary.HighlightWebElement(Page,"//div[@id='notesdiv']/div[2]/span[2]/table[1]")
  
  var ClaimTransactions=Page.NativeWebObject.Find("contentText","Claim Transactions","div")
  if (ClaimTransactions.Exists){
    Sys.HighlightObject(ClaimTransactions,2,255)
    Log.Checkpoint("Claim Transactions Table existed")
    }
    else{
    Log.Error("Claim Transactions Table isn't existed") 
    }
    
  ClaimPending= Page.FindElement("//body/div[5]/div[2]/span[1]")
  Sys.HighlightObject(ClaimPending,2,255)
  var ClaimPendingval=aqObject.GetPropertyValue(ClaimPending,"innerText")
  Log.Checkpoint(ClaimPendingval) 
  
  Page.FindElement("//input[@id='HistTransAll']").Click()
  var ViewAllTransactions=Page.FindElement("//div[5]/div[3]/span[1]/span/label[2]").contentText
  Log.Checkpoint(ViewAllTransactions+" Selected")
  Libary.wait(2000)
  Libary.HighlightWebElement(Page,"//div[5]/div[3]/div[2]/table")
  Page.FindElement("//input[@id='HistTrans3']").Click() 
  var ViewLastTransaction=Page.FindElement("//div[5]/div[3]/span[1]/span/label[1]").contentText
  Log.Checkpoint(ViewLastTransaction+" Selected")
  Libary.HighlightWebElement(Page,"//div[5]/div[3]/div[1]/table[1]")
  Libary.closebrowser(Browser)
  }



/* Aval=aqString.Replace(ActualValue,"\n","")
  Log.Message(Aval)
  ExpectedVal="Account #20035141"
  if (Aval==ExpectedVal){
  Log.Checkpoint("Account Number matched")
  }
  else
  {
  Log.Warning("Account Number Mismatched")
  } */