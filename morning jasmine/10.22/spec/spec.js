var Song = require('../src/song.js')
var Playlist = require('../src/playlist.js')

describe('player', function(){
  it('Song has name and duration', function(){
    var song = new Song('Chopsticks', 100)
    expect(song.name).toEqual('Chopsticks');
    expect(song.duration).toEqual(100);
  })

  it('Playlist starts out as empty', function(){
    var playlist = new Playlist();
    expect(playlist.empty).toEqual(true)
  })

  xit('You can add a song to the playlist', function(){
    var song = new Song('Chopsticks', 100)
    var playlist = new Playlist();
    playlist.add(song)
    var song2 = new Song('Sissy Strut', 120);
    playlist.add(song2);
    expect(playlist.songs).toEqual([song, song2])
  })

  xit('Can show the current song', function(){
    var song = new Song('Chopsticks', 100)
    var playlist = new Playlist();
    playlist.add(song)
    var song2 = new Song('Sissy Strut', 120);
    playlist.add(song2);
    expect(playlist.current).toEqual(song)
  })

  xit('Can skip songs', function(){
    var song = new Song('Chopsticks', 100)
    var playlist = new Playlist();
    playlist.add(song)
    var song2 = new Song('Sissy Strut', 120);
    playlist.add(song2);
    expect(playlist.skip).toEqual([song2, song])
  })

  xit('Can remove song from playlist', function(){
    var song = new Song('Chopsticks', 100)
    var playlist = new Playlist();
    playlist.add(song)
    var song2 = new Song('Sissy Strut', 120);
    playlist.add(song2);
    playlist.remove('Chopsticks');
    expect(playlist.songs).toEqual([song2])
  })

})