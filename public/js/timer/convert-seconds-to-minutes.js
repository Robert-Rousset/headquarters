export default function convert(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if (min < 10) {
    min = "0" + min.toString();
  }
  if (sec < 10) {
    sec = "0" + sec.toString();
  }
  return min + ":" + sec;
}
