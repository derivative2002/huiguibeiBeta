import ConfigData from "./ConfigData";
import GuantuUI from "./guantu/GuantuUI";
import MatchItem from "./guantu/view/MatchItem";
import ResultUI from "./guantu/view/ResultUI";

const {ccclass, property} = cc._decorator;

@ccclass // 使用装饰器定义Cocos类
export default class Main extends cc.Component {
    // 声明并初始化游戏所需的文本资源和预制体，使用@property装饰器进行属性绑定，以便在编辑器中设置
    @property(cc.TextAsset)
    guantuTxt:cc.TextAsset = null; // 关卡数据
    @property(cc.TextAsset)
    mapTxt:cc.TextAsset = null; // 地图数据
    @property(cc.TextAsset)
    commanderTxt:cc.TextAsset = null; // 指挥官数据

    // 预制体资源，用于界面的创建
    @property(cc.Prefab)
    startUI:cc.Prefab = null; // 开始界面
    @property(cc.Prefab)
    guantuUI:cc.Prefab = null; // 关卡界面
    @property(cc.Prefab)
    resultUI:cc.Prefab = null; // 结果界面
    @property(cc.Prefab)
    mapPrefab:cc.Prefab = null; // 地图预制体
    @property(cc.Prefab)
    factorPrefab:cc.Prefab = null; // 因子预制体
    @property(cc.Prefab)
    guantufactorPrefab:cc.Prefab = null; // 关卡因子预制体
    @property(cc.Prefab)
    commanderPrefab:cc.Prefab = null; // 指挥官预制体
    @property(cc.Prefab)
    matchPrefab:cc.Prefab = null; // 比赛项预制体
    @property(cc.Button)
    btnResetGame: cc.Button = null;  // 重置游戏按钮
    
    static instance:Main; // 类的单例实例

    protected onLoad(): void {
        // 设置游戏帧率和关闭调试统计信息
        cc.game.setFrameRate(59.9);
        cc.debug.setDisplayStats(false);
        Main.instance = this; // 初始化单例
        
        this.toStart(); // 开始游戏
    }
    
    toStart(){
        // 从文本资源初始化配置数据
        ConfigData.init(this.guantuTxt.text, this.mapTxt.text, this.commanderTxt.text);
        var node = cc.instantiate(this.startUI); // 实例化开始界面
        this.node.addChild(node); // 将开始界面添加到当前节点
    }

    toGuantu(){
        var node = cc.instantiate(this.guantuUI); // 实例化关卡界面
        this.node.addChild(node); // 将关卡界面添加到当前节点

        var comp = node.getComponent(GuantuUI); // 获取关卡界面的组件
        comp.initUI(); // 初始化界面
    }

    toResult(list:MatchItem[]){
        var node = cc.instantiate(this.resultUI); // 实例化结果界面
        this.node.addChild(node); // 将结果界面添加到当前节点

        var comp = node.getComponent(ResultUI); // 获取结果界面的组件
        comp.initUI(list); // 根据比赛结果初始化界面
    }
}
