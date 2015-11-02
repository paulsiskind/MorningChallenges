var Song = require('./song');

var Playlist = function(){
  this.songs = []
  this.currentSongIndex = 0
};

Playlist.prototype.isEmpty = function () {
  if (this.songs.length === 0){
        return true
  } else return false
};

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
}

Playlist.prototype.songNames = function () {
  this.song_names = []
  for (var i = 0; i < this.songs.length; i++) {
    this.song_names.push(this.songs[i].name)
  }
  return this.song_names
}

Playlist.prototype.currentSong = function (song) {
  return this.songs[this.currentSongIndex].name;
}

Playlist.prototype.skip = function (song) {
  this.currentSongIndex++
}

Playlist.prototype.removeSong = function (song) {
  var i = this.songs.indexOf(song);
    if(i != -1) {
      this.songs.splice(i, 1);
    }
}





module.exports = Playlist;