package vnua.room.rest;
import vnua.room.dto.CategoryDto;
import vnua.room.entity.Category;
import vnua.room.entity.StatusRoom;
import vnua.room.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoryRest {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/admin/addCategory")
    public void save(@RequestBody Category category){
        category.setDeleted(0);
        categoryRepository.save(category);
    }

    @GetMapping("/public/allcategory")
    public List<Category> findAll(){
        return categoryRepository.findAllDesc();
    }

    @GetMapping("/public/categoryById")
    public Category findById(@RequestParam("id") Long id){
        return categoryRepository.findById(id).get();
    }

    @DeleteMapping("/admin/deleteCategory")
    public void deleteCategory(@RequestParam("id") Long id){
        try {
            categoryRepository.deleteById(id);
        }catch (Exception e){
            Category category = categoryRepository.findById(id).get();
            category.setDeleted(1);
            categoryRepository.save(category);
        }
    }

    @GetMapping("/public/allcategorySoLuong")
    public List<CategoryDto> allcategorySoLuong(){
        List<CategoryDto> list = new ArrayList<>();
        List<Object[]> obj = categoryRepository.tatCaDanhMuc(StatusRoom.DANG_HIEN_THI);
        for(Object[] o : obj){
            CategoryDto c = new CategoryDto();
            c.setId((BigInteger) o[0]);
            c.setName((String) o[1]);
            c.setSoLuongPhong((BigInteger) o[2]);
            list.add(c);
        }
        return list;
    }

}
