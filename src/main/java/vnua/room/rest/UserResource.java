package vnua.room.rest;

import vnua.room.dto.CustomUserDetails;
import vnua.room.entity.User;
import vnua.room.jwt.JwtTokenProvider;
import vnua.room.repository.UserRepository;
import vnua.room.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;



    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody User user) throws URISyntaxException {
        Optional<User> users = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        System.out.println(users);
        if (users.isPresent() == false) {
            return ResponseEntity.status(401)
                    .body(null);
        }
        CustomUserDetails customUserDetails = new CustomUserDetails(users.get());
        String token = jwtTokenProvider.generateToken(customUserDetails);
        return ResponseEntity
                .created(new URI("/api/authen/"))
                .body(token);
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> save(@RequestBody User user) throws URISyntaxException {
        if (userRepository.findByUsername(user.getUsername()).isPresent() == true) {
            HttpHeaders headers = new HttpHeaders();
            return ResponseEntity.status(500).headers(headers)
                    .body(2);
        }
        User result = userService.save(user);
        return ResponseEntity
                .created(new URI("/api/save/" + result.getId()))
                .body(0);
    }

    @PostMapping("/userlogged")
    public User getUserLogged() {
        return userService.getUserWithAuthority();
    }


    @GetMapping("/public/findUserNotDtoById")
    public User findUserById(@RequestParam("id") Long id) {
        return userRepository.findById(id).get();
    }


    @GetMapping("/admin/getUserByRole")
    public List<User> getUserNotAdmin(@RequestParam(value = "role", required = false) String role) {
        if (role == null) {
            return userRepository.findAll();
        }
        return userRepository.getUserByRole(role);
    }

    @DeleteMapping("/admin/deleteUser")
    public void deleteUser(@RequestParam("id") Long id) {
        userRepository.deleteById(id);
    }

    @GetMapping("/admin/checkroleAdmin")
    public void checkroleAdmin() {
        System.out.println("admin role");
    }

    @GetMapping("/user/checkroleUser")
    public void checkroleUser() {
        System.out.println("user role");
    }

    @GetMapping("/all/checkAllRole")
    public void checkAllRole() {
        System.out.println("user role");
    }
}
