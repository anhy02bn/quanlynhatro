package vnua.room.rest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vnua.room.entity.Room;
import vnua.room.entity.StatusRoom;
import vnua.room.entity.User;
import vnua.room.repository.RoomRepository;
import vnua.room.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RoomRest {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserService userService;


    @PostMapping("/all/dang-phong")
    public Room save(@RequestBody Room room){
        room.setCreatedDate(new Date(System.currentTimeMillis()));
        room.setCreatedTime(new Time(System.currentTimeMillis()));
        room.setUser(userService.getUserWithAuthority());

        // nếu là thêm mới
        if(room.getId() == null){
            room.setStatusRoom(StatusRoom.DANG_CHO_DUYET);
        }
        // nếu là cập nhật
        else{
            Room exist = roomRepository.findById(room.getId()).get();
            room.setStatusRoom(exist.getStatusRoom());
            room.setCreatedTime(exist.getCreatedTime());
            room.setCreatedDate(exist.getCreatedDate());
        }
        Room result = roomRepository.save(room);
        return result;
    }

    @GetMapping("/user/phongCuaToi")
    public List<Room> phongCuaToi(@RequestParam(value = "id", required = false) String trangThai){
        if(trangThai == null){
            User user = userService.getUserWithAuthority();
            System.out.printf("user login: "+user.getId());
            return roomRepository.findByUser(userService.getUserWithAuthority().getId());
        }
        else{
            StatusRoom statusRoom = null;
            for (StatusRoom s : StatusRoom.values())
            {
                if (s.name().equals(trangThai))
                {
                    statusRoom = s;
                }
            }
            return roomRepository.findByUserAndTrangThai(userService.getUserWithAuthority().getId(), statusRoom);
        }
    }

    @GetMapping("/public/thongTinPhong")
    public Room thongTinPhong(@RequestParam(value = "id") Long idPhong){
        return roomRepository.findById(idPhong).orElse(null);
    }

    @DeleteMapping("/user/xoaPhong")
    public void xoaPhong(@RequestParam(value = "id") Long idPhong){
        Room room = roomRepository.findById(idPhong).orElse(null);
        if(room == null){
            return;
        }
        if(userService.getUserWithAuthority().getId() != room.getUser().getId()){
            return;
        }
        roomRepository.delete(room);
    }

    @GetMapping("/admin/tatCaPhong")
    public List<Room> tatCaPhong(@RequestParam(value = "id", required = false) String trangthai){
        if(trangthai == null){
            return roomRepository.findAllDesc();
        }
        else{
            StatusRoom statusRoom = null;
            for (StatusRoom s : StatusRoom.values())
            {
                if (s.name().equals(trangthai))
                {
                    statusRoom = s;
                }
            }
            return roomRepository.findAllDescAndTrangThai(statusRoom);
        }
    }

    @PostMapping("/admin/capNhatTrangThai")
    public void capNhatTrangThai(@RequestParam(value = "id") Long idPhong, @RequestParam("trangthai") String trangthai){
        Room room = roomRepository.findById(idPhong).orElse(null);
        StatusRoom statusRoom = null;
        for (StatusRoom s : StatusRoom.values())
        {
            if (s.name().equals(trangthai))
            {
                statusRoom = s;
            }
        }
        room.setStatusRoom(statusRoom);
        roomRepository.save(room);
    }
//
//    @GetMapping("/admin/soLuongPhong")
//    public Long soLuongPhong(){
//        return roomRepository.count();
//    }
//
    @GetMapping("/public/dsphongTrangChu")
    public Page<Room> trangChu(Pageable pageable){
        return roomRepository.dsPhongTrangChu(StatusRoom.DANG_HIEN_THI,pageable);
    }

    @GetMapping("/public/timKiemPhong")
    public Page<Room> timKiemPhong(Pageable pageable, @RequestParam(value = "loaiphong", required = false) Long loaiphong,
                                   @RequestParam(value = "search", required = false) String search){
        if(loaiphong == null && search == null){
            return roomRepository.dsPhongTrangChu(StatusRoom.DANG_HIEN_THI,pageable);
        }
        if(loaiphong != null){
            return roomRepository.dsPhongTimKiem(StatusRoom.DANG_HIEN_THI, loaiphong,pageable);
        }
        if(search != null){
            return roomRepository.dsPhongTimKiem(StatusRoom.DANG_HIEN_THI, "%"+search+"%",pageable);
        }
        return roomRepository.dsPhongTrangChu(StatusRoom.DANG_HIEN_THI,pageable);
    }
//
//
//    @GetMapping("/public/phongMoiDang")
//    public List<Room> tinMoiDang(){
//        return roomRepository.phongMoiNhat();
//    }
//
//    @GetMapping("/public/phongByUser")
//    public List<Room> phongByUser(@RequestParam(value = "id") Long idUser){
//        return roomRepository.phongByUser(idUser);
//    }
}
