import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img
                    src="https://tse4.mm.bing.net/th?id=OIP.7tprA1bs0MsnMj58vxHDCAHaHl&pid=Api&P=0&w=300&h=300"
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />

                <Circle color="#3CBC2B" size={60} />    
            </div>     
        </center>
    )  
}

export default Loading
