package vnua.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vnua.room.entity.Category;
import vnua.room.entity.CommentImage;
@Repository
public interface CommentImageRepository extends JpaRepository<CommentImage, Long> {
}
