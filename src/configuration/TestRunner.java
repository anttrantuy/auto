package configuration;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import commonLibrary.CommonFunctions;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(jsonReport = "test-output/json/cucumber.json", retryCount = 0, detailedReport = true, detailedAggregatedReport = true, overviewReport = true, toPDF = true, outputFolder = "test-output")
@CucumberOptions(
		monochrome = true, 
		features = "Features",
		plugin = { 
					"pretty", 
					"html:test-output/cucumber-html-report",
					"json:test-output/json/json-report.json",
					"rerun:RE-RUN/failed-testcases.txt"
				}, 
		glue = { 
					"stepsDefinition", "configuration"
				}
)

public class TestRunner extends AbstractTestNGCucumberTests {
	static String currentTime = new SimpleDateFormat("dd-MM-yyyy_HH-mm-ss").format(Calendar.getInstance().getTime());
	@BeforeClass
	public static void setUp(){
		
	}
	@AfterClass
    public static void tearDown() throws Exception {				
		Thread.sleep(10000);		
		CommonFunctions.generateSimpleReport();        
		Hook.finish();
    }
}
