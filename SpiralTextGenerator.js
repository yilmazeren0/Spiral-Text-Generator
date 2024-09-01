function createSpiral() {
    const text = document.getElementById('textInput').value;
    const spiralPath = document.getElementById('spiralPath');
    const textPath = document.getElementById('textPath');

    spiralPath.setAttribute('d', '');
    const squareLengthOfText = Math.sqrt(Number(text.length));
    const centerX = 400;
    const centerY = 300;
    const initialRadius = -(squareLengthOfText*(7.5)); // u can change the value of 7.5 to get the desired spiral
    const contractionRate = -0.3; // ratio of decreasing radius

    let pathData = `M ${centerX + initialRadius} ${centerY}`;
    let radius = initialRadius;
    let angleStep = 0.1; // u can change its value to get the desired spiral

    for (let i = 0; i < text.length; i++) {
        const angle = i * angleStep;
        const x = centerX + radius * Math.cos(angle); 
        const y = centerY + radius * Math.sin(angle);

        pathData += ` L ${x} ${y}`;

        radius -= contractionRate;
    }

    spiralPath.setAttribute('d', pathData);

    textPath.textContent = text;
}