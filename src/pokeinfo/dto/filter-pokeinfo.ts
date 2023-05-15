import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class FilterPokeinfoDto {

    @IsOptional()
    @ApiProperty({ example: 'pikachu', description: 'Nombre del Pokemon', required: false })
    name?: string;

    @IsOptional()
    @ApiProperty({ example: '1', description: 'Experiencia del Pokemon', required: false })
    base_experience?: string;

    @IsOptional()
    @ApiProperty({ example: '1', description: 'Altura del Pokemon', required: false })
    height?: string;
}
