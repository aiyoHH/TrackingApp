import { BaseBean } from "./bean/baseBean";
import { WorkBean } from "./bean/workBean";
import { OpeBean } from "./bean/opeBean";
import { PlotsBean } from "./bean/plotsBean";
import { PlotBean } from "./bean/plotBean";


//首页 种植计划 数据模版
export const PlantingList: BaseBean[] = [
    { id: 39, serial: '14AZ', category: '肉桂', principal: '李大仁', baseImg: '../assets/imgs/cropland2.png', baseName: '新星肉桂种植基地', area: '400亩', status: '进行中' },
    { id: 38, serial: '13AZ', category: '肉桂', principal: '李大仁', baseImg: '../assets/imgs/99c.png', baseName: '新星肉桂种植基地', area: '400亩', status: '种植完成' },
    { id: 37, serial: '12AZ', category: '肉桂', principal: '李大仁', baseImg: '../../../assets/imgs/cropland2.png', baseName: '新星肉桂种植基地', area: '400亩', status: '进行中' },
    { id: 36, serial: '11AZ', category: '肉桂', principal: '李大仁', baseImg: '../assets/imgs/cropland.png', baseName: '新星肉桂种植基地', area: '200亩', status: '未开始' },
    { id: 35, serial: '13AY', category: '肉桂', principal: '张益达', baseImg: '../assets/imgs/99c.png', baseName: '新星肉桂种植基地', area: '100亩', status: '进行中' },
    { id: 34, serial: '11AY', category: '肉桂', principal: '张益达', baseImg: '../assets/imgs/cropland2.png', baseName: '新星肉桂种植基地', area: '600亩', status: '种植完成' },
    { id: 33, serial: 'DXGHXM003', category: '广藿香', principal: '张益达', baseImg: '../assets/imgs/99c.png', baseName: '翔南广藿香育苗基地', area: '50亩', status: '进行中' },
    { id: 32, serial: 'DXGHXM002', category: '广藿香', principal: '程又青', baseImg: '../assets/imgs/cropland.png', baseName: '翔南广藿香育苗基地', area: '200亩', status: '种植完成' }
]

// 登录账户 数据模版
export const AccountExample: { companyAcc: string, privateAcc: string, password: string } = {
    companyAcc: '',
    privateAcc: 'ADMIN',
    password: 'km123456'
};


export const UserInfo:any={
        name: '温大浩',
        job: '负责人/农户',
        company :'德庆县德鑫农业发展有限公司',
        profileImage: 'assets/imgs/girl1.jpg',
        id: '13',
        tel: '136103293847',
        status: '启用',
        gender:'男',
        identity_id:'350429********0342',
        remark:'2017年度优秀员工'
}

//种植计划页 地块信息 数据模板
export const PlotList:PlotBean[]=[
    { area: '1500亩', serial: 'DK032', img: '../assets/imgs/cropland2.png', plot: '地咀山北面' },
    { area: '1000亩', serial: 'DK040', img: '../assets/imgs/cropland2.png', plot: '新寨山口塘' },
    { area: '500亩', serial: 'DK041', img: '../assets/imgs/cropland2.png', plot: '	象牙山南面' },
    { area: '500亩', serial: 'DK042', img: '../assets/imgs/cropland2.png', plot: '象牙山北面' },
    { area: '500亩', serial: 'DK022', img: '../assets/imgs/cropland2.png', plot: '大坑山南面A片区' }
]

export const PlotsInfo:PlotsBean= {
    base: { id: 39, serial: '14AZ', category: '肉桂', principal: '李大仁', year: '2017', img: '../assets/imgs/cropland2.png', baseName: '新星肉桂种植基地', area: '4000亩', status: '进行中', company: '德兴县德鑫农业发展有限公司' },
    plots:PlotList
}

// 田间作业页 数据模版
export const WorkList:WorkBean[]=[
    { id: '190', type: '追肥', date: '2016-07-29', material: '化肥', opetype: '人工', result: '情况良好,各苗木追肥到位', principal: '梁桂清' },
    { id: '189', type: '除草', date: '2016-07-27', material: '锄头', opetype: '人工', result: '周围50cm,剔除', principal: '梁桂清' },
    { id: '188', type: '追肥', date: '2015-08-13', material: '化肥', opetype: '人工', result: '情况良好,各苗木追肥到位', principal: '梁桂清' },
    { id: '187', type: '除草', date: '2015-08-11', material: '锄头', opetype: '人工', result: '根部杂草去除', principal: '梁桂清' },
    { id: '186', type: '追肥', date: '2015-05-23', material: '化肥', opetype: '人工', result: '均匀施肥', principal: '梁桂清' },
    { id: '184', type: '浇水', date: '2014-04-02', material: '打地机', opetype: '机械', result: '土壤湿度达标', principal: '梁桂清' }

]

export const OpeInfo:OpeBean = {
    plot: { ser: 'DK040000', area: '100亩', soil: '红沙土', ph: '6.6', principal: '梁桂清', img: '../assets/imgs/tian.png' },
    work:WorkList
}

