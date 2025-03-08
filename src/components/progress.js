function Progress({ max, value }) {
    return (
        <progress className="w-full bg-teal-300 h-1 appearance-none" max={max} value={value}></progress>
    )
}

export default Progress;