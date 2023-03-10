const { GestureDescription, Finger, FingerCurl } = window.fp;

const RockGesture = new GestureDescription('rock'); // ✊️
const PaperGesture = new GestureDescription('paper'); // 🖐
const ScissorsGesture = new GestureDescription('scissors'); // ✌️
const FuckGesture = new GestureDescription('fuck'); // 🖕

// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RockGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  RockGesture.addCurl(finger, FingerCurl.FullCurl, 0.9);
}

// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// //FUCK
FuckGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
FuckGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.9);
FuckGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
FuckGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
FuckGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);

for (let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
  FuckGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

const gestures = [RockGesture, PaperGesture, ScissorsGesture, FuckGesture];

export { gestures };
