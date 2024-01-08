package vnua.room.dto;
import lombok.Getter;
import lombok.Setter;
import vnua.room.entity.Room;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentDto {

    private Long id;

    private Float star;

    private String content;

    private Room room;

    private List<String> listLink = new ArrayList<>();

}
