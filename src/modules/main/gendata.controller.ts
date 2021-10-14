import { DataService } from '../../services/data.service';
import { Controller, Get, Post, Render, Res, Body, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import * as moment from 'moment';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

moment.locale('vi');

@Controller('gendata')
export class GendataController {
  constructor(private dataService: DataService) {}

  @Get()
  @Render('gendata/index')
  async index() {
    let labelList = require('../../../public/JSON/label.json');

    let numberOfAttribute = 11;
    let dataList = [];
    for (let i = 0; i < 5; i++) {
      let attribute = [];
      for (let index = 0; index < numberOfAttribute; index++) {
        attribute.push(Math.floor(Math.random() * 10));
      }
      dataList.push(attribute);
    }
    return { labelList: labelList, dataList: dataList };
  }

  @Post('/add')
  async add(@Req() req: Request, @Res() res: Response) {
    let array = [1, 2, 3, 4, 5];
    array.map(async (value, index) => {
      await this.dataService.insert(req.body[index]);
    });
    res.redirect('/gendata');
  }
}
