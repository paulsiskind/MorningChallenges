package galvanize;

class Clock {
  protected int seconds = 0;
  protected int minutes = 0;
  protected int hours = 0;

  String getTime() {
    return String.format("%02d:%02d:%02d", hours, minutes, seconds);
  }

  void setTime(int hours, int minutes, int seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  void tick(){
    if (seconds == 59) {
      seconds = 0;
      setMinutes();
    } else {
      seconds++;
    }
  }

  protected void setMinutes() {
    if (minutes == 59) {
      minutes = 0;
      setHour();
    } else {
      minutes++;
    }
  }

  protected void setHour() {
    hours = hours == 24 ? 0 : hours + 1;
  }
}

class Junk {
  public static void main(String[] args) throws InterruptedException {
    Clock clock = new Clock();

    System.out.println(clock.getTime());
    while (true) {
      clock.tick();
      Thread.sleep(1000);
      System.out.println(clock.getTime());
    }
  }
}