package vnua.room.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vnua.room.dto.CommentDto;
import vnua.room.entity.Comment;
import vnua.room.entity.CommentImage;
import vnua.room.repository.CommentImageRepository;
import vnua.room.repository.CommentRepository;
import vnua.room.service.UserService;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CommentRest {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentImageRepository commentImageRepository;

    @PostMapping("/user/createComment")
    public void save(@RequestBody CommentDto commentDto){
        Comment comment = new Comment();
        comment.setUser(userService.getUserWithAuthority());
        comment.setContent(commentDto.getContent());
        comment.setCreatedDate(new Date(System.currentTimeMillis()));
        comment.setCreatedTime(new Time(System.currentTimeMillis()));
        comment.setRoom(commentDto.getRoom());
        comment.setStar(commentDto.getStar());
        Comment result = commentRepository.save(comment);

        for(String s : commentDto.getListLink()){
            CommentImage commentImage = new CommentImage();
            commentImage.setComment(result);
            commentImage.setLinkImage(s);
            commentImageRepository.save(commentImage);
        }
    }

    @DeleteMapping("/user/deleteComment")
    public ResponseEntity<?> delete(@RequestParam("id") Long id){
        Comment comment = commentRepository.findById(id).get();
        if(comment.getUser().getId() != userService.getUserWithAuthority().getId()){
            return new ResponseEntity<>(1, HttpStatus.BAD_REQUEST);
        }
        else{
            commentRepository.delete(comment);
        }
        return new ResponseEntity<>("success",HttpStatus.OK);
    }

    @GetMapping("/public/find-comment-by-room")
    public ResponseEntity<?> findAll(@RequestParam("idRoom") Long idRoom){

        List<Comment> result = commentRepository.findByRoom(idRoom);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }

}
