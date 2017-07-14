package pageObjects;

public class LazadaHomePageObjects {
	private static String searchTextBoxXpath = "//input[contains(@class,'c-header-search__input-group-textbox_search')]";
	private static String searchProdcutsButtonXpath = "//button[contains(@class,'c-header-search__input-group-button_type_search')]";
	private static String searchResultProductListXpath = "//div[contains(@class,'c-product-list  c-product-list_view_grid c-product-list_justify_space-between c-catalog-controller__product-list c-product-list_js_inited')]";
	private static String productCardXpath = "//div[contains(@class,'c-product-card c-product-list__item')]";
	private static String productNameInCardXpath = "//div[contains(@class,'c-product-card c-product-list__item')]//a[@class='c-product-card__name']";
	private static String searchButtonXpath = "//button[contains(@class,'c-header-search__input-group-button c-header-search__input-group-button_type_search')]";
	
	public static String getSearchButtonXpath() {
		return searchButtonXpath;
	}
	public static void setSearchButtonXpath(String searchButtonXpath) {
		LazadaHomePageObjects.searchButtonXpath = searchButtonXpath;
	}
	public static String getSearchResultProductListXpath() {
		return searchResultProductListXpath;
	}
	public static void setSearchResultProductListXpath(String searchResultProductListXpath) {
		LazadaHomePageObjects.searchResultProductListXpath = searchResultProductListXpath;
	}
	public static String getProductCardXpath() {
		return productCardXpath;
	}
	public static void setProductCardXpath(String productCardXpath) {
		LazadaHomePageObjects.productCardXpath = productCardXpath;
	}
	public static String getProductNameInCardXpath() {
		return productNameInCardXpath;
	}
	public static void setProductNameInCardXpath(String productNameInCardXpath) {
		LazadaHomePageObjects.productNameInCardXpath = productNameInCardXpath;
	}
	public static String getSearchTextBoxXpath() {
		return searchTextBoxXpath;
	}
	public static void setSearchTextBoxXpath(String searchTextBoxXpath) {
		LazadaHomePageObjects.searchTextBoxXpath = searchTextBoxXpath;
	}
	public static String getSearchProdcutsButtonXpath() {
		return searchProdcutsButtonXpath;
	}
	public static void setSearchProdcutsButtonXpath(String searchProdcutsButtonXpath) {
		LazadaHomePageObjects.searchProdcutsButtonXpath = searchProdcutsButtonXpath;
	}
	
}
