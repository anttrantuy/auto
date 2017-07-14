import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class testClass {

	public static void main(String[] args) throws Exception {
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
			// System.out.println(testResultArr.size());

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

					System.out.println(reportOutput);
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
