export default function Gradient() {
    return (
        <div
            className="absolute left-0 right-0 top-10 mx-auto -z-10"
            style={{
                width: "100vw",
                height: "60vw",
                borderBottomLeftRadius: "60vw",
                borderBottomRightRadius: "60vw",
                background: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 242, 242) 70%, rgba(67,97,238,0.3) 100%)"
            }}
        ></div>
    )
}
