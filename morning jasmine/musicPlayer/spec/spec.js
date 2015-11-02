var Song = require('../src/song');
var Playlist = require('../src/playlist');

describe('Playlist', function() {

  var freedomIsntFree = new Song("Freedom Isn't Free", 100);
  var killinInTheNameOf = new Song('Killin In The Name Of', 50);
  var welcomeToTheJungle = new Song('Welcome To The Jungle', 25);

  it("is empty by default", function() {
    var playlist = new Playlist();

    expect(playlist.isEmpty()).toEqual(true);
  });

  it("allows you to add a song", function() {
    var playlist = new Playlist();

    playlist.addSong(welcomeToTheJungle);

    expect(playlist.isEmpty()).toEqual(false);
  });

  it("allows you to see all song names", function() {
    var playlist = new Playlist();

    expect(playlist.songNames()).toEqual([]);

    playlist.addSong(freedomIsntFree);
    expect(playlist.songNames()).toEqual(["Freedom Isn't Free"]);

    playlist.addSong(killinInTheNameOf)
    expect(playlist.songNames()).toEqual([
      "Freedom Isn't Free",
      'Killin In The Name Of'
    ]);
  });

  it("allows you to see the current song", function() {
    var playlist = new Playlist();

    expect(playlist.songNames()).toEqual([]);

    playlist.addSong(freedomIsntFree);
    expect(playlist.currentSong()).toEqual("Freedom Isn't Free");

    playlist.addSong(killinInTheNameOf)
    expect(playlist.currentSong()).toEqual("Freedom Isn't Free");
  });

  it("allows you to skip song", function() {
    var playlist = new Playlist();

    expect(playlist.songNames()).toEqual([]);

    playlist.addSong(freedomIsntFree);
    expect(playlist.currentSong()).toEqual("Freedom Isn't Free");

    playlist.addSong(killinInTheNameOf)
    playlist.skip();
    expect(playlist.currentSong()).toEqual("Killin In The Name Of");
  });

  it("allows you to remove song", function(){
    var playlist = new Playlist();

    expect(playlist.songNames()).toEqual([]);

    playlist.addSong(freedomIsntFree);
    expect(playlist.currentSong()).toEqual("Freedom Isn't Free");

    playlist.addSong(killinInTheNameOf)

    playlist.removeSong(freedomIsntFree)
    playlist.songNames(["Killin In The Name Of"])

  })

})