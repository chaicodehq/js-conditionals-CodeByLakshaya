/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  let message = "";
  if (color == "green" ||color == "Green"||color == "GREEN") {
    message = "GO";
  }
  else if (color == "yellow" || color == "Yellow" || color == "YELLOW") {
    message="SLOW DOWN";
  }
  else if (color =="red" || color =="Red" || color =="RED") {
    message = "STOP";
  }
  else if (color =="flashing red" || color =="Flashing Red" || color =="FLASHING RED") {
    message = "STOP AND PROCEED WITH CAUTION"
  }
  else{
    message ="INVALID SIGNAL";
  }
  return message;
}
