
import { StoryNode } from './types';

export const SCRIPT: Record<string, StoryNode> = {
  // --- 核心起始 ---
  'start': {
    id: 'start',
    text: '你睁开眼，身处一个无限延伸的黑白走廊。两侧的肖像画流出血泪，空气中弥漫着福尔马林的味道。前方的空间扭曲，露出了四个漆黑的入口。',
    choices: [
      { text: '走向渗出黑液的【沉重铁门】', nextNodeId: 'path_iron' },
      { text: '走下散发寒气的【螺旋石阶】', nextNodeId: 'path_stone' },
      { text: '登上挂满红绸缎的【古旧戏台】', nextNodeId: 'path_opera' },
      { text: '钻进墙壁裂缝里的【虚无图书馆】', nextNodeId: 'path_library' }
    ]
  },

  // --- 分支 1：铁门线 (生理恐怖) ---
  'path_iron': {
    id: 'path_iron',
    text: '屠宰场内铁钩晃动。缝合巨人正在切割某种巨大的肉块。他的呼吸声像破风箱，墙上挂着和你身体尺寸相仿的铁环。',
    choices: [
      { text: '屏息潜行翻过【白骨堆】', nextNodeId: 'iron_stealth' },
      { text: '钻进溢出蒸汽的【锅炉房】', nextNodeId: 'iron_boiler' },
      { text: '进入布满仪器的【实验间】', nextNodeId: 'iron_lab' },
      { text: '推开尽头的【手术室】', nextNodeId: 'iron_surgery' }
    ]
  },
  'iron_stealth': {
    id: 'iron_stealth',
    text: '你踩着碎骨移动。巨人突然停下，转过头，他没有眼睛，只有两个冒着蒸汽的孔洞。',
    choices: [
      { text: '钻进狭窄的【通风管】', nextNodeId: 'iron_vent' },
      { text: '跳进地下的【排污口】', nextNodeId: 'iron_sewer' },
      { text: '跪地哀求【饶恕】', nextNodeId: 'ending_1' },
      { text: '猛然【抬头看】天花板', nextNodeId: 'death_ceiling', isJumpscare: true }
    ]
  },
  'iron_boiler': {
    id: 'iron_boiler',
    text: '锅炉房内极其闷热，墙壁贴满了人的皮肤。一个满身伤痕的女孩正蜷缩在角落，指着炉火。',
    choices: [
      { text: '添加【木炭】入火堆', nextNodeId: 'ending_2' },
      { text: '尝试【解救】那个女孩', nextNodeId: 'ending_3' },
      { text: '顺着【蒸汽管】向上爬', nextNodeId: 'iron_attic' },
      { text: '躲进【熔炉内部】', nextNodeId: 'death_fire', isJumpscare: true }
    ]
  },
  'iron_lab': {
    id: 'iron_lab',
    text: '实验室里排满了玻璃缸。其中一个缸里装着一个和你一模一样的头颅，它嘴里含着一把钥匙。',
    choices: [
      { text: '【打破缸子】取钥匙', nextNodeId: 'ending_4' },
      { text: '【亲吻】玻璃上的唇印', nextNodeId: 'ending_5' },
      { text: '按下墙上的【自毁开关】', nextNodeId: 'ending_6' },
      { text: '查看【实验报告】', nextNodeId: 'ending_33' }
    ]
  },
  'iron_surgery': {
    id: 'iron_surgery',
    text: '手术台上躺着你的躯干，四肢已经被拆解，整齐地摆放在旁边的托盘里。',
    choices: [
      { text: '尝试【缝合】自己', nextNodeId: 'ending_34' },
      { text: '将【四肢】喂给影子', nextNodeId: 'ending_35' },
      { text: '躺上【手术台】', nextNodeId: 'ending_36' },
      { text: '偷走【手术刀】', nextNodeId: 'death_cut', isJumpscare: true }
    ]
  },

  // --- 分支 2：石阶线 (空间恐怖) ---
  'path_stone': {
    id: 'path_stone',
    text: '石阶似乎没有尽头，每走一步，你都会听到重复的脚步声。你的影子正在墙上慢慢脱离你的身体。',
    choices: [
      { text: '进入侧面的【回音长廊】', nextNodeId: 'stone_echo' },
      { text: '抵达底部的【镜子迷宫】', nextNodeId: 'stone_bottom' },
      { text: '原地【坐下】等待天亮', nextNodeId: 'ending_7' },
      { text: '【触摸】消失的墙面', nextNodeId: 'ending_37' }
    ]
  },
  'stone_echo': {
    id: 'stone_echo',
    text: '长廊里响起了你未来的惨叫。墙壁浮现出无数痛苦的脸孔，似乎在向你索要器官。',
    choices: [
      { text: '献出自己的【双眼】', nextNodeId: 'ending_8' },
      { text: '献出自己的【声音】', nextNodeId: 'ending_9' },
      { text: '对着墙壁【怒吼】', nextNodeId: 'ending_10' },
      { text: '向墙壁【倾诉秘密】', nextNodeId: 'ending_38' }
    ]
  },
  'stone_bottom': {
    id: 'stone_bottom',
    text: '镜子迷宫里，每一个镜像都在做着不同的恐怖动作。有的镜像正拿着刀向你走来。',
    choices: [
      { text: '【撞碎】眼前的镜子', nextNodeId: 'ending_11' },
      { text: '【走入】镜中的虚无', nextNodeId: 'ending_12' },
      { text: '与镜像【握手】', nextNodeId: 'ending_13' },
      { text: '对着镜子【自刎】', nextNodeId: 'ending_39' }
    ]
  },

  // --- 分支 3：戏台线 (民俗恐怖) ---
  'path_opera': {
    id: 'path_opera',
    text: '无头青衣正在唱着无声的悲剧。台下的草人观众全都转过了头，手心里握着生锈的长钉。',
    choices: [
      { text: '走向【后台】寻找戏服', nextNodeId: 'opera_backstage' },
      { text: '在【观众席】坐下', nextNodeId: 'ending_14' },
      { text: '试图【偷走】台上贡品', nextNodeId: 'ending_15' },
      { text: '翻阅旁边的【戏报】', nextNodeId: 'ending_41' }
    ]
  },
  'opera_backstage': {
    id: 'opera_backstage',
    text: '后台挂满了温热的人皮。一个巨大的缝纫机正在自动缝制一件血色的红色嫁衣。',
    choices: [
      { text: '穿上那件【嫁衣】', nextNodeId: 'ending_16' },
      { text: '点燃这里的【人皮】', nextNodeId: 'ending_17' },
      { text: '查看【梳妆镜】', nextNodeId: 'ending_18' },
      { text: '涂抹桌上的【油彩】', nextNodeId: 'ending_42' }
    ]
  },

  // --- 分支 4：图书馆线 (不可名状恐怖) ---
  'path_library': {
    id: 'path_library',
    text: '这里堆满了没有文字的书。管理员是一个只有下半身的怪物，正用黑墨水涂抹那些空白页。',
    choices: [
      { text: '翻阅一本【跳动的书】', nextNodeId: 'library_book' },
      { text: '在书架间【寻找地图】', nextNodeId: 'ending_19' },
      { text: '喝下桌上的【墨水】', nextNodeId: 'ending_20' },
      { text: '撕碎【所有的书】', nextNodeId: 'ending_43' }
    ]
  },
  'library_book': {
    id: 'library_book',
    text: '书页里飞出了无数黑色的蛾子。它们开始在你的皮肤上啃噬，字迹逐渐浮现。',
    choices: [
      { text: '忍痛【读完】这一页', nextNodeId: 'ending_21' },
      { text: '用火【驱赶】飞蛾', nextNodeId: 'ending_22' },
      { text: '将书【塞进】胸膛', nextNodeId: 'ending_23' },
      { text: '【吞下】那些飞蛾', nextNodeId: 'ending_44' }
    ]
  },

  // --- 补充节点 ---
  'iron_vent': {
    id: 'iron_vent',
    text: '管道里长满了黑色长发。它们顺着你的腿往上爬，勒紧了你的关节。',
    choices: [
      { text: '用牙【咬断】毛发', nextNodeId: 'ending_24' },
      { text: '【任由】它们包裹自己', nextNodeId: 'ending_25' },
      { text: '向前方【呼救】', nextNodeId: 'ending_26' },
      { text: '【割开】毛发源头', nextNodeId: 'ending_45' }
    ]
  },
  'iron_sewer': {
    id: 'iron_sewer',
    text: '排污口里满是粘稠的红色液体。你摸到了一个硬物，它在微微跳动。',
    choices: [
      { text: '【举起来】看个明白', nextNodeId: 'ending_27' },
      { text: '【游向】深处', nextNodeId: 'ending_28' },
      { text: '【大喊】名字', nextNodeId: 'ending_29' },
      { text: '【喝光】这里的液体', nextNodeId: 'ending_46' }
    ]
  },
  'iron_attic': {
    id: 'iron_attic',
    text: '阁楼里挂满了婴儿的摇篮。每一个摇篮都在同步摇晃，发出咯吱声。',
    choices: [
      { text: '【翻开】第一个摇篮', nextNodeId: 'ending_30' },
      { text: '【破坏】这些摇篮', nextNodeId: 'ending_31' },
      { text: '【一起摇晃】', nextNodeId: 'ending_32' },
      { text: '【亲吻】摇篮里的东西', nextNodeId: 'ending_47' }
    ]
  },

  // --- 结局库 (1-50) ---
  'ending_1': { id: 'ending_1', text: '你被塞进了铁皮罐头，成为了巨人永恒的储备粮。', isEnding: true, endingTitle: '结局 #1: 储备口粮', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_2': { id: 'ending_2', text: '炉火熄灭了，你成为了锅炉房内最后的一片寒冰。', isEnding: true, endingTitle: '结局 #2: 熄灭之火', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_3': { id: 'ending_3', text: '女孩带你走进了火堆，那里其实是通往现实的唯一出口，但代价是你的皮肤。', isEnding: true, endingTitle: '结局 #3: 剥皮重生', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_4': { id: 'ending_4', text: '你发现钥匙是通往你脊柱的。你终于“完整”了。', isEnding: true, endingTitle: '结局 #4: 拼图碎片', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_5': { id: 'ending_5', text: '头颅活了过来，并成为了你的新心脏。', isEnding: true, endingTitle: '结局 #5: 二心同体', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_6': { id: 'ending_6', text: '爆炸中，你化为了飞灰，灵魂在这个走廊里永恒飘荡。', isEnding: true, endingTitle: '结局 #6: 尘埃云', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_7': { id: 'ending_7', text: '天永远没亮，你变成了一尊风干的石像。', isEnding: true, endingTitle: '结局 #7: 守夜石', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_8': { id: 'ending_8', text: '你失去了视觉，但听到了墙壁里的呼吸声。', isEnding: true, endingTitle: '结局 #8: 盲眼听众', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_9': { id: 'ending_9', text: '你的声音被墙壁收藏，成为了长廊里新的背景噪音。', isEnding: true, endingTitle: '结局 #9: 沉寂回响', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_10': { id: 'ending_10', text: '怒吼震碎了走廊，你掉进了无尽的黑洞。', isEnding: true, endingTitle: '结局 #10: 破碎虚空', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_11': { id: 'ending_11', text: '碎裂的玻璃划开了时空的缝隙。你被困在了时间的一角。', isEnding: true, endingTitle: '结局 #11: 碎片维度', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_12': { id: 'ending_12', text: '你成为了镜子里那个“做对动作”的人，而那个“错的”你在外面自杀了。', isEnding: true, endingTitle: '结局 #12: 身份互换', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_13': { id: 'ending_13', text: '你们融合成了一个多头怪物。永远地在这个迷宫里徘徊。', isEnding: true, endingTitle: '结局 #13: 畸形共生', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_14': { id: 'ending_14', text: '你被草人们缝在了座位上，心脏逐渐停止，变成了一捆干草。', isEnding: true, endingTitle: '结局 #14: 永恒观众', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_15': { id: 'ending_15', text: '贡品是你的心脏。你吃下了它，然后发现自己变成了一个透明人。', isEnding: true, endingTitle: '结局 #15: 自我吞噬', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_16': { id: 'ending_16', text: '穿上嫁衣后，你成为了迷宫新的主宰，但也失去了作为人的权利。', isEnding: true, endingTitle: '结局 #16: 冥婚新娘', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_17': { id: 'ending_17', text: '火焰烧穿了剧院，你看到了屏幕外的玩家。那一刻你获得了自由。', isEnding: true, endingTitle: '结局 #17: 打破高墙', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_18': { id: 'ending_18', text: '镜子里没有你，只有一片虚无。你发现自己只是个梦。', isEnding: true, endingTitle: '结局 #18: 存在缺失', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_19': { id: 'ending_19', text: '地图显示，这个迷宫其实是你的大脑切片。你正在手术台上脑死亡。', isEnding: true, endingTitle: '结局 #19: 脑内迷径', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_20': { id: 'ending_20', text: '你的血液变成了黑墨水。你吐出了最后一口气，化为了纸上的文字。', isEnding: true, endingTitle: '结局 #20: 纸上亡魂', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_21': { id: 'ending_21', text: '读完的那一刻，你学会了魔法，但也变成了只会流口水的白痴。', isEnding: true, endingTitle: '结局 #21: 真理诅咒', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_22': { id: 'ending_22', text: '大火把图书馆烧成了灰烬，你被永远埋在了知识的废墟下。', isEnding: true, endingTitle: '结局 #22: 焚书坑人', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_23': { id: 'ending_23', text: '书与你合为一体，你变成了这里的新管理员。没有腿，只有书脊。', isEnding: true, endingTitle: '结局 #23: 书中之灵', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_24': { id: 'ending_24', text: '毛发里住着一万条虫子，它们现在住进了你的胃，并在那里产卵。', isEnding: true, endingTitle: '结局 #24: 寄生之穴', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_25': { id: 'ending_25', text: '你变成了一个巨大的毛球，滚向了未知的深渊，永远在旋转。', isEnding: true, endingTitle: '结局 #25: 毛球怪谈', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_26': { id: 'ending_26', text: '呼救引来了一群没有嘴的护士，她们用线缝住了你的全身。', isEnding: true, endingTitle: '结局 #26: 静寂诊疗', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_27': { id: 'ending_27', text: '你举起的是一张写着“帮帮我”的你的脸皮。你已经不再是你。', isEnding: true, endingTitle: '结局 #27: 画皮噩梦', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_28': { id: 'ending_28', text: '液体里住着远古的邪神，你成为了它的午餐。灵魂在消化液中消亡。', isEnding: true, endingTitle: '结局 #28: 深红克苏鲁', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_29': { id: 'ending_29', text: '喊出的名字变成了实体，它出现在你背后，把你慢慢捏碎。', isEnding: true, endingTitle: '结局 #29: 真名召唤', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_30': { id: 'ending_30', text: '摇篮里是你自己，但正张着血盆大口。它吃掉了“大”的你。', isEnding: true, endingTitle: '结局 #30: 回归母体', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_31': { id: 'ending_31', text: '婴儿的哭声震碎了你的灵魂。你化为了摇篮边的一抹灰尘。', isEnding: true, endingTitle: '结局 #31: 丧魂曲', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_32': { id: 'ending_32', text: '你变成了其中一个摇篮，永远地咯吱摇晃。等待下一个受害者。', isEnding: true, endingTitle: '结局 #32: 永动机', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_33': { id: 'ending_33', text: '报告上写着：实验对象 001 已经完全丧失人性。你确实如此。', isEnding: true, endingTitle: '结局 #33: 实验体 001', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_34': { id: 'ending_34', text: '你把自己缝成了一个球，只能在地上无助地滚动。', isEnding: true, endingTitle: '结局 #34: 血肉之球', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_35': { id: 'ending_35', text: '影子吃掉了你的四肢，长出了你的腿，它逃走了，留下了你。', isEnding: true, endingTitle: '结局 #35: 影子替代者', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_36': { id: 'ending_36', text: '你成为了手术台的一部分。永远冰冷，永远等待被切割。', isEnding: true, endingTitle: '结局 #36: 钢铁承载', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_37': { id: 'ending_37', text: '墙壁像水一样融化了。你被吸入了水泥的海洋。', isEnding: true, endingTitle: '结局 #37: 窒息之墙', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_38': { id: 'ending_38', text: '秘密变成了毒蛇，从你的喉咙里钻出，咬断了你的气管。', isEnding: true, endingTitle: '结局 #38: 祸从口出', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_39': { id: 'ending_39', text: '你死后，所有的镜像都开始大笑，并走出了镜子。', isEnding: true, endingTitle: '结局 #39: 全员镜像', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_40': { id: 'ending_40', text: '时钟倒转。你回到了现实，但发现你的家人全长着猪脸。', isEnding: true, endingTitle: '结局 #40: 错位的现实', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_41': { id: 'ending_41', text: '戏报上写着你的死亡日期，就是现在。', isEnding: true, endingTitle: '结局 #41: 既定死期', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_42': { id: 'ending_42', text: '油彩腐蚀了你的皮肤。你变成了戏台上的一具骷髅。', isEnding: true, endingTitle: '结局 #42: 画皮之毒', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_43': { id: 'ending_43', text: '管理员把你缝进了一本书里。你成为了第 43 个结局的注脚。', isEnding: true, endingTitle: '结局 #43: 活体注脚', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_44': { id: 'ending_44', text: '飞蛾在你胃里羽化。无数只翅膀从你的口腔里挤出。', isEnding: true, endingTitle: '结局 #44: 破茧而出', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_45': { id: 'ending_45', text: '毛发的源头是一个黑洞。你被吸了进去，化为了虚无。', isEnding: true, endingTitle: '结局 #45: 虚空之眼', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_46': { id: 'ending_46', text: '液体充满了你的肺。你获得了在血液中呼吸的能力，但失去了陆地。', isEnding: true, endingTitle: '结局 #46: 血肺之主', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_47': { id: 'ending_47', text: '摇篮里的东西咬断了你的头，并把它当成球踢。', isEnding: true, endingTitle: '结局 #47: 鬼婴游戏', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_48': { id: 'ending_48', text: '你发现自己身处一个巨大的迷宫模型中。上方有一双巨大的眼睛正在观察。', isEnding: true, endingTitle: '结局 #48: 观测者视角', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_49': { id: 'ending_49', text: '所有的门都消失了。你被困在了这个走廊。直到永远。', isEnding: true, endingTitle: '结局 #49: 走廊永劫', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },
  'ending_50': { id: 'ending_50', text: '你逃出了迷宫，却发现现实世界其实也是一个巨大的牢笼。而你是唯一的囚徒。', isEnding: true, endingTitle: '结局 #50: 自由的假象', choices: [{ text: '重入轮回', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }, { text: '...', nextNodeId: 'start' }] },

  // --- 跳杀节点映射 ---
  'death_scrap_monster': { id: 'death_scrap_monster', text: '废料桶里睁开了一万只眼睛...', choices: [], isJumpscare: true },
  'death_ceiling': { id: 'death_ceiling', text: '天花板上掉下一张巨大的嘴...', choices: [], isJumpscare: true },
  'death_fire': { id: 'death_fire', text: '火堆里伸出白骨爪...', choices: [], isJumpscare: true },
  'death_cut': { id: 'death_cut', text: '手术刀自动割开了你的咽喉...', choices: [], isJumpscare: true }
};

export const INITIAL_STORY = SCRIPT;
