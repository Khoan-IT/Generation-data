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
    // let hometown = ['Ngoại ô', 'Trung tâm'];
    // let current_home = ['Chung cư', 'Nhà thuê', 'Phòng trọ', 'Nhà riêng'];
    // let salary = ['Dưới 10', '10-15', '15-20', '20-30', '30-40', 'Trên 40'];
    // let job = ['Sản xuất','Xây dựng', 'Kinh doanh', 'Công nghệ', 'Luật', 'Nghệ thuật', 'Báo chí', 'Sư phạm', 'Nông lâm', 'Khoa học'];
    // let degree = ['Phổ thông', 'Cao đẳng', 'Đại học', '> Đại học'];
    // let age = ['Dưới 23', '23-30','30-40','40-50','Trên 50'];
    // let num_relative = ['1', '2', '3', '4', '5', 'Trên 5'];
    // let credit = ['Có', 'Không'];
    // let vehicle = ['Ô tô', 'Xe máy', 'Phương tiện công cộng'];
    // let marriage = ['Có', 'Không'];
    // let interes = [' Mua sắm', 'Thể thao', 'Nghệ thuật'];
    let data = [['Ngoại ô', 'Trung tâm'],['Chung cư', 'Nhà thuê', 'Phòng trọ', 'Nhà riêng'],['Dưới 10', '10-15', '15-20', '20-30', '30-40','Trên 40'],['Sản xuất','Xây dựng', 'Kinh doanh', 'Công nghệ', 'Luật', 'Nghệ thuật', 'Báo chí', 'Sư phạm', 'Nông lâm', 'Khoa học'], ['Phổ thông', 'Cao đẳng', 'Đại học', 'Trên Đại học'], ['Dưới 23', '23-30','30-40','40-50','Trên 50'], ['1', '2', '3','Trên 3'],['Có', 'Không'], ['Ô tô', 'Xe máy', 'Phương tiện công cộng'], ['Có', 'Không'],['Nghệ thuật', ' Mua sắm', 'Thể thao', 'Du lịch']];
    let numberOfAttribute = 11;
    let dataList = [];
    for (let i = 0; i < 5; i++) {
      let attribute = [];
      for (let index = 0; index < numberOfAttribute; index++) {
        if (index==4){
          if (['Công nghệ', 'Luật', 'Báo chí','Sư phạm', 'Khoa học'].includes(attribute[attribute.length-1])){
            let degree = ['Cao đẳng', 'Đại học', 'Trên Đại học'];
            attribute.push(degree[Math.floor(Math.random() * degree.length)]);
          }else{
            attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
          }
        }else if (index==5){
          if (attribute[attribute.length-1] == 'Đại học'){
            let age = ['23-30','30-40','40-50','Trên 50'];
            attribute.push(age[Math.floor(Math.random() * age.length)]);
          }else if(attribute[attribute.length-1] == 'Trên Đại học'){
            let age = ['30-40','40-50','Trên 50'];
            attribute.push(age[Math.floor(Math.random() * age.length)]);
          }else{
            attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
          }
        }else if(index==7){
          if (attribute[2]=='Dưới 10'){
            attribute.push('Không');
          }
          else{
            attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
          }
        }else if(index==8){
          if (['Dưới 10', '10-15', '15-20'].includes(attribute[2])){
            let vehicle = ['Xe máy', 'Phương tiện công cộng'];
            attribute.push(vehicle[Math.floor(Math.random() * vehicle.length)]);
          }else{
            if (attribute[1]=='Phòng trọ'){
              let vehicle = ['Xe máy', 'Phương tiện công cộng'];
              attribute.push(vehicle[Math.floor(Math.random() * vehicle.length)]);
            }else{
              attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
            }
          }
        }else{
          attribute.push(data[index][Math.floor(Math.random() * data[index].length)]);
        }
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
