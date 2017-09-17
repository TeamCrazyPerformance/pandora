package com.tcp.pandora.controller.restcontroller;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.javassist.NotFoundException;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tcp.pandora.entity.User;
import com.tcp.pandora.service.CoupleService;
import com.tcp.pandora.service.UserService;


/**
 * @author Ahn
 */

@RestController
@RequestMapping(value = "/api/users/v1.0/")
public class RestUserController {
	private static final Logger logger = LoggerFactory.getLogger(RestUserController.class);
	
	@Autowired
	private UserService userService = null;
	@Autowired
	private CoupleService coupleService = null;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<String> getUsers() {
		ResponseEntity<String> resp = null;
		List<User> users = null;
		try {
			users = this.userService.findAll();
			
			ObjectMapper mapper = new ObjectMapper();
			String json = mapper.writeValueAsString(users);
			
			resp = new ResponseEntity<>(json, HttpStatus.OK);
		} catch (Exception e) {
			/* Exception 종류에 따라 다른 상태코드를 리턴하도록 분기시킨다 */
			resp = new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return resp;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<String> postUsers(@ModelAttribute User user) {
		ResponseEntity<String> resp = null;
		try {
			this.userService.joinUs(user);
			resp = new ResponseEntity<String>(HttpStatus.CREATED);
		} catch (Exception e) {
			resp = new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return resp;
	}
	
	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	public ResponseEntity<String> getUserOne(@PathVariable("userId") String userId) {
		if (userId != null && "".equals(userId.trim()) == true) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		String json = "";
		try {
			ObjectMapper mapper = new ObjectMapper();
			User u = this.userService.findOne(userId);
			json = mapper.writeValueAsString(u);
		} catch (Exception e) {
			return new ResponseEntity<String>(json, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<String>(json, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{userId}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteUserOne(@PathVariable("userId") String userId) {
		if (userId != null && "".equals(userId.trim()) == true) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		boolean isDeleted = this.userService.deleteOne(userId);
		if (isDeleted == true) {
			return new ResponseEntity<String>(HttpStatus.OK);
		} else {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{userId}", method = RequestMethod.PUT)
	public ResponseEntity<String> putUserOne(
			@PathVariable("userId") String userId,
			@ModelAttribute User user) {
		
		if (userId != null && "".equals(userId.trim()) == true) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		if (user == null) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		boolean isUpdated = false;
		try {
			isUpdated = this.userService.updateOne(userId, user);	
		} catch (NotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
		if (isUpdated == true) {
			return new ResponseEntity<String>(HttpStatus.OK);
		} else {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
	}
	
	/**
	 * @param sender - 신청자의 이메일 주소
	 * @param receiver - 신청자의 핸드폰 번호
	 * @return
	 */
	@RequestMapping(value = "/{senderId}/couples/{receiverId}", method = RequestMethod.POST)
	public ResponseEntity<String> willBeasMyFriends(
			@PathVariable("senderId") String sender, 
			@PathVariable("receiverId") String receiver) {
		
		boolean isAsked = false;
		try {
			isAsked = this.userService.askBeMyFriend(sender, receiver, 0);	
		} catch (NotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
		if (isAsked == true) {
			return new ResponseEntity<String>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "/{userId}/couples", method = RequestMethod.GET)
	public ResponseEntity<String> getMyFriends(@PathVariable("userId") String userId) {
		/* 지금 버전에선 연인만 가져오도록 설정한다 */
		HashMap<String, String> map = new HashMap<>();
		map.put("email", userId);
		map.put("type", "1");
		
		return null;
	}
	
	@RequestMapping(value = "/{userId}/pictures", method = RequestMethod.POST)
	public String postPictures(@PathVariable("userId") String userId) {
		return "";
	}
	
	@RequestMapping(value = "/{userId}/pictures/profile", method = RequestMethod.POST)
	public String postProfilePicture(@PathVariable("userId") String userId) {
		return "";
	}
	
	@RequestMapping(value = "/{userId}/pictures/background", method = RequestMethod.POST)
	public String postBackgroundPicture(@PathVariable("userId") String userId) {
		return "";	
	}
	
	@RequestMapping(value = "/{userId}/pictures/profile", method = RequestMethod.DELETE)
	public String deleteProfilePicture(@PathVariable("userId") String userId) {
		return "";
	}
	
	@RequestMapping(value = "/{userId}/pictures/background", method = RequestMethod.DELETE)
	public String deleteBackgroundPicture(@PathVariable("userId") String userId) {
		return "";
	}
}
