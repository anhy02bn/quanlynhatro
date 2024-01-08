package vnua.room.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Entity
@Table(name = "room")
@Getter
@Setter
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String titleRoom;

    private Date createdDate;

    private Time createdTime;

    private String banner;

    private Double price;

    private String description;

    private Float area;

    private String address;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private StatusRoom statusRoom;

    @OneToMany(mappedBy = "room", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<ImageRoom> imageRooms;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Report> reports;
}
