package stepsDefinition;

import java.io.FileInputStream;
import java.util.Objects;
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

public class CreateNewLazadaAccount {

	WebDriver driver = Hook.driver;
	private static Properties prop = new Properties();
	SoftAssert sa = new SoftAssert();
	private static String realTextAccountManager = new String("Quản lý tài khoản");

	@Given("^User accesses Lazada account creation page$")
	public void user_accesses_Lazada_account_creation_page() throws Throwable {
		prop.load(new FileInputStream("src/configuration/config.properties"));
		String LazadaNewAccountCreationUrl = prop.getProperty("LazadaNewAccountCreationUrl");
		driver.get(LazadaNewAccountCreationUrl);
	}

	@When("^User selects gender (.*)$")
	public void user_selects_gender(String gender) throws Throwable {		
		if (Objects.equals(gender, new String("Female"))) {
			CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getGenderFemaleCheckBoxID()));
			CommonFunctions.click(driver, By.id(NewAccountCreationPageObjects.getGenderFemaleCheckBoxID()));
		}
		if (Objects.equals(gender, new String("Male"))) {			
			CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getGenderMaleCheckBoxID()));
			CommonFunctions.click(driver, By.id(NewAccountCreationPageObjects.getGenderMaleCheckBoxID()));
		}
	}

	@When("^Input email address (.*)$")
	public void input_email_address(String email) throws Throwable {
		CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getRegistrationEmailID()));
		driver.findElement(By.id(NewAccountCreationPageObjects.getRegistrationEmailID())).sendKeys(email);
	}

	@When("^Input name (.*)$")
	public void input_name(String name) throws Throwable {
		CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getRegistrationFirstNameID()));
		driver.findElement(By.id(NewAccountCreationPageObjects.getRegistrationFirstNameID())).sendKeys(name);
	}

	@When("^Input date of birth (.*)-(.*)-(.*)$")
	public void input_date_of_birth(String date, String month, String year) throws Throwable {
		CommonFunctions.selectRegistrationDOB(driver, date, month, year);
	}

	@When("^Input password and confirmed password (.*)$")
	public void input_password_and_confirmed_password(String pwd) throws Throwable {
		CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getRegistrationPasswordID()));
		driver.findElement(By.id(NewAccountCreationPageObjects.getRegistrationPasswordID())).sendKeys(pwd);
		
		CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getRegistrationRetypePasswordID()));
		driver.findElement(By.id(NewAccountCreationPageObjects.getRegistrationRetypePasswordID())).sendKeys(pwd);
	}

	@When("^Click (.*) button$")
	public void click_button(String button) throws Throwable {
		CommonFunctions.waitForElement(driver, By.id(NewAccountCreationPageObjects.getGuiButtonID()));
		driver.findElement(By.id(NewAccountCreationPageObjects.getGuiButtonID())).click();
	}

	@Then("^System redirects to (.*) screen$")
	public void system_redirects_to_screen(String screen) throws Throwable {
		String actualTextAccountManager = driver.findElement(By.xpath(NewAccountCreationPageObjects.getAccountManagerPageTitleXpath())).getText();
		if (Objects.equals(screen, new String(realTextAccountManager))){			
			sa.assertEquals(actualTextAccountManager, realTextAccountManager);
		}
	}
	
	@Then("^New account with name (.*) is created successfully$")
	public void new_account_with_name_is_created_successfully(String name) throws Throwable {
		String actualUserNameOnTopOfPage = driver.findElement(By.xpath(NewAccountCreationPageObjects.getUserNameOnTopOfPageXpath())).getText();
		sa.assertEquals(actualUserNameOnTopOfPage, name);
	}
	
	@Then("^(.*) is displayed as registered email$")
	public void is_displayed_as_registered_email(String email) throws Throwable {
		String actualEmailInUserInformation = driver.findElement(By.xpath(NewAccountCreationPageObjects.getEmailInPersonalInformationXpath())).getText();
		sa.assertEquals(actualEmailInUserInformation, email);
	}	
}
