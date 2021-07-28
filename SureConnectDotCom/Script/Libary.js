function pageURL(BrowserName,URL)
{
  //Browsers.Item(BrowserName).Run(URL)
  Browsers.Item(BrowserName).Run(URL);
}

function wait(ms)
{
  Delay(ms)
}

function HighlightWebElement(Pagename,Locator)
{
Element=Pagename.FindElement(Locator)
Delay(2000)
Sys.HighlightObject(Element,5,255)
}

function WebElementClick(PageName,locator)
{
WebElement=PageName.FindElement(locator)
Sys.HighlightObject(WebElement,2,255)
WebElement.Click()
}

function InputValueToWebeditWebEdit(PageName,locator,value)
{
WebEditElement=PageName.FindElement(locator)
Sys.HighlightObject(WebEditElement,2,255)
WebEditElement.SetText (value)
}

function ClickMultipleLinks(PageName,xpath)
{
var links = PageName.FindElements(xpath);
var LinkCount= links.length

    if (LinkCount > 0)
    {
      for (var i = 0; i <= LinkCount-1; i++)
      //for (Link in links)
      {
        //val=aqObject.GetPropertyValue(links[i],"href")
        //Log.Message(links[i].href);
        Sys.HighlightObject(links[i],5,255)
        links[i].Click()
        PageName.Keys("~[Left]")
        Delay(3000)    
      }
    }
    else
    {
      Log.Error ("No Links is found on the page.");
    }
}

function GetHrefWhenLinkclicked(PageName,locator)
{
Link=PageName.FindElement(locator)
Sys.HighlightObject(Link,2,255)
Log.Message(Link.href)
Link.Click()
}

function GetLinkTextandURL(PageName,Locator){
  var links = PageName.FindElements(Locator)
  LinkCount = links.length
  if (LinkCount > 0)
  for (var i = 0; i<LinkCount; i++){
  //Sys.HighlightObject(links[i],5,255)
  var URL = links[i].href
  var Title=links[i].contentText
  Log.Checkpoint("Link text: " +Title+" URL: " +URL)
  }
}

function DropdownSelect(PageName,Locator,ClickItem){
DropdownSelec =PageName.FindElement(Locator)
Sys.HighlightObject(DropdownSelec,2,255)
DropdownSelec.ClickItem(ClickItem)
}

function checkpointforPage(PageName,StringValue,TagName)
{
 str=StringValue
 WebElement = PageName.NativeWebObject.Find("contentText",str,TagName)
 
 if (WebElement.Exists)  {
 Sys.HighlightObject(WebElement,2,255)
 var val=aqObject.GetPropertyValue(WebElement,"contentText")
 Log.Checkpoint(val+" Page object Existed")
  }
 else{
  Log.Error(val+" Page object isn't Existed")
}
}

function closebrowser(BrowserName)
{
   Sys.Browser(BrowserName).Close()
}
 
/*function EventControl_OnLogMessage(Sender, LogParams)
{
  LogParams.Color= clGreen;
  LogParams.FontColor=clWhite;
}*/

function EventControl_OnLogCheckpoint(Sender, LogParams)
{
   LogParams.Color= clBtnHighlight; 
}

function LoginToSureConnect(BrowserName,URL,strEmail){
  closeBrowser(BrowserName)
  var browser;
  var Page;
  browser= Browsers.Item(BrowserName)
  Log.Message("Browser " + browser.Description);
  
  browser.RunOptions = "--disable-web-security --user-data-dir=c:\\users\\user\\tempChromeProfile\\ --disable-site-isolation-trials"  
  browser.Run(URL);
  Page=Sys.Browser(BrowserName).Page("*")
  //Page=Aliases.browser.Page("*");
  wait(5000)
  // Okta verification
  Libary.WebElementClick(Page,"//input[@id='MasterContent_BtnAzureLogin']")
  wait(6000)
  SignIn=Page.NativeWebObject.Find("type","email","input")
  if (SignIn.Exists){
  // var loginEmail=Page.FindElement("//div[1]/div[2]/div[2]/div/input[@type='email']")
 // var strEmail = BuiltIn.InputBox("InputBox Email Address", "Enter the your Email Address:", "");
  Sys.HighlightObject(SignIn,2,255) 
  SignIn.SetText(strEmail)
  Page.FindElement("//input[@type='submit']").Click()
  wait(12000)
  var SendPush=Page.NativeWebObject.Find("value","Send Push","input")
  if (SendPush.Exists){
    SendPush.Click()
    wait(35000)
  } 
  else{
    wait(35000)
  }
  }
/* wait(2000)
 var SendPush=Page.NativeWebObject.Find("value","Send Push","input")
 if (SendPush.Exists){
    SendPush.Click()
    wait(35000)
  } 
  else{
    wait(35000)
  }*/
  
 var emailPicup=Page.NativeWebObject.Find("contentText","Pick an account","div")
 if (emailPicup.Exists){
 var email=Page.FindElement("//div[3]/div/div/div/div[2]/div/div/div/div/div/div/div[2]")
    Sys.HighlightObject(email,2,255) 
    email.Click()
    wait(10000)
    var SendPush=Page.NativeWebObject.Find("value","Send Push","input")
      if (SendPush.Exists){
       SendPush.Click()
       wait(35000)
       }
      else{
      wait(35000) 
 }
     }
 /*wait(2000)
 var SendPush=Page.NativeWebObject.Find("value","Send Push","input")
 if (SendPush.Exists){
    SendPush.Click()
    wait(35000)
     }
 else{
  wait(35000) 
 }*/
}

function SureConnectWelcomePage(pageName){
  var WebElement=pageName.NativeWebObject.Find("id","UCMainNav_ImgLogo","img")
  if (WebElement.Exists)  {
  Sys.HighlightObject(WebElement,2,255)
  var welcome=pageName.FindElement("//div[@id='UCMainNav_PnlUserName']")
  welMess=aqObject.GetPropertyValue(welcome,"contentText")
  Log.Checkpoint(welMess)
  }
  else {
  Log.Error(" Sure Connect Page isn't loaded ")
  }  
}

function HandleiFrameObject(PageName,ClaimNumber){
  wait(5000)
  let frame=PageName.FindElement("//iframe[@id='WFiFrame']")
  Sys.HighlightObject(frame,2,255)
  frame.FindElement("//input[@id='edit_ClaimNumber']").Keys(ClaimNumber)
  frame.FindElement("#radioOutputFormat0").Click()
  frame.FindElement("#valSubmit").Click()
  wait(5000)
  
}

function HandleiFrameObjectClaimInquiry(PageName,ClaimNumber){
  wait(5000)
  let frame=PageName.FindElement("//iframe[@id='WFiFrame']")
  Sys.HighlightObject(frame,2,255)
  frame.FindElement("//div[@id='comboAcctHolder_chosen']//span").Click();
  frame.FindElement("//div[@id='comboAcctHolder_chosen']/div/div/input").SetText("GL STAFFING SERVICES") 
  var AccountHolder=frame.FindElement("//li[contains(., 'GL STAFFING SERVICES, INC. - 20035141')]") 
  AccountHolder.Click();
  frame.FindElement("//input[@id='edit_ClaimNumber']").Click()
  frame.FindElement("//input[@id='edit_ClaimNumber']").Keys(ClaimNumber)
  frame.FindElement("#valSubmit").Click()
  wait(5000)
}

function SelectClaimsLinkFromMenu(Pagename,LinkSelection){
  wait(2000)
  Pagename.FindElement("//button[@id='btnMenuButton']").Click();
  //==== Click Claim brief Link=====
  var claimsLink=Pagename.FindElements("//div[1]/div[1]/li[1]/div[1]/div[1]/div[1]/div[2]/div[2]/a")
  var claimslinkCount=claimsLink.length
  if (claimslinkCount>0){
    for (let i=0;i<claimslinkCount;i++ ){
      LinkName=aqObject.GetPropertyValue(claimsLink[i],"contentText")
      if (LinkName==LinkSelection){
       Sys.HighlightObject(claimsLink[i],2,255)
       claimsLink[i].Click()
       break;
       }
    }   
  }
  else { 
  Log.Error("No links found in claims section")
  }
}

function closeBrowser(BrowserName)
{
  if (Sys.WaitBrowser(BrowserName).Exists)
  {
    Log.Message("Browser '" + BrowserName + "' is open. Closing the browser");
    Sys.Browser(BrowserName).Close();
  }
}

function chromeVersion(BrowserName)
{
  var browser;
  browser= Browsers.Item(BrowserName)
  Log.Message("Browser " + browser.Description);
}

function ListBrowsers()
{
  var browser;
  
  for (var i=0; i < Browsers.Count; i++)
  {
    browser = Browsers.Item(i);
    //if (browser=="Google Chrome*"){
    Log.Message("Browser " + aqConvert.IntToStr(i) + " : " + browser.Description);
    //}
  }
}

function SureConnect_OnLogError(Sender, LogParams)
{
  LogParams.Color= clRed;
  LogParams.FonrColor=clWhite;
  closebrowser()
}

function SureConnect_OnLogWarning(Sender, LogParams)
{
  LogParams.Color= clYellow;
  LogParams.FontColor=clBlack;
}

 /*var Webtable=Page.FindElement("//table[@id='ITableData0']")
 var rows=Webtable.RowCount
 var Col=Webtable.ColumnCount(rows)
 Log.Message("Column:"+Col+" Rows:"+rows)*/