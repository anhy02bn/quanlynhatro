package vnua.room.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vnua.room.dto.CategoryDto;
import vnua.room.entity.Category;
import vnua.room.entity.Report;
import vnua.room.entity.StatusRoom;
import vnua.room.repository.ReportRepository;
import vnua.room.service.UserService;

import java.math.BigInteger;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ReportRest {

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/all/createReport")
    public void save(@RequestBody Report report){
        report.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        report.setUser(userService.getUserWithAuthority());
        reportRepository.save(report);

    }

    @GetMapping("/admin/report-by-room")
    public List<Report> findByRoom(@RequestParam("id") Long roomId){
        return reportRepository.findByRoom(roomId);
    }

}
