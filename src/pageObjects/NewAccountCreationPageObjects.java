package pageObjects;

public class NewAccountCreationPageObjects {
	private static String genderMaleCheckBoxID = "RegistrationForm_gender_0";
	private static String genderFemaleCheckBoxID = "RegistrationForm_gender_1";
	private static String registrationEmailID = "RegistrationForm_email";
	private static String registrationFirstNameID = "RegistrationForm_first_name";
	private static String registrationPasswordID = "RegistrationForm_password";
	private static String registrationRetypePasswordID = "RegistrationForm_password2";
	private static String GuiButtonID = "send";
	private static String dateOfBirthID = "RegistrationForm_day";
	private static String monthOfBirthID = "RegistrationForm_month";
	private static String yearOfBirthID = "RegistrationForm_year";
	private static String accountManagerPageTitleXpath = "//h2[@class='account-structure-page__title']";
	private static String emailInPersonalInformationXpath = "//div[contains(@class,'account-dashboard__box_first')]//p[1]";
	private static String userNameOnTopOfPageXpath = "//span[@class='dropdown__toggle-text_style_ellipsis']";
	
	public static String getRegistrationEmailID() {
		return registrationEmailID;
	}
	public static String getAccountManagerPageTitleXpath() {
		return accountManagerPageTitleXpath;
	}
	public static void setAccountManagerPageTitleXpath(String accountManagerPageTitleXpath) {
		NewAccountCreationPageObjects.accountManagerPageTitleXpath = accountManagerPageTitleXpath;
	}
	public static String getEmailInPersonalInformationXpath() {
		return emailInPersonalInformationXpath;
	}
	public static void setEmailInPersonalInformationXpath(String emailInPersonalInformationXpath) {
		NewAccountCreationPageObjects.emailInPersonalInformationXpath = emailInPersonalInformationXpath;
	}
	public static String getUserNameOnTopOfPageXpath() {
		return userNameOnTopOfPageXpath;
	}
	public static void setUserNameOnTopOfPageXpath(String userNameOnTopOfPageXpath) {
		NewAccountCreationPageObjects.userNameOnTopOfPageXpath = userNameOnTopOfPageXpath;
	}
	public static String getDateOfBirth() {
		return dateOfBirthID;
	}
	public static void setDateOfBirth(String dateOfBirth) {
		NewAccountCreationPageObjects.dateOfBirthID = dateOfBirth;
	}
	public static String getMonthOfBirth() {
		return monthOfBirthID;
	}
	public static void setMonthOfBirth(String monthOfBirth) {
		NewAccountCreationPageObjects.monthOfBirthID = monthOfBirth;
	}
	public static String getYearOfBirth() {
		return yearOfBirthID;
	}
	public static void setYearOfBirth(String yearOfBirth) {
		NewAccountCreationPageObjects.yearOfBirthID = yearOfBirth;
	}
	public static void setRegistrationEmailID(String registrationEmailID) {
		NewAccountCreationPageObjects.registrationEmailID = registrationEmailID;
	}
	public static String getRegistrationFirstNameID() {
		return registrationFirstNameID;
	}
	public static void setRegistrationFirstNameID(String registrationFirstNameID) {
		NewAccountCreationPageObjects.registrationFirstNameID = registrationFirstNameID;
	}
	public static String getRegistrationPasswordID() {
		return registrationPasswordID;
	}
	public static void setRegistrationPasswordID(String registrationPasswordID) {
		NewAccountCreationPageObjects.registrationPasswordID = registrationPasswordID;
	}
	public static String getRegistrationRetypePasswordID() {
		return registrationRetypePasswordID;
	}
	public static void setRegistrationRetypePasswordID(String registrationRetypePasswordID) {
		NewAccountCreationPageObjects.registrationRetypePasswordID = registrationRetypePasswordID;
	}
	public static String getGuiButtonID() {
		return GuiButtonID;
	}
	public static void setGuiButtonID(String guiButtonID) {
		GuiButtonID = guiButtonID;
	}
	public static String getGenderMaleCheckBoxID() {
		return genderMaleCheckBoxID;
	}
	public void setGenderMaleCheckBoxID(String genderMaleCheckBoxID) {
		NewAccountCreationPageObjects.genderMaleCheckBoxID = genderMaleCheckBoxID;
	}
	public static String getGenderFemaleCheckBoxID() {
		return genderFemaleCheckBoxID;
	}
	public void setGenderFemaleCheckBoxID(String genderFemaleCheckBoxID) {
		NewAccountCreationPageObjects.genderFemaleCheckBoxID = genderFemaleCheckBoxID;
	}	
}
