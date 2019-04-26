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
      },
			{
        name: '钟无艳',
        artist: '谢安琪',
        url: 'http://www.ytmp3.cn/down/39157.mp3',
        cover: 'http://img.ytmp3.cn/image/75.jpg',
      },
			{
        name: 'canon in d',
        artist: 'Brian Crain',
        url: 'http://pd2tflnys.bkt.clouddn.com/Brian%20Crain%20-%20canon%20in%20d.mp3',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
      },
			 {
        name: "Apologize",
        artist: 'Martin Ermen',
        url: 'http://pd2tflnys.bkt.clouddn.com/Martin%20Ermen%20-%20Apologize.mp3',
        cover: 'http://p1.music.126.net/-_6mcI4VV5IKaiwhUAytbg==/1791104441647901.jpg?param=130y130',
      },
	  {
        name: "River Flows in You",
        artist: 'Yiruma',
        url: 'http://pd2tflnys.bkt.clouddn.com/Yiruma%20-%20River%20Flows%20in%20You.flac',
        cover: 'http://p1.music.126.net/8ZRSyI0ZN_4ah8uzsNd1mA==/2324367581169008.jpg?param=130y130',
      },
      {
        name: '惊蛰',
        artist: '音阙诗听/王梓钰',
        url: 'http://www.ytmp3.cn/down/48755.mp3',
        cover: 'http://p1.music.126.net/5MmXpaP9r88tNzExPGMI8Q==/109951163370350985.jpg?param=130y130',
      }
			
    ]
});