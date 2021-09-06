export const drawRect = (detections,ctx)=>{
    detections.forEach(predection => {
        // Get Prediction results
        const [x,y,width,height] = predection['bbox'];
        const text = predection['class'];
        // Set Styling
        const color = 'Yellow'
        ctx.strokeStyle = color
        ctx.font = '100px Arial'
        ctx.fillStyle = color
        // Draw Rectangle and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    });
}