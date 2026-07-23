function angleBetweenHands(h, m) {
    // Calculate the angle of the hour hand
    const hourHandAngle = (h % 12) * 30 + m * 0.5;

    // Calculate the angle of the minute hand
    const minuteHandAngle = m * 6;

    // Find the absolute difference
    let angleDiff = Math.abs(hourHandAngle - minuteHandAngle);

    // Return the smaller angle
    if (angleDiff > 180) {
        angleDiff = 360 - angleDiff;
    }

    return angleDiff;
}

// Example
const h = 12;
const m = 30;

console.log(`Angle between hour hand and minute hand: ${angleBetweenHands(h, m)} degrees`); // Angle between hour hand and minute hand: 165 degrees
