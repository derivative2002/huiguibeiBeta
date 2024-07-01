// 引入外部定义的类型信息
import CommanderInfo from "./data/CommanderInfo";
import GuantuInfo from "./data/GuantoInfo";
import MapInfo from "./data/MapInfo";

// 定义配置数据类，用于管理游戏中的关卡、地图和指挥官信息
export default class ConfigData {
    static reset() {
        throw new Error("Method not implemented.");
    }
    // 定义静态数组，存储关卡、挑战关卡、地图和指挥官的数据
    static guantuList: GuantuInfo[];
    static guantuTiaozhanList: GuantuInfo[];
    static mapList: MapInfo[];
    static commanderList: CommanderInfo[];

    // 初始化方法，用于解析文本数据并填充上述数组
    static init(text: string, maptext: string, commandertext: string) {
        // 初始化数组
        this.guantuList = [];
        this.guantuTiaozhanList = [];
        
        // 解析关卡信息
        var strs = text.split("\r\n"); // 按行分割文本数据
        for (var i = 1; i < strs.length; i++) {
            var strs2 = strs[i].split("\t"); // 按制表符分割每一行的数据
            if (strs2.length < 2) continue; // 如果分割后数据不完整，则跳过
            var info = new GuantuInfo(); // 创建关卡信息实例
            info.id = +strs2[0]; // 解析并存储关卡ID
            info.name = strs2[1].split(" ")[0]; // 解析并存储关卡名称
            info.map = strs2[2]; // 存储关联地图
            info.factors = []; // 初始化因素数组
            // 解析和存储关卡因素
            for (let j = 3; j <= 6; j++) {
                if (strs2[j]) {
                    info.factors.push(strs2[j]);
                }
            }
            if (strs2[8]) {
                info.author = strs2[8]; // 存储关卡作者
            }
            // 根据关卡ID决定存储到哪个列表
            if (info.id < 158) {
                this.guantuList.push(info);
            }
            this.guantuTiaozhanList.push(info);
        }

        // 解析地图信息
        this.mapList = [];
        strs = maptext.split("\r\n"); // 按行分割地图数据
        for (var i = 1; i < strs.length; i++) {
            var strs2 = strs[i].split(","); // 按逗号分割
            if (strs2.length < 2) continue;
            var map = new MapInfo(); // 创建地图信息实例
            map.id = i; // 设置地图ID
            map.name = strs2[0]; // 存储地图名称
            map.score = +strs2[1]; // 存储地图分数
            this.mapList.push(map);
        }

        // 解析指挥官信息
        this.commanderList = [];
        strs = commandertext.split("\r\n"); // 按行分割指挥官数据
        for (var i = 1; i < strs.length; i++) {
            var strs2 = strs[i].split(","); // 按逗号分割
            if (strs2.length < 2) continue;
            var cmd = new CommanderInfo(); // 创建指挥官信息实例
            cmd.id = i; // 设置指挥官ID
            cmd.name = strs2[0]; // 存储指挥官名称
            cmd.rankHuigui = strs2[1]; // 存储指挥官回归等级
            this.commanderList.push(cmd);
        }
    }
    
}
