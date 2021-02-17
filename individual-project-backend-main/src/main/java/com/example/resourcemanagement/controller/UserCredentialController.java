package com.example.resourcemanagement.controller;

import com.example.resourcemanagement.entity.UserCredential;
import com.example.resourcemanagement.security.util.JwtUtil;
import com.example.resourcemanagement.service.UserCredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("")
public class UserCredentialController {

    @Autowired
    private UserCredentialService userCredentialService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> addUserCredential(@RequestBody UserCredential userCredential) {

        String encodedPassword = passwordEncoder.encode(userCredential.getPassword());
        userCredential.setPassword(encodedPassword);
        Optional<UserCredential> createdUserCredential = userCredentialService.addUserCredential(userCredential);

        if (createdUserCredential.isPresent()) {
            return new ResponseEntity<UserCredential>(createdUserCredential.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(userCredential.getUsername() + " already exists. Please choose a unique username.", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody(required=false)  UserCredential userCredential) throws Exception {
        if (userCredential == null) {return new ResponseEntity<>("Please sign in!", HttpStatus.OK);}

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userCredential.getUsername(), userCredential.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            return new ResponseEntity<>("Incorrect username or password!", HttpStatus.NOT_FOUND);
        }

        final UserDetails userDetails = userCredentialService
                .loadUserByUsername(userCredential.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        Map<String,String> map = new HashMap<>();
        map.put("idToken",jwt);
        map.put("expiresIn", jwtTokenUtil.extractExpiration(jwt).toString());
        System.out.println(jwtTokenUtil.extractExpiration(jwt));
        map.put("localId",Integer.toString(userCredentialService.getUserCredentialByName(userCredential.getUsername()).get().getId()));
        return new ResponseEntity<>(map,HttpStatus.OK);
    }

    @GetMapping("/userCredential/{id}")
    @ResponseBody
    public ResponseEntity<?> getUserCredential(@PathVariable int id) {
        Optional<UserCredential> existUserCredential =  userCredentialService.getUserCredential(id);
        if(existUserCredential.isPresent()) {
            return new ResponseEntity<>(existUserCredential.get(), HttpStatus.OK);
        } else{
            return new ResponseEntity<>("User Not Found!", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/userCredential/{id}")
    public ResponseEntity<?> setUserCredential(@PathVariable int id, @RequestBody UserCredential userCredential) {
        String encodedPassword = passwordEncoder.encode(userCredential.getPassword());
        userCredential.setPassword(encodedPassword);
        Optional<UserCredential> existUserCredential = userCredentialService.setUserCredential(id, userCredential);
        if (existUserCredential == null) {
            return new ResponseEntity<>("User Not Found!", HttpStatus.NOT_FOUND);
        } else if(existUserCredential.isPresent()) {
            return new ResponseEntity<>("Update User Credential Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Username Has been Used, Please Use Another Username!", HttpStatus.BAD_REQUEST);
        }
    }

}

