package com.qa.dave;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class QubeBreakerApplication {

	public static void main(String[] args) {
		SpringApplication.run(QubeBreakerApplication.class, args);
	}

}

