package commonLibrary;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Properties;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtils {
	private static XSSFSheet ExcelWSheet;
	private static XSSFWorkbook ExcelWBook;
	private static XSSFCell Cell;
	private static XSSFRow Row;

	static String currentTime = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
	static File excelReport = new File("test-output/excel-report/" + "Test Report_" + currentTime + ".xlsx");

	private static Properties prop = new Properties();

	// This method is to set the File path and open Excel file
	public static void openExcelFile(String Path, String SheetName) throws Exception {
		try {
			// Open the Excel file
			FileInputStream ExcelFile = new FileInputStream(Path);

			// Access the sheet which contains test data
			ExcelWBook = new XSSFWorkbook(ExcelFile);
			ExcelWSheet = ExcelWBook.getSheet(SheetName);
			System.out.print("File is opened: " + Path);
		} catch (Exception e) {
			throw e;
		}
	}

	// This method is to read test data from Excel cell, inject RowNum & ColNum
	public static String getCellData(int RowNum, int ColNum) throws Exception {
		try {
			Cell = ExcelWSheet.getRow(RowNum).getCell(ColNum);
			String CellData = Cell.getStringCellValue();
			return CellData;
		} catch (Exception e) {
			return "";
		}
	}

	// This method is to write data to Excel cell, inject RowNum & ColNum
	public static void setCellData(String dataToSet, int RowNum, int ColNum) throws Exception {
		try {
			Row = ExcelWSheet.getRow(RowNum);
			Cell = Row.getCell(ColNum, Row.RETURN_BLANK_AS_NULL);
			if (Cell == null) {
				Cell = Row.createCell(ColNum);
				Cell.setCellValue(dataToSet);
			} else {
				Cell.setCellValue(dataToSet);
			}

			// Save file after writing data

			prop.load(new FileInputStream("src/configuration/config.properties"));
			String testDataFileName = prop.getProperty("TEST-DATA-FILE");
			FileOutputStream fileOut = new FileOutputStream("src/dataRepository/" + testDataFileName);
			ExcelWBook.write(fileOut);
			fileOut.flush();
			fileOut.close();

		} catch (Exception e) {
			throw e;
		}
	}

	// incomplete function
	public static void GenerateExcelReport(String string, String featureName, String testCaseID, String testCaseName,
			String stepName, String stepStatus, String errMsg) throws Exception {

		openExcelFile(string, "Sheet1");
		for (int i = 0; i < 21; i++) {
			try {
				Row = ExcelWSheet.getRow(i);
				Cell = Row.createCell(0);
				Cell.setCellValue(featureName);

			} catch (Exception e) {
				throw e;
			}
			// Save file after writing data
			FileOutputStream fileOut = new FileOutputStream(string);
			ExcelWBook.write(fileOut);
			fileOut.flush();
			fileOut.close();
		}
	}
}
