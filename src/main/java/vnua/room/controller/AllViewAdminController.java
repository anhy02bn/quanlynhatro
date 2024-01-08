package vnua.room.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AllViewAdminController {




    @RequestMapping(value = {"/admin/category"}, method = RequestMethod.GET)
    public String category() {
        return "admin/category";
    }


    @RequestMapping(value = {"/admin/tindang"}, method = RequestMethod.GET)
    public String tindang() {
        return "admin/tindang";
    }

    @RequestMapping(value = {"/admin/user"}, method = RequestMethod.GET)
    public String user() {
        return "admin/user";
    }


}
