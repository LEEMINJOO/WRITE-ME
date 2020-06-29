package com.WRITEME.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WRITEMEController {
	
		@RequestMapping({ "/main" })
		public String firstPage() {
			return "WriteMe";
		}


}
