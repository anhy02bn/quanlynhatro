package vnua.room.service;

import vnua.room.config.SecurityUtils;
import vnua.room.dto.CustomUserDetails;
import vnua.room.entity.User;
import vnua.room.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.get() == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomUserDetails(user.get());
    }

    public User getUserWithAuthority() {
        Long id = Long.valueOf(SecurityUtils.getCurrentUserLogin().get());
        return userRepository.findById(id).get();
    }

    public User save(User user) {
        user.setRole("ROLE_USER");
        User result = userRepository.save(user);
        return result;
    }



}

