package configuration;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	public static WebDriver driver;
	static Properties prop = new Properties();

	private static String scenarioStatus;
	public static String log4jConfigFile = System.getProperty("user.dir") + File.separator + "log4j.properties";

	public static void initial() throws Exception {
		prop.load(new FileInputStream("src/configuration/config.properties"));
		String ChromeWebDriverLocation = prop.getProperty("ChromeWebDriverLocation");
		System.setProperty("webdriver.chrome.driver", ChromeWebDriverLocation);
		DesiredCapabilities dc = new DesiredCapabilities();

		if (driver == null) {
			driver = new ChromeDriver(dc);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		} else {
			driver.manage().deleteAllCookies();
		}
	}

	public static void takeScreenshot(String fileName) throws Exception {
		try {
			String currentTime = new SimpleDateFormat("-yyyy_MM_dd_HH_mm").format(Calendar.getInstance().getTime());
			File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(scrFile, new File("test-output/images/" + fileName + currentTime + ".png"));
		} catch (Exception e) {
			throw e;
		}
	}
	public static void finish(){		
		driver.quit();
	}
	
	@Before
	public void openBrowser() throws Exception {	
		Hook.initial();
	}
	
	@After
	public void AfterScenario(Scenario scenario) throws Exception {
		scenarioStatus = scenario.getStatus();
		Logger log = Logger.getLogger(Hook.class);
		PropertyConfigurator.configure(log4jConfigFile);
		if (scenarioStatus.equalsIgnoreCase("FAILED")) {
			takeScreenshot(scenario.getName());		
			
			scenarioStatus = "FAILED";			
			log.error("Scenario \"" + scenario.getName() + "\" is " + scenarioStatus);

		} else if (scenarioStatus.equalsIgnoreCase("PASSED")) {
			scenarioStatus = "PASSED";
			log.info("Scenario \"" + scenario.getName() + "\" is " + scenarioStatus);

		} else {
			scenarioStatus = "ERROR";
			log.error("Step failed due to error, please see logs for more details");			
		}
	}	
}
