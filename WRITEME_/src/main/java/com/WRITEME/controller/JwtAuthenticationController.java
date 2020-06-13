package com.WRITEME.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.WRITEME.config.JwtTokenUtil;
import com.WRITEME.model.JwtRequest;
import com.WRITEME.model.JwtResponse;
import com.WRITEME.model.PostDTO;
import com.WRITEME.model.UserDTO;
import com.WRITEME.service.JwtUserDetailsService;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;


	
	@RequestMapping(value = "/api/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	
	@RequestMapping(value = "/api/register/local", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	/*
	 * 
	 * 
	 * @CrossOrigin
    @RequestMapping(value = "/api/post")
    public List<PostDTO> getPostbyKeywordID(@RequestParam(value = "keywordID", defaultValue = "") int keywordID) 
    		throws Exception {
        /* TODO: 조회수 증가 */
     /*   final PostDTO param = new PostDTO(0, null, null, null, keywordID, 0, null);
        //`postID`, `postTitle`, `postDetail`, `userID`, `keywordID`, `categoryID`, `date`
        final List<PostDTO> postList = postDAO.getPostbyKeywordID(param);
        return postList;
    }*/
	
	
	//username 가져오기
	/*@PostMapping(path="/newuser/check")
	public Map<String, Object> checker(@RequestBody Map<String, String> m) {
		final Logger logger = LoggerFactory.getLogger(ApplicationRunner.class);
		String username = null;
		Map<String, Object> map = new HashMap<>();
		try {
		username = jwtTokenUtil.getUsernameFromToken(m.get("accessToken"));
		} catch (IllegalArgumentException e) {
		logger.warn("Unable to get JWT Token");
		} catch (ExpiredJwtException e) {}
		if (username != null) {
		map.put("success", true);
		map.put("username", username);
		} else {
		map.put("success", false);
		}
		return map;
		}*/
	
	/*@ResponseBody
	@RequestMapping("/api/auth/me")
	public Map<String, Object> getUsername (@RequestParam(value = "tok") String tok) {
		String username = jwtTokenUtil.getUsernameFromToken(tok);
		
		Map<String, Object> map = new LinkedHashMap<>();
		map.put("username", username);
		
		return map;
	}*/
	

	/*
	 * 	//retrieve username from jwt token
	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
		public String getToken() {
		return this.jwttoken;
	}
	 * */

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}