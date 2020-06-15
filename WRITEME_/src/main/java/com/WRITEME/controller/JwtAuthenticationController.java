package com.WRITEME.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.WRITEME.config.JwtTokenUtil;
import com.WRITEME.model.JwtRequest;
import com.WRITEME.model.JwtResponse;
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
      
      //return token
      return ResponseEntity.ok(new JwtResponse(token));
   }
   
   
   @RequestMapping(value = "/api/register/local", method = RequestMethod.POST)
   public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
      return ResponseEntity.ok(userDetailsService.save(user));
   }
   
   /*
    * @RequestMapping(value = "/api/auth/me", method = RequestMethod.GET) public
    * UserDTO getUsername(HttpServletRequest request) { String token =
    * request.getHeader(tokenHeader).substring(10); String username =
    * jwtTokenUtil.getUsernameFromToken(token); UserDTO user = (UserDTO)
    * userDetailsService.loadUserByUsername(username); return user; }
    */

   @RequestMapping(value = "/api/auth/me", method = RequestMethod.GET)
   public ResponseEntity<?> getUsernameFromToken(@RequestHeader(value = "Authorization") String access_token)throws Exception{


       if (access_token.startsWith("Bearer")) {
           access_token = access_token.substring(7);
       }

       // Claims claims = jwtTokenUtil.getAllClaimsFromToken(access_token);

           return ResponseEntity.ok(jwtTokenUtil.getUsernameFromToken(access_token));

       }
   


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