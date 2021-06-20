export default function convert(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  return window.niceFormat(min, 2) + ":" + window.niceFormat(sec, 2);
}
