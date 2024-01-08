package vnua.room.repository;

import org.springframework.stereotype.Repository;
import vnua.room.entity.ImageRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
@Repository
public interface ImageRoomRepository extends JpaRepository<ImageRoom, Long> {

    @Query("select i from ImageRoom i where i.room.id = ?1")
    public List<ImageRoom> findByRoom(Long roomId);
}
