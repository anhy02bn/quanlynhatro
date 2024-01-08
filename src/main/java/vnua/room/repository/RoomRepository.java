package vnua.room.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vnua.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import vnua.room.entity.StatusRoom;

import java.util.List;
@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("select r from Room r where r.user.id = ?1")
    public List<Room> findByUser(Long userId);

    @Query("select r from Room r where r.user.id = ?1 and r.statusRoom = ?2")
    public List<Room> findByUserAndTrangThai(Long userId, StatusRoom trangThai);

    @Query("select r from Room r order by r.id desc ")
    public List<Room> findAllDesc();

    @Query("select r from Room r where r.statusRoom = ?1 order by r.id desc ")
    public List<Room> findAllDescAndTrangThai(StatusRoom trangThai);

    @Query("select r from Room r where r.statusRoom = ?1 order by r.id desc")
    public Page<Room> dsPhongTrangChu(StatusRoom trangThai, Pageable pageable);

    @Query("select r from Room r where r.statusRoom = ?1 and r.category.id = ?2 order by r.id desc")
    public Page<Room> dsPhongTimKiem(StatusRoom trangThai, Long loaiPhong, Pageable pageable);

    @Query("select r from Room r where r.statusRoom = ?1 and (r.titleRoom like ?2 or r.address like ?2 or r.user.phone like ?2) order by r.id desc")
    public Page<Room> dsPhongTimKiem(StatusRoom trangThai, String search, Pageable pageable);


//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4  order by r.id desc")
//    public Page<Room> timKiemPhong(Double smallprice, Double largeprice, Float smallarea, Float largearea,Pageable pageable);
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.category.id = ?5 order by r.id desc")
//    public Page<Room> timKiemPhong1(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long loaiphong,Pageable pageable);
//
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.districts.province.id = ?5 order by r.id desc")
//    public Page<Room> timKiemPhong2(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucTinh,Pageable pageable);
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.districts.province.id = ?5 and r.category.id = ?6 order by r.id desc")
//    public Page<Room> timKiemPhong3(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucTinh, Long loaiPhong,Pageable pageable);
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.districts.id = ?5 order by r.id desc")
//    public Page<Room> timKiemPhong4(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucHuyen,Pageable pageable);
//
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.districts.id = ?5 and r.category.id = ?6 order by r.id desc")
//    public Page<Room> timKiemPhong5(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucHuyen, Long loaiPhong,Pageable pageable);
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.id = ?5 order by r.id desc")
//    public Page<Room> timKiemPhong6(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucXa,Pageable pageable);
//
//    @Query("select r from Room r where r.statusRoom.id = 1 and r.price >= ?1 and r.price <= ?2 and r.area >= ?3 and r.area <= ?4 and r.wards.id = ?5 and r.category.id = ?6 order by r.id desc")
//    public Page<Room> timKiemPhong7(Double smallprice, Double largeprice, Float smallarea, Float largearea, Long khuVucXa, Long loaiPhong,Pageable pageable);
}
