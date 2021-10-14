import { DataService } from '../../services/data.service';
import { Controller, Get, Post, Render, Res, Body, Req } from '@nestjs/common';
import * as moment from 'moment';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

moment.locale('vi');

@Controller('admin')
export class AdminController {
  constructor(private dataService: DataService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @Render('admin/index')
  async index() {
    let dataList = await this.dataService.getAll();
    return { dataList: dataList };
  }
}
