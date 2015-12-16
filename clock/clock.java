package time;


class clock {
  private int seconds;
  private int minutes;
  private int hours;

}

public clock(){
  setClock(0,0,0);
}

public clock(int hours, int minutes, int seconds){
  setClock(hours, minutes, seconds);
}

public void setClock(int hours, int minutes, int seconds){
  if(0 <= hours && hours <24){
    hr = hours;
  }
  else
    hr = 0;
    (0<= minutes && minutes <60){
      min = minutes;
}else
   min = 0;
   (0<=seconds && seconds < 60){
    sec = seconds;
   }else
   sec = 0;
 }
public int getHours ( )
{
    return hr;
}

public int getMinutes ( )
{
    return min;
}

public int getSeconds ( )
{
    return sec;
}
public void addClock(Clock secondClock){
  this.second += secondClock.getSecond();
  this.minute += secondClock.getMinute();
  this.minute += (int)(this.second/60);
  this.second = this.second %60;
  this.hour += secondClock.getHour();
  this.hour +=(int)(this.minute/60);
  this.minute = this.minute%60;
  this.hour = this.hour%24;
}

 public void tick(){
       this.second += 1;
       //add overflow to minutes from seconds
       this.minute+=(int)(this.second/60);
       //update seconds 
       this.second = this.second % 60;
       //add overflow to minutes from seconds
        this.hour+=(int)(this.minute/60);
       //update minutes
        this.minute= this.minute% 60;
        //adjust hours
        this.hour = this.hour%24;
    }

  public void tickDown(){
       this.second -= 1;
       if(this.second <0){
          this.second+=60;
          this.minute-=1;
        }
       if(this.minute<0){
          this.minute+=60;
          this.hour-=1;
        }
       if(this.hour<0){
          this.hour+=24;
       }
    }

    
    
    public static void main(String[]  args){
      Clock clock1 = new Clock(2,4,7);
      Clock clock2 = new Clock(8,26,57);
      clock1.tick();
      int newSeconds = clock1.getSeconds();
      //validate it should be 8 now

      clock2.tickDown();
      newSeconds = clock1.getSeconds();
      //validate it should be 56 now

      clock1.addClock(clock2);
      //get Hour, minute and second from clock1 and validate
      int newHour = clock1.getHours();
      int nuwMinute = clock1.getMinutes();
      newSeconds = clock1.getSeconds();
      //validate if they are with the right expected value or not
  }