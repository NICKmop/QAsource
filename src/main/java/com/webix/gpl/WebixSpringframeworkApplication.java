package com.webix.gpl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//(scanBasePackages={"com.webix.gpl.dao.*"})
public class WebixSpringframeworkApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebixSpringframeworkApplication.class, args);
	}

}
