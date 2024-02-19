import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): User[] {
    return this.usersService.findAll(name)
  }

  @ApiOkResponse({ type: User, description: 'the user' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    // TODO: AutoParse

    const user = this.usersService.findById(id)

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({
    type: User,
    description: 'Bad request please update',
  })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body)
  }
}
