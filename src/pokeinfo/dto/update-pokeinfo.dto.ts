import { PartialType } from '@nestjs/mapped-types';
import { CreatePokeinfoDto } from './create-pokeinfo.dto';

export class UpdatePokeinfoDto extends PartialType(CreatePokeinfoDto) {}
