import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class FilterPokeinfoDto {

    @IsString()
    @ApiProperty({ example: 'pikachu', description: 'Nombre del Pokemon' })
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @ApiProperty({ example: 1, description: 'Experiencia del Pokemon' })
    @IsNotEmpty()
    base_experience: number;

    @IsNumber()
    @ApiProperty({ example: 1, description: 'Altura del Pokemon' })
    @IsNotEmpty()
    height: number;
}
