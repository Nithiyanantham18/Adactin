package com.CucumberAdactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.util.Properties;

public class ConfigurationReader {            
    public static Properties p;
	
	public ConfigurationReader() throws IOException {
		
	File f=new File(".\\src\\test\\java\\com\\CucumberAdactin\\properties\\Configuration.Properties");
	FileInputStream fis=new FileInputStream(f);
	 p= new Properties();
	p.load(fis);
}
	
	
	public static String getBrowsername() {
		String browser = p.getProperty("browser");
		return browser;
	}
	
	public static String getUrl() {
		String url = p.getProperty("url");
          return url;
	}
	
	
}