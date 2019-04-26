const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.3,
    loop: 'all',
    audio: [
      {
        name: '时间煮酒',
        artist: '郁可唯',
        url: 'http://up.mcyt.net/?down/37600.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20130625/20130625181709936236.jpg',
      },
      {
        name: '爱情转移',
        artist: '陈奕迅',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n2/320/52/97/1397406180.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20161010/20161010200518926406.jpg',
      }
    ]
});