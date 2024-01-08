package vnua.room.controller;

import vnua.room.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ViewUser {

    @Autowired
    PasswordEncoder passwordEncoder;
    @RequestMapping(value = {"/chitietphong"}, method = RequestMethod.GET)
    public String chitietphong() {
        return "user/chitietphong.html";
    }

    @RequestMapping(value = {"/dangky"}, method = RequestMethod.GET)
    public String dangky() {
        return "user/dangky.html";
    }

    @RequestMapping(value = {"/danhsachphong"}, method = RequestMethod.GET)
    public String danhsachphong() {
        return "user/danhsachphong.html";
    }

    @RequestMapping(value = {"/index","/"}, method = RequestMethod.GET)
    public String index() {
        return "user/index.html";
    }

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public String login() {
        return "user/login.html";
    }


    @RequestMapping(value = {"/dangtin"}, method = RequestMethod.GET)
    public String dangtin() {
        return "user/dangtin.html";
    }

    @RequestMapping(value = {"/quanlytin"}, method = RequestMethod.GET)
    public String quanlytin() {
        return "user/quanlytin.html";
    }

}
