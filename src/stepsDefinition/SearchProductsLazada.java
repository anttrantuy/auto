package stepsDefinition;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import configuration.Hook;
import commonLibrary.CommonFunctions;
import pageObjects.*;

public class SearchProductsLazada {
	
	WebDriver driver = Hook.driver;
	SoftAssert sa = new SoftAssert();
		
	private static String currentURL ="";
	private static Properties prop = new Properties();
			
	@Given("^User accesses Lazada home page$")
	public void user_accesses_Lazada_page() throws Throwable {	    
		prop.load(new FileInputStream("src/configuration/config.properties"));
		String LazadaHomePageUrl = prop.getProperty("LazadaHomePageUrl");
		driver.get(LazadaHomePageUrl); 
	}

	@When("^User inputs keyword (.*) to search text box$")
	public void user_inputs_keyword_to_search_text_box(String keyword) throws Throwable {
		driver.findElement(By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath())).clear();
		CommonFunctions.waitForElement(driver, By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath()));
		driver.findElement(By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath())).sendKeys(keyword);
	}

	@When("^click Search button$")
	public void click_search_button() throws Throwable {		
		CommonFunctions.waitForElement(driver, By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath()));
		driver.findElement(By.xpath(LazadaHomePageObjects.getSearchProdcutsButtonXpath())).click();
	}

	@Then("^Lazada redirects to products search page (.*)$")
	public void lazada_redirects_to_products_search_page(String expectedURL) throws Throwable {
	    Thread.sleep(2000);
	    currentURL = driver.getCurrentUrl();	    
	    sa.assertEquals(currentURL, expectedURL);
	}
	
	@Then("^Products which are related to (.*) will be returned$")
	public void products_which_are_related_to_will_be_returned(String keyword) throws Throwable {
	    CommonFunctions.waitForElement(driver, By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath()));
	    sa.assertEquals(true,driver.findElement(By.xpath(LazadaHomePageObjects.getSearchTextBoxXpath())).isDisplayed());
	    String productName = driver.findElement(By.xpath(LazadaHomePageObjects.getProductNameInCardXpath())).getText();
	    sa.assertEquals(true,productName.toLowerCase().contains(keyword.toLowerCase()));
	}	
}
