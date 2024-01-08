package vnua.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vnua.room.entity.Category;
import vnua.room.entity.Report;

import java.util.List;
@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {

    @Query("select r from Report r where r.room.id= ?1")
    public List<Report> findByRoom(Long roomId);
}
