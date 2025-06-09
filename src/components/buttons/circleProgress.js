function CircleProgress({ progress }) {

    const circumference = 2 * Math.PI * 30;

    return (
        <svg width={70} height={70} viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
            {/* Background circle */}
            <circle
                cx="50"
                cy="50"
                r={30}
                stroke={"#e6e6e6"}
                strokeWidth={10}
                fill="none"
            />
            {/* Progress circle */}
            <circle
                cx="50"
                cy="50"
                r={30}
                stroke={"#4db8ff"}
                strokeWidth={10}
                fill="none"
                strokeDasharray={2 * Math.PI * 30}
                strokeDashoffset={circumference - (progress / 100) * circumference}
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
            <image x={30} y={35} height={35} width={35} href="assets/scissor24.png"></image>
        </svg>
    )
}

export default CircleProgress;