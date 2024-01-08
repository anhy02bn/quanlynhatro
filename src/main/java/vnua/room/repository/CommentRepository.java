package vnua.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vnua.room.entity.Category;
import vnua.room.entity.Comment;

import java.util.List;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {


    @Query("select c from Comment c where c.room.id = ?1")
    List<Comment> findByRoom(Long idRoom);
}
