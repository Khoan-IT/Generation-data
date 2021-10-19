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
    let hometown = ['Ngoại ô', 'Trung tâm'];
    let current_home = ['Chung cư', 'Nhà thuê', 'Phòng trọ', 'Nhà riêng'];
    let salary = ['Dưới 10', '10-15', '15-20', '20-30', '30-40', 'Trên 40'];
    let job = ['Sản xuất','Xây dựng', 'Kinh doanh', 'Công nghệ', 'Luật', 'Đồ hoạ', 'Báo chí', 'Sử phạm', 'Nông lâm', 'Khoa học'];
    let degree = ['Phổ thông', 'Cao đẳng', 'Đại học', '> Đại học'];
    let age = ['18-23', '23-30','30-40','40-50','Trên 50'];
    let num_relative = ['1', '2', '3', '4', '5', 'Trên 5'];
    let credit = ['Có', 'Không'];
    let vehicle = ['Ô tô', 'Xe máy', 'Phương tiện công cộng'];
    let marriage = ['Có', 'Không'];
    let interes = ['Ăn uống', ' Mua sắm', 'Thể thao'];
    let data = [['Ngoại ô', 'Trung tâm'],['Chung cư', 'Nhà thuê', 'Phòng trọ', 'Nhà riêng'],['Dưới 10', '10-15', '15-20', '20-30', '30-40','Trên 40'],['Sản xuất','Xây dựng', 'Kinh doanh', 'Công nghệ', 'Luật', 'Đồ hoạ', 'Báo chí', 'Sử phạm', 'Nông lâm', 'Khoa học'], ['Phổ thông', 'Cao đẳng', 'Đại học', 'Trên Đại học'], ['18-23', '23-30','30-40','40-50','Trên 50'], ['1', '2', '3', '4', '5', 'Trên 5'],['Có', 'Không'], ['Ô tô', 'Xe máy', 'Phương tiện công cộng'], ['Có', 'Không'],['Ăn uống', ' Mua sắm', 'Thể thao']];
    let numberOfAttribute = 11;
    let dataList = [];
    for (let i = 0; i < 5; i++) {
      let attribute = [];
      for (let index = 0; index < numberOfAttribute; index++) {
        attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
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
