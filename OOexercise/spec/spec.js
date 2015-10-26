var Film = require('../src/film') 
var Camera = require('../src/camera');

describe('Camera', function(){


    it("is empty by default", function(){
      var camera = new Camera();

      expect(camera.isEmpty()).toEqual(true);
    });



    it("allows you to add film", function(){
      var camera = new Camera();
      
      camera.addFilm()

      expect(camera.isEmpty()).toEqual(false);
    });



    it("Shoots film at 18fps", function(){
    var camera = new Camera();
    camera.addFilm()
    expect(camera.isEmpty()).toEqual(false)
    expect(camera.speed).toEqual(18);

    })

    it("Shoots at 9fps", function(){
      var camera = new Camera();
      camera.addFilm()
      camera.fast()
      expect(camera.speed).toEqual(9);
    })
    
    it("Shoots in slow motion", function(){
      var camera = new Camera();
      camera.addFilm()
      camera.slow()
      expect(camera.speed).toEqual(36)
    })

    })