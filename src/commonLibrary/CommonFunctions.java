package commonLibrary;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import pageObjects.NewAccountCreationPageObjects;

public class CommonFunctions {
	public static WebElement element;
	public static WebDriverWait wait;

	public static WebElement waitForElement(WebDriver driver, By by) {
		wait = new WebDriverWait(driver, 30);
		element = wait.until(ExpectedConditions.elementToBeClickable(by));
		return element;
	}

	public static void click(WebDriver driver, By by) throws Exception {
		element = driver.findElement(by);
		element.click();
	}

	public static void selectDateOfBirth(WebDriver driver, String date) throws Exception {
		CommonFunctions.click(driver, By.id(NewAccountCreationPageObjects.getDateOfBirth()));
		Select dateDropdown = new Select(driver.findElement(By.id(NewAccountCreationPageObjects.getDateOfBirth())));
		dateDropdown.selectByValue(date);
	}

	public static void selectMonthOfBirth(WebDriver driver, String month) throws Exception {
		CommonFunctions.click(driver, By.id(NewAccountCreationPageObjects.getMonthOfBirth()));
		Select dateDropdown = new Select(driver.findElement(By.id(NewAccountCreationPageObjects.getMonthOfBirth())));
		dateDropdown.selectByValue(month);
	}

	public static void selectYearOfBirth(WebDriver driver, String year) throws Exception {
		CommonFunctions.click(driver, By.id(NewAccountCreationPageObjects.getYearOfBirth()));
		Select dateDropdown = new Select(driver.findElement(By.id(NewAccountCreationPageObjects.getYearOfBirth())));
		dateDropdown.selectByValue(year);
	}

	public static void selectRegistrationDOB(WebDriver driver, String selectedDate, String selectedMonth,
			String selectedYear) throws Exception {
		selectDateOfBirth(driver, selectedDate);
		selectMonthOfBirth(driver, selectedMonth);
		selectYearOfBirth(driver, selectedYear);
	}

	public static void generateSimpleReport() throws Exception {
		String testCaseID;
		String featureName;
		String testCaseName;
		String currentTime = new SimpleDateFormat("dd-MM-yyyy_HH-mm-ss").format(Calendar.getInstance().getTime());

		File simpleReport = new File(
				System.getProperty("user.dir") + "\\test-output\\simple-report\\SimpleReport" + currentTime + ".txt");
		simpleReport.createNewFile();
		OutputStream reportStream = new FileOutputStream(simpleReport);
		String reportOutput = "";

		JSONParser parser = new JSONParser();

		try {
			// get first object in json array
			Object object = parser.parse(new FileReader("test-output/json/json-report.json"));
			JSONArray jsonObject = (JSONArray) object;
			Object testResult = jsonObject.get(0);

			// get element objects from first object which contain test result
			JSONObject testResultObj = (JSONObject) testResult;
			JSONArray testResultArr = (JSONArray) testResultObj.get("elements");

			// use loop to get name of Test scenarios, test steps
			for (int i = 0; i < testResultArr.size(); i++) {
				Object scnNo = testResultArr.get(i);
				JSONObject scnNoObj = (JSONObject) scnNo;
				String scnName = (String) scnNoObj.get("name");

				JSONArray stepArr = (JSONArray) scnNoObj.get("steps");

				for (int j = 0; j < stepArr.size(); j++) {
					// get name of step
					Object stepNo = stepArr.get(j);
					JSONObject stepNoObj = (JSONObject) stepNo;
					String stepName = (String) stepNoObj.get("name");

					// get status of step
					Object stepResultObj = (Object) stepNoObj.get("result");
					JSONObject stepResultObjJson = (JSONObject) stepResultObj;
					String stepStatus = (String) stepResultObjJson.get("status");

					// get error message
					String stepErrorMsg = (String) stepResultObjJson.get("error_message");

					featureName = scnName.substring(0, scnName.indexOf("-"));
					testCaseID = scnName.substring(scnName.indexOf("-") + 1,
							scnName.indexOf("-", scnName.indexOf("-") + 1));
					testCaseName = scnName.substring(scnName.indexOf("-", scnName.indexOf("-") + 1) + 1,
							scnName.length());
					reportOutput = featureName + " | " + testCaseID + " | " + testCaseName + " | " + stepName + " | "
							+ stepStatus + " | " + stepErrorMsg;

					reportStream.write(reportOutput.getBytes(), 0, reportOutput.length());
				}
			}
		} catch (Exception e) {
			throw e;
		} finally {
			reportStream.close();
		}
	}
}
