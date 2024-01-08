package vnua.room.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class CategoryDto {

    private BigInteger id;

    private String name;

    private BigInteger soLuongPhong;
}
