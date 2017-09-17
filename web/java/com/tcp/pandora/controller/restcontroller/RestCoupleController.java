package com.tcp.pandora.controller.restcontroller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/couples/v1.0/")
public class RestCoupleController {
	private static final Logger logger = LoggerFactory.getLogger(RestCoupleController.class);
}
