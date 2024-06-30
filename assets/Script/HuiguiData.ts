import ConfigData from "./ConfigData";
import CommanderInfo from "./data/CommanderInfo";
import GuantuInfo from "./data/GuantoInfo";
import MapInfo from "./data/MapInfo";
import MatchData from "./data/MatchData";

export default class HuiguiData {
    // 静态属性，用于存储全局游戏数据
    static gameType: string; // 游戏类型
    static playerName: string; // 玩家名称

    // 存储各种游戏数据列表
    static matchList: MatchData[]; // 比赛数据列表
    static randomCommanders: CommanderInfo[]; // 随机抽取的指挥官列表
    static randomMaps: MapInfo[]; // 随机抽取的地图列表
    static randomGuantus: GuantuInfo[]; // 随机抽取的突变列表

    // 初始化突变数据和相关设置
    static initGuantuData(playerName: string, isTiaozhan: boolean) {
        this.playerName = playerName; // 设置玩家名称
        this.gameType = isTiaozhan ? "官突模式" : "官突挑战"; // 根据挑战标志设置游戏模式

        // 根据挑战类型选择突变列表
        var guantuList = isTiaozhan ? ConfigData.guantuTiaozhanList : ConfigData.guantuList;
        
        // 随机抽取4个突变
        this.randomGuantus = [];
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * guantuList.length);
            this.randomGuantus.push(guantuList[index]);
            guantuList.splice(index, 1); // 从列表中移除已选项，避免重复
        }

        // 根据指挥官排名随机抽取指挥官
        this.randomCommanders = [];
        var list = ConfigData.commanderList; // 原始指挥官列表
        // 分别抽取S, A, B, C, O等级的指挥官
        this.randomCommanders = this.extractCommandersByRank(list, 'S', 5);
        this.randomCommanders = this.randomCommanders.concat(
            this.extractCommandersByRank(list, 'A', 5),
            this.extractCommandersByRank(list, 'B', 10),
            this.extractCommandersByRank(list, 'C', 5),
            this.extractCommandersByRank(list, 'O', 5)
        );

        // 随机抽取3个地图
        this.randomMaps = [];
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * ConfigData.mapList.length);
            this.randomMaps.push(ConfigData.mapList[index]);
            ConfigData.mapList.splice(index, 1); // 从列表中移除已选项
        }

        // 初始化比赛数据
        this.matchList = [new MatchData(0, true, 3), new MatchData(1, true, 3)];
    }

    // 一个辅助方法，用于根据指挥官排名抽取指定数量的指挥官
    static extractCommandersByRank(list: CommanderInfo[], rank: string, count: number): CommanderInfo[] {
        var selected = [];
        for (var i = 0; i < count; i++) {
            var index = Math.floor(Math.random() * list.length);
            if (list[index].rankHuigui !== rank) {
                i--; // 如果排名不匹配，重新抽取
                continue;
            }
            selected.push(list[index]);
            list.splice(index, 1); // 移除已选项
        }
        return selected;
    }
}
